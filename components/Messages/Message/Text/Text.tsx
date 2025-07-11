import React, { FC, JSX } from "react";

const Text: FC<{ text: string }> = ({ text }): JSX.Element => {
  return (
    <>
      <div>{text}</div>
    </>
  );
};

export default Text;
