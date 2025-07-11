"use client";
import React, { FC, JSX } from "react";
import { useState } from "react";
import { useMessages } from "../message-context";
import styles from "./Input.module.css";

const Input: FC = (): JSX.Element => {
  const [inputValue, setInputValue] = useState("");
  const { addMessage } = useMessages();

  function getFormattedDate() {
    const now = new Date();

    // Получаем день, месяц и год (двузначный)
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = String(now.getFullYear()).slice(-2);

    // Получаем день недели (сокращенный до 3 букв)
    const daysOfWeek = ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт"];
    const dayOfWeek = daysOfWeek[now.getDay()];

    // Получаем часы, минуты и секунды
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    // Формируем строку
    return `${day}/${month}/${year} ${dayOfWeek} ${hours}:${minutes}:${seconds}`;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addMessage({
        id: Date.now().toString(),
        text: inputValue,
        username: "Фанатка",
        date: getFormattedDate(),
      });
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
