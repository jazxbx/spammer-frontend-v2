import { useState } from "react";
import { API } from "../API";

function HandleEditMessage({ message, fetchMessages }) {
  // state if nag edit or wala
  const [editing, setEditing] = useState(false);
  //   state for input box
  const [inputMessage, setInputMessage] = useState(message.text);

  async function fetchEditMessage(e) {
    e.preventDefault();

    const res = await fetch(`${API}/messages/${message.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: inputMessage,
      }),
    });
    const data = await res.json();
    console.log(data);
    setEditing(false);
    fetchMessages();
    setInputMessage("");
  }

  return (
    <div>
      {editing ? (
        <form key={message.id} onSubmit={fetchEditMessage}>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button>save</button>
          <button
            onClick={() => {
              setEditing(false);
            }}
          >
            cancel
          </button>
        </form>
      ) : (
        <button
          onClick={() => {
            setEditing(true);
          }}
        >
          ✏️
        </button>
      )}
    </div>
  );
}

export default HandleEditMessage;
