"use client";
import React, { FC, JSX, useState } from "react";
import Input from "./Input/Input";
import Answer from "./Answer/Answer";

const Inputs: FC = (): JSX.Element => {
  const [value, setValue] = useState("");
  const [translatedValue, setTranslatedValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    const translated = translateText(inputValue);
    setTranslatedValue(translated);
  };

  const translateText = (text: string): string => {
    return text
      .split(/(\s+)/)
      .map((word) => {
        if (word.trim().length === 0) return word;

        // Запоминаем позиции всех НЕ букв и НЕ дефисов (это пунктуация)
        const punctuationPositions: { index: number; char: string }[] = [];
        const lettersAndHyphens: string[] = [];

        for (let i = 0; i < word.length; i++) {
          const char = word[i];
          if (/[a-zA-Zа-яА-ЯёЁ-]/.test(char)) {
            lettersAndHyphens.push(char);
          } else {
            punctuationPositions.push({ index: i, char });
          }
        }

        // Шифруем только буквы и дефисы (первая на месте, остальные в обратном порядке)
        let encryptedWord =
          lettersAndHyphens.length > 1
            ? lettersAndHyphens[0] +
              lettersAndHyphens.slice(1).reverse().join("")
            : lettersAndHyphens.join("");

        // Вставляем пунктуацию обратно на свои места
        punctuationPositions.forEach(({ index, char }) => {
          encryptedWord =
            encryptedWord.slice(0, index) + char + encryptedWord.slice(index);
        });

        return encryptedWord;
      })
      .join("");
  };

  return (
    <>
      <div className="mt-[50px]">
        <Input value={value} onChange={handleInputChange} />
        <Answer translatedValue={translatedValue} />
      </div>
    </>
  );
};

export default Inputs;
