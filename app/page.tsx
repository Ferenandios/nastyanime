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
          <Messages />
          <Input />
        </MessageProvider>
      </main>
    </>
  );
};

export default Home;
