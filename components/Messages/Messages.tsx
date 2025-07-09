import React, { FC, JSX } from "react";
import Message from "./Message/Message";

const Messages: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex justify-center mt-[30px]">
        <div className="flex flex-col w-[600px]">
          <Message />
        </div>
      </div>
    </>
  );
};

export default Messages;
