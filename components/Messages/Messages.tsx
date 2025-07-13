"use client";
import React, { FC, JSX } from "react";
import Message from "./Message/Message";
import { useMessages } from "../message-context";
import styles from "./Messages.module.css";

const Messages: FC = (): JSX.Element => {
  const { messages } = useMessages();
  return (
    <>
      <div className={styles.ansoc}>
        <div className={styles.messages}>
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Messages;
