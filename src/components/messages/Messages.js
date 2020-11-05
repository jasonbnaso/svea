import React, { useEffect, useState } from "react";
import * as api from "../../api/jsonPlaceholder.js";
import { v4 as uuidv4 } from "uuid";
import user from "../../imgs/user.png";
import ChatForm from "./ChatForm.js";
import "./messages.scss";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getMessages();
        // setMessages(response.data);
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

  const onFormSubmit = (event, userInput) => {
    event.preventDefault();
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
    } else {
      return;
    }
  };

  return (
    <>
      <div className="message-box">
        <ul>
          {messages.map((message) => (
            <li
              className={message.isMine ? "message" : "message my-message"}
              key={message.id}
            >
              <div className="img-text">
                <img src={user} className="user-image" alt="dude"></img>
                <p>{message.text}</p>
              </div>
              <div className="time">{message.timestamp}</div>
            </li>
          ))}
        </ul>
      </div>
      <ChatForm onFormSubmit={onFormSubmit} />
    </>
  );
};

export default Messages;

// Look into
// https://deepscan.io/docs/rules/react-void-element-with-children
