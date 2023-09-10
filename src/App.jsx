import { useEffect, useState } from "react";
import { API } from "./API";
import HandleSubmitMessage from "./Components/HandleSubmitMessage";
import HandleDisplayMessage from "./Components/HandleDisplayMessage";

function App() {
  // create a state that displays ALL messages
  const [messages, setMessages] = useState([]);
  // get messages from database
  async function fetchMessages() {
    try {
      // const res = await fetch(
      //   "https://spammer-backend-ruyi.onrender.com/messages"
      // );
      const res = await fetch(`${API}/messages`);
      // console.log(res);
      const data = await res.json();
      // console.log(data);
      setMessages(data.messages);
      // console.log(messages);
    } catch (error) {
      // console.log(error);
    }
  }
  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="flex">
      <h1>Spammer</h1>
      {/* Submit message form */}
      <HandleSubmitMessage fetchMessages={fetchMessages} />
      {/* Display message with buttons, like etc */}
      <HandleDisplayMessage messages={messages} fetchMessages={fetchMessages} />
    </div>
  );
}

export default App;
