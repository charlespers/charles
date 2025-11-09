import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      const progressPercent = (scrollTop / scrollableHeight) * 100;
      setProgress(Math.min(100, Math.max(0, progressPercent)));

      // Estimate reading time (average reading speed: 200 words per minute)
      const textContent = document.body.innerText || '';
      const wordCount = textContent.split(/\s+/).length;
      const estimatedMinutes = Math.ceil(wordCount / 200);
      setReadingTime(estimatedMinutes);
    };

    const handleScroll = () => {
      requestAnimationFrame(calculateProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    calculateProgress();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed bottom-6 left-6 z-40 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-4 shadow-2xl min-w-[200px]"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-400 font-medium">Reading Progress</span>
        <span className="text-xs text-white font-semibold">{Math.round(progress)}%</span>
      </div>
      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-2">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      <div className="text-xs text-gray-400">
        ~{readingTime} min read
      </div>
    </motion.div>
  );
};

export default ReadingProgress;

