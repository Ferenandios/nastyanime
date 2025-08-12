import React, { FC, JSX } from "react";

const Answer: FC<{
  translatedValue: string;
}> = ({ translatedValue }): JSX.Element => {
  return (
    <div className="flex justify-center w-full h-[200px] mt-[30px] px-[15px]">
      <textarea
        className="h-full border p-2 w-full"
        value={translatedValue}
      ></textarea>
    </div>
  );
};

export default Answer;
