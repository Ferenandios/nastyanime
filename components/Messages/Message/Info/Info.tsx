import React, { FC, JSX } from "react";

const Info: FC = (): JSX.Element => {
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
      <div className="text-[#000000a1] w-full h-[50px]">
        <span>Фанатка</span>
        <span className="ml-[10px]">{getFormattedDate()}</span>
      </div>
    </>
  );
};

export default Info;
