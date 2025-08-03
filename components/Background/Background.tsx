import Image from "next/image";
import React, { FC, JSX } from "react";

const Background: FC = (): JSX.Element => {
  return (
    <>
      <div className="-z-10 absolute top-0 left-0 right-0 w-full h-full">
        <div>
          <Image
            className="absolute top-[10px] right-[10px]"
            alt="Gif"
            src="/kioku.gif"
            width={300}
            height={250}
          />
        </div>
      </div>
    </>
  );
};

export default Background;
