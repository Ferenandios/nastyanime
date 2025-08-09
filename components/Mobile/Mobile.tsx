import Image from "next/image";
import { FC, JSX } from "react";
import styles from "./Mobile.module.css";

const Mobile: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.mobile}>
        <h2 className={styles.title}>че нет компа?))</h2>
        <Image
          className={styles.image}
          alt="Туалет Скибиди"
          src="/skibidi.gif"
          width={150}
          height={100}
        />
      </div>
    </>
  );
};

export default Mobile;
