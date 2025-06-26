"use client";

import { useRouter } from "next/navigation";
import styles from "../styles/CTASection.module.scss";

export default function CTASection() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/register");
  };

  return (
    <section className={styles.cta}>
      <div className={styles.ctaContent}>
        <h2>Начните свой путь к успеху с ментором уже сегодня</h2>
        <p>
          Присоединяйтесь к нашей платформе и найдите наставника, который
          поможет вам достичь ваших целей.
        </p>
        <button className={styles.ctaButton} onClick={handleClick}>
          Получить программу курса
        </button>
      </div>
    </section>
  );
}
