"use client";

import { useState } from "react";
import styles from "../styles/UserDashboard.module.scss";
import EditProfileForm from "./EditProfileForm";
import ChatModal from "./ChatModal";

type UserData = {
  name: string;
  role: "mentor" | "student";
  skills: string;
  about: string;
  goal: string;
};

const dummyUser: UserData = {
  name: "Айбек Беков",
  role: "mentor",
  skills: "JavaScript, React, UI/UX",
  about: "Опытный разработчик, обучаю начинающих и веду проекты.",
  goal: "Хочу делиться знаниями и помогать другим развиваться.",
};

export default function UserDashboard() {
  const [user, setUser] = useState<UserData>(dummyUser);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (updated: UserData) => {
    setUser(updated);
    setIsEditing(false);
  };

  const [showChat, setShowChat] = useState(false);

  const handleButtonClick = () => {
    setShowChat(true);
  };
  return (
    <div className={styles.dashboard}>
      <h2>Личный кабинет</h2>
      {isEditing ? (
        <EditProfileForm
          user={user}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <p>
            <strong>Имя:</strong> {user.name}
          </p>
          <p>
            <strong>Роль:</strong>{" "}
            {user.role === "mentor" ? "Наставник" : "Учащийся"}
          </p>
          <p>
            <strong>Навыки:</strong> {user.skills}
          </p>
          <p>
            <strong>О себе:</strong> {user.about}
          </p>
          <p>
            <strong>Цель:</strong> {user.goal}
          </p>

          <div className={styles.actions}>
            <button onClick={() => setIsEditing(true)}>
              Редактировать анкету
            </button>
            {/* <ChatModal /> */}
          </div>
        </>
      )}
    </div>
  );
}
