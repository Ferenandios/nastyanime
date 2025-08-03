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

    // Получаем смещение для Москвы (GMT+3) в миллисекундах
    const mskOffset = 3 * 60 * 60 * 1000; // +3 часа в миллисекундах

    // Создаем дату с учетом московского времени
    const mskDate = new Date(
      now.getTime() + now.getTimezoneOffset() * 60 * 1000 + mskOffset
    );

    // Получаем день, месяц и год (двузначный)
    const day = String(mskDate.getDate()).padStart(2, "0");
    const month = String(mskDate.getMonth() + 1).padStart(2, "0");
    const year = String(mskDate.getFullYear()).slice(-2);

    // Получаем день недели (сокращенный до 3 букв)
    const daysOfWeek = ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт"];
    const dayOfWeek = daysOfWeek[mskDate.getDay()];

    // Получаем часы, минуты и секунды
    const hours = String(mskDate.getHours()).padStart(2, "0");
    const minutes = String(mskDate.getMinutes()).padStart(2, "0");
    const seconds = String(mskDate.getSeconds()).padStart(2, "0");

    // Формируем строку
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
