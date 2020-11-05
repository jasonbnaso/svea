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
      <input type="submit" />
      Send
    </form>
  );
};

export default ChatForm;
