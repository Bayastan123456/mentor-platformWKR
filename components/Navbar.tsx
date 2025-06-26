"use client";

import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import { useEffect, useRef, useState } from "react";
import img from "../public/avatar.svg";
import Image from "next/image";

export default function Navbar() {
  const [userId, setUserId] = useState<string | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = localStorage.getItem("userId");
    setUserId(id);
  }, []);

  // Закрытие меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    window.location.href = "/"; // или router.push("/")
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            Mentor<span>Platform</span>
          </Link>
        </div>
        <nav className={styles.navLinks}>
          <Link href="/about">О нас</Link>
          <Link href="/mentors">Менторы</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Контакты</Link>
          {userId && <Link href="/requests">Мои заявки</Link>}

          {userId ? (
            <div className={styles.avatarWrapper} ref={menuRef}>
              <Image
                src={img}
                alt="avatar"
                className={styles.avatar}
                onClick={() => setShowMenu((prev) => !prev)}
              />

              {showMenu && (
                <div className={styles.dropdownMenu}>
                  <Link href="/profile">Профиль</Link>
                  <button onClick={handleLogout}>Выйти</button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login" className={styles.loginBtn}>
              Войти
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
