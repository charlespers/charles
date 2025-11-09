import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CommandPrompt = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasSeenPrompt, setHasSeenPrompt] = useState(false);

  useEffect(() => {
    // Check if user has seen the prompt before
    const seen = localStorage.getItem("command-prompt-seen");
    if (!seen) {
      // Show prompt after a longer delay and only briefly
      const timer = setTimeout(() => {
        setIsVisible(true);
        // Auto-dismiss after 5 seconds
        const autoDismiss = setTimeout(() => {
          setIsVisible(false);
          localStorage.setItem("command-prompt-seen", "true");
          setHasSeenPrompt(true);
        }, 5000);
        return () => clearTimeout(autoDismiss);
      }, 2000);
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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="fixed top-20 right-6 z-50"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-3 shadow-lg max-w-xs">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 bg-white/10 border border-white/20 rounded text-xs text-white font-medium">⌘K</kbd>
                <span className="text-xs text-gray-400">for quick nav</span>
              </div>
              <button
                onClick={handleDismiss}
                className="ml-auto text-gray-500 hover:text-white transition-colors"
                aria-label="Dismiss"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
