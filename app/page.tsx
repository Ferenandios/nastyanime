"use client";
import Background from "@/components/Background/Background";
import Header from "@/components/Header/Header";
import Input from "@/components/Input/Input";
import { MessageProvider } from "@/components/message-context";
import Messages from "@/components/Messages/Messages";
import Mobile from "@/components/Mobile/Mobile";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure code runs only in the browser
      const userAgent = navigator.userAgent;
      const mobileRegex =
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;
      setIsMobile(mobileRegex.test(userAgent));
    }
  }, []);
  return (
    <>
      <main>
        <Background />
        <Header />
        {isMobile ? (
          <Mobile />
        ) : (
          <MessageProvider>
            <div className="fixed bottom-[100px]">
              <Messages />
              <Input />
            </div>
          </MessageProvider>
        )}
      </main>
    </>
  );
};

export default Home;
