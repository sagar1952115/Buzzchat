import React from "react";
import { Helmet } from "react-helmet";
import Messages from "../components/Chat/Messages";
import MessageInput from "../components/Chat/MessageInput";
import { useChat } from "../contextApi/ChatContext";

const Chat = () => {
  const { receiver } = useChat();

  return (
    <>
      {
        receiver && receiver !== "" ? (
          <title>Omegle: Connected to stranger</title>
        ) : (
          <title>Omegle: Talk to strangers!</title>
        )
      }
        <Messages />
    </>
  );
};

export default Chat;
