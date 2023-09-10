import { useState } from "react";
import { API } from "../API";

function HandleSubmitMessage({ fetchMessages }) {
  // I need to create the initial state which is an empty string
  const [submitMessage, setSubmitMessage] = useState("");

  async function fetchSubmitMessage(e) {
    e.preventDefault();
    const res = await fetch(`${API}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: submitMessage,
      }),
    });
    const data = await res.json();
    console.log(data);
    fetchMessages();
    setSubmitMessage("");
  }

  return (
    <div>
      <form onSubmit={fetchSubmitMessage}>
        <input
          type="text"
          required
          placeholder="What's your message?"
          value={submitMessage}
          onChange={(e) => {
            setSubmitMessage(e.target.value);
          }}
        />
        <button>Post Message</button>
      </form>
    </div>
  );
}

export default HandleSubmitMessage;
