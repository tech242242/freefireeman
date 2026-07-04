import { useState } from "react";
import { Megaphone, Flame, Trophy, Sparkles, X } from "lucide-react";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div id="announcement-bar-container" className="relative w-full bg-[#07050d] border-b border-pink-500/30 overflow-hidden shadow-[0_2px_15px_rgba(236,72,153,0.15)] z-[100] h-9 sm:h-10 flex items-center">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-yellow-500/10 animate-pulse pointer-events-none" />

      {/* Fixed Badge on the Left */}
      <div className="relative z-10 flex items-center bg-gradient-to-r from-pink-600 to-purple-600 px-3 h-full text-[10px] sm:text-xs font-black uppercase tracking-widest text-white shadow-[5px_0_15px_rgba(0,0,0,0.5)] border-r border-white/10 shrink-0">
        <Megaphone className="w-3.5 h-3.5 mr-1.5 animate-bounce" />
        <span className="hidden xs:inline">Alert</span>
        <div className="ml-2 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping" />
      </div>

      {/* Scrolling Text Container */}
      <div className="relative flex-1 overflow-hidden h-full flex items-center select-none cursor-pointer">
        <div className="animate-marquee whitespace-nowrap text-xs sm:text-sm font-bold text-white tracking-wide uppercase flex items-center py-1">
          <span className="text-yellow-400 inline-flex items-center mx-4">
            <Flame className="w-4 h-4 mr-1 text-orange-500 fill-orange-500 animate-pulse" />
            New Tournament Match Coming Now!
          </span>
          <span className="text-pink-400 inline-flex items-center mx-4">
            <Trophy className="w-4 h-4 mr-1 text-yellow-500 fill-yellow-500" />
            Join And Entry to Secure Your Slot!
          </span>
          <span className="text-cyan-400 inline-flex items-center mx-4">
            <Sparkles className="w-4 h-4 mr-1 text-cyan-400 fill-cyan-400/50" />
            Exclusive Prize Pool Waiting For You!
          </span>
          <span className="text-yellow-400 inline-flex items-center mx-4">
            <Flame className="w-4 h-4 mr-1 text-orange-500 fill-orange-500 animate-pulse" />
            New Tournament Match Coming Now!
          </span>
          <span className="text-pink-400 inline-flex items-center mx-4">
            <Trophy className="w-4 h-4 mr-1 text-yellow-500 fill-yellow-500" />
            Join And Entry to Secure Your Slot!
          </span>
          <span className="text-cyan-400 inline-flex items-center mx-4">
            <Sparkles className="w-4 h-4 mr-1 text-cyan-400 fill-cyan-400/50" />
            Exclusive Prize Pool Waiting For You!
          </span>
        </div>
      </div>

      {/* Close Button on the Right */}
      <button 
        id="close-announcement-btn"
        onClick={() => setIsVisible(false)}
        className="relative z-10 h-full px-3 text-slate-400 hover:text-white hover:bg-white/5 transition-colors border-l border-white/5 shrink-0"
        title="Close announcement"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
