import React, { FC, JSX } from "react";
import Info from "./Info/Info";
import Text from "./Text/Text";
import { type Message } from "@/types/types";
import styles from "./Message.module.css";

const Message: FC<{ message: Message }> = ({ message }): JSX.Element => {
  return (
    <>
      <div className={styles.message}>
        <Info username={message.username} date={message.date} />
        <Text text={message.text} />
      </div>
    </>
  );
};

export default Message;
