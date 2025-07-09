import React, { FC, JSX } from "react";
import Info from "./Info/Info";
import Text from "./Text/Text";

const Message: FC = (): JSX.Element => {
  return (
    <>
      <div className="text-[12px] w-full bg-[#FDFFD2] p-[16px] mt-[8px] first:mt-0">
        <Info />
        <Text />
      </div>
    </>
  );
};

export default Message;
