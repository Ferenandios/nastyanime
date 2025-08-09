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
            priority
          />
          <Image
            className="absolute bottom-[10px] left-[100px] w-auto h-auto"
            alt="Gif"
            src="/mihanemoi.gif"
            width={173}
            height={59}
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Background;
