// import { useState } from "react";

import HandleLike from "./HandleLike";

// import { API } from "../API";

function HandleDisplayMessage({ messages, fetchMessages }) {
  return (
    <div>
      {messages.map((message) => (
        <div key={message.id} className="card">
          <div className="card-header">x</div>
          <div className="card-content">
            <p className="card-text">{message.text}</p>
            <HandleLike message={message} fetchMessages={fetchMessages} />
            <span className="card-reply">📤</span>
            <span className="card-edit">edit msg</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HandleDisplayMessage;
