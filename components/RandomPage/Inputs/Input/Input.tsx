import React, { FC, JSX } from "react";

const Input: FC<{
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}> = ({ value, onChange }): JSX.Element => {
  return (
    <div className="flex justify-center w-full h-[200px] mt-[30px] first:mt-0 px-[15px]">
      <textarea
        className="w-full h-full border"
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default Input;
