import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useSEO from "../hooks/useSEO";

export default function Landing() {
  const navigate = useNavigate();

  useSEO({
    title: "★ SAQIB X EMAN GAMING ★ | Es Freefire Arm - Kachu Army Tournaments",
    description: "Welcome to SAQIB X EMAN GAMING, the official Es Freefire Arm and Kachu Army custom tournaments platform. Join registered matches, form squads, and dominate the battle royale esports scene.",
    keywords: "es freefire arm, free fire, freefire tournament, kachu army, saqib x eman gaming, saqib visuals, saqib242, eman.zone.id, free fire tournaments pakistan, saqib esports, free fire custom room",
    ogImage: "https://ik.imagekit.io/19imy4f1u/lite_1783018940377_lyEV8GfaD.png"
  });

  return (
    <div className="relative w-full bg-[#030303] bg-cyber-grid flex flex-col items-center overflow-x-hidden min-h-screen">
      {/* Background Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-950/20 via-[#030303] to-[#030303] pointer-events-none"></div>
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between w-full min-h-screen py-10 md:py-0 gap-8">
        
        {/* Left Character (Desktop-only to prevent messy overlays on small screens) */}
        <motion.div 
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hidden md:flex w-1/3 relative justify-center items-end h-auto z-10"
        >
          <div className="relative w-full flex justify-center items-end">
            <img 
              src="https://ik.imagekit.io/19imy4f1u/lite_1783018940377_lyEV8GfaD.png" 
              alt="Character Left" 
              className="w-full max-w-[280px] lg:max-w-[340px] h-auto drop-shadow-[0_0_35px_rgba(34,197,94,0.4)] object-contain object-bottom scale-[1.2] lg:scale-[1.3] origin-bottom"
            />
            {/* Smooth bottom fade to cover cropped flat line completely */}
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Center Content */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/3 flex flex-col items-center text-center px-2 z-20"
        >
          <p className="text-green-500 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-4">
            ★ SAQIB X EMAN GAMING ★
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase italic leading-tight mb-8">
            SHAPING THE FUTURE OF <br/>
            <span className="text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">ESPORTS</span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => window.open("https://www.google.com/search?q=saqib242", "_blank")}
              className="bg-green-500 hover:bg-green-400 text-black px-5 py-2.5 rounded-sm font-black text-xs uppercase tracking-wider transition-all hover:scale-105"
              style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}
            >
              Explore More →
            </button>
            <button 
              onClick={() => navigate('/proxy-panels')}
              className="bg-gradient-to-r from-red-600 via-amber-500 to-yellow-500 hover:brightness-110 text-white px-5 py-2.5 rounded-sm font-black text-xs uppercase tracking-wider transition-all hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.4)]"
              style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}
            >
              VIP PROXY & PANELS 💀
            </button>
            <button 
              onClick={() => window.open("https://whatsapp.com/channel/0029Vb8oiIrKGGGDehRhyJ18", "_blank")}
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-2.5 rounded-sm font-black text-xs uppercase tracking-wider transition-all hover:scale-105"
              style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}
            >
              Join Channel →
            </button>
            <button 
              onClick={() => navigate('/team')}
              className="bg-gradient-to-r from-red-600 to-green-600 hover:from-red-500 hover:to-green-500 text-white px-5 py-2.5 rounded-sm font-black text-xs uppercase tracking-wider transition-all hover:scale-105 shadow-[0_0_15px_rgba(34,197,94,0.3)]"
              style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}
            >
              OUR TEAM ★
            </button>
          </div>

          <div className="glass border border-green-500/20 rounded-3xl p-8 md:p-10 w-full max-w-sm relative overflow-hidden backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent"></div>
            
            <h2 className="text-2xl font-black text-white mb-3 relative z-10 uppercase italic">
              Join The Big Tournaments
            </h2>
            <p className="text-slate-400 text-xs mb-8 relative z-10 leading-relaxed">
              Beyond esports tournaments, include a broader calendar of gaming events, conferences, and conventions.
            </p>
            
            <button 
              onClick={() => navigate('/home')}
              className="bg-green-500 hover:bg-green-400 text-black px-8 py-3.5 rounded-sm font-black uppercase tracking-widest transition-all hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.3)] relative z-10 w-full"
              style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)' }}
            >
              JOIN NOW →
            </button>
          </div>

          {/* Premium Mobile Characters Display - Perfect for small screens */}
          <div className="flex md:hidden w-full items-end justify-center gap-10 mt-10 relative max-w-sm px-4">
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-transparent z-10 pointer-events-none"></div>
            
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-1/2 relative flex flex-col items-center"
            >
              <img 
                src="https://ik.imagekit.io/19imy4f1u/lite_1783018940377_lyEV8GfaD.png" 
                alt="Character Left" 
                className="w-full max-w-[110px] h-auto drop-shadow-[0_0_25px_rgba(34,197,94,0.4)] object-contain scale-[1.85] origin-bottom translate-y-[2px]"
              />
            </motion.div>

            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-1/2 relative flex flex-col items-center"
            >
              <img 
                src="https://ik.imagekit.io/19imy4f1u/lite_1783018986990_YwvGM9ty_.png" 
                alt="Character Right" 
                className="w-full max-w-[115px] h-auto drop-shadow-[0_0_25px_rgba(59,130,246,0.4)] object-contain scale-[1.1] origin-bottom"
              />
            </motion.div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:justify-between w-full mt-12 text-green-400 font-bold tracking-widest uppercase text-[9px] md:text-[10px]">
            <span className="flex items-center gap-1">✨ Gaming Spanning</span>
            <span className="flex items-center gap-1">✨ Action-Packed</span>
            <span className="flex items-center gap-1">✨ Mind-Bending</span>
          </div>
        </motion.div>

        {/* Right Character (Desktop-only to prevent messy overlays on small screens) */}
        <motion.div 
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hidden md:flex w-1/3 relative justify-center items-end h-auto z-10"
        >
          <div className="relative w-full flex justify-center items-end">
            <img 
              src="https://ik.imagekit.io/19imy4f1u/lite_1783018986990_YwvGM9ty_.png" 
              alt="Character Right" 
              className="w-full max-w-[280px] lg:max-w-[340px] h-auto drop-shadow-[0_0_35px_rgba(59,130,246,0.4)] object-contain object-bottom"
            />
            {/* Smooth bottom fade to cover cropped flat line completely */}
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>

      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between w-full py-20 gap-16 mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <img 
            src="https://ik.imagekit.io/19imy4f1u/lite_1783019323177_dFKKyacLl.webp" 
            alt="About Our Gaming Site" 
            className="w-full h-auto rounded-3xl border-2 border-green-500/20 shadow-[0_0_50px_rgba(34,197,94,0.15)] object-cover"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img src="https://ik.imagekit.io/19imy4f1u/lite_1783018940377_lyEV8GfaD.png" className="w-12 h-12 object-cover object-top rounded-full bg-green-500/10 border border-green-500/30" alt="" />
              <p className="text-green-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                # About Our Gaming Site
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white italic leading-tight">
              Forging Legends In The<br/>Gaming Universe
            </h2>
          </div>

          <div className="flex flex-col gap-8 mt-4">
            {/* Feature 1 */}
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 shrink-0 rounded-2xl border border-green-500/30 flex items-center justify-center bg-green-500/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-green-500/20 animate-pulse"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2 tracking-wide">Over <span className="text-green-500">1k+</span> Affiliate Game Programs</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Keep users informed about the gaming industry with news articles on releases, updates, and events.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 shrink-0 rounded-2xl border border-yellow-500/30 flex items-center justify-center bg-yellow-500/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-yellow-500/20 animate-pulse" style={{ animationDelay: '500ms' }}></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2 tracking-wide">Great Tournaments</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Display a calendar of upcoming tournaments with dates, times, and game titles and provide live updates.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 shrink-0 rounded-2xl border border-blue-500/30 flex items-center justify-center bg-blue-500/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/20 animate-pulse" style={{ animationDelay: '1000ms' }}></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2 tracking-wide">Get Online Supports</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Create profiles for professional esports players, including their bios, achievements, and current teams.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Premium Cyber Footer */}
      <footer className="w-full relative z-10 bg-black/60 border-t border-green-500/15 py-12 mt-12 backdrop-blur-md overflow-hidden">
        {/* Subtle decorative bottom glow */}
        <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[80%] h-96 bg-green-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                <span className="text-black font-black text-lg italic">S</span>
              </div>
              <span className="text-white font-black text-2xl tracking-widest italic uppercase">
                SAQIB X <span className="text-green-500">EMAN</span>
              </span>
            </div>
            <p className="text-slate-500 text-xs text-center md:text-left max-w-sm leading-relaxed font-medium">
              Shaping the future of esports by delivering high-tier tournaments, real-time tracking, and legendary leagues for Kachu Army.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-xs font-bold tracking-widest uppercase text-slate-400">
            <button onClick={() => navigate('/home')} className="hover:text-green-400 transition-colors">Home</button>
            <button onClick={() => navigate('/portal')} className="hover:text-green-400 transition-colors">Portal</button>
            <button onClick={() => navigate('/login')} className="hover:text-green-400 transition-colors">Admin Login</button>
          </div>

          <div className="flex gap-4">
            {/* Social Icons */}
            <a href="https://www.youtube.com/@saqib242" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg border border-white/10 hover:border-green-500/50 flex items-center justify-center hover:bg-green-500/10 text-slate-400 hover:text-green-400 transition-all">
              <span className="text-sm">📺</span>
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[10px] text-slate-600 tracking-wider font-mono">
          <p>© 2026 SAQIB X EMAN GAMING. ALL RIGHTS RESERVED.</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            SECURE PORTAL CORE V2.4.1
          </p>
        </div>
      </footer>

    </div>
  );
}
