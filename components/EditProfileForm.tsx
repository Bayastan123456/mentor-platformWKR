"use client";

import { useState } from "react";
import styles from "../styles/EditProfileForm.module.scss";

type UserData = {
  name: string;
  role: "mentor" | "student";
  skills: string;
  about: string;
  goal: string;
};

type Props = {
  user: UserData;
  onSave: (updated: UserData) => void;
  onCancel: () => void;
};

export default function EditProfileForm({ user, onSave, onCancel }: Props) {
  const [formData, setFormData] = useState(user);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.role !== "mentor" && formData.role !== "student") {
      alert("Неверная роль");
      return;
    }

    onSave(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Имя
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Роль
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="mentor">Наставник</option>
          <option value="student">Учащийся</option>
        </select>
      </label>

      <label>
        Навыки
        <input name="skills" value={formData.skills} onChange={handleChange} />
      </label>

      <label>
        О себе
        <textarea
          name="about"
          value={formData.about}
          onChange={handleChange}
          rows={3}
        />
      </label>

      <label>
        Цель
        <textarea
          name="goal"
          value={formData.goal}
          onChange={handleChange}
          rows={2}
        />
      </label>

      <div className={styles.actions}>
        <button type="submit">Сохранить</button>
        <button type="button" onClick={onCancel}>
          Отмена
        </button>
      </div>
    </form>
  );
}
