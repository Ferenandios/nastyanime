import Image from "next/image";
import React, { FC, JSX } from "react";
import Title from "./Title/Title";
import styles from "./Header.module.css";

const Header: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.header}>
        <Image
          alt="Настюша Геймерша"
          src="/charlotte-z.jpg"
          width={100}
          height={99}
        />
        <Title />
      </div>
    </>
  );
};

export default Header;
