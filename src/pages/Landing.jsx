import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useSEO from "../hooks/useSEO";

export default function Landing() {
  const navigate = useNavigate();

  useSEO({
    title: "★ EMAN FF ARMY ★ | Saqib x Eman Gaming - Es Freefire Arm Tournaments",
    description: "Welcome to EMAN FF ARMY, the official Es Freefire Arm and Saqib x Eman Gaming custom tournaments platform. Join registered matches, form squads, and dominate the battle royale esports scene.",
    keywords: "eman ff army, eman ff, ff eman army, eman army ff, es freefire arm, free fire, freefire tournament, ms eman army, saqib x eman gaming, saqib visuals, saqib242, eman.zone.id, free fire tournaments pakistan, saqib esports, free fire custom room",
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
            ★ EMAN FF ARMY × SAQIB X EMAN GAMING ★
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase italic leading-tight mb-8">
            SHAPING THE FUTURE OF <br/>
            <span className="text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">ESPORTS</span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.button 
              whileHover={{ scale: 1.08, y: -2, boxShadow: "0 10px 20px rgba(34,197,94,0.3)" }}
              whileTap={{ scale: 0.96 }}
              onClick={() => window.open("https://mrsaqib242.vercel.app", "_blank")}
              className="bg-green-500 hover:bg-green-400 text-black px-5 py-2.5 rounded-sm font-black text-xs uppercase tracking-wider transition-all cursor-pointer"
              style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}
            >
              Explore More →
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.08, y: -2, brightness: 1.1, boxShadow: "0 12px 25px rgba(234,179,8,0.5)" }}
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate('/proxy-panels')}
              className="bg-gradient-to-r from-red-600 via-amber-500 to-yellow-500 text-white px-5 py-2.5 rounded-sm font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(234,179,8,0.4)] cursor-pointer"
              style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}
            >
              VIP PROXY & PANELS 💀
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.08, y: -2, boxShadow: "0 10px 20px rgba(234,179,8,0.3)" }}
              whileTap={{ scale: 0.96 }}
              onClick={() => window.open("https://whatsapp.com/channel/0029Vb8oiIrKGGGDehRhyJ18", "_blank")}
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-2.5 rounded-sm font-black text-xs uppercase tracking-wider transition-all cursor-pointer"
              style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}
            >
              Join Channel →
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.08, y: -2, boxShadow: "0 10px 20px rgba(34,197,94,0.2)" }}
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate('/team')}
              className="bg-gradient-to-r from-red-600 to-green-600 text-white px-5 py-2.5 rounded-sm font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(34,197,94,0.3)] cursor-pointer"
              style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}
            >
              OUR TEAM ★
            </motion.button>
          </div>

          <motion.div 
            whileHover={{ scale: 1.03, y: -5, borderColor: "rgba(34,197,94,0.4)", boxShadow: "0 25px 50px -12px rgba(34,197,94,0.25)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass border border-green-500/20 rounded-3xl p-8 md:p-10 w-full max-w-sm relative overflow-hidden backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent"></div>
            
            <h2 className="text-2xl font-black text-white mb-3 relative z-10 uppercase italic">
              Join The Big Tournaments
            </h2>
            <p className="text-slate-400 text-xs mb-8 relative z-10 leading-relaxed">
              Beyond esports tournaments, include a broader calendar of gaming events, conferences, and conventions.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/home')}
              className="bg-green-500 hover:bg-green-400 text-black px-8 py-3.5 rounded-sm font-black uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] relative z-10 w-full cursor-pointer"
              style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)' }}
            >
              JOIN NOW →
            </motion.button>
          </motion.div>

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
            src="https://ik.imagekit.io/19imy4f1u/lite_1783071731677_58B39hkfm.png" 
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
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ x: 8, transition: { duration: 0.2 } }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex gap-6 items-start cursor-pointer group"
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl border border-green-500/30 flex items-center justify-center bg-green-500/10 relative overflow-hidden group-hover:border-green-400 group-hover:bg-green-500/20 transition-colors">
                <div className="absolute inset-0 bg-green-500/20 animate-pulse"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400 relative z-10 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2 tracking-wide group-hover:text-green-400 transition-colors">Over <span className="text-green-500">1k+</span> Affiliate Game Programs</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Keep users informed about the gaming industry with news articles on releases, updates, and events.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ x: 8, transition: { duration: 0.2 } }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-6 items-start cursor-pointer group"
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl border border-yellow-500/30 flex items-center justify-center bg-yellow-500/10 relative overflow-hidden group-hover:border-yellow-400 group-hover:bg-yellow-500/20 transition-colors">
                <div className="absolute inset-0 bg-yellow-500/20 animate-pulse" style={{ animationDelay: '500ms' }}></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400 relative z-10 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2 tracking-wide group-hover:text-yellow-400 transition-colors">Great Tournaments</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Display a calendar of upcoming tournaments with dates, times, and game titles and provide live updates.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ x: 8, transition: { duration: 0.2 } }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-6 items-start cursor-pointer group"
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl border border-blue-500/30 flex items-center justify-center bg-blue-500/10 relative overflow-hidden group-hover:border-blue-400 group-hover:bg-blue-500/20 transition-colors">
                <div className="absolute inset-0 bg-blue-500/20 animate-pulse" style={{ animationDelay: '1000ms' }}></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400 relative z-10 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2 tracking-wide group-hover:text-blue-400 transition-colors">Get Online Supports</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Create profiles for professional esports players, including their bios, achievements, and current teams.
                </p>
              </div>
            </motion.div>
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
              Shaping the future of esports by delivering high-tier tournaments, real-time tracking, and legendary leagues for Ms Eman Army.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-xs font-bold tracking-widest uppercase text-slate-400">
            <button onClick={() => navigate('/home')} className="hover:text-green-400 transition-colors">Home</button>
            <button onClick={() => navigate('/portal')} className="hover:text-green-400 transition-colors">Portal</button>
            <button onClick={() => navigate('/login')} className="hover:text-green-400 transition-colors">Admin Login</button>
          </div>

          <div className="flex flex-wrap gap-5 justify-center md:justify-end">
            {/* WhatsApp - Glossy 3D App Icon Style */}
            <motion.a 
              whileHover={{ scale: 1.12, y: -4, rotate: -2 }}
              whileTap={{ scale: 0.92 }}
              href="https://wa.me/923478936242" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all border border-white/20 bg-gradient-to-b from-[#2be673] to-[#1cb854] text-white shadow-[0_10px_25px_rgba(37,211,102,0.45)] overflow-hidden cursor-pointer group"
            >
              {/* Glossy Diagonal Shine Highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/35 pointer-events-none z-20 group-hover:left-[100%] transition-all duration-1000 ease-out" style={{ left: '-100%', width: '200%' }} />
              {/* Inner Soft Gradient Ring */}
              <div className="absolute inset-[1px] rounded-[14px] bg-gradient-to-b from-white/15 to-transparent pointer-events-none z-10" />
              
              <svg className="w-7 h-7 fill-white z-10 drop-shadow-[0_2px_5px_rgba(0,0,0,0.25)]" viewBox="0 0 24 24">
                <path d="M12.031 0C5.39 0 0 5.402 0 12.044c0 2.116.547 4.192 1.586 6.012L0 24l6.12-1.61c1.765.966 3.753 1.48 5.799 1.48C18.57 23.87 24 18.468 24 11.82 24 5.18 18.57 0 12.031 0zm0 21.873c-1.9 0-3.75-.512-5.36-1.478l-.38-.22-3.64.954.97-3.543-.24-.384c-1.06-1.69-1.62-3.664-1.62-5.71C1.76 5.92 6.37 1.306 12.03 1.306c2.74 0 5.31 1.07 7.25 3.012a10.16 10.16 0 0 1 3.01 7.26c0 5.652-4.61 10.267-10.26 10.267zm5.55-7.59c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.36.23-.66.08-1.03-.52-1.81-.94-2.49-2.11-.27-.46.27-.43.77-1.43.08-.15.04-.28-.02-.38-.06-.1-.68-1.63-.93-2.23-.25-.59-.5-.51-.68-.52-.17-.01-.37-.01-.57-.01-.2 0-.52.08-.79.37-.27.3-1.03 1-1.03 2.44 0 1.44 1.05 2.83 1.2 3.03.15.2 2.06 3.15 5 4.41.7.3 1.24.48 1.66.61.71.22 1.35.19 1.85.12.56-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.08-.13-.28-.2-.58-.35z"/>
              </svg>
            </motion.a>

            {/* TikTok - Premium Sleek Dark Style */}
            <motion.a 
              whileHover={{ scale: 1.12, y: -4, rotate: 2 }}
              whileTap={{ scale: 0.92 }}
              href="https://www.tiktok.com/@mr_saqib_242" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all border border-white/20 bg-gradient-to-b from-[#242428] to-[#0a0a0c] text-white shadow-[0_10px_25px_rgba(0,0,0,0.6)] overflow-hidden cursor-pointer group"
            >
              {/* Glossy Diagonal Shine Highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/30 pointer-events-none z-20 group-hover:left-[100%] transition-all duration-1000 ease-out" style={{ left: '-100%', width: '200%' }} />
              {/* Inner Soft Ring */}
              <div className="absolute inset-[1px] rounded-[14px] bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-10" />

              <svg className="w-7 h-7 text-white fill-current z-10 drop-shadow-[0_2px_5px_rgba(0,0,0,0.4)]" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .8.11V9.4a6.27 6.27 0 0 0-3.11.3 6.3 6.3 0 0 0-3.64 5.39 6.3 6.3 0 0 0 5.4 7.07 6.3 6.3 0 0 0 6.94-5.27V11a8.27 8.27 0 0 0 5.74 2.29V9.83a4.8 4.8 0 0 1-1.97-.84 4.75 4.75 0 0 1-1.62-2.3z"/>
              </svg>
            </motion.a>

            {/* Instagram - Vibrant Premium Sunset Style */}
            <motion.a 
              whileHover={{ scale: 1.12, y: -4, rotate: -2 }}
              whileTap={{ scale: 0.92 }}
              href="https://www.instagram.com/mr_saqib242" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all border border-white/20 bg-gradient-to-tr from-[#f9ce3f] via-[#e1306c] to-[#833ab4] text-white shadow-[0_10px_25px_rgba(225,48,108,0.45)] overflow-hidden cursor-pointer group"
            >
              {/* Glossy Diagonal Shine Highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/35 pointer-events-none z-20 group-hover:left-[100%] transition-all duration-1000 ease-out" style={{ left: '-100%', width: '200%' }} />
              {/* Inner Soft Ring */}
              <div className="absolute inset-[1px] rounded-[14px] bg-gradient-to-b from-white/20 to-transparent pointer-events-none z-10" />

              <svg className="w-7 h-7 fill-white z-10 drop-shadow-[0_2px_5px_rgba(0,0,0,0.25)]" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </motion.a>

            {/* Facebook - Royal Metallic Blue Style */}
            <motion.a 
              whileHover={{ scale: 1.12, y: -4, rotate: 2 }}
              whileTap={{ scale: 0.92 }}
              href="https://web.facebook.com/muhammad.saqib.718278" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all border border-white/20 bg-gradient-to-b from-[#18acf8] to-[#1877F2] text-white shadow-[0_10px_25px_rgba(24,119,242,0.45)] overflow-hidden cursor-pointer group"
            >
              {/* Glossy Diagonal Shine Highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/35 pointer-events-none z-20 group-hover:left-[100%] transition-all duration-1000 ease-out" style={{ left: '-100%', width: '200%' }} />
              {/* Inner Soft Ring */}
              <div className="absolute inset-[1px] rounded-[14px] bg-gradient-to-b from-white/15 to-transparent pointer-events-none z-10" />

              <svg className="w-7 h-7 fill-white z-10 drop-shadow-[0_2px_5px_rgba(0,0,0,0.25)]" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </motion.a>
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
