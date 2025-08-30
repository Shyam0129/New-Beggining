import { useState, useEffect } from "react";
import axios from "../services/api";

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;
    const res = await axios.post("/chat/send", { message: input });
    setMessages([...messages, { sender: "You", text: input }, { sender: "Bot", text: res.data.reply }]);
    setInput("");
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="border rounded-lg p-4 h-96 overflow-y-auto bg-gray-50">
        {messages.map((m, i) => (
          <div key={i} className={m.sender === "You" ? "text-blue-600" : "text-green-600"}>
            <b>{m.sender}:</b> {m.text}
          </div>
        ))}
      </div>
      <div className="flex mt-2">
        <input
          className="flex-1 border p-2 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
