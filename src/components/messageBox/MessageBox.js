import React from "react";
import user from "../../imgs/user.jpg";
import "./messageBox.scss";

const MessageBox = ({ messages }) => {
  return (
    <div className="message-box">
      <ul>
        {messages.map((message) => (
          <li
            className={message.isMine ? "message my-message" : "message"}
            key={message.id}
          >
            <div className="img-text-wrapper">
              <img src={user} className="user-image" alt="Profile" />
              <p>{message.text}</p>
            </div>
            <div className="time">{message.timestamp}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageBox;
