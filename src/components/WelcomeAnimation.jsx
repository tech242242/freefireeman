import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WelcomeAnimation = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [showAnimation, setShowAnimation] = useState(true);

  // Fast 2-second animation
  useEffect(() => {
    const steps = [
      { delay: 300, text: "⚔️" },       // 0.3s
      { delay: 300, text: "BATTLE" },   // 0.6s
      { delay: 300, text: "ROYALE" },   // 0.9s
      { delay: 300, text: "🏆" },       // 1.2s
      { delay: 300, text: "LOADED!" }   // 1.5s
    ];

    if (step < steps.length) {
      const timer = setTimeout(() => {
        setStep(step + 1);
      }, steps[step].delay);

      return () => clearTimeout(timer);
    } else {
      // Total 2 seconds: 1.5s animation + 0.5s fade out
      const timer = setTimeout(() => {
        setShowAnimation(false);
        setTimeout(() => onComplete(), 100); // Fast complete
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [step, onComplete]);

  const gamingTexts = ["⚔️", "BATTLE", "ROYALE", "🏆", "LOADED!"];

  return (
    <AnimatePresence>
      {showAnimation && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-[#030303] bg-cyber-grid flex items-center justify-center"
        >
          {/* Fast background effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/10 blur-[100px] rounded-full"></div>
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-yellow-500 rounded-full blur-[1px]"
                initial={{
                  x: Math.random() * 100 + 'vw',
                  y: Math.random() * 100 + 'vh',
                }}
                animate={{
                  x: Math.random() * 100 + 'vw',
                  y: Math.random() * 100 + 'vh',
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity
                }}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center">
            {/* Current Text */}
            {step > 0 && step <= gamingTexts.length && (
              <motion.div
                key={step}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="mb-6"
              >
                <h1 className="bebas text-6xl md:text-8xl italic tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white via-yellow-200 to-yellow-600 drop-shadow-[0_0_20px_rgba(250,204,21,0.6)] uppercase">
                  {gamingTexts[step - 1]}
                </h1>
              </motion.div>
            )}

            {/* Fast Progress Bar */}
            <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto">
              <motion.div
                className="h-full bg-gradient-to-r from-yellow-500 to-orange-500"
                initial={{ width: "0%" }}
                animate={{ width: `${(step / gamingTexts.length) * 100}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Quick Loading Dots */}
            <div className="flex justify-center space-x-1 mt-6">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-orange-500 rounded-full"
                  animate={{
                    scale: step % 3 === i ? [1, 1.3, 1] : 1
                  }}
                  transition={{ duration: 0.4, repeat: Infinity }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeAnimation;
