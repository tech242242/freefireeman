import React, { useState, useEffect } from "react";
import { AlertTriangle, Database, Lock, Server, Skull } from "lucide-react";
import { motion } from "framer-motion";

export default function FakeAdmin() {
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.title = "PBX SYSTEM | UNAUTHORIZED ACCESS DETECTED";
    const newLogs = [
      "INITIATING SECURE PROTOCOL...",
      "IP LOGGED. TRACKING GEOLOCATION...",
      "WARNING: UNAUTHORIZED ACCESS DETECTED.",
      "LOCKING DATABASE...",
      "SENDING REPORTS TO PBX SERVERS...",
      "YOUR DEVICE FINGERPRINT HAS BEEN RECORDED.",
      "IP ADDRESS BANNED.",
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < newLogs.length) {
        setLogs((prev) => [...prev, newLogs[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 800);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + Math.floor(Math.random() * 15);
        return 100;
      });
    }, 400);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-red-500 font-mono flex flex-col items-center justify-center p-6 relative overflow-hidden select-none">
      {/* Glitch Overlay */}
      <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay animate-pulse pointer-events-none" />

      {/* Main Content */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-red-950/20 border-2 border-red-600 rounded-xl p-8 relative z-10 backdrop-blur-md shadow-[0_0_50px_rgba(220,38,38,0.5)] text-center"
      >
        <div className="flex justify-center mb-6">
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <Skull className="w-24 h-24 text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]" />
          </motion.div>
        </div>

        <h1 className="text-4xl md:text-5xl font-black mb-2 tracking-[0.2em] animate-pulse">
          ACCESS DENIED
        </h1>
        <p className="text-red-400 mb-8 font-bold tracking-widest text-sm md:text-base">
          RESTRICTED PBX MAINFRAME
        </p>

        <div className="bg-black/80 border border-red-500/30 p-4 rounded-lg text-left h-48 overflow-y-auto font-mono text-xs md:text-sm shadow-inner mb-6">
          {logs.map((log, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-2 flex items-start gap-2"
            >
              <span className="text-red-700">[{new Date().toLocaleTimeString()}]</span>
              <span className="text-red-500">{log}</span>
            </motion.div>
          ))}
          {progress >= 100 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-center text-red-600 font-bold text-lg animate-pulse"
            >
              DEVICE LOCKED. CONTACT ADMINISTRATOR.
            </motion.div>
          )}
        </div>

        <div className="w-full bg-red-950/50 rounded-full h-4 mb-2 overflow-hidden border border-red-500/20">
          <motion.div
            className="bg-red-600 h-full shadow-[0_0_10px_red]"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <p className="text-xs text-red-700 text-right uppercase font-bold tracking-widest">
          Trace Progress: {Math.min(progress, 100)}%
        </p>
      </motion.div>

      {/* Floating Icons */}
      <div className="absolute top-10 left-10 opacity-20">
        <Server className="w-16 h-16 animate-bounce" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <Database className="w-16 h-16 animate-pulse" />
      </div>
      <div className="absolute top-1/4 right-20 opacity-20">
        <Lock className="w-12 h-12 animate-ping" />
      </div>
      <div className="absolute bottom-1/4 left-20 opacity-20">
        <AlertTriangle className="w-20 h-20 animate-spin" style={{ animationDuration: "10s" }} />
      </div>
    </div>
  );
}
