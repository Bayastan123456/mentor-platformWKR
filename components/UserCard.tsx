import styles from "../styles/UserCard.module.scss";

interface UserCardProps {
  name: string;
  role: string;
  about: string;
  skills: string;
  goal: string;
}

export default function UserCard({
  name,
  role,
  about,
  skills,
  goal,
}: UserCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>{name}</h3>
        <span className={styles.role}>
          {role === "mentor" ? "Наставник" : "Учащийся"}
        </span>
      </div>
      <p>
        <strong>О себе:</strong> {about}
      </p>
      <p>
        <strong>Навыки:</strong> {skills}
      </p>
      <p>
        <strong>Цель:</strong> {goal}
      </p>
    </div>
  );
}
