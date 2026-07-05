import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Shield, Trophy, Users } from "lucide-react";

export default function MobileBottomNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  // List of paths where the bottom mobile navigation should be hidden
  const hideOnRoutes = ["/login", "/dashboard", "/pbxadmin", "/admin", "/web-dashboard", "/squad-manager"];
  
  // If we are in admin panels, return null
  if (hideOnRoutes.includes(currentPath)) {
    return null;
  }

  const navItems = [
    {
      label: "Home",
      path: "/",
      icon: Home,
    },
    {
      label: "Pannel",
      path: "/proxy-panels",
      icon: Shield,
    },
    {
      label: "Match",
      path: "/home",
      icon: Trophy,
    },
    {
      label: "Team",
      path: "/team",
      icon: Users,
    },
  ];

  return (
    <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
      <div className="relative bg-[#090910]/90 backdrop-blur-xl border border-white/10 rounded-2xl px-2 py-2 shadow-[0_10px_35px_rgba(0,0,0,0.9),0_0_15px_rgba(236,72,153,0.05)]">
        {/* Subtle Cyber Grid or glow background */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-600/5 rounded-2xl pointer-events-none" />

        <div className="flex items-center justify-around relative">
          {navItems.map((item) => {
            // Check if current page is active or matches sub-path
            const isActive = currentPath === item.path || (item.path !== "/" && currentPath.startsWith(item.path));
            const Icon = item.icon;

            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="relative flex flex-col items-center justify-center py-1.5 px-3 rounded-xl cursor-pointer transition-all duration-300 select-none overflow-hidden flex-1"
              >
                {/* Active highlight pill background */}
                {isActive && (
                  <motion.div
                    layoutId="activeMobileTabBg"
                    className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-600/10 border border-pink-500/20 rounded-xl"
                    transition={{ type: "spring", stiffness: 350, damping: 26 }}
                  />
                )}

                {/* Active Indicator Light Glow Dot */}
                {isActive && (
                  <motion.div
                    layoutId="activeMobileTabGlow"
                    className="absolute top-0.5 w-1 h-1 bg-pink-500 rounded-full shadow-[0_0_8px_#ec4899]"
                    transition={{ type: "spring", stiffness: 350, damping: 26 }}
                  />
                )}

                {/* Tab Icon */}
                <motion.div
                  animate={{ scale: isActive ? 1.12 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative z-10 ${
                    isActive 
                      ? "text-pink-500 drop-shadow-[0_0_6px_rgba(236,72,153,0.5)]" 
                      : "text-slate-400"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </motion.div>

                {/* Tab Label */}
                <span
                  className={`text-[8px] font-black uppercase tracking-wider mt-1.5 transition-colors duration-300 relative z-10 ${
                    isActive ? "text-pink-400 font-extrabold" : "text-slate-500"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
