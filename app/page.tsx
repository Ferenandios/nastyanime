import Header from "@/components/Header/Header";
import Input from "@/components/Input/Input";
import { MessageProvider } from "@/components/message-context";
import Messages from "@/components/Messages/Messages";
import Mobile from "@/components/Mobile/Mobile";
import React from "react";

const Home = () => {
  return (
    <>
      <main>
        <Header />
        <MessageProvider>
          <div className="hidden fixed bottom-[100px] lg:block">
            <Messages />
            <Input />
          </div>
          <Mobile />
        </MessageProvider>
      </main>
    </>
  );
};

export default Home;
