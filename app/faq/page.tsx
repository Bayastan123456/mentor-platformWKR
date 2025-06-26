"use client";

import { useState } from "react";
import styles from "../../styles/FaqPage.module.scss";

const faqs = [
  {
    question: "Как найти подходящего ментора?",
    answer:
      "Вы можете использовать фильтры по навыкам и ролям на странице менторов, чтобы найти наиболее подходящего ментора для ваших целей.",
  },
  {
    question: "Можно ли самому стать ментором?",
    answer:
      "Да! Просто заполните анкету, выбрав роль 'ментор', и укажите свои навыки и опыт.",
  },
  {
    question: "Сколько стоит участие?",
    answer:
      "Наша платформа бесплатна для всех участников. Мы стремимся создать доступное образовательное сообщество.",
  },
  {
    question: "Как осуществляется общение между участниками?",
    answer:
      "После отправки заявки и её принятия ментором вы сможете общаться через встроенный чат платформы.",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className={styles.faq}>
      <h1>Часто задаваемые вопросы</h1>
      <div className={styles.accordion}>
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`${styles.item} ${
              openIndex === index ? styles.open : ""
            }`}
          >
            <button className={styles.question} onClick={() => toggle(index)}>
              {item.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className={styles.answer}>{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
