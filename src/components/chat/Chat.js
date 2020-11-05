import React, { useEffect, useState } from "react";
import * as api from "../../api/jsonPlaceholder.js";
import { v4 as uuidv4 } from "uuid";
import ChatForm from "../chatForm/ChatForm.js";
import MessageBox from "../messageBox/MessageBox.js";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getMessages();
        setMessages(
          response.data.map((message) => {
            return {
              id: message.id,
              text: message.name,
              timestamp: new Date().toLocaleTimeString(),
              isMine: false,
            };
          })
        );
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const onFormSubmit = (userInput) => {
    if (userInput) {
      const userId = uuidv4();
      setMessages([
        ...messages,
        {
          id: userId,
          text: userInput,
          timestamp: new Date().toLocaleTimeString(),
          isMine: true,
        },
      ]);
    }
  };

  return (
    <>
      <MessageBox messages={messages} />
      <ChatForm onFormSubmit={onFormSubmit} />
    </>
  );
};

export default Chat;
