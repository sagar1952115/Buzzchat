import React, { useEffect } from "react";
import { useChat } from "../../contextApi/ChatContext";
import { socket } from "../../Socket";
import { useNavigate } from "react-router-dom";

const MessageInput = () => {
  const {
    userId,
    onlineUsers,
    isSearching,
    setIsSearching,
    receiver,
    setReceiver,
    setMessages,
    isSending,
    setIsSending,
    message,
    setMessage,
    setIsTyping,
  } = useChat();

  const newChat = () => {
    setIsSearching(true);
    setMessages([]);
    socket.emit("pairing-user", userId, (error) => {
      return;
    });
    return () => {
      socket.off("pairing-user");
    };
  };

  const sendMessage = () => {
    if (isSending) return;
    if (message === "") return;
    setIsSending(true);
    socket.emit("send-message", receiver, message, () => {
      setMessage("");
    });
  };

  const disconnectChat = () => {
    if (receiver) {
      socket.emit("chat-close", receiver, () => {
        setReceiver("");
        setIsTyping(false);
        setMessage("");
      });
    } else {
      socket.emit("unpairing-user", userId, () => {
        setIsSearching(false);
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const typingHandle = (e) => {
    if (e.target.value !== "") {
      socket.emit("typing", receiver);
    } else {
      socket.emit("typing stop", receiver);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (userId && onlineUsers.find((user) => user.userId === userId)) {
      newChat();
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex gap-2 items-center p-2 fixed bottom-0 left-0 w-full bg-transparent">
      {receiver || isSearching ? (
        <button
          className="font-medium text-lg min-w-fit w-1/12 p-2 border border-gray-300 rounded-md bg-red-500 text-white hover:bg-red-600"
          onClick={disconnectChat}
        >
          Stop
        </button>
      ) : (
        <button
          className="font-medium text-lg min-w-fit w-1/12 p-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300"
          onClick={newChat}
          disabled={isSearching}
        >
          New
        </button>
      )}
      <div className="border border-gray-300 bg-gray-100 px-1 flex-1 flex gap-2 rounded-md items-center">
        <input
          type="text"
          placeholder="Type your message..."
          className="text-lg p-2 flex-1 outline-none bg-white"
          onChange={(e) => {
            setMessage(e.target.value);
            typingHandle(e);
          }}
          value={message}
          onKeyDown={(e) => handleKeyPress(e)}
          disabled={!receiver}
        />
        <button
          className="font-medium text-lg w-10 h-10  p-2 border border-gray-300 rounded-md bg-green-500 text-white hover:bg-green-600 disabled:bg-gray-300"
          onClick={sendMessage}
          disabled={!receiver || isSending}
        >
          <img src="/assets/icons/send.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
