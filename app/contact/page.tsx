// app/contact/page.tsx
"use client";

import { useState } from "react";
import styles from "../../styles/ContactPage.module.scss";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь могла бы быть отправка данных на сервер
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className={styles.contact}>
      <h1>Свяжитесь с нами</h1>
      <p>
        Если у вас есть вопросы, предложения или предложения по сотрудничеству —
        напишите нам.
      </p>

      <div className={styles.content}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Имя
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Сообщение
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button type="submit">Отправить</button>
          {submitted && (
            <p className={styles.success}>Сообщение успешно отправлено!</p>
          )}
        </form>

        <div className={styles.info}>
          <h3>Контактная информация</h3>
          <p>📍 г. Бишкек, ул. Колхозная 42б</p>
          <p>📧 mentor@platform.kg</p>
          <p>📞 +996 709 770 725</p>
        </div>
      </div>
    </main>
  );
}
