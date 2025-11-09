import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FocusMode = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isActive]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'f') {
        e.preventDefault();
        setIsActive(!isActive);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActive]);

  return (
    <>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => setIsActive(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 max-w-2xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-lg">Focus Mode</h3>
                <button
                  onClick={() => setIsActive(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-300 mb-4">
                Focus mode helps you concentrate on the content. Press <kbd className="px-2 py-1 bg-white/10 border border-white/20 rounded text-xs">⌘⇧F</kbd> or <kbd className="px-2 py-1 bg-white/10 border border-white/20 rounded text-xs">Ctrl⇧F</kbd> to toggle.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsActive(false)}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                >
                  Exit Focus Mode
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FocusMode;

