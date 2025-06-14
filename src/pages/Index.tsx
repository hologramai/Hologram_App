
import ElizaHeader from "@/components/ElizaHeader";
import ChatWindow from "@/components/ChatWindow";
import MessageInput from "@/components/MessageInput";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-pink-500 relative flex flex-col items-center justify-between
      md:justify-center md:bg-gradient-to-br md:from-pink-500 md:via-fuchsia-500 md:to-pink-400
      animate-fade-in"
      style={{
        background: "linear-gradient(120deg,#ff2ea3 0%,#ff50e3 70%,#ff9ecf 100%)"
      }}
    >
      <div className="w-full max-w-md flex flex-col flex-1 h-[100dvh] md:rounded-xl shadow-2xl overflow-hidden border border-pink-200 bg-white/10 backdrop-blur-xl">
        <ElizaHeader />
        <ChatWindow />
        <MessageInput />
      </div>
      <BottomNav />
    </div>
  );
};

export default Index;
