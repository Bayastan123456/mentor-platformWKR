"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "../styles/Chat.module.scss";

type Message = {
  id: number;
  senderId: number;
  receiverId: number;
  text: string;
  createdAt?: string;
  sender?: { name: string };
};

export default function Chat() {
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);
  const [partnerId, setPartnerId] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const partner = searchParams.get("partner");

    if (userId && partner) {
      setCurrentUserId(Number(userId));
      setPartnerId(Number(partner));
    }
  }, [searchParams]);

  useEffect(() => {
    if (!currentUserId || !partnerId) return;

    const fetchMessages = async () => {
      try {
        const res = await fetch(
          `/api/messages?user1=${currentUserId}&user2=${partnerId}`
        );
        const data = await res.json();

        if (Array.isArray(data)) {
          setMessages(data);
        } else {
          console.error("Ожидался массив, но пришло:", data);
          setMessages([]);
        }

        scrollToBottom();
      } catch (error) {
        console.error("Ошибка при получении сообщений:", error);
      }
    };

    fetchMessages();

    const interval = setInterval(fetchMessages, 3000); // автообновление
    return () => clearInterval(interval);
  }, [currentUserId, partnerId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async () => {
    if (!newMessage.trim() || !currentUserId || !partnerId) return;

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          senderId: currentUserId,
          receiverId: partnerId,
          text: newMessage,
        }),
      });

      if (res.ok) {
        const saved = await res.json();
        setMessages((prev) => [...prev, saved]);
        setNewMessage("");
        scrollToBottom();
      } else {
        console.error("Ошибка при отправке сообщения:", await res.json());
      }
    } catch (err) {
      console.error("Ошибка при fetch /api/messages:", err);
    }
  };

  if (!currentUserId || !partnerId) {
    return (
      <div className={styles.loading}>Загрузка данных пользователя...</div>
    );
  }

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messages}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={
              msg.senderId === currentUserId
                ? styles.messageYou
                : styles.messageOther
            }
          >
            <strong>{msg.sender?.name}: </strong>
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className={styles.inputArea}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Напишите сообщение..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Отправить</button>
      </div>
    </div>
  );
}
