"use client";
import React, { FC, JSX, useEffect } from "react";
import { useState } from "react";
import { useMessages } from "../message-context";
import styles from "./Input.module.css";
import { io, Socket } from "socket.io-client";
import axios from "axios";

const Input: FC = (): JSX.Element => {
  const [inputValue, setInputValue] = useState("");
  const [socket, setSocket] = useState<Socket | undefined>(undefined);
  const { messages, addMessage } = useMessages();
  const url = process.env.NEXT_PUBLIC_URL;

  function getFormattedDate() {
    const now = new Date();

    // Получаем текущее время в UTC и добавляем +3 часа (Москва)
    const mskOffset = 3 * 60 * 60 * 1000; // 3 часа в мс
    const mskTime = new Date(
      now.getTime() + now.getTimezoneOffset() * 60000 + mskOffset
    );

    // Форматируем дату, используя UTC-методы, чтобы избежать локального влияния
    const day = String(mskTime.getUTCDate()).padStart(2, "0");
    const month = String(mskTime.getUTCMonth() + 1).padStart(2, "0");
    const year = String(mskTime.getUTCFullYear()).slice(-2);

    const daysOfWeek = ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт"];
    const dayOfWeek = daysOfWeek[mskTime.getUTCDay()];

    const hours = String(mskTime.getUTCHours()).padStart(2, "0");
    const minutes = String(mskTime.getUTCMinutes()).padStart(2, "0");
    const seconds = String(mskTime.getUTCSeconds()).padStart(2, "0");

    return `${day}/${month}/${year} ${dayOfWeek} ${hours}:${minutes}:${seconds}`;
  }

  useEffect(() => {
    const socket = io(url);
    setSocket(socket);
    socket.on("receive-message", (message) => {
      addMessage(message);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && socket) {
      const message = {
        id: messages.length,
        text: inputValue,
        username: "Фанатка",
        date: getFormattedDate(),
      };
      if (url) {
        axios.post(url, message);
      }
      socket.emit("send-message", message);
      setInputValue("");
    }
  };

  return (
    <>
      <div className={styles.ansoc}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            value={inputValue}
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="текст"
          />
        </form>
      </div>
    </>
  );
};

export default Input;
