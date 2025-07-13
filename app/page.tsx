import Header from "@/components/Header/Header";
import Input from "@/components/Input/Input";
import { MessageProvider } from "@/components/message-context";
import Messages from "@/components/Messages/Messages";
import React from "react";

const Home = () => {
  return (
    <>
      <main>
        <Header />
        <MessageProvider>
          <div className="fixed bottom-[100px]">
            <Messages />
            <Input />
          </div>
        </MessageProvider>
      </main>
    </>
  );
};

export default Home;
