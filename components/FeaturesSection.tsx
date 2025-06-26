"use client";

import styles from "../styles/FeaturesSection.module.scss";

export default function FeaturesSection() {
  return (
    <section className={styles.features}>
      <h2 className={styles.title}>Почему выбирают нашу платформу</h2>
      <div className={styles.featuresGrid}>
        <div className={styles.featureCard}>
          <h3>Умный подбор менторов</h3>
          <p>
            Алгоритмы анализа интересов и целей помогают найти идеального
            наставника.
          </p>
        </div>
        <div className={styles.featureCard}>
          <h3>Простой и удобный интерфейс</h3>
          <p>
            Дружелюбный дизайн, адаптированный для всех устройств и уровней
            подготовки.
          </p>
        </div>
        <div className={styles.featureCard}>
          <h3>Поддержка и обратная связь</h3>
          <p>
            Менторы и ученики могут оставлять отзывы, участвовать в обсуждениях
            и развиваться вместе.
          </p>
        </div>
      </div>
    </section>
  );
}
