import React from "react";
import user from "../../imgs/user.png";
import "./messageBox.scss";

const MessageBox = ({ messages }) => {
  return (
    <ul>
      {messages.map((message) => (
        <li
          className={message.isMine ? "message my-message" : "message"}
          key={message.id}
        >
          <div className="img-text">
            <img src={user} className="user-image" alt="Profile" />
            <p>{message.text}</p>
          </div>
          <div className="time">{message.timestamp}</div>
        </li>
      ))}
    </ul>
  );
};

export default MessageBox;
