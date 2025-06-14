
import { User } from "lucide-react";

const ElizaHeader = () => (
  <header className="flex items-center justify-between px-4 py-3 bg-white/10 backdrop-blur z-10 border-b border-white/20">
    <div className="flex items-center gap-3">
      {/* Placeholder for Eliza avatar */}
      <img src="/lovable-uploads/e396cb6d-dfae-40f3-9feb-054aff7597f0.png"
           alt="Eliza" className="w-12 h-12 rounded-full shadow-lg border-2 border-pink-400 object-cover" />
      <div>
        <div className="font-semibold text-lg text-white">Eliza</div>
        <div className="text-xs text-pink-200">Online</div>
      </div>
    </div>
    <User className="w-6 h-6 text-pink-200" />
  </header>
);

export default ElizaHeader;
