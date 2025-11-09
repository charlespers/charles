import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // This is a placeholder - the site is always dark, but we can add a brightness toggle
    const root = document.documentElement;
    if (!isDark) {
      root.style.filter = "brightness(1.1)";
    } else {
      root.style.filter = "brightness(1)";
    }
  }, [isDark]);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsDark(!isDark)}
      className="fixed top-24 left-6 z-40 w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition-colors"
      aria-label="Toggle theme"
    >
      <motion.svg
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
        className="w-5 h-5 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={isDark ? "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" : "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}
        />
      </motion.svg>
    </motion.button>
  );
};

export default ThemeToggle;

