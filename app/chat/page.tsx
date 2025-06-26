"use client";
import dynamic from "next/dynamic";

// отключаем SSR, чтобы не было ошибок с localStorage
const Chat = dynamic(() => import("../../components/Chat"), { ssr: false });

export default function ChatPage() {
  return <Chat />;
}
