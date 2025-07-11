import React, { FC, JSX } from "react";
import styles from "./Info.module.css";

const Info: FC<{ username: string; date: string }> = ({
  username,
  date,
}): JSX.Element => {
  return (
    <>
      <div className={styles.info}>
        <span>{username}</span>
        <span className={styles.date}>{date}</span>
      </div>
    </>
  );
};

export default Info;
