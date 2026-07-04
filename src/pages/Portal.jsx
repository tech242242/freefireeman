import { useState, useEffect, useRef } from "react";
import { createClient } from '@supabase/supabase-js';
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Calendar, Trophy, Clock, Shield, Gamepad2, Users, Sparkles, MessageSquare, ArrowLeft, CheckCircle } from "lucide-react";
import useSEO from "../hooks/useSEO";

export default function Portal() {
  const navigate = useNavigate();

  useSEO({
    title: "Squad Registration Portal | Es Freefire Arm - PBX Gaming",
    description: "Access the official Squad Registration and Player Verification portal of PBX GAMING & Saqib x PBX Gaming. Set up your squad name, verify teammate IDs, and register for active custom tournaments.",
    keywords: "pbx gaming, squad registration, player verification, freefire squad portal, pbx gaming player login, es freefire arm squad, freefire registration pakistan, saqib x pbx gaming",
    ogImage: "https://i.ibb.co/YB1R7TSF/image.webp"
  });

  // Supabase Client
  const supabase = createClient(
    "https://psiypllbqopudppugaxe.supabase.co",
    "sb_publishable_PsL-7tSFu4EQU5ZHQgO6UA_Segl7g_e"
  );

  // States
  const [currentUser, setCurrentUser] = useState(null);
  const [squadActiveUser, setSquadActiveUser] = useState(null);
  const [tournaments, setTournaments] = useState([]);
  const [settings, setSettings] = useState({
    name: "PBX GAMING",
    uid: "---",
    cover_url: "",
    profile_url: "",
    reg_status: "on"
  });
  const [freeSeats, setFreeSeats] = useState(0);
  const [activeScreen, setActiveScreen] = useState("authScreen");
  const [toastMessage, setToastMessage] = useState({ text: "", color: "bg-green-600", show: false });
  const [statusBox, setStatusBox] = useState({ text: "", isError: false, show: false });
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Auth Form
    regName: "",
    regPhone: "",
    regPass: "",
    loginPhone: "",
    loginPass: "",
    // Payment Form
    payMethod: "Bank Transfer",
    senderName: "",
    trxId: "",
    screenshot: null,
    screenshotPreview: "",
    // Squad Login
    authId: "",
    authPass: "",
    // Squad Registration
    squad_name: "",
    leader_name: "",
    leader_uid: "",
    leader_phone: "",
    p2_name: "",
    p2_uid: "",
    p2_phone: "",
    p3_name: "",
    p3_uid: "",
    p3_phone: "",
    p4_name: "",
    p4_uid: "",
    p4_phone: "",
  });
  const [assignedCredentials, setAssignedCredentials] = useState({
    username: "",
    password: ""
  });
  const [showSignupForm, setShowSignupForm] = useState(true);
  const [isExistingRegistration, setIsExistingRegistration] = useState(false);

  // Refs
  const fileInputRef = useRef(null);

  // Initial session check & sync data
  useEffect(() => {
    checkSession();
    syncTournamentData();
    const interval = setInterval(syncTournamentData, 10000);
    return () => clearInterval(interval);
  }, []);

  // Sync Tournament details from Supabase
  const syncTournamentData = async () => {
    try {
      // Load settings
      const { data: settingsData } = await supabase
        .from('kashu_settings')
        .select('*')
        .eq('id', 1)
        .single();

      if (settingsData) {
        setSettings({
          name: settingsData.name || "PBX GAMING",
          uid: settingsData.uid || "---",
          cover_url: settingsData.cover_url || "",
          profile_url: settingsData.profile_url || "",
          reg_status: settingsData.reg_status || "on"
        });
      }

      // Calculate free seats
      const [{ data: auths }, { data: assigned }, { data: filled }] = await Promise.all([
        supabase.from('squad_auth').select('user_id'),
        supabase.from('payment_users').select('assigned_auth_id').eq('status', 'approved'),
        supabase.from('squad_registrations').select('auth_user_id')
      ]);

      const assignedIds = assigned ? assigned.map(a => a.assigned_auth_id) : [];
      const filledIds = filled ? filled.map(f => f.auth_user_id) : [];

      let freeCount = 0;
      if (auths) {
        auths.forEach(s => {
          if (!assignedIds.includes(s.user_id) && !filledIds.includes(s.user_id)) freeCount++;
        });
      }
      setFreeSeats(freeCount);

      // Load tournaments
      const { data: tours } = await supabase
        .from('kashu_tournaments')
        .select('*')
        .order('id', { ascending: true });

      setTournaments(tours || []);
    } catch (error) {
      console.error("Error syncing data in Portal:", error);
    }
  };

  // Auto-login to squad portal when credentials are available
  useEffect(() => {
    if (activeScreen === "squadPortal" && !squadActiveUser) {
      const authId = assignedCredentials.username || formData.authId;
      const authPass = assignedCredentials.password || formData.authPass;
      if (authId && authPass) {
        handleSquadLogin();
      }
    }
  }, [activeScreen, squadActiveUser, assignedCredentials, formData.authId, formData.authPass]);

  // Session management
  const checkSession = () => {
    const session = localStorage.getItem('k_army_user');
    if (session) {
      const user = JSON.parse(session);
      setCurrentUser(user);
      checkStatus(user, true);
    }
  };

  const saveSession = (user) => {
    localStorage.setItem('k_army_user', JSON.stringify(user));
    setCurrentUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('k_army_user');
    setCurrentUser(null);
    setSquadActiveUser(null);
    setActiveScreen("authScreen");
    setFormData({
      regName: "", regPhone: "", regPass: "",
      loginPhone: "", loginPass: "",
      payMethod: "Bank Transfer", senderName: "", trxId: "", screenshot: null, screenshotPreview: "",
      authId: "", authPass: "",
      squad_name: "", leader_name: "", leader_uid: "", leader_phone: "",
      p2_name: "", p2_uid: "", p2_phone: "",
      p3_name: "", p3_uid: "", p3_phone: "",
      p4_name: "", p4_uid: "", p4_phone: ""
    });
    setShowSignupForm(true);
    setIsExistingRegistration(false);
  };

  // Toast functions
  const showToast = (text, color = "bg-green-600") => {
    setToastMessage({ text, color, show: true });
    setTimeout(() => setToastMessage(prev => ({ ...prev, show: false })), 3000);
  };

  const showStatusBox = (text, isError = false) => {
    setStatusBox({ text, isError, show: true });
    setTimeout(() => setStatusBox(prev => ({ ...prev, show: false })), 3500);
  };

  // Handle form changes
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      setFormData(prev => ({ ...prev, [name]: file }));
      
      if (name === "screenshot" && file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData(prev => ({ ...prev, screenshotPreview: reader.result }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Copy to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    showToast("Copied to clipboard!");
  };

  // Auth Functions
  const handleSignup = async () => {
    const { regName, regPhone, regPass } = formData;
    if (!regName || !regPhone || !regPass) {
      showToast("Fill all fields!", "bg-red-600");
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('payment_users')
        .insert([{
          full_name: regName,
          phone_number: regPhone,
          password: regPass,
          status: 'new'
        }])
        .select();

      if (error) throw error;

      const user = data[0];
      saveSession(user);
      setActiveScreen("paymentScreen");
      showToast("Registration successful!");
    } catch (error) {
      showToast(error.message, "bg-red-600");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async () => {
    const { loginPhone, loginPass } = formData;
    
    if (!loginPhone || !loginPass) {
      showToast("Fill all fields!", "bg-red-600");
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('payment_users')
        .select('*')
        .eq('phone_number', loginPhone)
        .eq('password', loginPass)
        .single();

      if (error || !data) {
        showToast("Invalid Credentials", "bg-red-600");
        return;
      }

      saveSession(data);
      checkStatus(data);
      showToast("Login successful!");
    } catch (error) {
      showToast("Login failed!", "bg-red-600");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleAuth = (type) => {
    setShowSignupForm(type === 'signup');
    setFormData(prev => ({
      ...prev,
      regName: "", regPhone: "", regPass: "",
      loginPhone: "", loginPass: ""
    }));
  };

  // Check user status
  const checkStatus = async (user = currentUser, silent = false) => {
    if (!user) return;

    try {
      const { data } = await supabase
        .from('payment_users')
        .select('*')
        .eq('id', user.id)
        .single();

      if (data) {
        saveSession(data);

        switch (data.status) {
          case 'new':
            setActiveScreen("paymentScreen");
            break;
          case 'pending':
            setActiveScreen("pendingScreen");
            break;
          case 'approved':
            await fetchAssignedCredentials(data);
            break;
          case 'rejected':
            showToast("Application Rejected", "bg-red-600");
            setActiveScreen("authScreen");
            break;
          default:
            setActiveScreen("authScreen");
        }

        if (!silent) showToast("Welcome Back!");
      }
    } catch (error) {
      console.error("Status check error:", error);
    }
  };

  const fetchAssignedCredentials = async (user) => {
    if (!user.assigned_auth_id) {
      setActiveScreen("pendingScreen");
      return;
    }

    try {
      const { data } = await supabase
        .from('squad_auth')
        .select('password')
        .eq('user_id', user.assigned_auth_id)
        .single();

      setAssignedCredentials({
        username: user.assigned_auth_id,
        password: data ? data.password : "---"
      });
      setActiveScreen("successScreen");
    } catch (error) {
      console.error("Fetch credentials error:", error);
      setActiveScreen("pendingScreen");
    }
  };

  // Payment submission
  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.screenshot) {
      showToast("Please upload payment screenshot!", "bg-red-600");
      setIsLoading(false);
      return;
    }

    try {
      // Upload screenshot
      const fileName = `${Date.now()}_${currentUser.phone_number}`;
      const { error: imgError } = await supabase
        .storage
        .from('payment_proofs')
        .upload(fileName, formData.screenshot);

      if (imgError) throw imgError;

      const imgUrl = `https://psiypllbqopudppugaxe.supabase.co/storage/v1/object/public/payment_proofs/${fileName}`;

      // Update payment record
      const { error: dbError } = await supabase
        .from('payment_users')
        .update({
          payment_method: formData.payMethod,
          account_name: formData.senderName,
          trx_id: formData.trxId,
          screenshot_url: imgUrl,
          status: 'pending'
        })
        .eq('id', currentUser.id);

      if (dbError) throw dbError;

      // Update local user
      const updatedUser = { ...currentUser, status: 'pending' };
      saveSession(updatedUser);
      setActiveScreen("pendingScreen");
      showToast("Payment submitted successfully!");
    } catch (error) {
      showToast(error.message || "Payment submission failed!", "bg-red-600");
    } finally {
      setIsLoading(false);
    }
  };

  // Squad portal functions
  const goToSquadPortal = async () => {
    const authId = assignedCredentials.username;
    const authPass = assignedCredentials.password;

    if (!authId || !authPass) {
      setActiveScreen("squadPortal");
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('squad_auth')
        .select('*')
        .eq('user_id', authId.toUpperCase().trim())
        .eq('password', authPass)
        .single();

      if (error || !data) {
        setActiveScreen("squadPortal");
        setFormData(prev => ({
          ...prev,
          authId,
          authPass
        }));
        return;
      }

      setSquadActiveUser(authId.toUpperCase().trim());
      await checkIfRegistrationExists(authId.toUpperCase().trim());
      
      setFormData(prev => ({
        ...prev,
        authId: authId,
        authPass: authPass
      }));

      showToast("Access Granted! Opening Squad Portal...");
      setActiveScreen("squadPortal");
    } catch (err) {
      console.error(err);
      setActiveScreen("squadPortal");
    } finally {
      setIsLoading(false);
    }
  };

  const goBackToMain = () => {
    setActiveScreen("successScreen");
    setSquadActiveUser(null);
    setIsExistingRegistration(false);
  };

  const handleSquadLogin = async () => {
    const authId = assignedCredentials.username || formData.authId;
    const authPass = assignedCredentials.password || formData.authPass;

    if (!authId || !authPass) {
      showStatusBox("Enter Credentials!", true);
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('squad_auth')
        .select('*')
        .eq('user_id', authId.toUpperCase().trim())
        .eq('password', authPass)
        .single();

      if (error || !data) {
        showStatusBox("Access Denied: Check ID/Pass", true);
        return;
      }

      setSquadActiveUser(authId.toUpperCase().trim());
      await checkIfRegistrationExists(authId.toUpperCase().trim());
      showStatusBox("Login successful!");
    } catch (error) {
      showStatusBox("Login failed!", true);
    } finally {
      setIsLoading(false);
    }
  };

  const checkIfRegistrationExists = async (authId) => {
    try {
      const { data } = await supabase
        .from('squad_registrations')
        .select('*')
        .eq('auth_user_id', authId)
        .single();

      if (data) {
        setIsExistingRegistration(true);
        setFormData(prev => ({
          ...prev,
          squad_name: data.squad_name || "",
          leader_name: data.leader_name || "",
          leader_uid: data.leader_uid || "",
          leader_phone: data.leader_phone || "",
          p2_name: data.p2_name || "",
          p2_uid: data.p2_uid || "",
          p2_phone: data.p2_phone || "",
          p3_name: data.p3_name || "",
          p3_uid: data.p3_uid || "",
          p3_phone: data.p3_phone || "",
          p4_name: data.p4_name || "",
          p4_uid: data.p4_uid || "",
          p4_phone: data.p4_phone || "",
        }));
      } else {
        setIsExistingRegistration(false);
      }
    } catch (error) {
      setIsExistingRegistration(false);
    }
  };

  const handleSquadRegistration = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const submissionData = {
      auth_user_id: squadActiveUser,
      squad_name: formData.squad_name,
      leader_name: formData.leader_name,
      leader_uid: formData.leader_uid,
      leader_phone: formData.leader_phone,
      p2_name: formData.p2_name,
      p2_uid: formData.p2_uid,
      p2_phone: formData.p2_phone,
      p3_name: formData.p3_name,
      p3_uid: formData.p3_uid,
      p3_phone: formData.p3_phone,
      p4_name: formData.p4_name,
      p4_uid: formData.p4_uid,
      p4_phone: formData.p4_phone,
      updated_at: new Date().toISOString()
    };

    try {
      let result;
      let operation;

      if (isExistingRegistration) {
        result = await supabase
          .from('squad_registrations')
          .update(submissionData)
          .eq('auth_user_id', squadActiveUser);
        operation = "updated";
      } else {
        result = await supabase
          .from('squad_registrations')
          .insert([submissionData]);
        operation = "saved";
        setIsExistingRegistration(true);
      }

      if (result.error) throw result.error;
      
      showStatusBox(`Registration ${operation} successfully!`);
    } catch (error) {
      showStatusBox("Save failed! Check connection.", true);
    } finally {
      setIsLoading(false);
    }
  };

  // Render different screens
  const renderAuthScreen = () => {
    const activeTour = tournaments[0];

    return (
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-5xl mx-auto py-8">
        
        {/* Left Column: Tournament Details Card */}
        {activeTour ? (
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card overflow-hidden border border-pink-500/20 w-full lg:max-w-md flex flex-col"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
              <img 
                src={activeTour.banner_url || "https://i.ibb.co/YB1R7TSF/image.webp"} 
                className="w-full h-full object-cover brightness-110" 
                alt="Tournament Banner" 
              />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-pink-500/30 px-3 py-1 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-green-400">Active Match</span>
              </div>
            </div>
            
            <div className="p-6 md:p-8 flex-1 text-left relative">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-pink-500">Esports Tournament</span>
              <h2 className="bebas text-3xl md:text-4xl italic text-white mt-1 mb-4 uppercase leading-none drop-shadow-md">
                {activeTour.name || "PBX TOURNAMENT"}
              </h2>

              <div className="flex flex-wrap gap-2.5 mb-6">
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <span className="text-pink-500 text-sm">⏰</span>
                  <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">
                    {activeTour.time || "Time TBD"}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <span className="text-pink-500 text-sm">📅</span>
                  <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">
                    {activeTour.date || "Date TBD"}
                  </span>
                </div>
              </div>

              <div className="bg-black/40 p-4 rounded-xl border border-white/5 text-xs text-gray-400 italic mb-6 whitespace-pre-line leading-relaxed">
                {activeTour.rules || "Official Tournament Rules Apply. Team IDs will be verified."}
              </div>

              <div className="flex items-center justify-between bg-pink-500/5 p-4 rounded-2xl border border-pink-500/20 backdrop-blur-sm">
                <div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-pink-500/80 block mb-0.5">
                    Available Slots
                  </span>
                  <span className="bebas text-3xl text-white block leading-none">
                    {freeSeats} / 48
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-fuchsia-400 block mb-0.5">
                    Registration Fee
                  </span>
                  <span className="text-lg font-black text-white uppercase font-mono">
                    PKR 500
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-8 w-full lg:max-w-md text-left border border-white/10 flex flex-col justify-center min-h-[400px]"
          >
            <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mb-6 mx-auto"></div>
            <h2 className="text-xl font-black text-white uppercase italic mb-2 text-center">Loading active tournament...</h2>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider text-center">Fetching details from backend...</p>
          </motion.div>
        )}

        {/* Right Column: Auth Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative glass-card p-8 w-full max-w-md text-center"
        >
          <button 
            onClick={() => navigate('/home')} 
            className="absolute top-4 left-4 text-slate-400 hover:text-white transition-colors flex items-center justify-center bg-white/5 w-8 h-8 rounded-full border border-white/10 hover:bg-white/10 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          
          <h1 className="text-3xl font-black text-pink-500 rgb-text italic mb-2 uppercase mt-4">PBX GAMING</h1>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Tournament Gate Pass</p>

          {/* Signup Form */}
          {showSignupForm ? (
            <div className="space-y-4">
              <input 
                type="text" 
                name="regName"
                value={formData.regName}
                onChange={handleInputChange}
                placeholder="Full Name" 
                className="w-full p-4 input-field font-bold"
              />
              <input 
                type="tel" 
                name="regPhone"
                value={formData.regPhone}
                onChange={handleInputChange}
                placeholder="Phone Number (Login ID)" 
                className="w-full p-4 input-field font-bold"
              />
              <input 
                type="password" 
                name="regPass"
                value={formData.regPass}
                onChange={handleInputChange}
                placeholder="Create Password" 
                className="w-full p-4 input-field font-bold"
              />
              <button 
                onClick={handleSignup} 
                disabled={isLoading}
                className="w-full btn-gradient hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] text-white py-4 rounded-xl font-black uppercase tracking-widest transition-all disabled:opacity-50"
              >
                {isLoading ? "Registering..." : "Register Now"}
              </button>
              <p className="text-xs mt-4 text-slate-400 cursor-pointer hover:text-white" onClick={() => toggleAuth('login')}>
                Already registered? Login
              </p>
            </div>
          ) : (
            /* Login Form */
            <div className="space-y-4">
              <input 
                type="tel" 
                name="loginPhone"
                value={formData.loginPhone}
                onChange={handleInputChange}
                placeholder="Phone Number" 
                className="w-full p-4 input-field font-bold"
              />
              <input 
                type="password" 
                name="loginPass"
                value={formData.loginPass}
                onChange={handleInputChange}
                placeholder="Password" 
                className="w-full p-4 input-field font-bold"
              />
              <button 
                onClick={handleLogin} 
                disabled={isLoading}
                className="w-full btn-gradient hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] text-white py-4 rounded-xl font-black uppercase tracking-widest transition-all disabled:opacity-50"
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
              <p className="text-xs mt-4 text-slate-400 cursor-pointer hover:text-white" onClick={() => toggleAuth('signup')}>
                New User? Register
              </p>
            </div>
          )}
        </motion.div>
      </div>
    );
  };

  const renderPaymentScreen = () => {
    const activeTour = tournaments[0];

    return (
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-5xl mx-auto py-8">
        
        {/* Left Column: Tournament Details Card */}
        {activeTour && (
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card overflow-hidden border border-pink-500/20 w-full lg:max-w-md flex flex-col text-left"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
              <img 
                src={activeTour.banner_url || "https://i.ibb.co/YB1R7TSF/image.webp"} 
                className="w-full h-full object-cover brightness-110" 
                alt="Tournament Banner" 
              />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-pink-500/30 px-3 py-1 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-green-400">Selected Match</span>
              </div>
            </div>
            
            <div className="p-6 md:p-8 flex-1 text-left relative text-slate-200">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-pink-500">Esports Tournament</span>
              <h2 className="bebas text-3xl md:text-4xl italic text-white mt-1 mb-4 uppercase leading-none drop-shadow-md">
                {activeTour.name || "PBX TOURNAMENT"}
              </h2>

              <div className="flex flex-wrap gap-2.5 mb-6">
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <span className="text-pink-500 text-sm">⏰</span>
                  <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">
                    {activeTour.time || "Time TBD"}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <span className="text-pink-500 text-sm">📅</span>
                  <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">
                    {activeTour.date || "Date TBD"}
                  </span>
                </div>
              </div>

              <div className="bg-black/40 p-4 rounded-xl border border-white/5 text-xs text-gray-400 italic mb-6 whitespace-pre-line leading-relaxed">
                {activeTour.rules || "Official Tournament Rules Apply. Team IDs will be verified."}
              </div>

              <div className="flex items-center justify-between bg-pink-500/5 p-4 rounded-2xl border border-pink-500/20 backdrop-blur-sm">
                <div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-pink-500/80 block mb-0.5">
                    Available Slots
                  </span>
                  <span className="bebas text-3xl text-white block leading-none">
                    {freeSeats} / 48
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-fuchsia-400 block mb-0.5">
                    Registration Fee
                  </span>
                  <span className="text-lg font-black text-white uppercase font-mono">
                    PKR 500
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Right Column: Bank Details & Payment Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="glass-card p-8 w-full max-w-lg text-slate-200"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-black text-white uppercase italic">Bank Transfer Details</h2>
            <p className="text-slate-400 text-xs mt-1">Send Payment to Bank Account</p>
          </div>

          {/* Bank Account Details */}
          <div className="bg-white/5 p-6 rounded-2xl mb-6 border border-white/10 text-left">
            <p className="text-[10px] text-pink-500 font-black uppercase tracking-widest mb-4">Account Information</p>
            <div className="space-y-3">
              <div className="flex">
                <span className="text-xs text-slate-400 font-bold w-40">Account Holder:</span>
                <span className="text-sm font-bold text-white">Muhammad Fahad Ali</span>
              </div>
              <div className="flex">
                <span className="text-xs text-slate-400 font-bold w-40">Bank Name:</span>
                <span className="text-sm font-bold text-white">Askari Bank Limited</span>
              </div>
              <div className="flex">
                <span className="text-xs text-slate-400 font-bold w-40">Branch:</span>
                <span className="text-sm font-bold text-white">IBB Circular Road Branch, Lahore</span>
              </div>
              <div className="flex">
                <span className="text-xs text-slate-400 font-bold w-40">Account Number:</span>
                <span className="text-sm font-bold text-white">07060200020269</span>
              </div>
              <div className="flex">
                <span className="text-xs text-slate-400 font-bold w-40">IBAN:</span>
                <span className="text-sm font-bold text-white break-all">PK34ASCM0007060200020269</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <p className="text-xs text-slate-400 mb-2">Scan QR to get bank details</p>
              <div className="bg-white p-2 w-32 h-32 mx-auto rounded-lg flex items-center justify-center">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Bank%20Details%3A%0AAccount%20Holder%3A%20Muhammad%20Fahad%20Ali%0ABank%3A%20Askari%20Bank%20Limited%0AIBAN%3A%20PK34ASCM0007060200020269%0AAC%2FNo%3A%2007060200020269" 
                  alt="QR Code" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <form onSubmit={handlePaymentSubmit} className="space-y-4">
            <select 
              name="payMethod"
              value={formData.payMethod}
              onChange={handleInputChange}
              className="w-full p-4 input-field font-bold bg-black"
            >
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="Easypaisa">Easypaisa</option>
              <option value="JazzCash">JazzCash</option>
            </select>
            <input 
              type="text" 
              name="senderName"
              value={formData.senderName}
              onChange={handleInputChange}
              placeholder="Your Account Name" 
              className="w-full p-4 input-field font-bold" 
              required
            />
            <input 
              type="text" 
              name="trxId"
              value={formData.trxId}
              onChange={handleInputChange}
              placeholder="Transaction Reference / TRX ID" 
              className="w-full p-4 input-field font-bold" 
              required
            />
            <div 
              className="relative border-2 border-dashed border-slate-600 rounded-xl p-4 text-center cursor-pointer hover:border-pink-500 transition-all"
              onClick={() => fileInputRef.current?.click()}
            >
              <input 
                type="file" 
                ref={fileInputRef}
                name="screenshot"
                accept="image/*" 
                className="hidden" 
                onChange={handleInputChange}
              />
              <p className="text-xs font-bold text-slate-400 uppercase">
                {formData.screenshot ? "Image Selected" : "Upload Payment Screenshot"}
              </p>
              {formData.screenshotPreview && (
                <img 
                  src={formData.screenshotPreview} 
                  alt="Preview" 
                  className="mt-2 max-h-32 mx-auto rounded-lg"
                />
              )}
            </div>
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full btn-gradient hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] text-white py-4 rounded-xl font-black uppercase tracking-widest transition-all disabled:opacity-50"
            >
              {isLoading ? "Uploading..." : "Verify Payment"}
            </button>
          </form>
        </motion.div>
      </div>
    );
  };

  const renderPendingScreen = () => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="glass-card p-10 w-full max-w-md text-center"
    >
      <div className="w-20 h-20 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
      <h2 className="text-2xl font-black text-white uppercase mb-2">Payment Under Review</h2>
      <p className="text-slate-400 text-sm font-bold">
        Admin aapki payment check kar raha hai. Refresh karne ki zaroorat nahi, hum record save rakhengy.
      </p>
      <button 
        onClick={() => checkStatus(currentUser)}
        className="mt-8 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl font-bold text-xs uppercase"
      >
        Check Status Now
      </button>
    </motion.div>
  );

  const renderSuccessScreen = () => (
    <motion.div 
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.95 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="glass-card p-8 w-full max-w-md text-center relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600"></div>
      <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_#ec4899]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-3xl font-black text-white italic uppercase mb-1">Access Granted</h2>
      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">Your Slot is Confirmed!</p>
      
      <button 
        onClick={goToSquadPortal}
        className="w-full btn-gradient hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] text-white py-5 rounded-2xl font-black uppercase text-lg shadow-xl shadow-pink-600/20 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
      >
        Access Squad Portal
      </button>
    </motion.div>
  );

  const renderSquadPortal = () => (
    <div className="min-h-screen font-sans text-slate-200 antialiased overflow-x-hidden">
      {/* Background Image */}
      <div 
        className="fixed top-0 left-0 w-full h-full bg-cover opacity-75 -z-10"
        style={{
          backgroundImage: "url('https://i.pinimg.com/736x/c4/55/fd/c455fdd685e8c67c5600c14f35aa5226.jpg')",
          backgroundPosition: "center 50%"
        }}
      />

      {/* Status Box */}
      {statusBox.show && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`fixed top-6 inset-x-6 md:inset-x-auto md:right-6 md:w-80 z-[100] p-6 rounded-[2.5rem] shadow-2xl text-white font-bold text-center backdrop-blur-xl ${
            statusBox.isError ? 'bg-red-500/80' : 'bg-pink-600/80 border border-pink-500/30'
          }`}
        >
          {statusBox.text}
        </motion.div>
      )}

      {/* Login Section */}
      {!squadActiveUser ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="glass-card-ios p-8 md:p-12 w-full max-w-md animate-ios">
            <div className="text-center mb-10">
              <h2 className="text-xs font-black text-white/60 tracking-[0.6em] uppercase mb-1">Free Fire</h2>
              <h1 className="text-4xl font-black text-pink-500 rgb-glow italic tracking-tighter">PBX GAMING</h1>
              <p className="text-slate-400 mt-6 text-[10px] font-bold uppercase tracking-widest border-t border-white/10 pt-4">Squad Portal Login</p>
            </div>
            
            <div className="space-y-4">
              <input 
                type="hidden" 
                name="authId"
                value={formData.authId || assignedCredentials.username}
              />
              <input 
                type="hidden" 
                name="authPass"
                value={formData.authPass || assignedCredentials.password}
              />
              <button 
                onClick={handleSquadLogin}
                disabled={isLoading}
                className="w-full btn-gradient hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] text-white font-black py-5 rounded-3xl shadow-xl active:scale-95 transition-all mt-2 text-lg uppercase tracking-wider disabled:opacity-50"
              >
                {isLoading ? "AUTHENTICATING..." : "ACCESS SECURED PORTAL"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Main Registration Section */
        <div className="p-4 md:p-10 max-w-5xl mx-auto pb-24">
          <header className="flex justify-between items-start mb-14 animate-ios">
            <div>
              <h2 className="text-xs font-black text-white/50 tracking-[0.5em] uppercase mb-1">Free Fire</h2>
              <h1 className="text-4xl font-black text-pink-500 rgb-glow italic">PBX GAMING</h1>
              <div className="mt-3">
                <span className="text-[9px] font-black text-white/40 tracking-[0.2em] bg-white/5 px-4 py-1.5 rounded-full uppercase border border-white/5">
                  {squadActiveUser}
                </span>
              </div>
            </div>
            <button 
              onClick={goBackToMain}
              className="bg-white/5 hover:bg-red-500/20 text-white/70 px-6 py-3 rounded-2xl text-[10px] font-black transition-all backdrop-blur-md border border-white/10 uppercase tracking-widest"
            >
              Back to Main
            </button>
          </header>

          <form onSubmit={handleSquadRegistration} className="space-y-8 animate-ios">
            {/* Squad Identity */}
            <div className="glass-card-ios p-8 border-pink-500/20">
              <label className="text-[10px] font-black text-pink-400 uppercase tracking-[0.4em] mb-4 block">Team Name</label>
              <input 
                type="text" 
                name="squad_name"
                value={formData.squad_name}
                onChange={handleInputChange}
                required 
                className="w-full p-6 input-ios rounded-[2rem] font-black text-3xl placeholder:text-slate-800 uppercase italic" 
                placeholder="ENTER SQUAD NAME"
              />
            </div>

            {/* Leader Info */}
            <div className="glass-card-ios p-8">
              <h3 className="text-sm font-black text-white mb-8 uppercase flex items-center gap-3 italic">
                <span className="w-2 h-6 bg-pink-500 rounded-full shadow-[0_0_10px_#ec4899]"></span> Squad Leader (P1)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] text-slate-500 font-black ml-4 uppercase">Full Name</label>
                  <input 
                    type="text" 
                    name="leader_name"
                    value={formData.leader_name}
                    onChange={handleInputChange}
                    required 
                    className="w-full p-5 input-ios rounded-[1.5rem] font-bold text-sm" 
                    placeholder="Full Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-slate-500 font-black ml-4 uppercase">Game UID</label>
                  <input 
                    type="text" 
                    name="leader_uid"
                    value={formData.leader_uid}
                    onChange={handleInputChange}
                    required 
                    className="w-full p-5 input-ios rounded-[1.5rem] font-bold text-sm" 
                    placeholder="Game UID"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-slate-500 font-black ml-4 uppercase">WhatsApp</label>
                  <input 
                    type="text" 
                    name="leader_phone"
                    value={formData.leader_phone}
                    onChange={handleInputChange}
                    required 
                    className="w-full p-5 input-ios rounded-[1.5rem] font-bold text-sm" 
                    placeholder="WhatsApp No"
                  />
                </div>
              </div>
            </div>

            {/* Teammates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Player 2 */}
              <div className="glass-card-ios p-8">
                <p className="text-[11px] font-black text-pink-400 mb-6 uppercase tracking-widest border-b border-white/5 pb-3">Teammate 02</p>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    name="p2_name"
                    value={formData.p2_name}
                    onChange={handleInputChange}
                    placeholder="Name" 
                    className="w-full p-4 input-ios rounded-2xl text-sm font-bold"
                  />
                  <input 
                    type="text" 
                    name="p2_uid"
                    value={formData.p2_uid}
                    onChange={handleInputChange}
                    placeholder="Game UID" 
                    className="w-full p-4 input-ios rounded-2xl text-sm font-bold"
                  />
                  <input 
                    type="text" 
                    name="p2_phone"
                    value={formData.p2_phone}
                    onChange={handleInputChange}
                    placeholder="Phone No" 
                    className="w-full p-4 input-ios rounded-2xl text-sm font-bold"
                  />
                </div>
              </div>
              {/* Player 3 */}
              <div className="glass-card-ios p-8">
                <p className="text-[11px] font-black text-pink-400 mb-6 uppercase tracking-widest border-b border-white/5 pb-3">Teammate 03</p>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    name="p3_name"
                    value={formData.p3_name}
                    onChange={handleInputChange}
                    placeholder="Name" 
                    className="w-full p-4 input-ios rounded-2xl text-sm font-bold"
                  />
                  <input 
                    type="text" 
                    name="p3_uid"
                    value={formData.p3_uid}
                    onChange={handleInputChange}
                    placeholder="Game UID" 
                    className="w-full p-4 input-ios rounded-2xl text-sm font-bold"
                  />
                  <input 
                    type="text" 
                    name="p3_phone"
                    value={formData.p3_phone}
                    onChange={handleInputChange}
                    placeholder="Phone No" 
                    className="w-full p-4 input-ios rounded-2xl text-sm font-bold"
                  />
                </div>
              </div>
              {/* Player 4 */}
              <div className="glass-card-ios p-8">
                <p className="text-[11px] font-black text-pink-400 mb-6 uppercase tracking-widest border-b border-white/5 pb-3">Teammate 04</p>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    name="p4_name"
                    value={formData.p4_name}
                    onChange={handleInputChange}
                    placeholder="Name" 
                    className="w-full p-4 input-ios rounded-2xl text-sm font-bold"
                  />
                  <input 
                    type="text" 
                    name="p4_uid"
                    value={formData.p4_uid}
                    onChange={handleInputChange}
                    placeholder="Game UID" 
                    className="w-full p-4 input-ios rounded-2xl text-sm font-bold"
                  />
                  <input 
                    type="text" 
                    name="p4_phone"
                    value={formData.p4_phone}
                    onChange={handleInputChange}
                    placeholder="Phone No" 
                    className="w-full p-4 input-ios rounded-2xl text-sm font-bold"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-10 pb-12">
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full btn-gradient hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] text-white font-black py-7 rounded-[2.5rem] text-2xl active:scale-[0.98] transition-all flex items-center justify-center gap-4 uppercase tracking-widest disabled:opacity-50"
              >
                {isLoading ? (
                  "Saving..."
                ) : isExistingRegistration ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Update Registration
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Confirm Registration
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );

  // Render different screens
  const renderScreen = () => {
    switch (activeScreen) {
      case "authScreen":
        return renderAuthScreen();
      case "paymentScreen":
        return renderPaymentScreen();
      case "pendingScreen":
        return renderPendingScreen();
      case "successScreen":
        return renderSuccessScreen();
      case "squadPortal":
        return renderSquadPortal();
      default:
        return renderAuthScreen();
    }
  };

  return (
    <div className="min-h-screen">
      {/* Background Image */}
      <div 
        className="fixed top-0 left-0 w-full h-full bg-cover opacity-75 -z-10"
        style={{
          backgroundImage: "url('https://i.pinimg.com/736x/c4/55/fd/c455fdd685e8c67c5600c14f35aa5226.jpg')",
          backgroundPosition: "center 50%"
        }}
      />

      {/* Toast Notification */}
      {toastMessage.show && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-xl font-bold text-center shadow-2xl text-white ${toastMessage.color}`}
        >
          {toastMessage.text}
        </motion.div>
      )}

      {/* Logout Button */}
      {currentUser && activeScreen !== "squadPortal" && (
        <div className="fixed top-4 right-4 z-50">
          <button 
            onClick={handleLogout}
            className="bg-red-600/20 hover:bg-red-600 border border-red-500/50 px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all shadow-lg"
          >
            Logout
          </button>
        </div>
      )}

      {/* Main Portal Content */}
      {activeScreen !== "squadPortal" && (
        <div className="min-h-screen flex items-center justify-center p-4">
          <AnimatePresence mode="wait">
            {renderScreen()}
          </AnimatePresence>
        </div>
      )}

      {/* Squad Portal renders its own content */}
      {activeScreen === "squadPortal" && renderSquadPortal()}

      {/* Inline Styles */}
      <style>{`
        :root { --ios-blur: blur(25px); }
        .glass-card {
          background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 10px 40px rgba(0,0,0,0.5);
          border-radius: 2rem;
        }
        .glass-card-ios { 
          background: rgba(255, 255, 255, 0.08); backdrop-filter: var(--ios-blur); 
          border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 2.5rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
        }
        .input-field {
          background: rgba(0, 0, 0, 0.5); border: 1px solid rgba(255, 255, 255, 0.1);
          color: white; border-radius: 1rem; transition: 0.3s;
        }
        .input-field:focus { border-color: #ec4899; outline: none; background: rgba(0, 0, 0, 0.7); }
        .input-ios { 
          background: rgba(0, 0, 0, 0.4); border: 1px solid rgba(255, 255, 255, 0.1); 
          color: white; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .input-ios:focus { 
          border-color: #ec4899; background: rgba(0, 0, 0, 0.6);
          outline: none; transform: translateY(-2px);
        }
        .rgb-text {
          text-shadow: 0 0 10px rgba(236, 72, 153, 0.8), 0 0 20px rgba(168, 85, 247, 0.5);
          animation: pulse 3s infinite;
        }
        .rgb-glow {
          text-shadow: 0 0 8px rgba(236, 72, 153, 0.8), 0 0 20px rgba(168, 85, 247, 0.4), 0 0 30px rgba(236, 72, 153, 0.2);
          animation: rgbShift 4s infinite alternate;
        }
        @keyframes pulse { 
          0% { filter: hue-rotate(0deg); } 
          100% { filter: hue-rotate(15deg); } 
        }
        @keyframes rgbShift { 
          0% { filter: hue-rotate(0deg); } 
          100% { filter: hue-rotate(15deg); } 
        }
        @keyframes iosReveal { 
          from { opacity: 0; transform: scale(0.97) translateY(30px); } 
          to { opacity: 1; transform: scale(1) translateY(0); } 
        }
        .animate-ios { animation: iosReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .copy-btn {
          background: rgba(236, 72, 153, 0.1);
          border: 1px solid rgba(236, 72, 153, 0.3);
          padding: 4px 8px;
          border-radius: 8px;
          font-size: 10px;
          font-weight: bold;
          color: #ec4899;
          transition: all 0.2s;
        }
        .copy-btn:hover { 
          background: #ec4899; 
          color: white; 
        }
      `}</style>
    </div>
  );
}
