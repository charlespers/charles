import { useState } from "react";
import { motion } from "framer-motion";

const CopyToClipboard = ({ text, children }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <motion.button
      onClick={handleCopy}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      {children}
      {copied && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-green-500 text-white text-xs rounded whitespace-nowrap"
        >
          Copied!
        </motion.div>
      )}
    </motion.button>
  );
};

export default CopyToClipboard;

