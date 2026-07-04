import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { createClient } from '@supabase/supabase-js';
import useSEO from "../hooks/useSEO";

// Import additional components
import About from "./About";
import Contact from "./Contact";
import Help from "./Help";
import AddPop from "./AddPop";
import Owner from "./Owner";

export default function TournamentHome() {
  const navigate = useNavigate();
  useSEO({
    title: "Esports Arena | Es Freefire Arm - PBX Gaming Tournaments",
    description: "Explore ongoing and upcoming Free Fire tournaments organized by PBX GAMING & SAQIB X PBX GAMING. Register squads, check map details, slot distribution, rules, and win heavy cash prizes.",
    keywords: "pbx gaming, pbx esports, es freefire arm, free fire matches, register squad free fire, pbx gaming tournaments, free fire custom rooms, saqib esports tournament, saqib x pbx gaming",
    ogImage: "https://i.ibb.co/YB1R7TSF/image.webp"
  });

  const [settings, setSettings] = useState({
    name: "PBX GAMING",
    uid: "---",
    cover_url: "",
    profile_url: "",
    reg_status: "on"
  });
  const [tournaments, setTournaments] = useState([]);
  const [freeSeats, setFreeSeats] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showRegModal, setShowRegModal] = useState(false);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [pendingUrl, setPendingUrl] = useState("");
  const [activeSection, setActiveSection] = useState("tournaments");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Supabase Client
  const supabase = createClient(
    "https://psiypllbqopudppugaxe.supabase.co",
    "sb_publishable_PsL-7tSFu4EQU5ZHQgO6UA_Segl7g_e"
  );

  // Gaming Resources Data
  const gamingResources = [
    {
      id: 1,
      icon: "🎮",
      title: "FREE FIRE MOD APK",
      image: "https://ik.imagekit.io/shaban/SHABAN-1768758303706_3WkOuMoSi.jpg",
      description: "Get the latest modded version of Free Fire with premium unlocked features.",
      buttonText: "Get Mod APK",
      link: "https://mrsaqib242.vercel.app",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      icon: "🇬🇧",
      title: "UK MONETIZED ACCOUNT",
      image: "https://ik.imagekit.io/shaban/SHABAN-1768758331813_lq1xTnLv7.jpg",
      description: "Special accounts for TikTok/Social media monetization.",
      buttonText: "Get UK Account",
      link: "https://techai.zone.id/",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  // Initialize data
  useEffect(() => {
    syncData();
    const interval = setInterval(syncData, 10000);
    return () => clearInterval(interval);
  }, []);

  // Main data sync function
  const syncData = async () => {
    try {
      // Load settings
      const { data: settingsData } = await supabase
        .from('kashu_settings')
        .select('*')
        .eq('id', 1)
        .single();

      if (settingsData) {
        setSettings({
          name: settingsData.name || "PBX GAMING",
          uid: settingsData.uid || "---",
          cover_url: settingsData.cover_url || "",
          profile_url: settingsData.profile_url || "",
          reg_status: settingsData.reg_status || "on"
        });
      }

      // Calculate free seats
      const [{ data: auths }, { data: assigned }, { data: filled }] = await Promise.all([
        supabase.from('squad_auth').select('user_id'),
        supabase.from('payment_users').select('assigned_auth_id').eq('status', 'approved'),
        supabase.from('squad_registrations').select('auth_user_id')
      ]);

      const assignedIds = assigned ? assigned.map(a => a.assigned_auth_id) : [];
      const filledIds = filled ? filled.map(f => f.auth_user_id) : [];

      let freeCount = 0;
      if (auths) {
        auths.forEach(s => {
          if (!assignedIds.includes(s.user_id) && !filledIds.includes(s.user_id)) freeCount++;
        });
      }
      setFreeSeats(freeCount);

      // Load tournaments
      const { data: tours } = await supabase
        .from('kashu_tournaments')
        .select('*')
        .order('id', { ascending: true });

      setTournaments(tours || []);
      setLoading(false);
    } catch (error) {
      console.error("Error syncing data:", error);
      setLoading(false);
    }
  };

  // Handle registration button click
  const handleBtnClick = () => {
    if (settings.reg_status === "off") {
      setShowRegModal(true);
    } else if (freeSeats > 0) {
      setPendingUrl("/portal"); // Portal.jsx کا route
      setShowSubscribeModal(true);
    }
  };

  // Finish subscription and redirect
  const finishSub = () => {
    setTimeout(() => {
      window.location.href = pendingUrl; // Portal.jsx پر redirect
      setShowSubscribeModal(false);
    }, 1500);
  };

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl animate-pulse">Loading Tournament Portal...</div>
      </div>
    );
  }

  return (
    <>
      {/* Registration Modal */}
      {showRegModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[2000] flex items-center justify-center px-6 bg-black/90 backdrop-blur-sm"
        >
          <div className="glass max-w-sm w-full p-8 rounded-[2rem] text-center">
            <h3 className="bebas text-4xl mb-2 text-pink-500 italic">Registration Closed</h3>
            <p className="text-slate-400 text-sm mb-6">Abhi koi seats available nahi hain.</p>
            <button 
              onClick={() => setShowRegModal(false)}
              className="w-full bg-white/10 py-4 rounded-2xl font-bold hover:bg-white/20 transition-colors"
            >
              Theek hai
            </button>
          </div>
        </motion.div>
      )}

      {/* WhatsApp Join Modal */}
      {showSubscribeModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[2000] flex items-center justify-center px-6 bg-black/95 backdrop-blur-md"
        >
          <div className="glass max-w-sm w-full p-8 rounded-[2rem] border-green-500/30 text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412 0 6.556-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143l.346.206c1.554.923 3.35 1.41 5.187 1.411 5.399 0 9.792-4.393 9.795-9.792.001-2.618-1.02-5.08-2.876-6.937-1.856-1.856-4.318-2.877-6.936-2.878-5.4 0-9.792 4.393-9.795 9.793-.001 1.884.49 3.719 1.42 5.293l.226.383-.933 3.405 3.496-.917zm11.391-7.253c-.312-.156-1.848-.912-2.135-1.017-.286-.104-.494-.156-.703.156-.208.312-.807 1.017-.989 1.225-.182.208-.364.234-.676.078-.312-.156-1.318-.486-2.51-1.549-.927-.827-1.552-1.849-1.734-2.161-.182-.312-.019-.481.137-.636.141-.14.312-.364.468-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.703-1.693-.963-2.316-.252-.605-.51-.523-.703-.533-.182-.008-.39-.01-.598-.01s-.546.078-.832.39c-.286.312-1.094 1.069-1.094 2.604s1.12 3.018 1.276 3.227c.156.208 2.203 3.364 5.338 4.717.745.322 1.327.514 1.78.658.749.238 1.431.205 1.97.124.601-.09 1.848-.755 2.11-1.484.262-.729.262-1.354.184-1.484-.078-.13-.286-.208-.598-.364z"/>
              </svg>
            </div>
            <h3 className="bebas text-3xl mb-2 italic">WhatsApp Channel</h3>
            <p className="text-slate-400 text-xs mb-6 italic">Aage barhne ke liye WhatsApp channel join karna zaroori hai.</p>
            <a 
              href="https://whatsapp.com/channel/0029Vb8oiIrKGGGDehRhyJ18" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={finishSub}
              className="block w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-black uppercase tracking-widest text-sm mb-4 shadow-lg shadow-green-600/30 transition-colors"
            >
              Join Channel
            </a>
            <button 
              onClick={() => setShowSubscribeModal(false)}
              className="text-slate-500 text-[10px] uppercase font-bold underline hover:text-slate-400"
            >
              Mai ne pehle hi join kiya hai
            </button>
          </div>
        </motion.div>
      )}

      {/* Tournament Navbar */}
      <nav className="sticky top-0 z-50 bg-[#030303]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center group cursor-pointer"
              onClick={() => scrollToSection('tournaments')}
            >
              <div className="rgb-ring w-12 h-12 mr-4 group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={settings.profile_url || "https://i.ibb.co/995yZVyL/image.webp"} 
                  className="w-full h-full object-cover rounded-full border-2 border-black"
                  alt="Logo"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="bebas text-3xl text-white tracking-widest leading-none group-hover:text-pink-400 transition-colors hidden sm:block drop-shadow-md">PBX <span className="text-pink-500">GAMING</span></h1>
                <h1 className="bebas text-2xl text-white tracking-widest leading-none group-hover:text-pink-400 transition-colors sm:hidden">PBX <span className="text-pink-500">GAMING</span></h1>
                <span className="text-[9px] uppercase tracking-[0.3em] text-gray-500 font-bold hidden sm:block mt-1">Esports Portal</span>
              </div>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex gap-1 bg-white/5 p-1.5 rounded-2xl border border-white/5 backdrop-blur-md shadow-inner">
              {[
                { id: 'tournaments', label: 'Tournaments', icon: '🏆' },
                { id: 'about', label: 'About', icon: 'ℹ️' },
                { id: 'resources', label: 'Resources', icon: '🛠️' },
                { id: 'help', label: 'Help', icon: '❓' },
                { id: 'contact', label: 'Contact', icon: '📞' },
                { id: 'owner', label: 'Founder', icon: '👑' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 overflow-hidden ${
                    activeSection === item.id 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.div 
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 z-0 shadow-lg"
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="opacity-70 text-sm">{item.icon}</span>
                    {item.label}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => navigate("/")}
                className="flex items-center gap-1.5 border border-white/10 hover:border-pink-500/30 bg-white/5 hover:bg-pink-500/10 text-white hover:text-pink-400 px-3.5 py-2.5 rounded-sm text-xs font-black uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(236,72,153,0.1)]"
                style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}
              >
                ← Back Home
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden relative w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center overflow-hidden"
              >
                <div className="w-5 h-5 flex flex-col justify-center items-center gap-1.5">
                  <span className={`h-[2px] bg-pink-500 transition-all duration-300 w-full ${isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
                  <span className={`h-[2px] bg-pink-500 transition-all duration-300 w-full ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`h-[2px] bg-pink-500 transition-all duration-300 w-full ${isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden mt-4"
              >
                <div className="flex flex-col gap-2 p-3 bg-black/60 rounded-2xl border border-white/5 backdrop-blur-xl shadow-2xl">
                  {[
                    { id: 'tournaments', label: 'Tournaments', icon: '🏆' },
                    { id: 'about', label: 'About', icon: 'ℹ️' },
                    { id: 'resources', label: 'Resources', icon: '🛠️' },
                    { id: 'help', label: 'Help', icon: '❓' },
                    { id: 'contact', label: 'Contact', icon: '📞' },
                    { id: 'owner', label: 'Founder', icon: '👑' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`px-4 py-4 rounded-xl transition-all text-left flex items-center gap-4 text-sm font-bold uppercase tracking-widest ${
                        activeSection === item.id 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-[1.02]' 
                          : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span className="text-xl">{item.icon}</span>
                      {item.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Main Content */}
      <div className="min-h-screen bg-cyber-grid bg-fixed text-white overflow-x-hidden relative pb-24 md:pb-0">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-pink-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Hero Section */}
        <div className="relative w-full h-[250px] md:h-[450px] overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={settings.cover_url || "https://ik.imagekit.io/shaban/SHABAN-1768843573796_wWUQgJ0Uo.jpg"} 
            className="w-full h-full object-cover"
            alt="Cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent"></div>
        </div>

        {/* Hero Profile with UID */}
        <div className="relative -mt-24 md:-mt-32 flex flex-col items-center px-4 z-10">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="rgb-ring w-40 h-40 md:w-56 md:h-56 relative group translate-y-[10%]"
          >
            <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-xl group-hover:bg-pink-500/40 transition-all duration-500"></div>
            <img 
              src={settings.profile_url || "https://i.ibb.co/995yZVyL/image.webp"} 
              className="w-full h-full object-cover rounded-full border-4 border-[#030303] relative z-10"
              alt="Profile"
            />
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-pink-500 font-bold tracking-[0.5em] text-sm md:text-base uppercase mt-12 mb-2 drop-shadow-[0_0_10px_rgba(236,72,153,0.6)] animate-pulse text-center"
          >
            ★ Welcome to Tournament ★
          </motion.p>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bebas text-6xl md:text-9xl mt-2 text-transparent bg-clip-text bg-gradient-to-b from-white via-pink-200 to-pink-600 italic tracking-tighter text-center uppercase drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]"
          >
            {settings.name}
          </motion.h1>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-900/40 to-pink-900/40 px-8 py-3 rounded-full border border-pink-500/30 backdrop-blur-md mt-4 shadow-[0_0_30px_rgba(236,72,153,0.15)]"
          >
            <span className="font-mono font-bold text-pink-400 text-sm md:text-lg italic tracking-[0.2em] uppercase">
              Player UID <span className="text-white ml-2">{settings.uid}</span>
            </span>
          </motion.div>
        </div>

        {/* Tournament Sections */}
        <div id="tournaments" className="max-w-6xl mx-auto px-4 py-20 space-y-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="bebas text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 italic mb-4 drop-shadow-md">
              ACTIVE TOURNAMENTS
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto mb-4"></div>
            <p className="text-gray-400 uppercase tracking-widest text-sm md:text-base font-medium">Join the battle and prove your worth</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             {tournaments.map((tour, index) => {
              const isFull = freeSeats <= 0;
              const btnText = settings.reg_status === "off" ? "REGISTRATION CLOSED" : (isFull ? "MATCH FULL" : "REGISTER SQUAD NOW");
              const btnStyle = settings.reg_status === "off" || isFull 
                ? "bg-white/5 text-slate-500 cursor-not-allowed border border-white/10" 
                : "btn-gradient hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all cursor-pointer";

              return (
                <motion.div
                  key={tour.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ 
                    y: -10, 
                    borderColor: "rgba(236,72,153,0.5)",
                    boxShadow: "0 25px 50px -12px rgba(236,72,153,0.25)" 
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20,
                    y: { type: "spring", stiffness: 200, damping: 18 } 
                  }}
                  className="glass rounded-[2rem] overflow-hidden group border border-pink-500/20"
                >
                  <div className="tour-img-container">
                    <img 
                      src={tour.banner_url || "https://ik.imagekit.io/shaban/SHABAN-1768843573796_wWUQgJ0Uo.jpg"} 
                      className="tour-img-full" 
                      alt="Tournament Banner" 
                    />
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-pink-500/30 px-3 py-1 rounded-full flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-green-400">Live</span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 relative">
                    <div className="absolute top-0 right-8 -mt-6 bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-12 rounded-t-xl flex items-center justify-center shadow-lg transform -skew-x-12">
                      <span className="bebas text-2xl text-black transform skew-x-12 leading-none mt-1">4V4</span>
                    </div>
                    
                    <h2 className="bebas text-4xl md:text-5xl italic text-white mb-4 uppercase leading-none drop-shadow-md">
                      {tour.name || "Tournament"}
                    </h2>
                    
                    <div className="flex flex-wrap gap-3 mb-6">
                      <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                        <span className="text-pink-500 text-lg">⏰</span>
                        <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                          {tour.time || "Time TBD"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                        <span className="text-pink-500 text-lg">📅</span>
                        <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                          {tour.date || "Date TBD"}
                        </span>
                      </div>
                    </div>
                    
                    <div className="bg-black/50 p-5 rounded-2xl border border-white/5 text-sm text-gray-400 italic mb-8 whitespace-pre-line shadow-inner">
                      {tour.rules || "Official Tournament Rules Apply. Fair play is strictly monitored."}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-4 bg-pink-500/5 p-4 rounded-3xl border border-pink-500/20 backdrop-blur-sm">
                      <div className="text-center sm:text-left px-4 flex-1">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-pink-500/80 block mb-1">
                          Available Slots
                        </span>
                        <span className="bebas text-5xl text-white block leading-none drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                          {freeSeats}
                        </span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleBtnClick}
                        className={`w-full sm:w-auto flex-[2] py-4 px-6 rounded-2xl font-black text-xs md:text-sm tracking-widest uppercase shadow-lg ${btnStyle}`}
                        disabled={settings.reg_status === "off" || isFull}
                      >
                        {btnText}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Gaming Resources Section */}
        <div id="resources" className="max-w-6xl mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="bebas text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 italic mb-4 drop-shadow-md">
              GAMING RESOURCES
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto mb-4"></div>
            <p className="text-gray-400 uppercase tracking-widest text-sm md:text-base font-medium mb-8">
              Level up your gaming experience with these premium tools
            </p>
            
            {/* Premium Main Page Navigation Button */}
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 25px rgba(236,72,153,0.4)",
                borderColor: "rgba(236,72,153,0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-pink-500/10 via-purple-500/20 to-pink-500/10 hover:from-pink-500 hover:to-purple-500 hover:text-white text-pink-500 border border-pink-500/40 px-8 py-3 rounded-xl font-black text-xs uppercase tracking-[0.2em] transition-all cursor-pointer inline-flex items-center gap-2 shadow-[0_0_15px_rgba(236,72,153,0.15)]"
            >
              <span>←</span> GO TO MAIN WEBSITE <span>★</span>
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto justify-center">
            {gamingResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  y: -12, 
                  borderColor: "rgba(236,72,153,0.5)",
                  boxShadow: "0 30px 60px rgba(236,72,153,0.25)"
                }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="glass rounded-[2rem] overflow-hidden group border border-pink-500/10 relative flex flex-col justify-between"
              >
                <div>
                  <div className="h-64 md:h-80 overflow-hidden relative bg-black/40">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent z-10"></div>
                    <img 
                      src={resource.image} 
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 right-4 z-20 bg-black/85 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 text-xl shadow-lg">
                      {resource.icon}
                    </div>
                  </div>
                  <div className="p-8 pb-2 relative z-20 -mt-6">
                    <h3 className="bebas text-3xl text-white mb-2 tracking-wide group-hover:text-pink-500 transition-colors italic">
                      {resource.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm font-light leading-relaxed">
                      {resource.description}
                    </p>
                    
                    {/* Tutorial Link rendering */}
                    {resource.tutorialLink && (
                      <a 
                        href={resource.tutorialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-red-500 hover:text-red-400 font-bold tracking-wider uppercase mb-4"
                      >
                        🎥 Watch Tutorial Video →
                      </a>
                    )}

                    {/* Panels Links Rendering */}
                    {resource.panels && (
                      <div className="mt-2 mb-4 bg-black/50 border border-white/5 p-3 rounded-xl">
                        <span className="text-[9px] text-gray-500 uppercase tracking-widest font-black block mb-2">🔥 Active VIP Panels:</span>
                        <div className="grid grid-cols-1 gap-1.5 max-h-40 overflow-y-auto pr-1">
                          {resource.panels.map((panel, idx) => (
                            <a
                              key={idx}
                              href={panel.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block bg-white/5 hover:bg-pink-500/10 text-slate-300 hover:text-pink-400 border border-white/5 hover:border-pink-500/20 px-2 py-1.5 rounded-lg text-[10px] font-bold tracking-wider transition-all truncate"
                            >
                              🚀 {panel.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-8 pt-0 relative z-20">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center bg-gradient-to-r ${resource.color} text-white py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] shadow-lg hover:shadow-2xl transition-all cursor-pointer`}
                  >
                    {resource.buttonText}
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


         {/* AddPop Section */}
        <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
          <AddPop />
        </div>

        
        {/* About Section */}
        <div id="about" className="max-w-6xl mx-auto px-4 py-12 relative z-10">
          <About />
        </div>

        {/* Help Section */}
        <div id="help" className="max-w-6xl mx-auto px-4 py-12 relative z-10">
          <Help />
        </div>

        {/* Contact Section */}
        <div id="contact" className="max-w-6xl mx-auto px-4 py-12 relative z-10">
          <Contact />
        </div>

        {/* Owner Section */}
        <div id="owner" className="max-w-6xl mx-auto px-4 py-12 relative z-10">
          <Owner />
        </div>

        {/* Footer - WITHOUT LOGO SECTION */}
        <footer className="bg-black/80 backdrop-blur-md border-t border-pink-500/20 mt-20 relative z-10">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center">
              <h2 className="bebas text-3xl text-pink-500 mb-2 italic tracking-wider">PBX GAMING</h2>
              <p className="text-gray-400 text-sm mb-6 tracking-widest uppercase">
                Professional Free Fire Tournament Platform
              </p>
              
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent mx-auto mb-6"></div>
              
              <p className="text-gray-500 text-xs mb-8 uppercase tracking-wider font-bold">
                © {new Date().getFullYear()} PBX Gaming Official. All rights reserved.
              </p>

              {/* Creator Socials */}
              <div className="flex flex-wrap gap-5 justify-center items-center mb-8">
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
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .8.11V9.4a6.27 6.27 0 0 0-3.11.3 6.3 6.3 0 0 0-3.64 5.39 6.3 6.3 0 0 0 5.4 7.07 6.3 6.3 0 0 0 5.4 7.07 6.3 6.3 0 0 0 6.94-5.27V11a8.27 8.27 0 0 0 5.74 2.29V9.83a4.8 4.8 0 0 1-1.97-.84 4.75 4.75 0 0 1-1.62-2.3z"/>
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

              <div className="flex justify-center gap-6">
                <a href="#" className="text-gray-500 hover:text-pink-500 text-xs uppercase tracking-widest font-bold transition-colors">Terms</a>
                <a href="#" className="text-gray-500 hover:text-pink-500 text-xs uppercase tracking-widest font-bold transition-colors">Privacy</a>
                <a href="#" className="text-gray-500 hover:text-pink-500 text-xs uppercase tracking-widest font-bold transition-colors">Support</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
