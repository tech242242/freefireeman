import { motion } from "framer-motion";

export default function About() {
  const values = [
    {
      icon: "🛡️",
      title: "Fair Play & Anti-Cheat",
      description: "Our team implements state-of-the-art monitoring & manual validation to guarantee 100% fair matches with zero hacking tolerance."
    },
    {
      icon: "⚡",
      title: "Instant Room Delivery",
      description: "Get tournament slot IDs & server passwords dispatched instantly to your registered WhatsApp device before match kickoff."
    },
    {
      icon: "🎁",
      title: "Secured Prize Pools",
      description: "Win real rewards and cash prizes. All match winnings are distributed instantly via verified digital mobile channels."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative z-10"
    >
      <div className="text-center mb-12">
        <h2 className="bebas text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 italic mb-4 drop-shadow-md">
          ABOUT PBX GAMING
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto mb-4"></div>
        <p className="text-gray-400 uppercase tracking-widest text-sm md:text-base font-medium">
          Professional Free Fire & Mobile Gaming Esports League
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left Column: Mission Description */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 px-3 py-1 rounded-full">
            <span className="text-xs">✨</span>
            <span className="text-[10px] uppercase tracking-widest font-black text-pink-400">OUR ESPORTS MISSION</span>
          </div>
          
          <h3 className="bebas text-4xl md:text-5xl text-white italic tracking-wide leading-tight">
            SHAPING THE FUTURE OF <span className="text-pink-500">MOBILE TOURNAMENTS</span>
          </h3>
          
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            PBX Gaming is an industry-grade esports tournament framework built exclusively for passionate gamers, competitive squads, and content creators. We organize daily matches, weekly cups, and major seasonal championships with thousands of active fighters.
          </p>

          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Whether you are looking to kickstart your professional mobile gaming career or dominate the community with your elite squad, PBX Gaming provides the ultimate platform, flawless coordination, and instant prize redemption.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 text-xs font-bold tracking-widest uppercase text-pink-400">
            <span className="flex items-center gap-2">✔️ Instant Support</span>
            <span className="flex items-center gap-2">✔️ Verified Achievements</span>
            <span className="flex items-center gap-2">✔️ Anti-Cheat Monitored</span>
          </div>
        </div>

        {/* Right Column: Values Grid */}
        <div className="space-y-6">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ 
                y: -5, 
                borderColor: "rgba(236,72,153,0.3)",
                boxShadow: "0 10px 25px rgba(236,72,153,0.1)"
              }}
              className="glass p-6 rounded-2xl border border-white/5 transition-all flex gap-6 items-start group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1 tracking-wide group-hover:text-pink-400 transition-colors">
                  {value.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
