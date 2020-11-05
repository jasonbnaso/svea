import React, { useState } from "react";

const ChatForm = ({ onFormSubmit }) => {
  const [userInput, setUserInput] = useState("");

  return (
    <form
      className="chat-form"
      onSubmit={(event) => onFormSubmit(event, userInput, setUserInput(""))}
    >
      <input
        id="searchField"
        className="search-field"
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <input className="send-btn" type="submit" value="SEND"/>
    </form>
  );
};

export default ChatForm;
