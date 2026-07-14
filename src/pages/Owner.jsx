import { motion } from "framer-motion";

export default function Owner() {
  const ownerData = {
    name: "MUHAMMAD SAQIB",
    nickname: "Saqib Visuals",
    role: "Creative Content Creator & Visual Artist",
    bio: "Passionate about technology, creativity, and digital content. I love building modern visuals, exploring new tools to create something unique, and pushing the boundaries of interactive media and gaming aesthetics.",
    avatar: "https://ik.imagekit.io/shaban/SHABAN-1768573425069_nIPVZQOaT.jpg",
    quote: "Technology and creativity combined can form wonders. Let's connect, create, and build legendary digital spaces.",
    age: "17 Years",
    location: "Faisalabad, Pakistan",
    phone: "+92 307 1356242",
    email: "Pbxgamingofficial2@gmail.com",
    website: "https://www.google.com/search?q=saqib242",
    socials: [
      { name: "WhatsApp", url: "https://wa.me/923071356242", icon: "💬", color: "hover:border-green-500/50 hover:bg-green-500/10 text-green-400" },
      { name: "TikTok", url: "https://www.tiktok.com/@mr_saqib_242", icon: "🎵", color: "hover:border-pink-500/50 hover:bg-pink-500/10 text-pink-400" },
      { name: "Instagram", url: "https://www.instagram.com/mr_saqib242", icon: "📸", color: "hover:border-purple-500/50 hover:bg-purple-500/10 text-purple-400" },
      { name: "Facebook", url: "https://web.facebook.com/muhammad.saqib.718278", icon: "👥", color: "hover:border-blue-500/50 hover:bg-blue-500/10 text-blue-400" },
      { name: "Snapchat", url: "https://www.snapchat.com/add/mrsaqib242", icon: "👻", color: "hover:border-yellow-500/50 hover:bg-yellow-500/10 text-yellow-400" }
    ],
    stats: [
      { label: "Location", value: "Faisalabad" },
      { label: "Age", value: "17 Years" },
      { label: "Core Vision", value: "Creative Art" },
      { label: "Projects", value: "Unlimited" }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative z-10"
    >
      <div className="text-center mb-12">
        <h2 className="bebas text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 italic mb-4 drop-shadow-md">
          LEADERSHIP & VISION
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto mb-4"></div>
        <p className="text-gray-400 uppercase tracking-widest text-sm md:text-base font-medium">
          Meet the founder behind PBX Gaming's creative universe
        </p>
      </div>

      <div className="max-w-5xl mx-auto glass rounded-[2.5rem] p-8 md:p-12 border border-white/5 relative overflow-hidden group hover:border-pink-500/20 transition-all duration-500">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-pink-500/10 transition-all"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 relative z-10">
          {/* Avatar/Image Column */}
          <div className="w-full lg:w-1/3 flex flex-col items-center">
            <div className="relative group/avatar">
              {/* Outer rotating/pulsing ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 via-pink-600 to-purple-300 rounded-full blur-md opacity-75 animate-pulse"></div>
              
              <div className="relative w-56 h-56 rounded-full p-1.5 bg-gradient-to-tr from-purple-500 to-pink-600 overflow-hidden">
                <img
                  src={ownerData.avatar}
                  alt={ownerData.name}
                  className="w-full h-full object-cover rounded-full bg-[#0d0d0d] border-4 border-[#030303]"
                />
              </div>

              {/* Status indicator */}
              <div className="absolute bottom-2 right-6 bg-black/80 border border-pink-500/50 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[9px] font-black uppercase tracking-widest text-green-400">ONLINE</span>
              </div>
            </div>

            <div className="text-center mt-6">
              <h3 className="bebas text-4xl text-white italic tracking-wide leading-none">{ownerData.name}</h3>
              <p className="text-pink-500 font-mono text-[10px] uppercase tracking-widest font-bold mt-2">
                @{ownerData.nickname}
              </p>
              <p className="text-slate-400 text-xs mt-2 font-medium max-w-[240px] mx-auto leading-relaxed">
                {ownerData.role}
              </p>
            </div>

            {/* Quick Contact badge */}
            <div className="mt-6 w-full pt-6 border-t border-white/5 space-y-3 text-sm font-semibold">
              <div className="flex items-center gap-3 justify-center text-slate-300">
                <span className="text-pink-500 text-xs">📍</span>
                <span className="text-xs">{ownerData.location}</span>
              </div>
              <div className="flex items-center gap-3 justify-center text-slate-300">
                <span className="text-pink-500 text-xs">📞</span>
                <a href={`tel:${ownerData.phone.replace(/\s+/g, '')}`} className="text-xs hover:text-pink-400 transition-colors">{ownerData.phone}</a>
              </div>
              <div className="flex items-center gap-3 justify-center text-slate-300">
                <span className="text-pink-500 text-xs">✉️</span>
                <a href={`mailto:${ownerData.email}`} className="text-xs hover:text-pink-400 transition-colors">{ownerData.email}</a>
              </div>
              <div className="flex items-center gap-3 justify-center text-slate-300">
                <span className="text-pink-500 text-xs">🌐</span>
                <a href={ownerData.website} target="_blank" rel="noopener noreferrer" className="text-xs hover:text-pink-400 transition-colors underline decoration-pink-500/50">Search Website</a>
              </div>
            </div>
          </div>

          {/* Description & Info Column */}
          <div className="w-full lg:w-2/3 flex flex-col justify-between space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 px-3 py-1 rounded-full">
                <span className="text-xs">✨</span>
                <span className="text-[10px] uppercase tracking-widest font-black text-pink-400">FOUNDER PROFILE</span>
              </div>
              
              <p className="text-gray-300 text-lg md:text-xl font-light italic leading-relaxed text-slate-300 relative px-4 lg:px-0">
                <span className="text-pink-500 text-4xl font-serif absolute -top-4 -left-2 opacity-30">“</span>
                {ownerData.quote}
                <span className="text-pink-500 text-4xl font-serif absolute -bottom-4 ml-1 opacity-30">”</span>
              </p>

              <p className="text-slate-400 text-sm leading-relaxed font-normal pt-4">
                {ownerData.bio}
              </p>
            </div>

            {/* Social Media Links */}
            <div className="space-y-3 pt-4">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-pink-500/80">Connect & Create With Me</h4>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {ownerData.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${social.color}`}
                  >
                    <span>{social.icon}</span>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Founder Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/5">
              {ownerData.stats.map((stat, idx) => (
                <div key={idx} className="bg-white/5 p-4 rounded-2xl border border-white/5 text-center flex flex-col justify-center min-h-[90px]">
                  <span className="font-sans font-black text-xs sm:text-sm md:text-base text-pink-500 block uppercase tracking-wider leading-tight mb-1">
                    {stat.value}
                  </span>
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Verification / Sign-off */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <div className="h-0.5 w-12 bg-pink-500/50"></div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-pink-500/80 font-bold">
                PBX GAMING VERIFIED FOUNDER
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
