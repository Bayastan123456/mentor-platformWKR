"use client";

import { useState } from "react";
import MentorCard from "../../components/MentorCard";
import styles from "../../styles/MentorFilter.module.scss";

const dummyMentors = [
  {
    id: 1,
    name: "Айбек Беков",
    role: "mentor",
    skills: "JavaScript, React, UI/UX",
    about: "Опытный фронтенд разработчик с менторским стажем более 3 лет.",
  },
  {
    id: 2,
    name: "Айнура Садыкова",
    role: "student",
    skills: "HTML, CSS, дизайн",
    about: "Хочу развиваться в веб-разработке и найти ментора для практики.",
  },
  {
    id: 3,
    name: "Нурбек Абдыкапаров",
    role: "mentor",
    skills: "Node.js, TypeScript, Backend",
    about: "Помогаю начинающим backend-разработчикам прокачать навыки.",
  },
  {
    id: 4,
    name: "Канатбек Токтосунов",
    role: "mentor",
    skills: "Python, Django, Data Science",
    about: "Работаю в области аналитики и data science, менторю начинающих.",
  },
  {
    id: 5,
    name: "Жанара Бактыбекова",
    role: "student",
    skills: "Figma, UI-дизайн",
    about: "Изучаю дизайн интерфейсов, хочу найти наставника для практики.",
  },
  {
    id: 6,
    name: "Тимур Курманбеков",
    role: "mentor",
    skills: "DevOps, Docker, AWS",
    about: "Работаю DevOps-инженером, помогаю понять CI/CD и инфраструктуру.",
  },
  {
    id: 7,
    name: "Алия Асанова",
    role: "student",
    skills: "JavaScript, Vue",
    about:
      "Учусь создавать SPA и хотела бы практиковаться с реальными проектами.",
  },
  {
    id: 8,
    name: "Эркин Султанов",
    role: "mentor",
    skills: "PHP, Laravel, SQL",
    about: "Более 7 лет в веб-разработке. Помогаю понять архитектуру бэкенда.",
  },
  {
    id: 9,
    name: "Айпери Касымова",
    role: "student",
    skills: "Python, машинное обучение",
    about: "Изучаю машинное обучение, ищу опытного ментора в этой области.",
  },
  {
    id: 10,
    name: "Руслан Мусаев",
    role: "mentor",
    skills: "Java, Spring Boot, Microservices",
    about: "Инженер-программист с большим опытом корпоративной разработки.",
  },
  {
    id: 11,
    name: "Диана Алиева",
    role: "student",
    skills: "HTML, CSS, Bootstrap",
    about: "Хочу улучшить навыки вёрстки и перейти на JavaScript.",
  },
  {
    id: 12,
    name: "Нурсултан Сагынбаев",
    role: "mentor",
    skills: "C#, .NET, Desktop Apps",
    about: "Разрабатываю десктопные приложения, помогаю студентам с дипломами.",
  },
  {
    id: 13,
    name: "Салтанат Ибраимова",
    role: "student",
    skills: "SQL, Excel, Tableau",
    about: "Хочу стать аналитиком данных, ищу ментора по BI-инструментам.",
  },
  {
    id: 14,
    name: "Бакыт Усенов",
    role: "mentor",
    skills: "Android, Kotlin, Firebase",
    about:
      "Занимаюсь мобильной разработкой, обучаю с нуля до релиза в Google Play.",
  },
  {
    id: 15,
    name: "Асель Молдобаева",
    role: "student",
    skills: "UI/UX, Photoshop",
    about: "Мечтаю стать дизайнером интерфейсов, ищу обратную связь и помощь.",
  },
  {
    id: 16,
    name: "Данияр Рыскулов",
    role: "mentor",
    skills: "React, TypeScript, GraphQL",
    about: "Фронтенд-разработчик с опытом в крупных SPA, люблю обучать.",
  },
  {
    id: 17,
    name: "Гульзат Турдалиева",
    role: "student",
    skills: "JavaScript, Tailwind",
    about:
      "Учу Tailwind и адаптивную вёрстку. Хочу применять знания на практике.",
  },
  {
    id: 18,
    name: "Санжар Абдрахманов",
    role: "mentor",
    skills: "AI, Python, OpenCV",
    about: "Ментор по искусственному интеллекту и компьютерному зрению.",
  },
  {
    id: 19,
    name: "Айзат Сыдыкова",
    role: "student",
    skills: "React, Redux",
    about: "Прошла несколько курсов, хочу прокачаться через реальные проекты.",
  },
  {
    id: 20,
    name: "Эрмек Кулмамбетов",
    role: "mentor",
    skills: "Flutter, Dart, Mobile UI",
    about: "Разрабатываю кросс-платформенные приложения и менторю новичков.",
  },
  {
    id: 21,
    name: "Асем Абдылдаева",
    role: "student",
    skills: "SMM, UX Research",
    about: "Ищу ментора для улучшения навыков пользовательских исследований.",
  },
  {
    id: 22,
    name: "Муратбек Иманов",
    role: "mentor",
    skills: "Go, PostgreSQL, REST API",
    about: "Разрабатываю высоконагруженные системы, консультирую студентов.",
  },
];
export default function MentorsPage() {
  const [roleFilter, setRoleFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = dummyMentors.filter((person) => {
    const matchRole = roleFilter === "all" || person.role === roleFilter;
    const matchSearch = person.skills
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchRole && matchSearch;
  });

  return (
    <main style={{ padding: "2rem" }}>
      <h2>Поиск пользователей</h2>

      <div className={styles.filterContainer}>
        <label>
          Фильтр по роли:
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
          >
            <option value="all">Все</option>
            <option value="mentor">Менторы</option>
            <option value="student">Ученики</option>
          </select>
        </label>

        <label>
          Навыки:
          <input
            type="text"
            placeholder="например: React"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>

      <div
        style={{
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {filtered.map((mentor) => (
          <MentorCard key={mentor.id} {...mentor} />
        ))}
      </div>
    </main>
  );
}
