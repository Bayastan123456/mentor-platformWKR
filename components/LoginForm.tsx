"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../styles/LoginForm.module.scss";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Неверный email или пароль");

      const user = await res.json();

      localStorage.setItem("userId", user.id); // сохраняем ID в localStorage

      router.push("/"); // переход после входа
    } catch (err: any) {
      setError(err.message || "Ошибка входа");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Вход</h2>

      {error && <p className={styles.error}>{error}</p>}

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
      <Link href={"/register"}>
        <p style={{ color: "blue" }}>Зарегистрироваться</p>
      </Link>

      <button type="submit">Войти</button>
    </form>
  );
}
