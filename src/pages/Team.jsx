import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useSEO from "../hooks/useSEO";

export default function Team() {
  const navigate = useNavigate();

  useSEO({
    title: "Meet the Team | Es Freefire Arm - PBX GAMING",
    description: "Discover the visionaries behind PBX GAMING. Meet the professional organizers, designers, and developers powering PBX Esports leagues.",
    keywords: "saqib, pbx gaming, pbx esports, developer ai, freefire tournament organizers, pbx gaming founders",
    ogImage: "https://i.ibb.co/995yZVyL/image.webp"
  });

  const teamMembers = [
    {
      id: "eman",
      name: "Eman",
      role: "Founder of PBX Official",
      avatar: "https://i.pinimg.com/736x/2e/ad/5e/2ead5e0dcfec9e7d6f18a11e44e446d7.jpg",
      glowColor: "rgba(239,68,68,0.4)", // Red/Crimson glow
      borderColor: "border-red-500/30",
      accentColor: "text-red-500",
      bgGradient: "from-red-950/20 via-black/80 to-black",
      badge: "Gamer & Entrepreneur",
      bio: "Hi, I'm Eman 👑. I organize Free Fire tournaments, build gaming communities, create engaging content, and help brands grow online. I'm also involved in Dropshipping, Website Management, Social Media Management, and Digital Business. \"Play Like a Queen. Rule Like a Boss.\" 💜🎮",
      stats: [
        { label: "Tournaments", value: "100+" },
        { label: "Community", value: "20K+" },
        { label: "Content", value: "Viral" }
      ],
      skills: ["Free Fire Tournament Organizer", "Community Management", "TikTok Content Creator", "CapCut Video Editing", "Website Management", "Dropshipping", "Social Media Management"]
    },
    {
      id: "saqib",
      name: "Muhammad Saqib",
      role: "Co-Founder of PBX Official",
      avatar: "https://ik.imagekit.io/shaban/SHABAN-1768573425069_nIPVZQOaT.jpg",
      glowColor: "rgba(34,197,94,0.4)", // Green glow
      borderColor: "border-green-500/30",
      accentColor: "text-green-500",
      bgGradient: "from-green-950/20 via-black/80 to-black",
      badge: "Web Developer & Creator",
      bio: "Hi, I'm Saqib 🚀. I build modern websites, manage gaming communities, create digital content, and help businesses establish a strong online presence through web development, branding, and social media.",
      stats: [
        { label: "Apps Developed", value: "120+" },
        { label: "AI Integrations", value: "40+" },
        { label: "Subscribers", value: "10K+" }
      ],
      skills: ["Full-Stack Web Developer", "Content Creator", "Community Manager", "Branding", "Social Media"]
    }
  ];

  return (
    <div className="relative w-full bg-[#030303] bg-cyber-grid min-h-screen text-white flex flex-col overflow-x-hidden pb-24 md:pb-0">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-green-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Navigation Top Header */}
      <header className="w-full border-b border-white/5 bg-black/60 backdrop-blur-md sticky top-0 z-50">
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
            className="border border-white/10 hover:border-green-500/30 bg-white/5 hover:bg-green-500/10 text-white hover:text-green-400 px-5 py-2 rounded-sm text-xs font-black uppercase tracking-widest transition-all"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}
          >
            ← Back Home
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-16 flex flex-col items-center justify-center relative z-10">
        {/* Page Title */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-green-500 font-bold uppercase tracking-widest text-xs">
            ★ EXCLUSIVE LEADERS ★
          </span>
          <h1 className="bebas text-5xl md:text-7xl italic text-white tracking-wide mt-2">
            MEET THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-500">EXPERTS</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mt-4 font-light leading-relaxed">
            The powerful minds driving e-commerce, gaming tournaments, and next-gen artificial intelligence.
          </p>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto mt-6"></div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 w-full items-stretch">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ x: index % 2 === 0 ? -60 : 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                boxShadow: `0 25px 60px -10px ${member.glowColor}`
              }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className={`glass flex flex-col justify-between border ${member.borderColor} rounded-3xl overflow-hidden relative group transition-all duration-300`}
              style={{ 
                background: `linear-gradient(to bottom, ${member.glowColor.replace('0.4', '0.05')}, rgba(3,3,3,0.95))`
              }}
            >
              {/* Corner Design Trim */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/10 to-transparent pointer-events-none`}></div>
              
              {/* Header Info */}
              <div className="p-8 pb-4 relative z-10 flex flex-col items-center text-center">
                <span className={`text-[10px] uppercase font-black tracking-[0.25em] bg-white/5 px-3 py-1 rounded-full border border-white/10 mb-4 ${member.accentColor}`}>
                  {member.badge}
                </span>

                {/* Avatar Display with Gaming Mask */}
                <div className="relative w-44 h-44 mb-6 group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-500/20 to-red-500/20 animate-spin-slow blur-md"></div>
                  <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 relative bg-black/40">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-full h-full object-contain object-bottom scale-110 origin-bottom"
                    />
                    {/* Bottom fade within image frame */}
                    <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black to-transparent"></div>
                  </div>
                </div>

                <h2 className="bebas text-4xl italic text-white tracking-wide">
                  {member.name}
                </h2>
                <h3 className={`font-black uppercase tracking-[0.2em] text-xs mt-1 ${member.accentColor}`}>
                  {member.role}
                </h3>

                <p className="text-gray-400 text-xs md:text-sm mt-6 leading-relaxed font-light text-center h-28 overflow-y-auto custom-scrollbar">
                  {member.bio}
                </p>
              </div>

              {/* Stats Section */}
              <div className="border-t border-white/5 bg-black/40 px-8 py-5 relative z-10">
                <div className="grid grid-cols-3 gap-2 text-center">
                  {member.stats.map((stat, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <span className="bebas text-2xl text-white tracking-wide">
                        {stat.value}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-gray-500 font-bold">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Footer */}
              <div className="border-t border-white/5 bg-black/60 p-6 rounded-b-3xl relative z-10">
                <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold block mb-3 text-center">
                  Core Competencies
                </span>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-[9px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 text-slate-300 px-3 py-1.5 rounded-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Contact Redirection */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">
            Need custom inquiries, dropshipping consultancy, or AI automation?
          </p>
          <button
            onClick={() => window.open("https://wa.me/923478936242", "_blank")}
            className="mt-4 bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-400 hover:to-yellow-400 text-black px-8 py-3 rounded-sm font-black text-xs uppercase tracking-widest transition-all hover:scale-105 shadow-xl"
            style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)' }}
          >
            Get In Touch Now →
          </button>
        </motion.div>
      </main>

      {/* Scrollbar styling injected inline */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
