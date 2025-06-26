"use client";

import { useEffect, useState } from "react";
import styles from "../../styles/RequestCard.module.scss";

type Request = {
  id: number;
  status: string;
  createdAt: string;
  from: {
    name: string;
    email: string;
    skills?: string;
  };
};

export default function RequestsPage() {
  const [requests, setRequests] = useState<Request[]>([]);

  const fetchRequests = async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    const res = await fetch(`/api/requests/incoming?userId=${userId}`);
    const data = await res.json();
    setRequests(data);
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const updateStatus = async (id: number, status: "accepted" | "rejected") => {
    await fetch(`/api/requests/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    fetchRequests();
  };

  return (
    <main style={{ padding: "2rem" }} className={styles.card}>
      <h2>Полученные заявки</h2>

      {requests.length === 0 ? (
        <p>Заявок пока нет.</p>
      ) : (
        <ul className={styles.list}>
          {requests.map((req) => (
            <li key={req.id} className={styles.card}>
              <div className={styles.header}>
                <h3>{req.from.name}</h3>
                <span className={`${styles.status} ${styles[req.status]}`}>
                  {req.status}
                </span>
              </div>
              <div className={styles.details}>
                <p>
                  <strong>Email:</strong> {req.from.email}
                </p>
                <p>
                  <strong>Навыки:</strong> {req.from.skills || "не указаны"}
                </p>
                <p>
                  <strong>Дата:</strong>{" "}
                  {new Date(req.createdAt).toLocaleDateString()}
                </p>
              </div>
              {req.status === "pending" && (
                <div className={styles.actions}>
                  <button
                    className={styles.accept}
                    onClick={() => updateStatus(req.id, "accepted")}
                  >
                    Принять
                  </button>
                  <button
                    className={styles.reject}
                    onClick={() => updateStatus(req.id, "rejected")}
                  >
                    Отклонить
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
