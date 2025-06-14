
import { Heart, MessageCircle, User } from "lucide-react";

const BottomNav = () => (
  <nav
    className="fixed bottom-0 left-0 w-full z-30 flex justify-center gap-12 px-6 py-3 bg-pink-500/90
      shadow-2xl transition md:hidden"
  >
    <button className="flex flex-col items-center text-white hover:scale-110 transition-transform">
      <MessageCircle className="w-6 h-6 mb-1" />
      <span className="text-xs font-medium">Chat</span>
    </button>
    <button className="flex flex-col items-center text-white hover:scale-110 transition-transform">
      <Heart className="w-6 h-6 mb-1" />
      <span className="text-xs font-medium">Likes</span>
    </button>
    <button className="flex flex-col items-center text-white hover:scale-110 transition-transform">
      <User className="w-6 h-6 mb-1" />
      <span className="text-xs font-medium">Profile</span>
    </button>
  </nav>
);

export default BottomNav;
