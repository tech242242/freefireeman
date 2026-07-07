import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, X, AlertCircle } from "lucide-react";

export default function PasswordPrompt({ isOpen, onClose, onSuccess }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday
  const dailyPasswords = [
    { day: "Sunday", pass: "243869" },
    { day: "Monday", pass: "482917" },
    { day: "Tuesday", pass: "105638" },
    { day: "Wednesday", pass: "794251" },
    { day: "Thursday", pass: "326580" },
    { day: "Friday", pass: "918472" },
    { day: "Saturday", pass: "657104" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date().getDay();
    const correctPassword = dailyPasswords[today].pass;

    if (password === correctPassword) {
      localStorage.setItem("appUnlockedDate", new Date().toDateString());
      setError(false);
      setPassword("");
      onSuccess();
      onClose();
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            className="relative w-full max-w-sm bg-[#0a0a0c] border border-pink-500/30 rounded-2xl p-6 shadow-[0_0_40px_rgba(236,72,153,0.2)] overflow-hidden flex flex-col max-h-[90vh]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex justify-center mb-4 shrink-0">
              <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center border border-pink-500/50">
                <Lock className="w-6 h-6 text-pink-500" />
              </div>
            </div>

            <h3 className="text-xl font-black text-center text-white uppercase tracking-widest mb-2 shrink-0">
              Access Restricted
            </h3>
            
            <div className="overflow-y-auto custom-scrollbar mb-4 flex-1 pr-1">
              <p className="text-[11px] text-gray-400 text-center mb-4">
                Please enter today's password to unlock the panels and sensitivities. This is a one-time requirement.
              </p>

              <div className="bg-black/50 border border-white/10 rounded-xl p-3 text-center mb-4">
                <p className="text-[11px] font-bold text-yellow-400 mb-3">Password price is 300rs just</p>
                <a 
                  href="https://wa.me/923478936242?text=Buy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white font-black text-xs py-2 px-4 rounded-lg uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                >
                  Buy Password
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 shrink-0">
              <div>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="ENTER PASSWORD"
                  className={`w-full bg-black/50 border ${error ? 'border-red-500' : 'border-white/10 focus:border-pink-500'} rounded-xl px-4 py-3 text-center text-white font-bold tracking-widest outline-none transition-all`}
                  autoFocus
                />
                {error && (
                  <div className="flex items-center justify-center gap-1 mt-2 text-red-500 text-[10px] uppercase font-bold">
                    <AlertCircle className="w-3 h-3" />
                    Invalid Password
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-black text-xs py-3 rounded-xl uppercase tracking-widest hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all"
              >
                Verify & Unlock
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
