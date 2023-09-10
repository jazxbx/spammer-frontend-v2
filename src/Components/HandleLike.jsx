import { API } from "../API";

function HandleLike({ message, fetchMessages }) {
  async function fetchLikes() {
    const res = await fetch(`${API}/messages/${message.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: message.likes + 1,
      }),
    });
    const data = await res.json();
    console.log(data);
    fetchMessages();
  }

  return (
    <>
      <button
        onClick={() => {
          fetchLikes();
        }}
      >
        💟
      </button>
      <span> {message.likes}</span>
    </>
  );
}

export default HandleLike;
