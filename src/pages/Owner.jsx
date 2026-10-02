import { useState } from "react";
import { motion } from "framer-motion";

export default function Owner() {
  const [copied, setCopied] = useState(false);

  const profile = {
    name: "MUHAMMAD SAQIB",
    displayName: "Mr. Saqib",
    brand: "Saqib Visuals",
    tagline: "Building Modern Digital Experiences with Innovation, Creativity & Technology.",
    roles: [
      "Full-Stack Developer",
      "AI Enthusiast",
      "Creative Visual Artist"
    ],
    bio: "Hi! I'm Muhammad Saqib, a passionate developer and creative professional dedicated to designing high-quality digital experiences. I specialize in building fast, modern, and user-friendly websites, web applications, AI-powered solutions, and creative visual content.",
    mission: "Turn ideas into professional digital products that make an impact. Every project deserves innovation, quality, and attention to detail. I create digital solutions that are fast, scalable, visually appealing, and built for the future.",
    age: "17 Years",
    location: "Faisalabad, Pakistan",
    phone: "+92 347 8936242",
    email: "mrsaqib242242@gmail.com",
    website: "https://mrsaqib242.vercel.app",
    services: [
      { name: "Premium Website Development", icon: "🌐", desc: "Fast, custom and scalable web platforms" },
      { name: "Responsive Web Applications", icon: "📱", desc: "Flawless on smartphones, tablets & desktops" },
      { name: "AI Integration & Automation", icon: "🤖", desc: "Smart AI pipelines, prompts & bots" },
      { name: "React.js & Modern JavaScript", icon: "⚛️", desc: "Next-gen reactive component architecture" },
      { name: "UI/UX Design", icon: "🎨", desc: "Intuitive, cyberpunk & futuristic aesthetics" },
      { name: "Tailwind CSS", icon: "💎", desc: "Pixel-perfect, lightweight modern styling" },
      { name: "Database & REST APIs", icon: "🗄️", desc: "Robust data flow and secure API endpoints" },
      { name: "Video Editing", icon: "🎬", desc: "Engaging reels, gaming edits & motion visual cuts" },
      { name: "Graphic Design & Branding", icon: "🖼️", desc: "Distinctive logos, typography & brand identity" },
      { name: "Digital Marketing", icon: "📈", desc: "Audience growth, strategy & campaign reach" }
    ],
    whyWorkWithMe: [
      "Modern & Responsive Design",
      "Fast Performance",
      "Clean & Maintainable Code",
      "Creative UI/UX",
      "AI-Powered Solutions",
      "Professional Communication",
      "Reliable Support"
    ],
    socials: [
      {
        name: "WhatsApp",
        url: "https://wa.me/923478936242",
        icon: "💬",
        color: "hover:border-emerald-500/50 hover:bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/mr_saqib242",
        icon: "📸",
        color: "hover:border-pink-500/50 hover:bg-pink-500/10 text-pink-400 border-pink-500/20"
      },
      {
        name: "TikTok",
        url: "https://www.tiktok.com/@mr_saqib_242",
        icon: "🎵",
        color: "hover:border-cyan-500/50 hover:bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
      },
      {
        name: "Facebook",
        url: "https://web.facebook.com/muhammad.saqib.718278",
        icon: "👥",
        color: "hover:border-blue-500/50 hover:bg-blue-500/10 text-blue-400 border-blue-500/20"
      },
      {
        name: "Snapchat",
        url: "https://www.snapchat.com/add/mrsaqib242",
        icon: "👻",
        color: "hover:border-yellow-500/50 hover:bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
      }
    ]
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative z-10 w-full"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-yellow-500/10 border border-pink-500/30 px-4 py-1.5 rounded-full mb-4">
          <span className="text-sm">🚀</span>
          <span className="text-[11px] uppercase tracking-widest font-black text-pink-400">
            OFFICIAL LEAD DEVELOPER & CREATOR
          </span>
        </div>
        <h2 className="bebas text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-400 to-purple-400 italic mb-3 drop-shadow-md">
          MUHAMMAD SAQIB
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto mb-4"></div>
        <p className="text-gray-300 tracking-wider text-sm md:text-base font-semibold max-w-2xl mx-auto">
          {profile.tagline}
        </p>
      </div>

      {/* Main Showcase Container */}
      <div className="max-w-6xl mx-auto glass rounded-[2.5rem] p-6 sm:p-10 md:p-14 border border-white/10 relative overflow-hidden group shadow-2xl backdrop-blur-2xl">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 blur-[130px] rounded-full pointer-events-none group-hover:bg-pink-500/15 transition-all"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 blur-[130px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Top Profile Card: Monogram Avatar (NO IMAGE) + Core Identity */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 pb-12 border-b border-white/10 relative z-10">
          
          {/* Futuristic Monogram Emblem (Clean Code-based, No Photos) */}
          <div className="flex flex-col items-center shrink-0">
            <div className="relative group/emblem">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl blur-md opacity-80 group-hover/emblem:opacity-100 transition duration-500 animate-pulse"></div>

              {/* Emblem Box */}
              <div className="relative w-48 h-48 sm:w-52 sm:h-52 rounded-2xl bg-gradient-to-br from-[#12121e] via-[#09090f] to-[#040406] border border-white/20 p-4 flex flex-col items-center justify-center text-center shadow-2xl overflow-hidden">
                <div className="absolute top-2 left-2 text-[9px] font-mono font-bold text-pink-400/80">SAQIB // V2.0</div>
                <div className="absolute top-2 right-2 text-xs">✨</div>
                
                {/* Visual Icon Badge */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center mb-2 shadow-inner">
                  <span className="bebas text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-pink-400 via-purple-300 to-cyan-300 font-black tracking-wider">
                    MS
                  </span>
                </div>

                <div className="bebas text-2xl tracking-widest text-white leading-none">
                  MR SAQIB
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-pink-400 font-bold mt-1">
                  {profile.brand}
                </div>

                <div className="flex items-center gap-1.5 mt-2 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[9px] font-mono font-bold text-emerald-300 uppercase tracking-widest">
                    READY TO BUILD
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <span className="text-[11px] font-mono uppercase text-gray-400 tracking-wider">
                AGE: <strong className="text-white">{profile.age}</strong> • <strong className="text-white">PAKISTAN</strong>
              </span>
            </div>
          </div>

          {/* Identity & Bio */}
          <div className="flex-1 text-center lg:text-left space-y-4">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              {profile.roles.map((role, i) => (
                <span
                  key={i}
                  className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md bg-white/5 border border-white/10 text-pink-300"
                >
                  {role}
                </span>
              ))}
            </div>

            <h3 className="bebas text-4xl sm:text-5xl text-white italic tracking-wide">
              WHO I AM
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              {profile.bio}
            </p>

            {/* Mission Callout */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-transparent border-l-4 border-pink-500 border-white/5">
              <span className="text-[10px] font-black uppercase tracking-widest text-pink-400 block mb-1">
                🎯 MY MISSION
              </span>
              <p className="text-white text-xs sm:text-sm italic font-medium leading-relaxed">
                "{profile.mission}"
              </p>
            </div>

            {/* Quick Action Contact Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href={profile.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-pink-500/20 flex items-center gap-2"
              >
                <span>🌐</span> Official Portfolio
              </a>

              <a
                href={`https://wa.me/923478936242?text=${encodeURIComponent("Hi Muhammad Saqib, I want to discuss a project with Saqib Visuals!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500 text-emerald-300 hover:text-black border border-emerald-500/40 font-black text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2"
              >
                <span>💬</span> WhatsApp Direct
              </a>

              <button
                onClick={copyEmail}
                className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2"
              >
                <span>✉️</span> {copied ? "Copied!" : "Copy Email"}
              </button>
            </div>
          </div>
        </div>

        {/* Profile Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 border-b border-white/10 relative z-10">
          <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-center">
            <span className="text-xs uppercase tracking-widest text-gray-400 font-bold block mb-1">Brand</span>
            <span className="bebas text-xl sm:text-2xl text-pink-400 tracking-wide">{profile.brand}</span>
          </div>
          <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-center">
            <span className="text-xs uppercase tracking-widest text-gray-400 font-bold block mb-1">Age</span>
            <span className="bebas text-xl sm:text-2xl text-white tracking-wide">{profile.age}</span>
          </div>
          <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-center">
            <span className="text-xs uppercase tracking-widest text-gray-400 font-bold block mb-1">Location</span>
            <span className="bebas text-xl sm:text-2xl text-white tracking-wide">{profile.location}</span>
          </div>
          <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-center">
            <span className="text-xs uppercase tracking-widest text-gray-400 font-bold block mb-1">Phone</span>
            <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="bebas text-lg sm:text-xl text-emerald-400 tracking-wide hover:underline">
              {profile.phone}
            </a>
          </div>
        </div>

        {/* Services Showcase */}
        <div className="py-10 border-b border-white/10 relative z-10">
          <div className="text-center mb-8">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-pink-400 block mb-1">
              ⚡ COMPREHENSIVE EXPERTISE
            </span>
            <h4 className="bebas text-3xl sm:text-4xl text-white italic tracking-wide">
              SERVICES & CAPABILITIES
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {profile.services.map((service, index) => (
              <div
                key={index}
                className="bg-black/40 border border-white/5 hover:border-pink-500/30 p-4 rounded-2xl transition-all duration-300 hover:translate-y-[-2px] group/service"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-lg shrink-0 group-hover/service:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h5 className="text-white font-bold text-sm tracking-wide group-hover/service:text-pink-300 transition-colors">
                    {service.name}
                  </h5>
                </div>
                <p className="text-slate-400 text-xs pl-13 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Work With Me & Direct Socials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10 relative z-10">
          
          {/* Why Work With Me (Left) */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-pink-400 block">
              🔥 WHY WORK WITH ME?
            </span>
            <h4 className="bebas text-3xl text-white italic tracking-wide">
              PRECISION, CREATIVITY & RELIABILITY
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {profile.whyWorkWithMe.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white/[0.03] border border-white/5 px-4 py-3 rounded-xl"
                >
                  <span className="text-emerald-400 text-sm">✅</span>
                  <span className="text-xs font-semibold text-slate-200 uppercase tracking-wide">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Socials & Direct Connect (Right) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-pink-400 block mb-1">
                🌍 CONNECT WITH MR SAQIB
              </span>
              <h4 className="bebas text-3xl text-white italic tracking-wide mb-4">
                OFFICIAL SOCIAL LINKS
              </h4>

              <div className="flex flex-col gap-2.5">
                {profile.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-3 rounded-xl border bg-white/[0.02] flex items-center justify-between text-xs font-bold uppercase tracking-wider transition-all duration-300 ${social.color}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-base">{social.icon}</span>
                      <span>{social.name}</span>
                    </div>
                    <span className="text-[10px] font-mono opacity-60">VISIT →</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Direct Contact Details Footnote */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 text-xs text-slate-400">
              <div className="flex items-center justify-between">
                <span>📱 Phone:</span>
                <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="text-white hover:text-pink-400 font-bold">
                  {profile.phone}
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span>📧 Email:</span>
                <a href={`mailto:${profile.email}`} className="text-white hover:text-pink-400 font-bold truncate max-w-[200px]">
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span>🌐 Website:</span>
                <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline font-bold">
                  mrsaqib242.vercel.app
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center relative z-10">
          <p className="bebas text-2xl sm:text-3xl text-white italic tracking-wider">
            ✨ LET'S BUILD SOMETHING AMAZING TOGETHER.
          </p>
          <p className="text-[11px] font-mono uppercase tracking-widest text-pink-400 font-bold mt-1">
            💼 SAQIB VISUALS — WHERE CREATIVITY MEETS TECHNOLOGY
          </p>
        </div>

      </div>
    </motion.div>
  );
}
