"use client";
import { Message, MessageContextType } from "@/types/types";
// 1. Создаём контекст и типы
import { createContext, useContext, useState, ReactNode } from "react";

const MessageContext = createContext<MessageContextType | undefined>(undefined);

// 2. Провайдер контекста
export function MessageProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <MessageContext.Provider value={{ messages, addMessage }}>
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
