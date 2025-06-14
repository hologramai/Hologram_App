
import React, { useState } from "react";
import { Send } from "lucide-react";

const MessageInput = () => {
  const [value, setValue] = useState("");

  function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!value.trim()) return;
    window.alert("In a real app, this would send: " + value); // Placeholder
    setValue("");
  }

  return (
    <form
      onSubmit={sendMessage}
      className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-white/40 to-transparent backdrop-blur flex items-center gap-2 z-20"
    >
      <input
        type="text"
        placeholder="Type your message…"
        value={value}
        onChange={e => setValue(e.target.value)}
        className="flex-1 px-4 py-2 rounded-full text-base bg-white/90 placeholder-pink-300 shadow focus:outline-none focus:ring-2 focus:ring-pink-300"
      />
      <button
        type="submit"
        className="rounded-full p-2 bg-pink-500 hover:bg-pink-600 text-white shadow hover:scale-105 transition animate-scale-in"
        aria-label="Send message"
      >
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
};

export default MessageInput;
