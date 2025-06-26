"use client";
import { useEffect, useState } from "react";
import UserDashboard from "../../components/UserDashboard";

export default function DashboardPage() {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const id = localStorage.getItem("userId");
    setUserId(id);
  }, []);
  return (
    <main>
      <div style={{ padding: "2rem" }}>
        {userId ? <h2>Добро пожаловать в систему!</h2> : <></>}
      </div>
      <UserDashboard />
    </main>
  );
}
