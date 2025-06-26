"use client";

import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import styles from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logo}>
            Mentor<span>Platform</span>
          </div>
          <nav className={styles.links}>
            <a href="/about">О нас</a>
            <a href="/mentors">Менторы</a>
            <a href="/contact">Контакты</a>
            <a href="/faq">FAQ</a>
          </nav>
        </div>
        <div className={styles.social}>
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaTelegramPlane />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="https://github.com/Bayastan123456" target="_blank">
            <FaGithub />
          </a>
        </div>

        <div className={styles.copy}>
          © {new Date().getFullYear()} Mentor Platform. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
