import { motion } from "framer-motion";

export default function DashboardHome() {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 text-center"
      >
        <h1 className="text-3xl font-black text-cyan-400 mb-4 uppercase">Admin Dashboard</h1>
        <p className="text-slate-400">Welcome to the management interface.</p>
      </motion.div>
    </div>
  );
}
