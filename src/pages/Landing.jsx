import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://psiypllbqopudppugaxe.supabase.co",
  "sb_publishable_PsL-7tSFu4EQU5ZHQgO6UA_Segl7g_e"
);
import { 
  Trophy, 
  Users, 
  Gift, 
  Shield, 
  Calendar, 
  User, 
  Menu, 
  X, 
  ChevronRight, 
  Sparkles, 
  Gamepad2, 
  ArrowRight, 
  Send,
  MessageSquare,
  AlertTriangle,
  Home,
  Info,
  Mail,
  Heart,
  CheckCircle2
} from "lucide-react";
import useSEO from "../hooks/useSEO";

export default function Landing() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [emailInput, setEmailInput] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("");

  const [tournaments, setTournaments] = useState([]);
  const [loadingTournaments, setLoadingTournaments] = useState(true);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const { data, error } = await supabase
          .from('kashu_tournaments')
          .select('*')
          .order('id', { ascending: true });
        if (data) {
          setTournaments(data);
        }
      } catch (err) {
        console.error("Error fetching tournaments in Landing:", err);
      } finally {
        setLoadingTournaments(false);
      }
    };
    fetchTournaments();
  }, []);

  useSEO({
    title: "PBX GAMING | Official Esports Custom Tournaments Portal",
    description: "Welcome to PBX GAMING, the official PBX Esports and Saqib x PBX Gaming custom tournaments platform. Register squads, join solo/duo rooms, and dominate the battle royale scene.",
    keywords: "pbx gaming, pbx esports, pbx official, pbx tournament, free fire tournament, pbx squad portal, saqib x pbx gaming, free fire pakistan, custom room free fire, pbxofficial.zone.id",
    ogImage: "https://i.ibb.co/YB1R7TSF/image.webp"
  });

  const scrollToSection = (id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!emailInput) return;
    setNewsletterStatus("Subscribing...");
    setTimeout(() => {
      setNewsletterStatus("🎉 Thank you for subscribing!");
      setEmailInput("");
    }, 1000);
  };

  const menuContainerVariants = {
    hidden: { opacity: 0, height: 0 },
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        height: { duration: 0.4, ease: "easeOut" },
        opacity: { duration: 0.3 },
        staggerChildren: 0.08,
        delayChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        height: { duration: 0.3, ease: "easeIn" },
        opacity: { duration: 0.2 },
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
    exit: { opacity: 0, x: -10, transition: { duration: 0.15 } }
  };

  return (
    <div className="relative w-full overflow-x-hidden bg-[#050508] text-white flex flex-col items-center min-h-screen font-sans selection:bg-pink-500/30 selection:text-pink-200 pb-24 md:pb-0">
      
      {/* Background Cyber-Grid with Subtle Pink/Purple Radial Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-950/20 via-[#050508] to-[#030304] pointer-events-none z-0"></div>
      <div className="fixed inset-0 bg-cyber-grid opacity-[0.07] pointer-events-none z-0"></div>
      
      {/* Dynamic Floating Background Particles */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-pink-500/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[800px] right-20 w-80 h-80 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-fuchsia-500/10 blur-[140px] rounded-full pointer-events-none"></div>

      {/* HEADER / NAVIGATION BAR */}
      <header className="sticky top-0 w-full z-50 bg-[#050508]/75 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <div className="w-11 h-11 rounded-full overflow-hidden border border-pink-500/50 shadow-[0_0_15px_rgba(236,72,153,0.4)] flex items-center justify-center bg-black">
              <img 
                src="https://i.ibb.co/995yZVyL/image.webp" 
                alt="PBX Royal Family Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-2xl font-black tracking-widest uppercase italic bg-gradient-to-r from-white via-white to-pink-500 bg-clip-text text-transparent">
              PBX <span className="text-pink-500">GAMING</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-slate-300">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); scrollToSection("top"); }} 
              className="relative py-2 text-pink-400 group hover:text-pink-400 transition-colors duration-200"
            >
              Home
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-pink-500 shadow-[0_0_8px_#ec4899]"></span>
            </a>
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); scrollToSection("about"); }} 
              className="py-2 hover:text-pink-400 transition-colors duration-200"
            >
              About PBX
            </a>
            <span onClick={() => navigate("/home")} className="py-2 hover:text-pink-400 transition-colors duration-200 cursor-pointer">Tournaments</span>
            <span onClick={() => navigate("/proxy-panels")} className="py-2 hover:text-pink-400 transition-colors duration-200 cursor-pointer">Proxy Panels</span>
            <span onClick={() => navigate("/sensitivity-hub")} className="py-2 hover:text-pink-400 transition-colors duration-200 cursor-pointer">Sensitivity</span>
            <span onClick={() => navigate("/team")} className="py-2 hover:text-pink-400 transition-colors duration-200 cursor-pointer">Our Team</span>
          </nav>

          {/* Desktop Call to Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(236,72,153,0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/portal")}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-black text-xs uppercase tracking-widest py-3 px-6 rounded-full border border-white/10 transition-all"
            >
              Join Team
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white hover:text-pink-500 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              variants={menuContainerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="md:hidden bg-[#07070c]/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
            >
              <div className="p-6 grid grid-cols-2 gap-3">
                <motion.div 
                  variants={menuItemVariants}
                  onClick={(e) => { e.preventDefault(); scrollToSection("top"); setMobileMenuOpen(false); }}
                  className="col-span-1 bg-white/5 border border-white/10 hover:border-pink-500/50 p-4 rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer group transition-all"
                >
                  <Home className="w-6 h-6 text-pink-500 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-white text-center">Home</span>
                </motion.div>
                
                <motion.div 
                  variants={menuItemVariants}
                  onClick={(e) => { e.preventDefault(); scrollToSection("about"); setMobileMenuOpen(false); }}
                  className="col-span-1 bg-white/5 border border-white/10 hover:border-pink-500/50 p-4 rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer group transition-all"
                >
                  <Info className="w-6 h-6 text-pink-500 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-white text-center">About</span>
                </motion.div>
                
                <motion.div 
                  variants={menuItemVariants}
                  onClick={() => { navigate("/home"); setMobileMenuOpen(false); }}
                  className="col-span-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 hover:border-pink-500/50 p-4 rounded-2xl flex items-center justify-between gap-3 cursor-pointer group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Trophy className="w-6 h-6 text-pink-500 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-white">Tournaments</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-pink-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                </motion.div>
                
                <motion.div 
                  variants={menuItemVariants}
                  onClick={() => { navigate("/proxy-panels"); setMobileMenuOpen(false); }}
                  className="col-span-1 bg-white/5 border border-white/10 hover:border-pink-500/50 p-4 rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer group transition-all"
                >
                  <Shield className="w-6 h-6 text-pink-500 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-white text-center">Proxy</span>
                </motion.div>

                <motion.div 
                  variants={menuItemVariants}
                  onClick={() => { navigate("/sensitivity-hub"); setMobileMenuOpen(false); }}
                  className="col-span-1 bg-white/5 border border-white/10 hover:border-pink-500/50 p-4 rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer group transition-all"
                >
                  <Sparkles className="w-6 h-6 text-pink-500 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-white text-center">Sensitivity</span>
                </motion.div>

                <motion.div 
                  variants={menuItemVariants}
                  onClick={() => { navigate("/team"); setMobileMenuOpen(false); }}
                  className="col-span-1 bg-white/5 border border-white/10 hover:border-pink-500/50 p-4 rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer group transition-all"
                >
                  <Users className="w-6 h-6 text-pink-500 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-white text-center">Our Team</span>
                </motion.div>
                
                <motion.div 
                  variants={menuItemVariants}
                  onClick={() => { navigate("/portal"); setMobileMenuOpen(false); }}
                  className="col-span-1 bg-gradient-to-br from-pink-500 to-purple-600 border border-transparent p-4 rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer group transition-all shadow-[0_0_20px_rgba(236,72,153,0.3)]"
                >
                  <Gamepad2 className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white text-center">Portal</span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* FLOATING SOCIAL MEDIA SIDEBAR (VERTICAL RAIL) */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6 bg-[#09090f]/80 backdrop-blur-lg px-3.5 py-7 rounded-full border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        <a href="https://www.tiktok.com/@mr_saqib_242" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-500 transition-all duration-300 hover:scale-125" title="TikTok">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .8.11V9.4a6.27 6.27 0 0 0-3.11.3 6.3 6.3 0 0 0-3.64 5.39 6.3 6.3 0 0 0 5.4 7.07 6.3 6.3 0 0 0 6.94-5.27V11a8.27 8.27 0 0 0 5.74 2.29V9.83a4.8 4.8 0 0 1-1.97-.84 4.75 4.75 0 0 1-1.62-2.3z"/>
          </svg>
        </a>
        <a href="https://chat.whatsapp.com/JFrvLw4KvAeG4HO6EUMSPo?s=cl&p=a&ilr=0&amv=2" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-500 transition-all duration-300 hover:scale-125" title="Join Community">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 0C5.39 0 0 5.402 0 12.044c0 2.116.547 4.192 1.586 6.012L0 24l6.12-1.61c1.765.966 3.753 1.48 5.799 1.48C18.57 23.87 24 18.468 24 11.82 24 5.18 18.57 0 12.031 0zm0 21.873c-1.9 0-3.75-.512-5.36-1.478l-.38-.22-3.64.954.97-3.543-.24-.384c-1.06-1.69-1.62-3.664-1.62-5.71C1.76 5.92 6.37 1.306 12.03 1.306c2.74 0 5.31 1.07 7.25 3.012a10.16 10.16 0 0 1 3.01 7.26c0 5.652-4.61 10.267-10.26 10.267zm5.55-7.59c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.36.23-.66.08-1.03-.52-1.81-.94-2.49-2.11-.27-.46.27-.43.77-1.43.08-.15.04-.28-.02-.38-.06-.1-.68-1.63-.93-2.23-.25-.59-.5-.51-.68-.52-.17-.01-.37-.01-.57-.01-.2 0-.52.08-.79.37-.27.3-1.03 1-1.03 2.44 0 1.44 1.05 2.83 1.2 3.03.15.2 2.06 3.15 5 4.41.7.3 1.24.48 1.66.61.71.22 1.35.19 1.85.12.56-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.08-.13-.28-.2-.58-.35z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/mr_saqib242" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-500 transition-all duration-300 hover:scale-125" title="Instagram">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
        </a>
        <a href="https://web.facebook.com/muhammad.saqib.718278" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-all duration-300 hover:scale-125" title="Facebook">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12-6.627 0-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
      </div>

      {/* HERO SECTION */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-10 md:py-20 pt-24 md:pt-32 z-10 flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[calc(100vh-80px)]">
        
        {/* Left Info Column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col items-start text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 font-bold tracking-[0.3em] text-[10px] uppercase mb-6 shadow-[0_0_15px_rgba(236,72,153,0.1)]">
            <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-pulse shrink-0" />
            WELCOME TO THE ELITE ARENA
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black uppercase italic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 mb-2 drop-shadow-md">
            SAQIB X EMAN
          </h2>
          
          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black uppercase italic leading-tight tracking-tight mb-4 drop-shadow-lg text-white">
            PBX <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 drop-shadow-[0_0_20px_rgba(236,72,153,0.3)]">GAMING</span>
          </h1>
          
          <h3 className="text-sm sm:text-base font-black tracking-[0.4em] text-pink-400 uppercase italic mb-6">
            • PLAY. COMPETE. WIN. REPEAT.
          </h3>
          
          <p className="text-slate-400 text-sm md:text-base max-w-lg leading-relaxed mb-10 font-medium">
            PBX Gaming is more than a name, it's a family. Join us, compete in elite tournaments, verify team statistics with our advanced custom security tools, and become a true esports legend.
          </p>
          
          <div className="flex flex-col gap-6 w-full max-w-xl">
            {/* Primary Action Row */}
            <div className="flex flex-wrap items-center gap-4 w-full">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2, boxShadow: "0 15px 30px rgba(236,72,153,0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/home')}
                className="flex-1 min-w-[160px] flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white py-4 px-6 rounded-2xl font-black text-xs uppercase tracking-widest transition-all cursor-pointer shadow-[0_0_25px_rgba(236,72,153,0.3)] border border-white/15"
              >
                <Trophy className="w-4.5 h-4.5 text-white animate-bounce" />
                Join Match
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05, y: -2, borderColor: "rgba(236,72,153,0.6)", boxShadow: "0 15px 30px rgba(147,51,234,0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/proxy-panels')}
                className="flex-1 min-w-[160px] flex items-center justify-center gap-3 bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 text-slate-100 hover:text-white py-4 px-6 rounded-2xl font-black text-xs uppercase tracking-widest transition-all cursor-pointer"
              >
                <Shield className="w-4.5 h-4.5 text-pink-500" />
                Proxy Panels
              </motion.button>
            </div>

            {/* Grid of Secondary Actions */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.03)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/portal')}
                className="flex items-center justify-center gap-2 border border-white/5 bg-white/[0.01] hover:border-pink-500/30 text-[10px] font-bold uppercase tracking-widest py-3 px-4 rounded-xl transition-all text-slate-300 hover:text-white cursor-pointer"
              >
                <Users className="w-3.5 h-3.5 text-pink-500" />
                Join Team / Portal
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.03)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/team')}
                className="flex items-center justify-center gap-2 border border-white/5 bg-white/[0.01] hover:border-pink-500/30 text-[10px] font-bold uppercase tracking-widest py-3 px-4 rounded-xl transition-all text-slate-300 hover:text-white cursor-pointer"
              >
                <Users className="w-3.5 h-3.5 text-purple-500" />
                Our Team
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.03)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/sensitivity-hub')}
                className="flex items-center justify-center gap-2 border border-white/5 bg-white/[0.01] hover:border-pink-500/30 text-[10px] font-bold uppercase tracking-widest py-3 px-4 rounded-xl transition-all text-slate-300 hover:text-white cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-fuchsia-500" />
                Sensitivity Hub
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.03)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => window.open("https://chat.whatsapp.com/JFrvLw4KvAeG4HO6EUMSPo?s=cl&p=a&ilr=0&amv=2", "_blank")}
                className="flex items-center justify-center gap-2 border border-white/5 bg-white/[0.01] hover:border-green-500/30 text-[10px] font-bold uppercase tracking-widest py-3 px-4 rounded-xl transition-all text-slate-300 hover:text-white cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-green-500" />
                Join Community
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(239,68,68,0.3)", borderColor: "rgba(239,68,68,0.5)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => window.open("https://mrsaqib242.vercel.app", "_blank")}
                className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2 border border-red-500/20 bg-red-950/10 hover:bg-red-950/20 text-[10px] font-black uppercase tracking-widest py-3 px-4 rounded-xl transition-all text-red-400 hover:text-red-300 cursor-pointer shadow-[0_0_10px_rgba(239,68,68,0.05)]"
              >
                <span className="animate-pulse">💀</span>
                Explore Hacks
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Right Graphic Column (Featuring generated female character portrait) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 flex flex-col items-center justify-center relative group"
        >
          {/* Decorative Glow Ring behind image */}
          <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-pink-500/20 via-purple-500/10 to-transparent blur-[85px] pointer-events-none -z-10 group-hover:scale-110 transition-transform duration-1000"></div>
          
          <motion.div
            animate={{ 
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[3/4] rounded-3xl p-[2px] bg-gradient-to-b from-pink-500/40 via-purple-500/20 to-transparent shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            {/* Glossy hover shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 -translate-x-full group-hover:translate-x-full z-10"></div>
            
            <div className="w-full h-full rounded-[22px] overflow-hidden bg-gradient-to-b from-[#1c122e] via-[#0d091a] to-[#050508] relative flex items-center justify-center">
              <img 
                src="https://ik.imagekit.io/19imy4f1u/lite_1783173372427_dx9NfRm3S.webp" 
                alt="PBX Mystique Hero Mascot" 
                className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-700 brightness-110 contrast-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay with subtle cyber scan lines and gradient card shade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-black/25 pointer-events-none z-10"></div>
              
              {/* Bottom decorative stats pill tag inside image */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-black/60 border border-white/10 p-4.5 rounded-2xl z-20 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-black text-sm uppercase tracking-wide">PBX MYSTIQUE HERO</h4>
                  <p className="text-[9px] text-pink-400 font-bold uppercase tracking-widest mt-0.5">Ultimate Battle Royale Mascot</p>
                </div>
                <div className="w-9 h-9 rounded-xl bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-400 shadow-[0_0_10px_rgba(236,72,153,0.3)]">
                  <Gamepad2 className="w-4 h-4 text-pink-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* WHY CHOOSE PBX SECTION */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-20 z-10 border-t border-white/5">
        
        {/* Section Heading */}
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic tracking-wider text-white uppercase inline-block relative z-10">
            WHY CHOOSE <span className="text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.4)]">PBX?</span>
          </h2>
          <div className="flex justify-center items-center gap-2 mt-3 text-pink-500 font-bold text-[10px] tracking-[0.5em] uppercase">
            <span className="w-8 h-[1px] bg-pink-500/50"></span>
            PBX Gaming Values
            <span className="w-8 h-[1px] bg-pink-500/50"></span>
          </div>
        </div>

        {/* Bento Grid Features Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          
          {/* Card 1: Daily Tournaments */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6, borderColor: "rgba(236,72,153,0.4)", boxShadow: "0 15px 35px -5px rgba(236,72,153,0.15)" }}
            className="group relative rounded-2xl sm:rounded-3xl p-4 sm:p-8 bg-[#090910]/80 backdrop-blur-md border border-white/5 overflow-hidden transition-all duration-300 flex flex-col items-start"
          >
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-4 sm:mb-6 text-pink-400 group-hover:scale-110 group-hover:border-pink-500/40 transition-all duration-300 shadow-inner">
              <Trophy className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-pink-400" />
            </div>
            <h3 className="text-white font-black text-xs sm:text-lg uppercase tracking-wide mb-2 sm:mb-3">Daily Tournaments</h3>
            <p className="text-slate-400 text-[10px] sm:text-xs leading-relaxed font-medium">
              Join daily tournaments, complete standard rooms and show off your tactical battle royale skills against elite players.
            </p>
          </motion.div>

          {/* Card 2: Strong Community */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6, borderColor: "rgba(147,51,234,0.4)", boxShadow: "0 15px 35px -5px rgba(147,51,234,0.15)" }}
            className="group relative rounded-2xl sm:rounded-3xl p-4 sm:p-8 bg-[#090910]/80 backdrop-blur-md border border-white/5 overflow-hidden transition-all duration-300 flex flex-col items-start"
          >
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 sm:mb-6 text-purple-400 group-hover:scale-110 group-hover:border-purple-500/40 transition-all duration-300">
              <Users className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-purple-400" />
            </div>
            <h3 className="text-white font-black text-xs sm:text-lg uppercase tracking-wide mb-2 sm:mb-3">Strong Community</h3>
            <p className="text-slate-400 text-[10px] sm:text-xs leading-relaxed font-medium">
              Be a proud, active member of our friendly, massive and helpful competitive gaming family, collaborating every day.
            </p>
          </motion.div>

          {/* Card 3: Exciting Rewards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -6, borderColor: "rgba(236,72,153,0.4)", boxShadow: "0 15px 35px -5px rgba(236,72,153,0.15)" }}
            className="group relative rounded-2xl sm:rounded-3xl p-4 sm:p-8 bg-[#090910]/80 backdrop-blur-md border border-white/5 overflow-hidden transition-all duration-300 flex flex-col items-start"
          >
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center mb-4 sm:mb-6 text-fuchsia-400 group-hover:scale-110 group-hover:border-fuchsia-500/40 transition-all duration-300">
              <Gift className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-fuchsia-400" />
            </div>
            <h3 className="text-white font-black text-xs sm:text-lg uppercase tracking-wide mb-2 sm:mb-3">Exciting Rewards</h3>
            <p className="text-slate-400 text-[10px] sm:text-xs leading-relaxed font-medium">
              Win heavy diamonds, secure real cash awards, weekly bundles and amazing seasonal prizes inside verified rooms.
            </p>
          </motion.div>

          {/* Card 4: Fair Play */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -6, borderColor: "rgba(99,102,241,0.4)", boxShadow: "0 15px 35px -5px rgba(99,102,241,0.15)" }}
            className="group relative rounded-2xl sm:rounded-3xl p-4 sm:p-8 bg-[#090910]/80 backdrop-blur-md border border-white/5 overflow-hidden transition-all duration-300 flex flex-col items-start"
          >
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 sm:mb-6 text-indigo-400 group-hover:scale-110 group-hover:border-indigo-500/40 transition-all duration-300">
              <Shield className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-indigo-400" />
            </div>
            <h3 className="text-white font-black text-xs sm:text-lg uppercase tracking-wide mb-2 sm:mb-3">Fair Play</h3>
            <p className="text-slate-400 text-[10px] sm:text-xs leading-relaxed font-medium">
              We maintain a 100% hacker-free, fair-play and strict anti-cheat tournament environment verified by UID records.
            </p>
          </motion.div>

        </div>
      </section>

      {/* UPCOMING TOURNAMENTS SECTION */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-20 z-10 border-t border-white/5">
        
        {/* Title Header with View All Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16">
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic tracking-wider text-white uppercase">
              UPCOMING <span className="text-pink-500">TOURNAMENTS</span>
            </h2>
            <p className="text-slate-500 text-xs tracking-widest uppercase mt-2">Active Battle Royale Custom Rooms</p>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(236,72,153,0.1)", borderColor: "rgba(236,72,153,0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/home')}
            className="self-start sm:self-center border border-white/10 bg-white/[0.02] text-xs font-black uppercase tracking-widest py-3.5 px-7 rounded-xl flex items-center gap-2 transition-all hover:text-pink-400 cursor-pointer"
          >
            View All Rooms
            <ChevronRight className="w-4 h-4 text-pink-500" />
          </motion.button>
        </div>

        {/* 3 Tournaments Card Grid */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-8">
          {loadingTournaments ? (
            Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="w-[calc(50%-6px)] md:w-[calc(33.333%-22px)] min-w-[145px] max-w-sm rounded-2xl sm:rounded-3xl bg-[#090910]/80 backdrop-blur-md border border-white/5 overflow-hidden p-4 animate-pulse h-64 flex flex-col justify-between">
                <div className="w-full h-32 bg-white/5 rounded-xl"></div>
                <div className="h-4 bg-white/5 rounded w-1/3 mt-2"></div>
                <div className="h-6 bg-white/5 rounded w-2/3 mt-2"></div>
                <div className="h-10 bg-white/5 rounded w-full mt-4"></div>
              </div>
            ))
          ) : tournaments.length > 0 ? (
            tournaments.slice(0, 3).map((tour, index) => {
              const isSquad = tour.type?.toLowerCase().includes("squad") || tour.title?.toLowerCase().includes("squad");
              const isDuo = tour.type?.toLowerCase().includes("duo") || tour.title?.toLowerCase().includes("duo");
              const typeLabel = tour.type || (isSquad ? "Squad War" : isDuo ? "Duo Match" : "Solo Match");
              
              const borderStyle = isSquad 
                ? "border-pink-500/20 shadow-[0_0_15px_rgba(236,72,153,0.05)]" 
                : "border-white/5";
              const badgeStyle = isSquad
                ? "bg-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.4)] animate-pulse"
                : isDuo
                ? "bg-indigo-600/90 border border-indigo-400/30"
                : "bg-purple-600/90 border border-purple-400/30";
              const btnStyle = isSquad
                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:brightness-110"
                : "bg-white/[0.03] group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600 border border-white/10 group-hover:border-transparent group-hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]";

              return (
                <motion.div 
                  key={tour.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6, boxShadow: isSquad ? "0 15px 30px rgba(236,72,153,0.15)" : "0 15px 30px rgba(0,0,0,0.5)" }}
                  className={`w-[calc(50%-6px)] md:w-[calc(33.333%-22px)] min-w-[145px] max-w-sm group rounded-2xl sm:rounded-3xl bg-[#090910]/80 backdrop-blur-md border ${borderStyle} overflow-hidden transition-all duration-300 relative flex flex-col`}
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                    <img 
                      src={tour.banner_url || "https://ik.imagekit.io/shaban/SHABAN-1768843573796_wWUQgJ0Uo.jpg"} 
                      alt={tour.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 brightness-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090910] via-transparent to-black/30"></div>
                    <div className={`absolute top-2 left-2 sm:top-4 sm:left-4 text-white font-black text-[7px] sm:text-[9px] uppercase tracking-widest px-1.5 py-0.5 sm:px-3 sm:py-1.5 rounded-full shadow-md ${badgeStyle}`}>
                      {typeLabel}
                    </div>
                  </div>

                  <div className="p-3 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[8px] sm:text-[10px] text-pink-400 font-bold tracking-widest uppercase">FREE FIRE</span>
                      <h3 className="text-white font-black text-xs sm:text-xl uppercase tracking-wide mt-0.5 mb-2 sm:mb-6 group-hover:text-pink-400 transition-colors line-clamp-1">{tour.title}</h3>
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate('/home')}
                      className={`w-full py-2.5 sm:py-4 rounded-lg sm:rounded-xl font-black text-[8px] sm:text-[10px] uppercase tracking-widest transition-all mt-2 text-center cursor-pointer ${btnStyle}`}
                    >
                      Join Now
                    </motion.button>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <>
              {/* Card 1: Solo Cup */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -6, boxShadow: "0 15px 30px rgba(0,0,0,0.5)" }}
                className="w-[calc(50%-6px)] md:w-[calc(33.333%-22px)] min-w-[145px] max-w-sm group rounded-2xl sm:rounded-3xl bg-[#090910]/80 backdrop-blur-md border border-white/5 overflow-hidden transition-all duration-300 relative flex flex-col"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                  <img 
                    src="https://ik.imagekit.io/19imy4f1u/lite_1783173372427_dx9NfRm3S.webp" 
                    alt="PBX Solo Cup" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090910] via-transparent to-black/30"></div>
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-purple-600/90 text-white font-black text-[7px] sm:text-[9px] uppercase tracking-widest px-1.5 py-0.5 sm:px-3 sm:py-1.5 rounded-full border border-purple-400/30 shadow-md">
                    Solo Match
                  </div>
                </div>
                <div className="p-3 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[8px] sm:text-[10px] text-pink-400 font-bold tracking-widest uppercase">FREE FIRE</span>
                    <h3 className="text-white font-black text-xs sm:text-xl uppercase tracking-wide mt-0.5 mb-2 sm:mb-6 group-hover:text-pink-400 transition-colors line-clamp-1">PBX Solo Cup</h3>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate('/home')}
                    className="w-full py-2.5 sm:py-3.5 bg-white/[0.03] group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600 rounded-lg sm:rounded-xl font-black text-[8px] sm:text-[10px] uppercase tracking-widest border border-white/10 group-hover:border-transparent group-hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all mt-2 text-center cursor-pointer"
                  >
                    Join Now
                  </motion.button>
                </div>
              </motion.div>

              {/* Card 2: Squad Battle */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -6, boxShadow: "0 15px 30px rgba(236,72,153,0.15)" }}
                className="w-[calc(50%-6px)] md:w-[calc(33.333%-22px)] min-w-[145px] max-w-sm group rounded-2xl sm:rounded-3xl bg-[#090910]/80 backdrop-blur-md border border-pink-500/20 overflow-hidden transition-all duration-300 relative flex flex-col shadow-[0_0_15px_rgba(236,72,153,0.05)]"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                  <img 
                    src="https://ik.imagekit.io/19imy4f1u/lite_1783173372427_dx9NfRm3S.webp" 
                    alt="PBX Squad Battle" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 brightness-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090910] via-pink-950/10 to-black/30"></div>
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-pink-500 text-white font-black text-[7px] sm:text-[9px] uppercase tracking-widest px-1.5 py-0.5 sm:px-3 sm:py-1.5 rounded-full border border-pink-400/30 shadow-[0_0_15px_rgba(236,72,153,0.4)] animate-pulse">
                    Squad War
                  </div>
                </div>
                <div className="p-3 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[8px] sm:text-[10px] text-pink-400 font-bold tracking-widest uppercase">FREE FIRE</span>
                    <h3 className="text-white font-black text-xs sm:text-xl uppercase tracking-wide mt-0.5 mb-2 sm:mb-6 group-hover:text-pink-400 transition-colors line-clamp-1">PBX Squad Battle</h3>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate('/home')}
                    className="w-full py-2.5 sm:py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg sm:rounded-xl font-black text-[8px] sm:text-[10px] uppercase tracking-widest shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:brightness-110 transition-all mt-2 text-center cursor-pointer"
                  >
                    Join Now
                  </motion.button>
                </div>
              </motion.div>

              {/* Card 3: Duo Cup */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -6, boxShadow: "0 15px 30px rgba(0,0,0,0.5)" }}
                className="w-[calc(100%-12px)] md:w-[calc(33.333%-22px)] min-w-[145px] max-w-sm group rounded-2xl sm:rounded-3xl bg-[#090910]/80 backdrop-blur-md border border-white/5 overflow-hidden transition-all duration-300 relative flex flex-col"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                  <img 
                    src="https://ik.imagekit.io/19imy4f1u/lite_1783173372427_dx9NfRm3S.webp" 
                    alt="PBX Duo Cup" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090910] via-transparent to-black/30"></div>
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-indigo-600/90 text-white font-black text-[7px] sm:text-[9px] uppercase tracking-widest px-1.5 py-0.5 sm:px-3 sm:py-1.5 rounded-full border border-indigo-400/30 shadow-md">
                    Duo Match
                  </div>
                </div>
                <div className="p-3 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[8px] sm:text-[10px] text-pink-400 font-bold tracking-widest uppercase">FREE FIRE</span>
                    <h3 className="text-white font-black text-xs sm:text-xl uppercase tracking-wide mt-0.5 mb-2 sm:mb-6 group-hover:text-pink-400 transition-colors line-clamp-1">PBX Duo Cup</h3>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate('/home')}
                    className="w-full py-2.5 sm:py-3.5 bg-white/[0.03] group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600 rounded-lg sm:rounded-xl font-black text-[8px] sm:text-[10px] uppercase tracking-widest border border-white/10 group-hover:border-transparent group-hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all mt-2 text-center cursor-pointer"
                  >
                    Join Now
                  </motion.button>
                </div>
              </motion.div>
            </>
          )}

        </div>
      </section>

      {/* PBX MYSTIQUE SPOTLIGHT SECTION */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-24 z-10 border-t border-white/5 overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-pink-500/10 blur-[130px] rounded-full pointer-events-none -z-10 -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[130px] rounded-full pointer-events-none -z-10 -translate-y-1/2"></div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left: Graphic Character Image Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative flex justify-center items-center group"
          >
            {/* Ambient character glow base */}
            <div className="absolute w-[80%] h-[80%] bg-gradient-to-tr from-pink-500/20 via-purple-500/15 to-transparent rounded-full blur-[70px] pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>
            
            {/* Character image wrapper with hover float and high contrast drop shadow */}
            <motion.div
              animate={{ 
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-[3/4] flex items-center justify-center filter drop-shadow-[0_15px_30px_rgba(236,72,153,0.25)]"
            >
              <img 
                src="https://i.ibb.co/ksZy53Lr/image.webp" 
                alt="PBX Mystique Hero Mascot" 
                className="w-full h-full object-contain brightness-110 contrast-105 select-none"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlaying mini badge tag */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-md border border-pink-500/30 px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_4px_20px_rgba(236,72,153,0.3)] shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
                <span className="text-[9px] uppercase tracking-[0.25em] font-black text-white whitespace-nowrap">PBX OFFICIAL MASCOT</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Text Contents & Key Highlights Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col gap-8 text-left"
          >
            <div>
              <span className="text-pink-500 font-black text-xs uppercase tracking-[0.3em] mb-3 block">
                # PBX LEGENDARY MASCOT
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic text-white uppercase leading-tight mb-6">
                MEET THE MYSTIQUE<br />
                HERO OF <span className="text-pink-500 drop-shadow-[0_0_12px_rgba(236,72,153,0.4)]">PBX ESPORTS</span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xl font-medium">
                The ultimate symbol of focus, precision, and grace on the battlefields. Designed exclusively to embody the spirit of the PBX Gaming clan, our Mystique Mascot represents the fearless competitive drive of our entire community and the shining guidance of our founder.
              </p>
            </div>

            {/* Highlights List */}
            <div className="flex flex-col gap-5 max-w-lg">
              
              <div className="flex gap-4 p-4 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 transition-all">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                  <Gamepad2 className="w-4 h-4 text-pink-400" />
                </div>
                <div>
                  <h4 className="text-white font-black text-sm uppercase tracking-wide">Elite Vanguard Aura</h4>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">Inspiring top players to enter custom rooms and show unmatched battle royale skills with high-level coordination.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 transition-all">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-black text-sm uppercase tracking-wide">Butterfly of Precision</h4>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">Representing the signature high-accuracy pro sensitivity hubs and perfect custom setups created for our clan.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 transition-all">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400">
                  <Trophy className="w-4 h-4 text-fuchsia-400" />
                </div>
                <div>
                  <h4 className="text-white font-black text-sm uppercase tracking-wide">Champions Legacy</h4>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">Leading our gaming family to continuous tournament sweeps and magnificent diamond distributions.</p>
                </div>
              </div>

            </div>

            {/* Direct action buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <motion.button
                whileHover={{ scale: 1.05, shadow: "0 0 20px rgba(236, 72, 153, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/home')}
                className="px-8 py-4 btn-gradient text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all cursor-pointer"
              >
                Join Active Tournaments
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById("about");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-4 bg-white/[0.01] hover:bg-white/[0.03] border border-white/10 text-slate-300 hover:text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all cursor-pointer"
              >
                Learn About PBX
              </motion.button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ABOUT PBX GAMING SECTION */}
      <section id="about" className="relative w-full max-w-7xl mx-auto px-6 py-20 z-10 border-t border-white/5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left: Graphic Logo Banner */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative flex justify-center"
          >
            {/* Visual element representing stylized logo splash inside dark paint box */}
            <div className="relative w-full max-w-[450px] aspect-square rounded-3xl overflow-hidden p-[1px] bg-gradient-to-tr from-pink-500/30 to-purple-600/30 shadow-[0_0_50px_rgba(236,72,153,0.15)] group">
              <div className="w-full h-full rounded-[23px] bg-[#07070d]/90 backdrop-blur-md relative flex items-center justify-center overflow-hidden">
                <img 
                  src="https://ik.imagekit.io/19imy4f1u/lite_1783235123566_YdNOEI7su.webp" 
                  alt="PBX GAMING" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Info Contents & Statistics List */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col gap-8 text-left"
          >
            <div>
              <span className="text-pink-500 font-black text-xs uppercase tracking-[0.3em] mb-3 block">
                # ABOUT PBX GAMING
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic text-white uppercase leading-tight mb-6">
                WE ARE NOT JUST A TEAM,<br />
                WE ARE A <span className="text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.3)]">FAMILY.</span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xl font-medium">
                PBX Gaming was created with a burning passion and a core mission to support mobile esports players, organize competitive and secure custom tournaments, provide pro sensitivity setups, and build a positive, flourishing community for gamers worldwide.
              </p>
            </div>

            {/* Signature sign-off from reference image */}
            <div className="py-2 border-b border-white/5 pb-6">
              <span className="text-pink-400 font-bold text-xs uppercase tracking-widest block mb-2 font-mono">Founder & Organizer</span>
              <span className="text-3xl sm:text-4xl text-pink-500 tracking-wider font-extrabold italic select-none block drop-shadow-[0_0_8px_#ec4899]" style={{ fontFamily: "Georgia, serif" }}>
                PBX Queen ♡
              </span>
            </div>

            {/* Column of stats list shown on right side of image */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
              
              {/* Stat 1 */}
              <div className="flex items-center gap-4 bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 p-4 rounded-2xl transition-all">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                  <Users className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <h4 className="text-white font-black text-xl tracking-tight leading-none">1.2K+</h4>
                  <p className="text-[9px] text-slate-500 font-black uppercase tracking-wider mt-1">Community Members</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-4 bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 p-4 rounded-2xl transition-all">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Trophy className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-black text-xl tracking-tight leading-none">250+</h4>
                  <p className="text-[9px] text-slate-500 font-black uppercase tracking-wider mt-1">Tournaments Completed</p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-4 bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 p-4 rounded-2xl transition-all">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400">
                  <Gamepad2 className="w-5 h-5 text-fuchsia-400" />
                </div>
                <div>
                  <h4 className="text-white font-black text-xl tracking-tight leading-none">5K+</h4>
                  <p className="text-[9px] text-slate-500 font-black uppercase tracking-wider mt-1">Players Registered</p>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex items-center gap-4 bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 p-4 rounded-2xl transition-all">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Gift className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-white font-black text-xl tracking-tight leading-none">10K+</h4>
                  <p className="text-[9px] text-slate-500 font-black uppercase tracking-wider mt-1">Diamonds Distributed</p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* PBX OFFICIAL COMMUNITY & RULES SECTION */}
      <section className="py-24 relative overflow-hidden bg-black/40">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Community Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-pink-500" />
                </div>
                <h2 className="bebas text-4xl md:text-5xl tracking-widest text-white italic">
                  👑 PBX OFFICIAL COMMUNITY
                </h2>
              </div>
              
              <p className="text-lg text-slate-300 font-bold mb-8 leading-relaxed">
                🎮 Welcome to the Official PBX Gaming Community! This is the official place for Free Fire players, gamers, creators, and the PBX family.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0 mt-1">
                    <Trophy className="w-3 h-3 text-pink-400" />
                  </div>
                  <p className="text-slate-400 text-sm font-semibold">🏆 Free Fire Tournament Updates & Announcements</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-1">
                    <Gift className="w-3 h-3 text-purple-400" />
                  </div>
                  <p className="text-slate-400 text-sm font-semibold">🎁 Giveaways, Events & Friendly Gaming Community</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 mt-1">
                    <MessageSquare className="w-3 h-3 text-cyan-400" />
                  </div>
                  <p className="text-slate-400 text-sm font-semibold">💬 Chat, Make Friends & Grow Together</p>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/5 p-8 rounded-[2rem] backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
                  <span className="text-white font-black text-xs uppercase tracking-widest">Founders</span>
                </div>
                <h3 className="bebas text-2xl text-white tracking-widest mb-4">👑 Eman & Saqib</h3>
                <div className="flex items-center gap-3 text-slate-400 hover:text-pink-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:Pbxgamingofficial2@gmail.com" className="text-xs font-black uppercase tracking-widest">
                    Pbxgamingofficial2@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Rules */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-500/5 to-purple-500/5 border border-white/5 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 blur-[100px] rounded-full pointer-events-none"></div>
              
              <div className="flex items-center gap-3 mb-8">
                <Shield className="w-6 h-6 text-pink-500" />
                <h3 className="bebas text-3xl md:text-4xl tracking-widest text-white italic">
                  📜 COMMUNITY RULES
                </h3>
              </div>

              <div className="space-y-6 relative z-10">
                {[
                  { text: "Respect all members at all times.", color: "text-green-400" },
                  { text: "Keep chats friendly and positive.", color: "text-green-400" },
                  { text: "No spam or advertising.", color: "text-red-400" },
                  { text: "No abusive language or hate speech.", color: "text-red-400" },
                  { text: "No unnecessary links or promotions.", color: "text-red-400" }
                ].map((rule, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-black/20 p-4 rounded-2xl border border-white/5">
                    <CheckCircle2 className={`w-5 h-5 ${rule.color.replace('text-', 'text-opacity-70 text-')}`} />
                    <p className="text-white font-bold text-xs md:text-sm tracking-wide uppercase">
                      {rule.text}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-10 text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 italic">
                Stay active, support each other, and enjoy the community! ❤️
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* PREMIUM CYBER FOOTER */}
      <footer className="w-full relative z-10 bg-black/80 border-t border-white/5 pt-16 pb-12 backdrop-blur-md overflow-hidden">
        
        {/* Top visual divider glow */}
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[80%] h-96 bg-pink-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        {/* Multi-column grid */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 pb-12 border-b border-white/5">
          
          {/* Column 1: Brand & Desc */}
          <div className="flex flex-col items-start gap-4 text-left">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
              <div className="w-10 h-10 rounded-full overflow-hidden border border-pink-500/40 shadow-md flex items-center justify-center bg-black">
                <img 
                  src="https://i.ibb.co/995yZVyL/image.webp" 
                  alt="PBX Royal Family Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xl font-black tracking-widest uppercase italic bg-gradient-to-r from-white to-pink-500 bg-clip-text text-transparent">
                PBX <span className="text-pink-500">GAMING</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed font-semibold max-w-sm">
              Shaping the future of mobile custom tournament esports by delivering high-tier security portals, real-time match tracking, and legendary custom room rewards.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-start gap-4 text-left">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-1">Quick Links</h4>
            <div className="flex flex-col gap-2.5 text-xs font-bold tracking-widest uppercase text-slate-400">
              <span onClick={() => navigate('/')} className="hover:text-pink-400 transition-colors cursor-pointer">Home</span>
              <a href="#about" className="hover:text-pink-400 transition-colors">About PBX</a>
              <span onClick={() => navigate('/home')} className="hover:text-pink-400 transition-colors cursor-pointer">Tournaments</span>
              <span onClick={() => navigate('/proxy-panels')} className="hover:text-pink-400 transition-colors cursor-pointer">VIP Proxy</span>
              <span onClick={() => navigate('/team')} className="hover:text-pink-400 transition-colors cursor-pointer">Meet Team</span>
            </div>
          </div>

          {/* Column 3: Social follow us buttons as glossy circles */}
          <div className="flex flex-col items-start gap-4 text-left">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-1">Follow Us</h4>
            
            <div className="flex flex-wrap gap-4">
              
              {/* WhatsApp - Glossy 3D App Icon Style */}
              <motion.a 
                whileHover={{ scale: 1.12, y: -4, rotate: -2 }}
                whileTap={{ scale: 0.92 }}
                href="https://wa.me/923478936242" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-11 h-11 rounded-xl flex items-center justify-center transition-all border border-white/20 bg-gradient-to-b from-[#2be673] to-[#1cb854] text-white shadow-md cursor-pointer group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/35 pointer-events-none z-20 group-hover:left-[100%] transition-all duration-1000 ease-out" style={{ left: '-100%', width: '200%' }} />
                <svg className="w-5 h-5 fill-white z-10 drop-shadow-[0_2px_5px_rgba(0,0,0,0.25)]" viewBox="0 0 24 24">
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
                className="relative w-11 h-11 rounded-xl flex items-center justify-center transition-all border border-white/20 bg-gradient-to-b from-[#242428] to-[#0a0a0c] text-white shadow-md cursor-pointer group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/30 pointer-events-none z-20 group-hover:left-[100%] transition-all duration-1000 ease-out" style={{ left: '-100%', width: '200%' }} />
                <svg className="w-5 h-5 text-white fill-current z-10 drop-shadow-[0_2px_5px_rgba(0,0,0,0.4)]" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .8.11V9.4a6.27 6.27 0 0 0-3.11.3 6.3 6.3 0 0 0-3.64 5.39 6.3 6.3 0 0 0 5.4 7.07 6.3 6.3 0 0 0 6.94-5.27V11a8.27 8.27 0 0 0 5.74 2.29V9.83a4.8 4.8 0 0 1-1.97-.84 4.75 4.75 0 0 1-1.62-2.3z"/>
                </svg>
              </motion.a>

              {/* Instagram - Sunset style */}
              <motion.a 
                whileHover={{ scale: 1.12, y: -4, rotate: -2 }}
                whileTap={{ scale: 0.92 }}
                href="https://www.instagram.com/mr_saqib242" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-11 h-11 rounded-xl flex items-center justify-center transition-all border border-white/20 bg-gradient-to-tr from-[#f9ce3f] via-[#e1306c] to-[#833ab4] text-white shadow-md cursor-pointer group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/35 pointer-events-none z-20 group-hover:left-[100%] transition-all duration-1000 ease-out" style={{ left: '-100%', width: '200%' }} />
                <svg className="w-5 h-5 fill-white z-10 drop-shadow-[0_2px_5px_rgba(0,0,0,0.25)]" viewBox="0 0 24 24">
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
                className="relative w-11 h-11 rounded-xl flex items-center justify-center transition-all border border-white/20 bg-gradient-to-b from-[#18acf8] to-[#1877F2] text-white shadow-md cursor-pointer group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/35 pointer-events-none z-20 group-hover:left-[100%] transition-all duration-1000 ease-out" style={{ left: '-100%', width: '200%' }} />
                <svg className="w-5 h-5 fill-white z-10 drop-shadow-[0_2px_5px_rgba(0,0,0,0.25)]" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12-6.627 0-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </motion.a>
              
            </div>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="flex flex-col items-start gap-4 text-left">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-1">Newsletter</h4>
            <p className="text-slate-400 text-xs font-semibold leading-relaxed">
              Stay ahead of the game. Subscribe to get immediate notifications of upcoming diamond room slots and updates!
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 w-full mt-2">
              <input 
                type="email" 
                placeholder="Enter Email" 
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                required
                className="bg-[#0c0c14] border border-white/5 rounded-xl px-4 py-3 text-xs font-bold text-white placeholder:text-slate-600 focus:outline-none focus:border-pink-500/40 w-full"
              />
              <button 
                type="submit"
                className="w-11 h-11 bg-pink-500 text-white rounded-xl flex items-center justify-center hover:bg-pink-400 transition-colors shrink-0"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </form>
            {newsletterStatus && (
              <p className="text-[10px] text-pink-400 font-bold tracking-wider mt-1">{newsletterStatus}</p>
            )}
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-[10px] text-slate-500 tracking-wider font-mono">
          <p>© 2026 PBX GAMING. ALL RIGHTS RESERVED.</p>
          <p className="flex items-center gap-2 mt-2 md:mt-0">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse"></span>
            SECURE PORTAL CORE V2.4.5 BY SAQIB
          </p>
        </div>
      </footer>

    </div>
  );
}
