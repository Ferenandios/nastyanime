"use client";
import React, { FC, JSX } from "react";
import Message from "./Message/Message";
import { useMessages } from "../message-context";
import styles from "./Messages.module.css";

const Messages: FC = (): JSX.Element => {
  const { messages } = useMessages();
  const hiMessage: Message = {
    id: "nyan",
    username: "Николай Князев",
    text: 'Прифффки! Оставь сообщение на этом сайте с помощью рофлинки ниже с надписью "текст"',
    date: getFormattedDate(),
  };
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
  return (
    <>
      <div className={styles.ansoc}>
        <div className={styles.messages}>
          <Message key={hiMessage.id} message={hiMessage} />
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Messages;
