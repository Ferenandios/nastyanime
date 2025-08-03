"use client";
import { FC, JSX, useEffect, useRef } from "react";
import { useMessages } from "../message-context";
import Message from "./Message/Message";
import styles from "./Messages.module.css";

const Messages: FC = (): JSX.Element => {
  const { messages } = useMessages();
  const bottomOfPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomOfPanelRef.current) {
      bottomOfPanelRef.current.scrollIntoView();
    }
  }, [messages]);

  return (
    <>
      <div className={styles.ansoc}>
        <div className={styles.messages}>
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
          <div ref={bottomOfPanelRef}></div>
        </div>
      </div>
    </>
  );
};

export default Messages;
