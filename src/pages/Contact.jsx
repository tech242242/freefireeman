import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ submitted: false, loading: false, error: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: false, loading: true, error: false });
    
    // Simulate API call
    setTimeout(() => {
      setStatus({ submitted: true, loading: false, error: false });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
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
          GET IN TOUCH
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto mb-4"></div>
        <p className="text-gray-400 uppercase tracking-widest text-sm md:text-base font-medium">
          Contact PBX Gaming Management & Support Team
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
        {/* Contact Info Card */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          <div className="glass rounded-3xl p-8 border border-white/5 relative overflow-hidden group hover:border-pink-500/30 transition-all flex-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 blur-[50px] rounded-full pointer-events-none"></div>
            
            <h3 className="bebas text-3xl text-white mb-6 italic tracking-wide">OFFICIAL SUPPORT CHANNEL</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-xl shrink-0">
                  📍
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-pink-500/80">Location</h4>
                  <p className="text-white text-sm font-semibold">Faisalabad, Pakistan</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-xl shrink-0">
                  💬
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-green-400">WhatsApp Support</h4>
                  <p className="text-white text-sm font-semibold">+92 347 8936242</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl shrink-0">
                  ✉️
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-blue-400">Email Address</h4>
                  <p className="text-white text-sm font-semibold">mrsaqib242242@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 space-y-3">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Connect with us</h4>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/mr_saqib242" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-pink-500/40 flex items-center justify-center hover:bg-pink-500/10 text-slate-400 hover:text-pink-400 transition-all text-sm" title="Instagram">
                  📸
                </a>
                <a href="https://wa.me/923478936242" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-pink-500/40 flex items-center justify-center hover:bg-pink-500/10 text-slate-400 hover:text-pink-400 transition-all text-sm" title="WhatsApp">
                  💬
                </a>
                <a href="https://www.tiktok.com/@mr_saqib_242" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-pink-500/40 flex items-center justify-center hover:bg-pink-500/10 text-slate-400 hover:text-pink-400 transition-all text-sm" title="TikTok">
                  🎵
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="lg:col-span-7">
          <div className="glass rounded-3xl p-8 md:p-10 border border-white/5 relative overflow-hidden">
            <h3 className="bebas text-3xl text-white mb-6 italic tracking-wide">SEND A SECURE MESSAGE</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full bg-black/60 border border-white/10 focus:border-pink-500/50 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none transition-all text-sm font-semibold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter email address"
                    className="w-full bg-black/60 border border-white/10 focus:border-pink-500/50 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none transition-all text-sm font-semibold"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Sponsorship, Registration issues"
                  className="w-full bg-black/60 border border-white/10 focus:border-pink-500/50 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none transition-all text-sm font-semibold"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Your Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Type your message here..."
                  className="w-full bg-black/60 border border-white/10 focus:border-pink-500/50 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none transition-all text-sm font-semibold resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full btn-gradient hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-300 flex items-center justify-center gap-2 text-white"
              >
                {status.loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-black" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    TRANSMITTING MESSAGE...
                  </>
                ) : status.submitted ? (
                  "✨ MESSAGE TRANSMITTED SUCCESSFULLY!"
                ) : (
                  "TRANSMIT MESSAGE NOW →"
                )}
              </button>

              {status.submitted && (
                <p className="text-center text-green-400 font-bold text-xs uppercase tracking-wider animate-pulse mt-3">
                  Thank you! Our support team will contact you within 24 hours.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
