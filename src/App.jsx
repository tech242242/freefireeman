import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import WelcomeAnimation from "./components/WelcomeAnimation";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import TournamentHome from "./pages/TournamentHome";
import Portal from "./pages/Portal";
import Team from "./pages/Team";
import ProxyPanels from "./pages/ProxyPanels";
import SensitivityHub from "./pages/SensitivityHub";
import DashboardHome from "./pages/DashboardHome";
import Admin from "./pages/Admin";
import FakeAdmin from "./pages/FakeAdmin";
import WebDashboard from "./pages/WebDashboard";
import SquadManager from "./pages/SquadManager";
import AdminNavbar from "./components/AdminNavbar"; // Admin کے لیے الگ Navbar
import MobileBottomNavbar from "./components/MobileBottomNavbar";
import AnnouncementBar from "./components/AnnouncementBar";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");
    if (hasSeenWelcome === new Date().toDateString()) {
      setShowWelcome(false);
    }
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  const handleWelcomeComplete = () => {
    localStorage.setItem("hasSeenWelcome", new Date().toDateString());
    setShowWelcome(false);
  };

  if (isLoading) {
    return <div className="min-h-screen bg-[#030303] bg-cyber-grid flex items-center justify-center text-yellow-500 bebas text-3xl italic tracking-widest animate-pulse">Loading...</div>;
  }

  return (
    <Router>
      <ScrollToTop />
      {showWelcome ? (
        <WelcomeAnimation onComplete={handleWelcomeComplete} />
      ) : (
        <div className="flex flex-col min-h-screen overflow-x-hidden w-full max-w-[100vw]">
          <AnnouncementBar />
          <div className="flex-1">
            <Routes>
              {/* PUBLIC ROUTES */}
              <Route path="/" element={<Landing />} />
              <Route path="/home" element={<TournamentHome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/portal" element={<Portal />} /> {/* Add this line */}
              <Route path="/team" element={<Team />} />
              <Route path="/proxy-panels" element={<ProxyPanels />} />
              <Route path="/sensitivity-hub" element={<SensitivityHub />} />
              
              {/* ADMIN DASHBOARD ROUTES - باہر DashboardLayout سے الگ */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <DashboardHome />
                  </DashboardLayout>
                </ProtectedRoute>
              } />
              
              <Route path="/pbxadmin" element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <Admin />
                  </DashboardLayout>
                </ProtectedRoute>
              } />

              <Route path="/admin" element={<FakeAdmin />} />
              
              <Route path="/web-dashboard" element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <WebDashboard />
                  </DashboardLayout>
                </ProtectedRoute>
              } />
              
              <Route path="/squad-manager" element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <SquadManager />
                  </DashboardLayout>
                </ProtectedRoute>
              } />
              
              {/* Default redirect */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      )}
      {!showWelcome && <MobileBottomNavbar />}
    </Router>
  );
}

// Dashboard Layout - صرف Admin Navbar
function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-black">
      <AdminNavbar />
      <main className="pt-16"> {/* AdminNavbar کی height کے مطابق padding */}
        {children}
      </main>
    </div>
  );
}
