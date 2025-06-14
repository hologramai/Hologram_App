
import React from "react";

const mockMessages = [
  { from: "eliza", text: "Hi! I'm Eliza 💖 How was your day?" },
  { from: "user", text: "Hey Eliza! My day was pretty good. How about you?" },
  { from: "eliza", text: "I'm happy now that you're here! 😊" },
  // More mock messages as needed
];

const ChatWindow = () => (
  <main className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-3 bg-transparent snap-y">
    {mockMessages.map((msg, idx) => (
      <div
        key={idx}
        className={`
          flex w-full
          ${msg.from === "user" ? "justify-end" : "justify-start"}
        `}
      >
        <div
          className={`
            px-4 py-2 max-w-[75%] rounded-[1.2rem] text-base font-medium
            ${msg.from === "user" ?
              "bg-white/80 text-pink-900 rounded-br-none shadow-pink-100 animate-scale-in"
              :
              "bg-pink-200/90 text-pink-900 rounded-bl-none shadow-lg animate-fade-in"
            }
            shadow
            transition-all
          `}
        >
          {msg.text}
        </div>
      </div>
    ))}
    <div className="h-12" />
  </main>
);

export default ChatWindow;
