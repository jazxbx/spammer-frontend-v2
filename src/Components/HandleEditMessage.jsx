import { useState } from "react";
// import { API } from "../API";

function HandleEditMessage({ message, fetchMessages }) {
  // state if nag edit or wala
  const [editing, setEditing] = useState(false);
  console.log(editing);
  console.log(`after:`, editing);
  return (
    <div>
      {editing ? (
        <form action="">
          <input type="text" />
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
