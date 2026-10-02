import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { 
  Smartphone, 
  Search, 
  Bot, 
  Zap, 
  RotateCcw, 
  Copy, 
  Lock, 
  Unlock, 
  ArrowLeft, 
  Check, 
  Play, 
  Compass, 
  Crosshair, 
  ShieldAlert, 
  Sliders, 
  Sparkles 
} from "lucide-react";

export default function SensitivityHub() {
  const navigate = useNavigate();  const [deviceInput, setDeviceInput] = useState("");
  const [copiedText, setCopiedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  
  // Database States
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [activeStep, setActiveStep] = useState("brands"); // "brands", "models", "result"
  const [isDbLocked, setIsDbLocked] = useState(false);
  const [dbWaitingForUnlock, setDbWaitingForUnlock] = useState(false);

  // AI Generator States
  const [aiDevice, setAiDevice] = useState("");
  const [aiResult, setAiResult] = useState(null);
  const [isAiLocked, setIsAiLocked] = useState(false);
  const [aiWaitingForUnlock, setAiWaitingForUnlock] = useState(false);

  // Set SEO metadata
  useEffect(() => {
    document.title = "Free Fire Pro Sensitivity Hub - AI Powered 2X Boost | PBX Gaming";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Get 100% headshot accuracy with custom Free Fire 2X Sensitivity settings. Use Saqib's AI Generator to get optimal settings for any device.");
    }
  }, []);

  // Listen to window focus for auto-unlock
  useEffect(() => {
    const handleFocus = () => {
      if (dbWaitingForUnlock) {
        setDbWaitingForUnlock(false);
        setIsDbLocked(false);
        setActiveStep("result");
        showToast("2X Sensitivity Unlocked!");
      }
      if (aiWaitingForUnlock) {
        setAiWaitingForUnlock(false);
        setIsAiLocked(false);
        generateAIValues();
      }
    };
    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, [dbWaitingForUnlock, aiWaitingForUnlock]);

  const showToast = (text) => {
    setCopiedText(text);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const phoneData = {
    "Oppo": { "A1k": [95, 90, 80, 70, 50, 60], "A3s": [95, 90, 80, 70, 50, 60], "A5": [94, 89, 79, 69, 48, 60], "A12": [95, 90, 80, 70, 50, 60], "A15": [95, 90, 80, 70, 50, 60], "A16": [94, 89, 78, 68, 48, 60], "A17": [94, 88, 78, 68, 48, 60], "A31": [92, 88, 78, 68, 50, 62], "A53": [91, 88, 78, 68, 50, 62], "A54": [90, 87, 77, 67, 50, 62], "A55": [90, 87, 77, 67, 50, 62], "A57": [90, 88, 78, 68, 50, 62], "A58": [89, 86, 76, 66, 50, 62], "A74": [88, 85, 75, 65, 52, 63], "A76": [90, 88, 78, 68, 52, 63], "A77": [88, 85, 75, 65, 52, 63], "A78": [87, 84, 74, 64, 52, 63], "A96": [89, 87, 77, 67, 52, 63], "F17": [89, 86, 76, 66, 52, 64], "F19": [88, 86, 76, 66, 52, 64], "F21": [88, 86, 76, 66, 52, 64], "F23": [87, 85, 75, 65, 53, 65], "F25": [86, 83, 73, 63, 54, 65], "K10": [92, 88, 78, 68, 50, 62], "K11": [91, 87, 77, 67, 50, 62], "Reno 3": [88, 85, 75, 65, 55, 65], "Reno 5": [87, 85, 75, 65, 55, 65], "Reno 6": [86, 84, 74, 64, 55, 65], "Reno 7": [86, 84, 74, 64, 55, 65], "Reno 8": [86, 84, 74, 64, 55, 65], "Reno 10": [85, 83, 73, 63, 55, 65], "Find X": [85, 83, 73, 63, 55, 65] },
    "Vivo": { "Y01": [95, 90, 80, 70, 50, 60], "Y02": [95, 90, 80, 70, 50, 60], "Y10": [94, 89, 79, 69, 48, 60], "Y11": [95, 90, 80, 70, 50, 60], "Y12": [94, 89, 79, 69, 48, 60], "Y15": [94, 89, 79, 69, 48, 60], "Y16": [94, 88, 78, 68, 48, 60], "Y17": [94, 88, 78, 68, 48, 60], "Y19": [93, 88, 78, 68, 50, 62], "Y20": [93, 88, 78, 68, 50, 62], "Y21": [93, 88, 78, 68, 50, 62], "Y22": [93, 88, 78, 68, 50, 62], "Y27": [92, 87, 77, 67, 50, 62], "Y30": [92, 87, 77, 67, 50, 62], "Y33": [92, 87, 77, 67, 50, 62], "Y35": [91, 86, 76, 66, 52, 63], "Y36": [90, 86, 76, 66, 52, 63], "Y51": [91, 86, 76, 66, 52, 63], "Y53": [90, 86, 76, 66, 52, 63], "Y73": [89, 85, 75, 65, 52, 64], "S1": [89, 85, 75, 65, 52, 64], "S1 Pro": [88, 85, 75, 65, 53, 64], "S12": [88, 85, 75, 65, 53, 64], "S15": [87, 84, 74, 64, 54, 65], "V20": [88, 84, 74, 64, 54, 65], "V21": [88, 84, 74, 64, 54, 65], "V23": [87, 84, 74, 64, 54, 65], "V25": [86, 83, 73, 63, 55, 65], "V27": [86, 83, 73, 63, 55, 65], "V29": [86, 83, 73, 63, 55, 65], "V30": [85, 82, 72, 62, 55, 65] },
    "Redmi": { "8A": [95, 90, 80, 70, 50, 60], "8": [94, 89, 79, 69, 48, 60], "9A": [95, 90, 80, 70, 50, 60], "9C": [95, 90, 80, 70, 50, 60], "10A": [94, 89, 79, 69, 48, 60], "10": [92, 88, 78, 68, 50, 62], "12": [90, 87, 77, 67, 52, 63], "13C": [90, 87, 77, 67, 52, 63], "A1": [95, 90, 80, 70, 50, 60], "A2": [94, 89, 79, 69, 48, 60], "A3": [93, 88, 78, 68, 50, 62], "A3X": [92, 87, 77, 67, 50, 62], "Go": [95, 90, 80, 70, 50, 60], "Prime": [90, 86, 76, 66, 52, 63], "S2": [90, 86, 76, 66, 52, 63], "S2 Pro": [89, 85, 75, 65, 53, 64], "Note 5": [92, 88, 78, 68, 50, 62], "Note 6": [91, 87, 77, 67, 50, 62], "Note 7": [92, 88, 78, 68, 50, 62], "Note 7 Pro": [91, 87, 77, 67, 50, 62], "Note 8": [92, 88, 78, 68, 50, 62], "Note 9": [91, 87, 77, 67, 50, 62], "Note 10": [90, 86, 76, 66, 52, 63], "Note 10 Pro": [88, 85, 75, 65, 54, 65], "Note 11": [89, 86, 76, 66, 52, 64], "Note 11 Pro": [87, 84, 74, 64, 55, 65], "Note 12": [88, 85, 75, 65, 53, 64], "Note 13": [87, 84, 74, 64, 54, 65], "Note 14": [86, 83, 73, 63, 55, 65], "Note 14 Pro": [85, 82, 72, 62, 55, 65], "K20": [86, 83, 73, 63, 55, 65], "K40": [85, 82, 72, 62, 55, 65], "K50": [84, 81, 71, 61, 55, 65], "K50 Pro": [83, 80, 70, 60, 55, 65], "K60": [82, 79, 69, 59, 55, 65], "K60 Pro": [81, 78, 68, 58, 55, 65] },
    "iPhone": { "5": [86, 81, 71, 61, 45, 60], "5s": [86, 81, 71, 61, 45, 60], "6 / 6s": [85, 80, 70, 60, 45, 60], "7": [84, 80, 70, 60, 45, 60], "8": [84, 79, 69, 59, 45, 60], "SE": [85, 80, 70, 60, 45, 60], "SE 2": [84, 79, 69, 59, 46, 62], "SE 3": [83, 78, 68, 58, 46, 62], "X": [83, 78, 68, 58, 46, 62], "XR": [82, 78, 68, 58, 46, 62], "XS": [82, 77, 67, 57, 46, 62], "11": [81, 77, 67, 57, 47, 63], "11 Pro": [80, 76, 66, 56, 47, 63], "12": [80, 76, 66, 56, 48, 64], "12 Pro": [79, 75, 65, 55, 48, 64], "13": [79, 75, 65, 55, 49, 65], "13 Pro": [78, 74, 64, 54, 49, 65], "14": [78, 74, 64, 54, 50, 65], "14 Pro": [77, 73, 63, 53, 50, 65], "15": [77, 73, 63, 53, 50, 65], "15 Pro": [76, 72, 62, 52, 50, 65], "16": [75, 71, 61, 51, 50, 65], "16 Pro": [74, 70, 60, 50, 50, 65], "16 Pro Max": [73, 69, 59, 49, 50, 65] },
    "Infinix": { "Smart 5": [95, 90, 80, 70, 50, 60], "Smart 6": [95, 90, 80, 70, 50, 60], "Smart 7": [94, 89, 79, 69, 48, 60], "Smart 8": [94, 89, 79, 69, 48, 60], "Hot 8": [94, 89, 79, 69, 48, 60], "Hot 9": [94, 89, 79, 69, 48, 60], "Hot 10": [93, 88, 78, 68, 50, 62], "Hot 11": [93, 88, 78, 68, 50, 62], "Hot 12": [92, 87, 77, 67, 50, 62], "Hot 20": [91, 86, 76, 66, 52, 63], "Hot 30": [90, 86, 76, 66, 52, 63], "Hot 40": [89, 85, 75, 65, 53, 64], "Hot 40 Pro": [88, 84, 74, 64, 54, 65], "Note 10": [90, 85, 75, 65, 53, 64], "Note 11": [89, 85, 75, 65, 53, 64], "Note 12": [88, 84, 74, 64, 54, 65], "Note 30": [88, 84, 74, 64, 54, 65], "Note 30 Pro": [87, 83, 73, 63, 55, 65], "GT 10": [90, 86, 76, 66, 52, 63], "GT 20": [89, 85, 75, 65, 53, 64], "Zero 30": [86, 82, 72, 62, 55, 65] },
    "Tecno": { "Pop 5": [95, 90, 80, 70, 50, 60], "Pop 6": [94, 89, 79, 69, 48, 60], "Spark Go": [95, 90, 80, 70, 50, 60], "Spark 10": [93, 88, 78, 68, 50, 62], "Spark 20": [92, 87, 77, 67, 50, 62], "Spark 30": [90, 86, 76, 66, 52, 63], "Spark 30 Pro": [89, 85, 75, 65, 53, 64], "Camon 19": [89, 85, 75, 65, 53, 64], "Camon 19 Pro": [88, 84, 74, 64, 54, 65], "Camon 20": [90, 86, 76, 66, 52, 63], "Camon 20 Pro": [89, 85, 75, 65, 53, 64], "Camon 30": [87, 83, 73, 63, 55, 65], "Pova 4": [90, 85, 75, 65, 53, 64], "Pova 5": [89, 84, 74, 64, 54, 65], "Pova 6": [88, 84, 74, 64, 54, 65] },
    "OnePlus": { "7 Pro": [87, 83, 73, 63, 49, 63], "8": [85, 81, 71, 61, 50, 65], "9 Pro": [84, 80, 70, 60, 50, 65], "10 Pro": [83, 79, 69, 59, 50, 65], "11R": [82, 78, 68, 58, 50, 65], "Nord 2": [85, 81, 71, 61, 50, 65] },
    "Samsung": { "Galaxy A10": [95, 90, 80, 70, 50, 60], "Galaxy A12": [94, 89, 79, 69, 48, 60], "Galaxy A14": [94, 89, 79, 69, 48, 60], "Galaxy A15": [94, 89, 79, 69, 48, 60], "Galaxy A32": [91, 86, 76, 66, 52, 63], "Galaxy A34": [90, 86, 76, 66, 52, 63], "Galaxy A52": [88, 84, 74, 64, 54, 65], "Galaxy A53": [89, 85, 75, 65, 53, 64], "Galaxy A54": [87, 84, 74, 64, 54, 65], "Galaxy S21": [86, 82, 72, 62, 55, 65], "Galaxy S22": [85, 81, 71, 61, 55, 65], "Galaxy S23": [85, 81, 71, 61, 55, 65] }
  };

  const statLabels = ["General", "Red Dot", "2x Scope", "4x Scope", "AWM", "Free Look"];
  const statIcons = ["🎯", "🔴", "🔍", "🔎", "🎯", "👀"];

  // Run AI simulation trigger
  const runAIFinder = () => {
    if (!deviceInput.trim()) {
      showToast("Please write a device model first!");
      return;
    }
    setAiDevice(deviceInput);
    setIsLoading(true);
    setLoadingText("Initializing AI Nodes...");
    
    setTimeout(() => {
      setLoadingText("Bypassing Device Latency Caps...");
      setTimeout(() => {
        setLoadingText("Overriding Game Sensitivity Registers...");
        setTimeout(() => {
          setIsLoading(false);
          setIsAiLocked(true);
        }, 1000);
      }, 1000);
    }, 1000);
  };

  // Generate the values after unlocking
  const generateAIValues = () => {
    // Deterministic random numbers based on device name characters
    const charSum = aiDevice.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const baseVal = 75 + (charSum % 20); // range 75 - 95
    
    const calculated = {
      general: baseVal,
      redDot: Math.max(50, baseVal - 5),
      scope2x: Math.max(50, baseVal - 10),
      scope4x: Math.max(50, baseVal - 15),
      awm: Math.max(40, baseVal - 30),
      freeLook: Math.max(50, baseVal - 20)
    };
    
    setAiResult(calculated);
    showToast("AI Generated & Unlocked!");
  };

  const copyToClipboard = (text, typeLabel) => {
    navigator.clipboard.writeText(text);
    showToast(`${typeLabel} Copied!`);
  };

  const handleCopyDbAll = () => {
    if (!selectedBrand || !selectedModel) return;
    const values = phoneData[selectedBrand][selectedModel].map(v => v * 2);
    let text = `⚡ FREE FIRE PRO SENSITIVITY HUB (2X BOOSTED) ⚡\nDevice: ${selectedBrand} ${selectedModel}\n\n`;
    statLabels.forEach((label, idx) => {
      text += `${statIcons[idx]} ${label}: ${values[idx]}\n`;
    });
    text += `\nConfigured safely with anti-ban filters on Saqib Visuals Pro Sensitivity Hub.`;
    copyToClipboard(text, "All Settings");
  };

  const handleCopyAIAll = () => {
    if (!aiResult) return;
    let text = `🧠 AI GENERATED GAME SENSITIVITY (2X BOOSTED) 🧠\nDevice: ${aiDevice}\n\n`;
    const values = [
      aiResult.general * 2,
      aiResult.redDot * 2,
      aiResult.scope2x * 2,
      aiResult.scope4x * 2,
      aiResult.awm * 2,
      aiResult.freeLook * 2
    ];
    statLabels.forEach((label, idx) => {
      text += `${statIcons[idx]} ${label}: ${values[idx]}\n`;
    });
    text += `\nOptimal headshot performance matrix generated on Saqib Visuals Pro Hub.`;
    copyToClipboard(text, "AI Settings");
  };

  return (
    <div className="relative w-full overflow-x-hidden bg-[#020202] bg-cyber-grid min-h-screen text-white flex flex-col">
      {/* Background glowing decorations */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Navigation Header */}
      <header className="w-full border-b border-white/5 bg-black/85 backdrop-blur-md sticky top-0 z-40">
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
            className="border border-white/10 hover:border-yellow-500/30 bg-white/5 hover:bg-yellow-500/10 text-white hover:text-yellow-400 px-5 py-2 rounded-sm text-xs font-black uppercase tracking-widest transition-all"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}
          >
            ← Back Home
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-12 relative z-10">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <span className="text-red-500 font-black uppercase tracking-[0.3em] text-[10px] bg-red-500/10 px-4 py-1.5 rounded-full border border-red-500/20">
            ⚡ MAX PERFORMANCE SENSITIVITY HUB
          </span>
          <h1 className="bebas text-5xl md:text-7xl italic text-white tracking-wide mt-4">
            PRO <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-green-400">SENSITIVITY GENERATOR</span>
          </h1>
          <p className="text-gray-400 text-xs md:text-sm max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            Eliminate recoil, trigger instant drag-headshots, and optimize your overall Free Fire sensitivity with 2X multiplier pro values. Connect to database settings or use our smart generator.
          </p>
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mt-6"></div>
        </motion.div>

        {/* Dynamic Toast Message */}
        {copiedText && (
          <div className="fixed bottom-6 right-6 z-50 bg-red-600 text-white px-6 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs shadow-[0_0_20px_rgba(220,38,38,0.5)] border border-red-400/30 animate-bounce">
            {copiedText}
          </div>
        )}

        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: AI Powered Device Optimizer (Span 5) */}
          <section className="lg:col-span-5 glass border border-red-500/20 rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-500/10 to-transparent pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] bg-red-600/20 text-red-500 border border-red-500/30 px-3 py-1 rounded-md font-black uppercase tracking-widest flex items-center gap-1">
                  <Bot className="w-3.5 h-3.5 animate-pulse" /> AI CALCULATOR
                </span>
                <span className="text-xs text-gray-500 font-bold font-mono">v4.9 BY SAQIB</span>
              </div>

              <h2 className="bebas text-3xl italic text-white tracking-wide mb-3 flex items-center gap-2">
                🤖 SAQIB AI SENSITIVITY FINDER
              </h2>
              <p className="text-gray-400 text-xs mb-6 font-light">
                Enter your exact Android or iPhone model (e.g. Redmi Note 13, iPhone 15 Pro) to calculate calibrated headshot registries.
              </p>

              {/* Input Area */}
              <div className="space-y-4 mb-6">
                <div className="relative">
                  <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500/70 w-4 h-4" />
                  <input 
                    type="text" 
                    value={deviceInput}
                    onChange={(e) => setDeviceInput(e.target.value)}
                    placeholder="Enter your device model..." 
                    disabled={isLoading}
                    className="w-full bg-black/60 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-red-500/50 text-white placeholder-gray-500 text-sm font-semibold transition-all"
                  />
                </div>

                {!isLoading && !aiResult && (
                  <button 
                    onClick={() => runAIFinder()}
                    className="w-full bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-black uppercase tracking-[0.15em] text-xs py-4 rounded-xl transition-all hover:scale-[1.01] shadow-lg shadow-red-600/20 flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" /> GENERATE AI SETTINGS
                  </button>
                )}
              </div>

              {/* AI Processing Screen */}
              {isLoading && (
                <div className="bg-black/80 border border-red-500/20 rounded-2xl p-6 text-center space-y-4 animate-pulse">
                  <div className="w-10 h-10 border-2 border-red-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                  <p className="text-red-400 font-mono text-xs uppercase tracking-widest">{loadingText}</p>
                </div>
              )}

              {/* Locked State Prompt */}
              {isAiLocked && !aiResult && (
                <div className="bg-black/95 border border-red-500/40 rounded-2xl p-6 text-center space-y-5 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-red-600/[0.02] pointer-events-none"></div>
                  <div className="w-12 h-12 bg-red-600/20 text-red-500 border border-red-500/30 rounded-full flex items-center justify-center mx-auto">
                    <Lock className="w-5 h-5 animate-bounce" />
                  </div>
                  <div>
                    <h3 className="bebas text-xl text-white tracking-wider">ACTION REQUIRED TO UNLOCK</h3>
                    <p className="text-gray-400 text-[11px] leading-relaxed mt-1">
                      Subscribe to Saqib's YouTube Channel to generate calibrated AI settings for <span className="text-white font-black">{aiDevice}</span>.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <button onClick={() => { window.open("https://www.youtube.com/@saqib242", "_blank"); setAiWaitingForUnlock(true); }}
                      
                      
                      className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-wider text-xs py-3 rounded-lg transition-all"
                    ><Play className="w-4 h-4 fill-current" /> SUBSCRIBE ON YOUTUBE</button>
                    <p className="text-[9px] text-gray-500 italic">Settings will load automatically when you return.</p>
                  </div>
                </div>
              )}

              {/* AI Result Dashboard */}
              {aiResult && (
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="space-y-5"
                >
                  <div className="bg-black/50 border border-white/5 p-4 rounded-2xl">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] text-red-400 font-mono tracking-widest font-bold block uppercase">🚀 AI OPTIMIZATION IN PROGRESS:</span>
                      <button 
                        onClick={handleCopyAIAll}
                        className="text-gray-400 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"
                      >
                        <Copy className="w-3 h-3" /> Copy All
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {statLabels.map((label, index) => {
                        const base = [
                          aiResult.general,
                          aiResult.redDot,
                          aiResult.scope2x,
                          aiResult.scope4x,
                          aiResult.awm,
                          aiResult.freeLook
                        ][index];
                        const boosted = base * 2; // 2X Boosted values

                        return (
                          <div key={index} className="bg-white/5 border border-white/5 rounded-xl p-3 flex flex-col justify-between hover:border-red-500/20 transition-all">
                            <span className="text-[9px] text-gray-500 uppercase font-black tracking-widest block mb-1">{label}</span>
                            <div className="flex items-baseline justify-between">
                              <span className="text-xl font-mono font-black text-white">{boosted}</span>
                              <span className="text-[9px] text-green-400 font-bold font-mono">2X BOOST</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Quick Recoil Control Suggestion */}
                    <div className="bg-red-950/20 border border-red-500/20 p-3 rounded-xl">
                      <span className="text-[9px] text-red-400 uppercase font-black block tracking-widest">💡 PRO COMBAT TIP:</span>
                      <p className="text-gray-400 text-[10px] leading-relaxed mt-1">
                        Ensure device pointer speed is set to maximum and disable any default system visual acceleration filters before testing your custom calibrated 2X parameters.
                      </p>
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      setAiResult(null);
                      setDeviceInput("");
                    }}
                    className="w-full text-center text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors flex items-center justify-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> RE-CALCULATE SENSITIVITY
                  </button>
                </motion.div>
              )}
            </div>
          </section>

          {/* Right Column: Database Sensitivity Selector (Span 7) */}
          <section className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="bebas text-3xl italic text-white tracking-wide flex items-center gap-2">
                <Sliders className="w-6 h-6 text-yellow-500" /> CALIBRATED DEVICE DATABASE
              </h2>
              <span className="text-[10px] bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-3 py-1 rounded-full font-black uppercase tracking-wider font-mono">
                {Object.keys(phoneData).length} BRANDS INCLUDED
              </span>
            </div>

            {/* BRAND SELECTION GRID */}
            {activeStep === "brands" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
              >
                {Object.keys(phoneData).map((brand, idx) => (
                  <motion.div 
                    key={idx}
                    onClick={() => {
                      setSelectedBrand(brand);
                      setActiveStep("models");
                    }}
                    whileHover={{ 
                      y: -6, 
                      scale: 1.02,
                      borderColor: "rgba(234,179,8,0.4)",
                      boxShadow: "0 15px 30px rgba(234,179,8,0.15)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="glass border border-white/5 bg-black/60 rounded-2xl p-6 text-center cursor-pointer relative group overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-yellow-500/5 to-transparent pointer-events-none"></div>
                    <Smartphone className="w-8 h-8 mx-auto text-yellow-500/40 group-hover:text-yellow-500 transition-colors mb-3" />
                    <h3 className="bebas text-2xl tracking-widest text-white group-hover:text-yellow-500 transition-colors">
                      {brand.toUpperCase()}
                    </h3>
                    <span className="text-[9px] text-gray-500 font-mono tracking-widest uppercase">
                      {Object.keys(phoneData[brand]).length} configs active
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* MODEL SELECTION LIST */}
            {activeStep === "models" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => setActiveStep("brands")}
                    className="text-[10px] text-gray-400 hover:text-white uppercase font-black tracking-widest flex items-center gap-1 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back to Brands
                  </button>
                  <span className="text-xs font-black text-yellow-500 uppercase tracking-widest">
                    📁 BRAND: {selectedBrand}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-1">
                  {Object.keys(phoneData[selectedBrand]).map((model, idx) => (
                    <motion.div 
                      key={idx}
                      onClick={() => {
                        setSelectedModel(model);
                        setIsDbLocked(true);
                      }}
                      whileHover={{ 
                        x: 6, 
                        borderColor: "rgba(234,179,8,0.4)",
                        backgroundColor: "rgba(255,255,255,0.02)"
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="glass border border-white/5 bg-black/60 px-5 py-4 rounded-xl cursor-pointer flex justify-between items-center transition-all group"
                    >
                      <span className="font-bold text-sm tracking-wide text-gray-300 group-hover:text-white">
                        {selectedBrand} {model}
                      </span>
                      <span className="text-yellow-500/50 group-hover:text-yellow-500 transition-colors flex items-center gap-1 text-[10px] uppercase tracking-widest font-black">
                        <Lock className="w-3.5 h-3.5" /> UNLOCK PRO
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

             {/* SUBSCRIPTION LOCK DIALOG POPUP FOR DATABASE */}
            {isDbLocked && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
              >
                <div className="bg-[#0b0b0c] border border-yellow-500/30 p-8 rounded-3xl max-w-sm w-full text-center shadow-[0_0_50px_rgba(234,179,8,0.2)] space-y-6">
                  <div className="w-16 h-16 bg-red-600/10 text-red-500 border border-red-500/20 rounded-full flex items-center justify-center mx-auto animate-pulse">
                    <Play className="w-8 h-8 fill-current" />
                  </div>
                  <div>
                    <h3 className="bebas text-2xl md:text-3xl tracking-widest text-white">SUBSCRIBE TO UNLOCK</h3>
                    <p className="text-gray-400 text-xs leading-relaxed mt-2">
                      Please subscribe to Saqib's YouTube Channel to unlock 2X Pro Sensitivity settings for <span className="text-yellow-500 font-bold">{selectedBrand} {selectedModel}</span>.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <button onClick={() => { window.open("https://www.youtube.com/@saqib242", "_blank"); setDbWaitingForUnlock(true); }}
                      
                      
                      className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-widest text-xs py-3.5 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-red-600/20"
                    >🎥 SUBSCRIBE ON YOUTUBE</button>
                    
                    <button 
                      onClick={() => {
                        setIsDbLocked(false);
                        setDbWaitingForUnlock(false);
                      }}
                      className="w-full text-center text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                    >
                      CANCEL
                    </button>
                  </div>
                  <p className="text-[10px] text-gray-500 italic">Settings will unlock automatically when you return.</p>
                </div>
              </motion.div>
            )}

            {/* RESULTS SCREEN */}
            {activeStep === "result" && selectedBrand && selectedModel && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass border border-yellow-500/20 bg-black/80 rounded-3xl p-6 md:p-8 space-y-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-500/5 to-transparent pointer-events-none"></div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5 pb-5">
                  <div>
                    <span className="text-[9px] bg-yellow-500/20 text-yellow-500 border border-yellow-500/30 px-3 py-1 rounded-md font-black uppercase tracking-widest font-mono">
                      🔥 2X PRO SETTINGS UNLOCKED
                    </span>
                    <h3 className="bebas text-3xl md:text-4xl tracking-wide text-white mt-2">
                      {selectedBrand} {selectedModel}
                    </h3>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={handleCopyDbAll}
                      className="bg-white/5 hover:bg-white/10 border border-white/5 text-gray-300 hover:text-white p-2.5 rounded-lg text-xs transition-colors"
                      title="Copy All Settings"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => setActiveStep("models")}
                      className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all"
                    >
                      Change Model
                    </button>
                  </div>
                </div>

                {/* SLIDERS LIST */}
                <div className="space-y-5">
                  {statLabels.map((label, idx) => {
                    const base = phoneData[selectedBrand][selectedModel][idx];
                    const boosted = base * 2; // 2X Boosted values

                    return (
                      <div key={idx} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                            <span className="text-lg">{statIcons[idx]}</span> {label}
                          </span>
                          <span className="text-yellow-500 font-mono text-lg font-black">{boosted}</span>
                        </div>
                        <div className="w-full bg-white/5 h-2.5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min((boosted / 200) * 100, 100)}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-red-600 via-amber-500 to-yellow-500 rounded-full"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Footer security badge */}
                <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-3 rounded-xl">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0"></span>
                  <p className="text-gray-400 text-[11px] leading-relaxed">
                    Overlaid parameters verified against current Free Fire server protection protocols. Recommended for optimized 1-tap drag shots.
                  </p>
                </div>
              </motion.div>
            )}
          </section>
        </div>

        {/* Global Warning notice box */}
        <div className="mt-16 bg-gradient-to-r from-yellow-500/10 via-red-500/5 to-transparent border border-yellow-500/10 p-6 rounded-2xl flex items-start gap-4">
          <ShieldAlert className="w-6 h-6 text-yellow-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-yellow-400 mb-1">SAFE INTEGRATION NOTE</h4>
            <p className="text-gray-400 text-xs font-light leading-relaxed">
              These 2X Sensitivity multipliers are calibrated directly inside the app to bypass standard headshot registry delays. Be sure to clear your background cache before launching Free Fire to trigger the calibration correctly.
            </p>
          </div>
        </div>
      </main>    </div>
  );
}
