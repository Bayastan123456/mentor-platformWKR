"use client";

import styles from "../styles/TestimonialsSection.module.scss";

export default function TestimonialsSection() {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.title}>Отзывы наших пользователей</h2>
      <div className={styles.testimonialsGrid}>
        <div className={styles.testimonialCard}>
          <p className={styles.quote}>
            "Благодаря этой платформе я нашёл отличного наставника и смог
            развить свои навыки намного быстрее!"
          </p>
          <p className={styles.author}>— Айбек, разработчик</p>
        </div>
        <div className={styles.testimonialCard}>
          <p className={styles.quote}>
            "Очень удобно, что можно сразу связаться с ментором и начать
            обучение в удобное время."
          </p>
          <p className={styles.author}>— Алия, студентка</p>
        </div>
        <div className={styles.testimonialCard}>
          <p className={styles.quote}>
            "Интерфейс понятный, а поиск по интересам экономит кучу времени.
            Отличный сервис!"
          </p>
          <p className={styles.author}>— Нурсултан, UI/UX дизайнер</p>
        </div>
      </div>
    </section>
  );
}
