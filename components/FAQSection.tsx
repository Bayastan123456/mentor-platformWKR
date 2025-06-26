"use client";

import { useState } from "react";
import styles from "../styles/FAQSection.module.scss";

const questions = [
  {
    question: "Как работает платформа?",
    answer:
      "Вы создаёте профиль, выбираете ментора, связываетесь и начинаете обучение. Всё просто и эффективно.",
  },
  {
    question: "Сколько стоит использование платформы?",
    answer:
      "Регистрация и базовый доступ — бесплатны. Некоторые менторы могут устанавливать свою стоимость.",
  },
  {
    question: "Могу ли я сам стать ментором?",
    answer: "Да! Заполните анкету и мы рассмотрим вашу кандидатуру.",
  },
  {
    question: "Как выбрать подходящего ментора?",
    answer:
      "Используйте фильтры, отзывы и рейтинг, чтобы найти наиболее подходящего специалиста.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <h2 className={styles.title}>Часто задаваемые вопросы</h2>
      <div className={styles.accordion}>
        {questions.map((item, index) => (
          <div
            key={index}
            className={`${styles.item} ${
              openIndex === index ? styles.open : ""
            }`}
          >
            <button onClick={() => toggle(index)} className={styles.question}>
              {item.question}
            </button>
            {openIndex === index && (
              <div className={styles.answer}>{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
