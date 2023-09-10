import { useState } from "react";
import { API } from "../API";

function ReplyMessage({ message, fetchMessages, setReplyMessage }) {
  const [replyMessage, setReplyMessageValue] = useState("");

  async function handleReplyMessage(e) {
    e.preventDefault();

    const res = await fetch(`${API}/message/${message.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: replyMessage }),
    });

    const info = await res.json();
    if (info.success) {
      setReplyMessage(false);
      fetchMessages();
    }
  }

  return (
    <>
      <div className="reply-container">
        <form onSubmit={handleReplyMessage}>
          <input
            placeholder="Reply message"
            value={replyMessage}
            onChange={(e) => setReplyMessageValue(e.target.value)}
          />
          <p>{replyMessage}</p>
          <button type="submit">Reply</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setReplyMessage(false);
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    </>
  );
}

export default ReplyMessage;
