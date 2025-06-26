"use client";

import { useState } from "react";
import styles from "../styles/MentorCard.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  name: string;
  role: string;
  skills: string;
  about: string;
  goal?: string;
  id: number;
};

export default function MentorCard({ id, name, role, skills, about }: Props) {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  const sendRequest = async () => {
    const fromId = localStorage.getItem("userId");
    if (!fromId) {
      alert("Вы не вошли в систему");
      return;
    }

    try {
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fromId: Number(fromId),
          toId: id,
        }),
      });

      if (res.ok) {
        setStatus("sent");
      } else {
        const data = await res.json();
        alert(data.error || "Не удалось отправить заявку");
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.header}>
        <h3>{name}</h3>
        <span className={role === "mentor" ? styles.mentor : styles.student}>
          {role === "mentor" ? "Ментор" : "Учащийся"}
        </span>
      </div>

      <p>
        <strong>Навыки:</strong> {skills}
      </p>
      <p>{about.length > 100 ? about.slice(0, 100) + "..." : about}</p>

      {status === "sent" ? (
        <p className={styles.success}>✅ Заявка отправлена</p>
      ) : (
        <button onClick={sendRequest} className={styles.requestBtn}>
          Отправить заявку
        </button>
      )}

      <Link href={`/chat?partner=${id}`} className={styles.messageBtn}>
        Написать
      </Link>
    </motion.div>
  );
}
