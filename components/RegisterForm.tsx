"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../styles/LoginForm.module.scss"; // можно использовать те же стили
import Link from "next/link";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) throw new Error("Ошибка регистрации");

      const user = await res.json();

      localStorage.setItem("userId", user.id); // сохраняем ID
      router.push("/login"); // переход после регистрации
    } catch (err: any) {
      setError(err.message || "Ошибка при регистрации");
    }
  };
  console.log("Отправка формы:", { name, email });
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Регистрация</h2>

      {error && <p className={styles.error}>{error}</p>}

      <input
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Link href={"/login"}>
        <p style={{ color: "blue" }}>У меня уже есть аккаунт </p>
      </Link>

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}
