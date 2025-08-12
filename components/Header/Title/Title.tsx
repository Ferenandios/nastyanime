import React, { FC, JSX } from "react";
import styles from "./Title.module.css";

const Title: FC<{ title?: string }> = ({ title }): JSX.Element => {
  return (
    <>
      <div className={styles.ansoc}>
        <h1 className={styles.title}>{title ? title : "кавайный ЧяТиГг"}</h1>
      </div>
    </>
  );
};

export default Title;
