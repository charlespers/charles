import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CommandPrompt = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasSeenPrompt, setHasSeenPrompt] = useState(false);

  useEffect(() => {
    // Check if user has seen the prompt before
    const seen = localStorage.getItem("command-prompt-seen");
    if (!seen) {
      // Show prompt after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setHasSeenPrompt(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("command-prompt-seen", "true");
    setHasSeenPrompt(true);
  };

  if (hasSeenPrompt || !isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-md w-full mx-4"
        >
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border-2 border-blue-500/30 rounded-xl p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Quick Navigation
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Press <kbd className="px-2 py-1 bg-white/20 border border-white/30 rounded text-white font-bold text-sm">⌘K</kbd> or <kbd className="px-2 py-1 bg-white/20 border border-white/30 rounded text-white font-bold text-sm">Ctrl+K</kbd> to open the command palette for quick access to all sections and links.
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>Try it now!</span>
                </div>
              </div>
              <button
                onClick={handleDismiss}
                className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
                aria-label="Dismiss"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPrompt;

