import Header from "@/components/Header/Header";
import Inputs from "@/components/RandomPage/Inputs/Inputs";
import React, { FC, JSX } from "react";

const page: FC = (): JSX.Element => {
  return (
    <>
      <main>
        <Header title="текст" />
        <Inputs />
      </main>
    </>
  );
};

export default page;
