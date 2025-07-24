"use client";
import { Message, MessageContextType } from "@/types/types";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";

const MessageContext = createContext<MessageContextType | undefined>(undefined);

// 2. Провайдер контекста
export function MessageProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  // Функция для загрузки сообщений с сервера
  const getMessages = async () => {
    const url = process.env.NEXT_PUBLIC_URL;
    try {
      if (url) {
        const response = await axios.get(url);
        const newMessages = response.data as Message[];
        setMessages(newMessages); // Полностью заменяем сообщения
      }
    } catch (error) {
      console.error("Ошибка при загрузке сообщений:", error);
    }
  };

  // Опционально: загружаем сообщения при монтировании
  useEffect(() => {
    getMessages();
  }, []);

  return (
    <MessageContext.Provider value={{ messages, addMessage, getMessages }}>
      {children}
    </MessageContext.Provider>
  );
}

// 3. Хук для использования контекста
export function useMessages() {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("useMessages must be used within a MessageProvider");
  }
  return context;
}
