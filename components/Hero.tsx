"use client";

import styles from "../styles/Hero.module.scss";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Открой возможности менторства</h1>
        <p>
          Присоединяйся к сообществу, чтобы учиться, делиться опытом и
          развиваться вместе.
        </p>
        <Link href="/register" className={styles.ctaBtn}>
          Получить программу курса
        </Link>
      </div>
    </section>
  );
}
