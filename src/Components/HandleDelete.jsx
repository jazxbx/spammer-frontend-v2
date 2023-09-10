import { API } from "../API";

function HandleDelete({ message, fetchMessages }) {
  async function fetchDelete() {
    const res = await fetch(`${API}/messages/${message.id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    fetchMessages();
  }

  return (
    <button
      onClick={() => {
        fetchDelete();
      }}
    >
      X
    </button>
  );
}

export default HandleDelete;
