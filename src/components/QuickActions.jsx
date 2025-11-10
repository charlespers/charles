import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getAssetPath } from "../utils/paths";

const QuickActions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { label: "View GitHub", icon: "→", action: () => window.open("https://github.com/charlespers", "_blank") },
    { label: "Open LinkedIn", icon: "→", action: () => window.open("https://www.linkedin.com/in/charlesmuehl/", "_blank") },
    { label: "Download Resume", icon: "↓", action: () => window.open(getAssetPath("Resume.pdf"), "_blank") },
    { label: "Send Email", icon: "✉", action: () => window.location.href = "mailto:charlespers.m@gmail.com" },
  ];

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-24 right-6 z-40 w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg transition-colors"
      >
        <span className="text-white text-xl">+</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            className="fixed top-32 right-6 z-40 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-2 shadow-2xl min-w-[180px]"
          >
            {actions.map((action, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => {
                  action.action();
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2 text-sm text-white"
              >
                <span>{action.icon}</span>
                <span>{action.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default QuickActions;

