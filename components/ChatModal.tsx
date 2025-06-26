// components/ChatModal.tsx
"use client";

import { useEffect, useState } from "react";
import styles from "../styles/ChatModal.module.scss";
import Chat from "./Chat";

export default function ChatModal({ partnerId }: { partnerId: number }) {
  const [open, setOpen] = useState(false);

  // Сохраняем partnerId в URL, чтобы Chat знал, с кем переписка
  useEffect(() => {
    if (open) {
      const url = new URL(window.location.href);
      url.searchParams.set("partner", partnerId.toString());
      window.history.pushState({}, "", url);
    }
  }, [open, partnerId]);

  return (
    <>
      <button onClick={() => setOpen(true)} className={styles.openBtn}>
        💬 Открыть чат
      </button>

      {open && (
        <div className={styles.modalOverlay} onClick={() => setOpen(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setOpen(false)} className={styles.closeBtn}>
              ×
            </button>
            <Chat />
          </div>
        </div>
      )}
    </>
  );
}
