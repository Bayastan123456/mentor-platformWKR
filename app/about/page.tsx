// app/about/page.tsx
import styles from "../../styles/AboutPage.module.scss";

export default function AboutPage() {
  return (
    <main className={styles.about}>
      <section className={styles.hero}>
        <h1>О платформе Mentor Platform</h1>
        <p>
          Мы создаём пространство, где учащиеся и наставники находят друг друга
          для обмена знаниями, опыта и карьерного роста.
        </p>
      </section>

      <section className={styles.mission}>
        <h2>Наша миссия</h2>
        <p>
          Мы стремимся сократить разрыв между теорией и практикой, помогая
          каждому найти ментора или стать им, чтобы делиться опытом,
          поддерживать и вдохновлять.
        </p>
      </section>

      <section className={styles.values}>
        <h2>Наши ценности</h2>
        <ul>
          <li>
            <strong>Поддержка:</strong> Мы верим, что каждый человек достоин
            наставника.
          </li>
          <li>
            <strong>Открытость:</strong> Все участники платформы — это одна
            команда.
          </li>
          <li>
            <strong>Развитие:</strong> Мы вдохновляем на рост, обучение и
            прогресс.
          </li>
        </ul>
      </section>

      <section className={styles.team}>
        <h2>Наша команда</h2>
        <p>
          Команда Mentor Platform — это группа разработчиков, дизайнеров и
          педагогов, объединённых общей идеей: сделать знания и опыт доступными
          каждому.
        </p>
      </section>
    </main>
  );
}
