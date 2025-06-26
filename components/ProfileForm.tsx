"use client";

import { useState } from "react";
import styles from "../styles/ProfileForm.module.scss";

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    role: "student",
    name: "",
    about: "",
    skills: "",
    goal: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const res = await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          userId: localStorage.getItem("userId"),
        }),
      });

      if (!res.ok) throw new Error("Не удалось отправить анкету");

      const updated = await res.json();
      console.log("Сохранено:", updated);
      setSuccessMessage("Анкета успешно сохранена!");
    } catch (error: any) {
      console.error(error);
      setErrorMessage("Ошибка при сохранении анкеты.");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Анкета пользователя</h2>

      <label>
        Ваша роль
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="mentor">Наставник (ментор)</option>
          <option value="student">Учащийся</option>
        </select>
      </label>

      <label>
        Имя
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        О себе
        <textarea
          name="about"
          value={formData.about}
          onChange={handleChange}
          rows={4}
        />
      </label>

      <label>
        Навыки / Интересы
        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
        />
      </label>

      <label>
        Цель участия
        <textarea
          name="goal"
          value={formData.goal}
          onChange={handleChange}
          rows={3}
        />
      </label>

      <button type="submit">Сохранить анкету</button>
      {successMessage && <p className={styles.success}>{successMessage}</p>}
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </form>
  );
}
