import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Help() {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      question: "How to register for tournament?",
      answer: "Click on the 'REGISTER NOW' button on an active tournament, subscribe to our YouTube channel for verification, then complete the payment process to secure your slot."
    },
    {
      question: "What is the tournament format?",
      answer: "All official Ms Eman Army tournaments run on a 4v4 squad format. Each room has a strict 12 teams maximum capacity to ensure fair play and optimal server performance."
    },
    {
      question: "How to make a payment?",
      answer: "After initial registration, you'll receive payment details via our official WhatsApp. Use Easypaisa/JazzCash for the transaction and share the screenshot."
    },
    {
      question: "When will I get my slot ID?",
      answer: "Your dedicated Slot ID and Room Password will be sent via WhatsApp within 5 minutes after your successful payment verification."
    },
    {
      question: "What are the rules?",
      answer: "Zero tolerance for hacking, no cross-teaming, and strict adherence to the tournament schedule. Emulators are only allowed if explicitly mentioned in the tournament description."
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
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto mb-4"></div>
        <p className="text-gray-400 uppercase tracking-widest text-sm md:text-base font-medium">
          Tournament Rules & Registration Guide
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-pink-500/30 transition-colors"
          >
            <button
              onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              className="w-full text-left flex justify-between items-center p-6 md:p-8 bg-black/40 hover:bg-white/5 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <span className="text-pink-500 font-black text-xl opacity-50 group-hover:opacity-100 transition-opacity">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-bold text-white tracking-wide group-hover:text-pink-400 transition-colors">
                  {faq.question}
                </span>
              </div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${activeFaq === index ? 'bg-pink-500 border-pink-500 text-white rotate-180' : 'border-white/20 text-white/50 group-hover:border-pink-500/50'}`}>
                <span className="transform -mt-0.5">▼</span>
              </div>
            </button>
            
            <AnimatePresence>
              {activeFaq === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 md:px-8 pb-8 pt-2 text-gray-400 leading-relaxed font-light border-t border-white/5">
                    <div className="flex gap-4">
                      <div className="w-0.5 bg-gradient-to-b from-pink-500 to-transparent"></div>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-12 max-w-4xl mx-auto p-8 glass rounded-3xl border border-pink-500/20 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="bebas text-3xl md:text-4xl text-white mb-2 tracking-wide">Still need help?</h3>
            <p className="text-gray-400 text-sm tracking-wide">Our support team is available 24/7 on WhatsApp</p>
          </div>
          <div className="flex w-full md:w-auto gap-4">
            <a 
              href="https://wa.me/923478936242" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-green-500/20 hover:bg-green-500 text-green-400 hover:text-white border border-green-500/50 px-8 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(34,197,94,0.1)] hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]"
            >
              <span className="text-xl">💬</span> WhatsApp Support
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
