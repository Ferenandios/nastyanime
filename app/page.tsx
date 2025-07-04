import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen bg-black">
        <div className="flex-col justify-center">
          <Image
            alt="Настюша Геймерша"
            src={"/charlotte-z.jpg"}
            width={250}
            height={250}
          />
          <h1 className="text-6xl text-center text-white mt-[30px] tracking-widest">
            gaming
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
