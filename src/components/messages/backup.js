import React, { useEffect, useState } from "react";
import * as api from "../../api/jsonPlaceholder.js";
import user from "../../imgs/user.png";
import "./messages.scss";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("Hello");
  console.log(userInput);

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

  const onFormSubmit = (event, index) => {
    console.log(userInput);
    event.preventDefault();
    // const text = "This is a test";
    const id = index;
    setMessages([
      ...messages,
      {
        id: id,
        text: userInput,
        timestamp: new Date().toLocaleTimeString(),
        isMine: true,
      },
    ]);
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
      <form className="chat-form" onSubmit={onFormSubmit}>
        <input
          className="search-field"
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <input type="submit" />
        Send
      </form>
    </>
  );
};

export default Messages;

// Look into
// https://deepscan.io/docs/rules/react-void-element-with-children
