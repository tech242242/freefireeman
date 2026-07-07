import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import { useState, useEffect } from "react";
import usePasswordProtection from "../hooks/usePasswordProtection";
import PasswordPrompt from "../components/PasswordPrompt";

export default function ProxyPanels() {
  const navigate = useNavigate();
  const { isPromptOpen, handleProtectedAction, closePrompt, handleSuccess } = usePasswordProtection();
  const [copiedText, setCopiedText] = useState("");
  const [showJoinPopup, setShowJoinPopup] = useState(false);

  useEffect(() => {
    // Show the popup automatically 400ms after component mounts for organic feel
    const timer = setTimeout(() => {
      setShowJoinPopup(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  useSEO({
    title: "Free Fire Proxy & VIP Injection Panels | PBX Gaming",
    description: "Get 100% working Free Fire Proxy. Unlock unlimited diamonds, bundles, gold, level 100, evo guns, emotes and elite VIP gameplay injection panels.",
    keywords: "pbx gaming, free fire proxy, free fire unlimited diamonds, free fire vip panels, free fire mod apk, hg panel mediafire, spg4x, ffmax hack panel, pbx gaming vip panel, saqib x pbx gaming",
    ogImage: "https://i.ibb.co/995yZVyL/image.webp"
  });

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const proxyDetails = {
    title: "100% Working Free Fire Proxy",
    level: "Level 100 max",
    diamonds: "Unlimited Diamonds",
    bundles: "All Bundles Unlocked",
    skins: "Evo Guns & Skins Unlocked",
    gold: "Unlimited Gold",
    downloadLink: "https://www.1024tera.com/wap/share/filelist?surl=IB5bkG-HgdOaoFs-XRkCSg",
    tutorialLink: "https://youtu.be/ZK6y_58wlP4?si=ixybDFb52xfZ8yDi"
  };

  const specialPanel = {
    name: "FREEFIRE HACK",
    url: "https://freefire-deminod.vercel.app/",
    status: "CORE CONNECTED",
    description: "OVERRIDE SYSTEM INITIATED: Injecting diamond packets and high-priority premium packets directly into game servers. 100% undetected client proxy wrapper.",
    accent: "from-green-500 via-emerald-600 to-black",
    badge: "☠️ SYSTEM BYPASS ACTIVE",
    isHackerMode: true
  };

  const panelsList = [
    {
      name: "HG Panel (Mediafire)",
      url: "https://www.mediafire.com/file/9reuikwmyd2hdon/HG.apks/file",
      status: "Online / 100% Anti-Ban",
      description: "Direct APK installation. VIP auto-aim, custom ESP lines, and bypass protection.",
      accent: "from-red-600 to-amber-500",
      badge: "Highly Recommended"
    },
    {
      name: "FFMax Hack Panel",
      url: "https://ffmax-panel-hak-fire-max.en.uptodown.com/android/download",
      status: "Active / Safe",
      description: "Optimized specifically for Free Fire MAX. Enhanced sensitivity and high-end headshot accuracy.",
      accent: "from-purple-600 to-indigo-500",
      badge: "Max Edition"
    },
    {
      name: "SPG4X FF Panel",
      url: "https://spg4x-ff-panel.techylist.com/",
      status: "Updated",
      description: "Premium damage booster, speed hacking triggers, and secure proxy injection nodes.",
      accent: "from-blue-600 to-cyan-500",
      badge: "Speed Injection"
    },
    {
      name: "Red VIP Panel",
      url: "https://ff-panel-red.en.softonic.com/android",
      status: "Online",
      description: "Classic red damage indicators, auto-headshot, and lightweight memory footprints.",
      accent: "from-emerald-600 to-teal-500",
      badge: "Red Damage Only"
    },
    {
      name: "XPro Android Panel",
      url: "https://xpro-panel-free-fire.apktodo.io/",
      status: "Active / Working",
      description: "No-recoil settings, custom crosshairs, and dynamic enemy search radar capabilities.",
      accent: "from-yellow-600 to-amber-500",
      badge: "XPro Elite"
    },
    {
      name: "1-Tap VIP Panel",
      url: "https://1-tap-vip-panel-ff.latestmodapks.com/",
      status: "Updated",
      description: "One-click injector. Automatic aimlock on target acquisition, with fully customized sensitivity configurations.",
      accent: "from-pink-600 to-rose-500",
      badge: "1-Tap Aimlock"
    }
  ];

  return (
    <div className="relative w-full overflow-x-hidden bg-[#020202] bg-cyber-grid min-h-screen text-white flex flex-col pb-24 md:pb-0">
      {/* Dynamic Background Glowing effects */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>

      {/* Navigation Header */}
      <header className="w-full border-b border-white/5 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <img 
              src="https://i.ibb.co/995yZVyL/image.webp" 
              alt="Logo" 
              className="w-8 h-8 object-cover rounded-full border border-pink-500/30"
            />
            <span className="bebas text-xl md:text-2xl tracking-widest text-white italic">
              PBX <span className="text-pink-500">GAMING</span>
            </span>
          </div>

          <button 
            onClick={() => navigate("/")}
            className="border border-white/10 hover:border-yellow-500/30 bg-white/5 hover:bg-yellow-500/10 text-white hover:text-yellow-400 px-5 py-2 rounded-sm text-xs font-black uppercase tracking-widest transition-all"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}
          >
            ← Back Home
          </button>
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12 relative z-10 w-full">
        {/* Page Title Header */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <span className="text-yellow-500 font-black uppercase tracking-[0.3em] text-[10px] bg-yellow-500/10 px-4 py-1.5 rounded-full border border-yellow-500/20">
            🔥 UNLIMITED GAMEPOWER MODS
          </span>
          <h1 className="bebas text-5xl md:text-7xl italic text-white tracking-wide mt-4">
            FREE FIRE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">PROXY & VIP PANELS</span>
          </h1>
          <p className="text-pink-500 text-sm md:text-base font-black tracking-[0.2em] uppercase mt-2">
            System Powered By Mr Saqib
          </p>
          <p className="text-gray-400 text-xs md:text-sm max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            Configure elite gaming proxies & injection servers to dominate the battlefield. Unlock unlimited diamonds, level 100 profiles, instant bundles, custom evo skins, and fully optimized VIP aimlock setups.
          </p>

          <button 
            onClick={() => window.location.href = "https://mrsaqib242.vercel.app"}
            className="mt-6 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-black text-[10px] sm:text-xs uppercase tracking-widest px-8 py-3 rounded-xl shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all hover:scale-105"
          >
            🔥 Other Free Mods & Hacks
          </button>

          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-8"></div>
        </motion.div>

        {/* AI SENSITIVITY HUB BANNER */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          onClick={() => navigate('/sensitivity-hub')}
          className="mb-12 bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-slate-900/40 border border-indigo-500/30 hover:border-indigo-400/60 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 cursor-pointer group hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] transition-all"
        >
          <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
            <div className="w-14 h-14 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
              <span className="text-3xl">🎯</span>
            </div>
            <div>
              <span className="text-[9px] bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider">
                🧠 NEW: AI POWERED 2X SENSITIVITY
              </span>
              <h3 className="bebas text-2xl md:text-3xl tracking-wider text-white mt-2 group-hover:text-indigo-400 transition-colors">
                SAQIB AI SENSITIVITY HUB (2X MULTIPLIER)
              </h3>
              <p className="text-slate-400 text-xs mt-1 font-light max-w-xl">
                Bypass default hardware drag-delays. Input any Android or iPhone model to calculate customized recoil configurations on our separate performance optimizer route.
              </p>
            </div>
          </div>
          <button 
            className="w-full md:w-auto bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:from-indigo-400 group-hover:to-purple-500 text-white px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-indigo-500/20 shrink-0"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}
          >
            LAUNCH GENERATOR →
          </button>
        </motion.div>

        {/* Dynamic Clipboard Indicator Toast */}
        {copiedText && (
          <div className="fixed bottom-6 right-6 z-50 bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-xs shadow-2xl border border-yellow-400/30 animate-bounce">
            ✓ Copied: {copiedText}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Side: Elite Proxy Server Detail Card (Span 5) */}
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="lg:col-span-5 glass border border-yellow-500/20 rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between"
            style={{ boxShadow: "0 0 50px -15px rgba(234,179,8,0.15)" }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-yellow-500/10 to-transparent pointer-events-none"></div>
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] bg-red-600/20 text-red-500 border border-red-500/30 px-3 py-1 rounded-md font-black uppercase tracking-widest">
                  ★ 100% ACTIVE
                </span>
                <span className="text-xs text-gray-500 font-bold font-mono">PROXY ENGINE v4.2</span>
              </div>

              <h2 className="bebas text-3xl md:text-4xl italic text-white tracking-wide mb-6">
                ⚡ {proxyDetails.title}
              </h2>

              {/* Specs & Attributes */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-center justify-between bg-white/5 border border-white/5 px-4 py-3 rounded-2xl hover:bg-yellow-500/5 hover:border-yellow-500/20 transition-all group">
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Level Boost</span>
                  <span className="font-mono text-xs text-yellow-400 font-black group-hover:scale-105 transition-transform">{proxyDetails.level} 📈</span>
                </div>

                <div className="flex items-center justify-between bg-white/5 border border-white/5 px-4 py-3 rounded-2xl hover:bg-yellow-500/5 hover:border-yellow-500/20 transition-all group">
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Diamonds Cache</span>
                  <span className="font-mono text-xs text-green-400 font-black group-hover:scale-105 transition-transform">{proxyDetails.diamonds} 💎</span>
                </div>

                <div className="flex items-center justify-between bg-white/5 border border-white/5 px-4 py-3 rounded-2xl hover:bg-yellow-500/5 hover:border-yellow-500/20 transition-all group">
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">VIP Bundles</span>
                  <span className="font-mono text-xs text-purple-400 font-black group-hover:scale-105 transition-transform">{proxyDetails.bundles} 🧥</span>
                </div>

                <div className="flex items-center justify-between bg-white/5 border border-white/5 px-4 py-3 rounded-2xl hover:bg-yellow-500/5 hover:border-yellow-500/20 transition-all group">
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Evo Weapons</span>
                  <span className="font-mono text-xs text-pink-400 font-black group-hover:scale-105 transition-transform">{proxyDetails.skins} 🔫</span>
                </div>

                <div className="flex items-center justify-between bg-white/5 border border-white/5 px-4 py-3 rounded-2xl hover:bg-yellow-500/5 hover:border-yellow-500/20 transition-all group">
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Gold Coins</span>
                  <span className="font-mono text-xs text-yellow-500 font-black group-hover:scale-105 transition-transform">{proxyDetails.gold} 🪙</span>
                </div>
              </div>
            </div>

            <div className="space-y-3.5">
              {/* Watch Tutorial Button */}
              <button onClick={() => handleProtectedAction(() => window.open(proxyDetails.tutorialLink, "_blank"))} className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-[0.15em] text-xs py-3.5 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-red-600/20">🎥 WATCH HOW TO USE PROXY</button>

              {/* TeraBox Download Proxy Link */}
              <button onClick={() => handleProtectedAction(() => window.open(proxyDetails.downloadLink, "_blank"))} className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-black font-black uppercase tracking-[0.15em] text-xs py-3.5 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-yellow-500/20">📥 DOWNLOAD PROXY FILE NOW</button>

              <button 
                onClick={() => handleProtectedAction(() => handleCopy(proxyDetails.downloadLink, "Proxy Link"))}
                className="w-full text-center text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
              >
                🔗 COPY SECURE DOWNLOAD LINK
              </button>
            </div>
          </motion.div>

          {/* Right Side: VIP Panels Grid (Span 7) */}
          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="bebas text-3xl italic text-white tracking-wide flex items-center gap-2">
                🎯 ACTIVE VIP INJECTION PANELS
              </h2>
              <span className="text-[10px] bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-3 py-1 rounded-full font-black uppercase tracking-wider">
                {panelsList.length} PANELS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {panelsList.map((panel, index) => {
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    whileHover={{ 
                      y: -8, 
                      borderColor: "rgba(234,179,8,0.4)",
                      boxShadow: "0 15px 35px rgba(234,179,8,0.15)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="glass border border-white/5 bg-black/60 rounded-2xl p-5 relative group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[9px] bg-white/5 border border-white/10 text-yellow-500 px-2 py-0.5 rounded font-black uppercase tracking-widest">
                          {panel.badge}
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-wider flex items-center gap-1 text-green-500">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
                          {panel.status}
                        </span>
                      </div>

                      <h3 className="bebas text-xl tracking-wide transition-colors text-white group-hover:text-yellow-500">
                        {panel.name}
                      </h3>
                      
                      <p className="text-xs font-light leading-relaxed mt-2 mb-4 h-12 overflow-y-auto custom-scrollbar text-gray-400">
                        {panel.description}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                         onClick={() => handleProtectedAction(() => window.open(panel.url, "_blank"))}
                        
                        className={`flex-1 text-center bg-gradient-to-r ${panel.accent} text-white font-black uppercase tracking-widest text-[9px] py-2.5 rounded-lg hover:opacity-90 transition-all cursor-pointer`}
                      >🚀 GET PANEL</motion.button>
                      <button 
                        onClick={() => handleProtectedAction(() => handleCopy(panel.url, panel.name))}
                        className="bg-white/5 hover:bg-white/10 border border-white/5 px-2.5 rounded-lg text-xs hover:text-yellow-500 transition-colors cursor-pointer"
                        title="Copy Link"
                      >
                        📋
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Dedicated Standalone Custom Hacking Portal for FREEFIRE HACK */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-12 bg-black/95 border border-green-500 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-[0_0_35px_rgba(34,197,94,0.15)]"
        >
          {/* Hacker Matrix scan lines decoration */}
          <div className="absolute inset-0 bg-matrix-effect opacity-[0.03] pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-500/10 to-transparent pointer-events-none"></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-[10px] bg-green-500/20 border border-green-500 text-green-400 px-3 py-1 rounded-md font-black uppercase tracking-widest font-mono animate-pulse">
                  {specialPanel.badge}
                </span>
                <span className="text-[10px] font-mono text-green-400 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
                  {specialPanel.status}
                </span>
              </div>

              <h2 className="bebas text-3xl md:text-5xl italic text-green-400 tracking-wide font-mono">
                ⚡ [SYSTEM OVERRIDE] {specialPanel.name}
              </h2>
              
              <p className="text-green-300/80 font-mono text-xs md:text-sm leading-relaxed mt-3 max-w-4xl">
                &gt; {specialPanel.description}
              </p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 bg-green-950/10 border border-green-500/10 p-4 rounded-2xl font-mono text-[10px] text-green-400">
                <div>
                  <span className="text-gray-500 block">EXPLOIT INTEGRITY:</span>
                  <span className="font-bold text-green-400">100% UNBANNED</span>
                </div>
                <div>
                  <span className="text-gray-500 block">BYPASS PROTOCOL:</span>
                  <span className="font-bold text-green-400">SSL/TLS PROXY</span>
                </div>
                <div>
                  <span className="text-gray-500 block">INJECT PORT:</span>
                  <span className="font-bold text-green-400">8080/UDP v4</span>
                </div>
                <div>
                  <span className="text-gray-500 block">TARGET REGION:</span>
                  <span className="font-bold text-green-400">GLOBAL NODES</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full md:w-auto gap-3 shrink-0">
              <button onClick={() => handleProtectedAction(() => window.open(specialPanel.url, "_blank"))} className="w-full md:w-64 text-center bg-green-500 hover:bg-green-400 text-black font-black uppercase tracking-widest text-xs py-4 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all hover:scale-[1.02]">⚡ EXPLOIT & LAUNCH PORTAL</button>
              <button 
                onClick={() => handleProtectedAction(() => handleCopy(specialPanel.url, specialPanel.name))}
                className="w-full md:w-64 bg-green-950/20 hover:bg-green-950/40 border border-green-500/30 text-green-400 hover:text-green-300 font-bold uppercase tracking-widest text-[10px] py-2.5 rounded-lg transition-all"
              >
                📋 COPY SECURE DIRECT LINK
              </button>
            </div>
          </div>
        </motion.div>

        {/* Dedicated Standalone Custom Portal for FF Emote Bot APK */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-black/95 border border-orange-500 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-[0_0_35px_rgba(249,115,22,0.15)]"
        >
          <div className="absolute inset-0 bg-matrix-effect opacity-[0.03] pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-500/10 to-transparent pointer-events-none"></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-[10px] bg-orange-500/20 border border-orange-500 text-orange-400 px-3 py-1 rounded-md font-black uppercase tracking-widest font-mono animate-pulse">
                  💃 EMOTE VIP INJECTOR
                </span>
                <span className="text-[10px] font-mono text-orange-400 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-orange-400 animate-ping"></span>
                  Active / Safe
                </span>
              </div>
              <h2 className="bebas text-3xl md:text-5xl italic text-orange-400 tracking-wide font-mono">
                🔥 FF EMOTE BOT APK
              </h2>
              
              <p className="text-orange-300/80 font-mono text-xs md:text-sm leading-relaxed mt-3 max-w-4xl">
                &gt; Unlock premium Free Fire emotes automatically. Easy bot configuration and safe to use.
              </p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 bg-orange-950/10 border border-orange-500/10 p-4 rounded-2xl font-mono text-[10px] text-orange-400">
                <div>
                  <span className="text-gray-500 block">ANIMATION SYNC:</span>
                  <span className="font-bold text-orange-400">100% UNLOCKED</span>
                </div>
                <div>
                  <span className="text-gray-500 block">BAN RISK:</span>
                  <span className="font-bold text-orange-400">0% RISK</span>
                </div>
                <div>
                  <span className="text-gray-500 block">UPDATED FOR:</span>
                  <span className="font-bold text-orange-400">LATEST OB</span>
                </div>
                <div>
                  <span className="text-gray-500 block">VIP FEATURES:</span>
                  <span className="font-bold text-orange-400">ALL EMOTES</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full md:w-auto gap-3 shrink-0">
              <button onClick={() => handleProtectedAction(() => window.open("https://www.mediafire.com/file/50tvqpqa9uyndok/FF_EMOTE_BOT.apk/file", "_blank"))} className="w-full md:w-64 text-center bg-orange-500 hover:bg-orange-400 text-black font-black uppercase tracking-widest text-xs py-4 rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all hover:scale-[1.02]">📥 DOWNLOAD EMOTE BOT</button>
              <button 
                onClick={() => handleProtectedAction(() => handleCopy("https://www.mediafire.com/file/50tvqpqa9uyndok/FF_EMOTE_BOT.apk/file", "FF Emote Bot"))}
                className="w-full md:w-64 bg-orange-950/20 hover:bg-orange-950/40 border border-orange-500/30 text-orange-400 hover:text-orange-300 font-bold uppercase tracking-widest text-[10px] py-2.5 rounded-lg transition-all"
              >
                📋 COPY SECURE DIRECT LINK
              </button>
            </div>
          </div>
        </motion.div>

        {/* Dedicated Standalone Custom Portal for Astute Private Server OB54 */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-black/95 border border-purple-500 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-[0_0_35px_rgba(168,85,247,0.15)]"
        >
          <div className="absolute inset-0 bg-matrix-effect opacity-[0.03] pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent pointer-events-none"></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-[10px] bg-purple-500/20 border border-purple-500 text-purple-400 px-3 py-1 rounded-md font-black uppercase tracking-widest font-mono animate-pulse">
                  🔮 PRIVATE SERVER
                </span>
                <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-purple-400 animate-ping"></span>
                  OB54 Updated
                </span>
              </div>
              <h2 className="bebas text-3xl md:text-5xl italic text-purple-400 tracking-wide font-mono">
                🌌 ASTUTE PRIVATE SERVER OB54
              </h2>
              
              <p className="text-purple-300/80 font-mono text-xs md:text-sm leading-relaxed mt-3 max-w-4xl">
                &gt; Connect to the Astute Private Server OB54. Exclusive access to premium features, unlimited diamonds, and new updates.
              </p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 bg-purple-950/10 border border-purple-500/10 p-4 rounded-2xl font-mono text-[10px] text-purple-400">
                <div>
                  <span className="text-gray-500 block">SERVER TYPE:</span>
                  <span className="font-bold text-purple-400">ASTUTE PRIVATE</span>
                </div>
                <div>
                  <span className="text-gray-500 block">GAME VERSION:</span>
                  <span className="font-bold text-purple-400">LATEST OB54</span>
                </div>
                <div>
                  <span className="text-gray-500 block">CURRENCY:</span>
                  <span className="font-bold text-purple-400">UNLIMITED</span>
                </div>
                <div>
                  <span className="text-gray-500 block">ACCESS:</span>
                  <span className="font-bold text-purple-400">VIP PREMIUM</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full md:w-auto gap-3 shrink-0">
              <button onClick={() => handleProtectedAction(() => window.open("https://www.mediafire.com/file/wdezoy370o01zx3/Astute-Private-Server-OB54-astutebetaserveri.com.apk/file", "_blank"))} className="w-full md:w-64 text-center bg-purple-500 hover:bg-purple-400 text-black font-black uppercase tracking-widest text-xs py-4 rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all hover:scale-[1.02]">📥 DOWNLOAD PRIVATE SERVER</button>
              <button 
                onClick={() => handleProtectedAction(() => handleCopy("https://www.mediafire.com/file/wdezoy370o01zx3/Astute-Private-Server-OB54-astutebetaserveri.com.apk/file", "Astute Private Server"))}
                className="w-full md:w-64 bg-purple-950/20 hover:bg-purple-950/40 border border-purple-500/30 text-purple-400 hover:text-purple-300 font-bold uppercase tracking-widest text-[10px] py-2.5 rounded-lg transition-all"
              >
                📋 COPY SECURE DIRECT LINK
              </button>
            </div>
          </div>
        </motion.div>

        {/* Footer info box */}
        <div className="mt-16 bg-gradient-to-r from-red-600/10 via-yellow-500/5 to-transparent border border-red-500/20 p-6 rounded-2xl">
          <h4 className="font-bold text-xs uppercase tracking-widest text-red-400 mb-1">⚠️ SECURE GAMING WARNING</h4>
          <p className="text-gray-400 text-xs font-light leading-relaxed">
            All files and links provided above are managed on secure servers. Be sure to check the YouTube tutorial video provided to understand the exact directory placement and device settings needed to trigger the bypass proxy successfully without standard system flags.
          </p>
        </div>
      </main>

      <PasswordPrompt isOpen={isPromptOpen} onClose={closePrompt} onSuccess={handleSuccess} />
      {/* WhatsApp Channel Join Popup */}
      <AnimatePresence>
        {showJoinPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowJoinPopup(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-md bg-[#0a0a0c] border border-yellow-500/40 rounded-3xl p-6 md:p-8 shadow-[0_0_50px_rgba(234,179,8,0.25)] overflow-hidden z-10"
            >
              {/* Top ambient glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setShowJoinPopup(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white bg-white/5 hover:bg-white/10 w-8 h-8 rounded-full flex items-center justify-center border border-white/10 transition-colors cursor-pointer"
              >
                ✕
              </button>

              <div className="text-center relative z-10">
                {/* Glowing Icon Container */}
                <div className="rgb-ring w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <div className="w-full h-full bg-black rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://i.ibb.co/995yZVyL/image.webp" 
                      alt="Saqib X PBX Gaming" 
                      className="w-16 h-16 object-cover rounded-full animate-pulse"
                    />
                  </div>
                </div>

                <span className="text-[10px] bg-pink-500/10 text-pink-500 border border-pink-500/30 px-3 py-1 rounded-full font-black uppercase tracking-[0.2em] inline-block mb-3">
                  🔔 EXCLUSIVE TELECAST
                </span>

                <h3 className="bebas text-3xl md:text-4xl text-white tracking-wide italic mb-3">
                  SAQIB X PBX <span className="text-pink-500">GAMING</span>
                </h3>

                <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6 font-light">
                  Join our official WhatsApp Channel to get <strong>instant notifications</strong> for new working custom rooms, elite bypass proxy updates, and premium VIP injection panels!
                </p>

                <div className="space-y-3">
                  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={() => handleProtectedAction(() => { setShowJoinPopup(false); window.open("https://chat.whatsapp.com/JFrvLw4KvAeG4HO6EUMSPo?s=cl&p=a&ilr=0&amv=2", "_blank"); })} className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-500 via-emerald-600 to-teal-500 text-black font-black uppercase tracking-widest text-xs py-4 rounded-xl shadow-lg shadow-green-500/20 cursor-pointer">🟢 JOIN COMMUNITY</motion.button>

                  <button
                    onClick={() => setShowJoinPopup(false)}
                    className="w-full text-center text-gray-500 hover:text-white text-[10px] uppercase tracking-widest font-black py-2 cursor-pointer transition-colors"
                  >
                    I have already joined / Later
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Embedded styles for beautiful scrollbars */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.01);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
}
