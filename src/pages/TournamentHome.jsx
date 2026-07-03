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
    title: "Esports Arena | Es Freefire Arm - Active Custom Matches",
    description: "Explore ongoing and upcoming Free Fire tournaments at SAQIB X EMAN GAMING. Register squads, check map details, slot distribution, rules, and win heavy cash prizes.",
    keywords: "es freefire arm, free fire matches, register squad free fire, kachu army tournaments, free fire custom rooms, saqib esports tournament",
    ogImage: "https://ik.imagekit.io/19imy4f1u/lite_1783018940377_lyEV8GfaD.png"
  });

  const [settings, setSettings] = useState({
    name: "KACHU ARMY",
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
          name: settingsData.name || "KUASHU ARMY",
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
            <h3 className="bebas text-4xl mb-2 text-yellow-500 italic">Registration Closed</h3>
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

      {/* YouTube Subscribe Modal */}
      {showSubscribeModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[2000] flex items-center justify-center px-6 bg-black/95 backdrop-blur-md"
        >
          <div className="glass max-w-sm w-full p-8 rounded-[2rem] border-red-500/30 text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029 6.185.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </div>
            <h3 className="bebas text-3xl mb-2 italic">YouTube Subscribe</h3>
            <p className="text-slate-400 text-xs mb-6 italic">Aage barhne ke liye subscribe karna zaroori hai.</p>
            <a 
              href="https://www.youtube.com/@saqib242" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={finishSub}
              className="block w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-black uppercase tracking-widest text-sm mb-4 shadow-lg shadow-red-600/30 transition-colors"
            >
              Subscribe Now
            </a>
            <button 
              onClick={() => setShowSubscribeModal(false)}
              className="text-slate-500 text-[10px] uppercase font-bold underline hover:text-slate-400"
            >
              Mai ne pehle hi subscribe kiya hai
            </button>
          </div>
        </motion.div>
      )}

      {/* Tournament Navbar */}
      <nav className="sticky top-0 z-50 bg-[#030303]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
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
                  src={settings.profile_url || "https://ik.imagekit.io/shaban/SHABAN-1769057701316_BszrYcha1.jpg"} 
                  className="w-full h-full object-cover rounded-full border-2 border-black"
                  alt="Logo"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="bebas text-3xl text-white tracking-widest leading-none group-hover:text-yellow-400 transition-colors hidden sm:block drop-shadow-md">KACHU <span className="text-yellow-500">ARMY</span></h1>
                <h1 className="bebas text-2xl text-white tracking-widest leading-none group-hover:text-yellow-400 transition-colors sm:hidden">KACHU <span className="text-yellow-500">ARMY</span></h1>
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
                      ? 'text-black' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.div 
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 z-0 shadow-lg"
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
                className="flex items-center gap-1.5 border border-white/10 hover:border-yellow-500/30 bg-white/5 hover:bg-yellow-500/10 text-white hover:text-yellow-400 px-3.5 py-2.5 rounded-sm text-xs font-black uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(234,179,8,0.1)]"
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
                  <span className={`h-[2px] bg-yellow-500 transition-all duration-300 w-full ${isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
                  <span className={`h-[2px] bg-yellow-500 transition-all duration-300 w-full ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`h-[2px] bg-yellow-500 transition-all duration-300 w-full ${isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
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
                          ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black shadow-lg scale-[1.02]' 
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
      <div className="min-h-screen bg-cyber-grid bg-fixed text-white overflow-x-hidden relative">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-yellow-500/10 blur-[120px] rounded-full pointer-events-none"></div>

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
            className="rgb-ring w-40 h-40 md:w-56 md:h-56 relative group"
          >
            <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl group-hover:bg-yellow-500/40 transition-all duration-500"></div>
            <img 
              src={settings.profile_url || "https://ik.imagekit.io/shaban/SHABAN-1769057701316_BszrYcha1.jpg"} 
              className="w-full h-full object-cover rounded-full border-4 border-[#030303] relative z-10"
              alt="Profile"
            />
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bebas text-6xl md:text-9xl mt-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-yellow-200 to-yellow-600 italic tracking-tighter text-center uppercase drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]"
          >
            {settings.name}
          </motion.h1>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 bg-gradient-to-r from-yellow-900/40 to-orange-900/40 px-8 py-3 rounded-full border border-yellow-500/30 backdrop-blur-md mt-4 shadow-[0_0_30px_rgba(234,179,8,0.15)]"
          >
            <span className="font-mono font-bold text-yellow-400 text-sm md:text-lg italic tracking-[0.2em] uppercase">
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
            <h2 className="bebas text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 italic mb-4 drop-shadow-md">
              ACTIVE TOURNAMENTS
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-4"></div>
            <p className="text-gray-400 uppercase tracking-widest text-sm md:text-base font-medium">Join the battle and prove your worth</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             {tournaments.map((tour, index) => {
              const isFull = freeSeats <= 0;
              const btnText = settings.reg_status === "off" ? "REGISTRATION CLOSED" : (isFull ? "MATCH FULL" : "REGISTER SQUAD NOW");
              const btnStyle = settings.reg_status === "off" || isFull 
                ? "bg-white/5 text-slate-500 cursor-not-allowed border border-white/10" 
                : "btn-gradient hover:shadow-[0_0_30px_rgba(250,204,21,0.6)] transition-all cursor-pointer";

              return (
                <motion.div
                  key={tour.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ 
                    y: -10, 
                    borderColor: "rgba(250,204,21,0.5)",
                    boxShadow: "0 25px 50px -12px rgba(250,204,21,0.25)" 
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20,
                    y: { type: "spring", stiffness: 200, damping: 18 } 
                  }}
                  className="glass rounded-[2rem] overflow-hidden group border border-yellow-500/20"
                >
                  <div className="tour-img-container">
                    <img 
                      src={tour.banner_url || "https://ik.imagekit.io/shaban/SHABAN-1768843573796_wWUQgJ0Uo.jpg"} 
                      className="tour-img-full" 
                      alt="Tournament Banner" 
                    />
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-yellow-500/30 px-3 py-1 rounded-full flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-green-400">Live</span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 relative">
                    <div className="absolute top-0 right-8 -mt-6 bg-gradient-to-r from-yellow-600 to-orange-600 w-16 h-12 rounded-t-xl flex items-center justify-center shadow-lg transform -skew-x-12">
                      <span className="bebas text-2xl text-black transform skew-x-12 leading-none mt-1">4V4</span>
                    </div>
                    
                    <h2 className="bebas text-4xl md:text-5xl italic text-white mb-4 uppercase leading-none drop-shadow-md">
                      {tour.name || "Tournament"}
                    </h2>
                    
                    <div className="flex flex-wrap gap-3 mb-6">
                      <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                        <span className="text-yellow-500 text-lg">⏰</span>
                        <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                          {tour.time || "Time TBD"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                        <span className="text-yellow-500 text-lg">📅</span>
                        <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                          {tour.date || "Date TBD"}
                        </span>
                      </div>
                    </div>
                    
                    <div className="bg-black/50 p-5 rounded-2xl border border-white/5 text-sm text-gray-400 italic mb-8 whitespace-pre-line shadow-inner">
                      {tour.rules || "Official Tournament Rules Apply. Fair play is strictly monitored."}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-4 bg-yellow-500/5 p-4 rounded-3xl border border-yellow-500/20 backdrop-blur-sm">
                      <div className="text-center sm:text-left px-4 flex-1">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-500/80 block mb-1">
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
            <h2 className="bebas text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 italic mb-4 drop-shadow-md">
              GAMING RESOURCES
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-4"></div>
            <p className="text-gray-400 uppercase tracking-widest text-sm md:text-base font-medium">
              Level up your gaming experience with these premium tools
            </p>
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
                  borderColor: "rgba(250,204,21,0.5)",
                  boxShadow: "0 30px 60px rgba(250,204,21,0.25)"
                }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="glass rounded-[2rem] overflow-hidden group border border-yellow-500/10 relative flex flex-col justify-between"
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
                    <h3 className="bebas text-3xl text-white mb-2 tracking-wide group-hover:text-yellow-500 transition-colors italic">
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
                              className="block bg-white/5 hover:bg-yellow-500/10 text-slate-300 hover:text-yellow-400 border border-white/5 hover:border-yellow-500/20 px-2 py-1.5 rounded-lg text-[10px] font-bold tracking-wider transition-all truncate"
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
        <footer className="bg-black/80 backdrop-blur-md border-t border-yellow-500/20 mt-20 relative z-10">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center">
              <h2 className="bebas text-3xl text-yellow-500 mb-2 italic tracking-wider">KACHU ARMY</h2>
              <p className="text-gray-400 text-sm mb-6 tracking-widest uppercase">
                Professional Free Fire Tournament Platform
              </p>
              
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent mx-auto mb-6"></div>
              
              <p className="text-gray-500 text-xs mb-6 uppercase tracking-wider font-bold">
                © {new Date().getFullYear()} Khushu Army Official. All rights reserved.
              </p>
              <div className="flex justify-center gap-6">
                <a href="#" className="text-gray-500 hover:text-yellow-500 text-xs uppercase tracking-widest font-bold transition-colors">Terms</a>
                <a href="#" className="text-gray-500 hover:text-yellow-500 text-xs uppercase tracking-widest font-bold transition-colors">Privacy</a>
                <a href="#" className="text-gray-500 hover:text-yellow-500 text-xs uppercase tracking-widest font-bold transition-colors">Support</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
