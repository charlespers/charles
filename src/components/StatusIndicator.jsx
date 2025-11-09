import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const StatusIndicator = () => {
  const [status, setStatus] = useState("online");
  const [lastSeen, setLastSeen] = useState("Active now");

  useEffect(() => {
    const updateStatus = () => {
      const now = new Date();
      const minutes = now.getMinutes();
      setLastSeen("Active now");
      setStatus("online");
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed top-20 right-6 z-40"
    >
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg px-3 py-2 shadow-2xl flex items-center gap-2">
        <motion.div
          className="w-2 h-2 rounded-full bg-green-400"
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-xs text-gray-400">{lastSeen}</span>
      </div>
    </motion.div>
  );
};

export default StatusIndicator;

