import React from "react";
import Messages from "./messages/Messages";
import "../App.scss";

function App() {
  return (
    <div className="svea-wrapper">
      <div className="message-wrapper">
        <Messages />
      </div>
    </div>
  );
}

export default App;
