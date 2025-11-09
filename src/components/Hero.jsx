import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Typewriter from "typewriter-effect";

// Command Palette Component (Silicon Valley feature)
const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const commands = [
    { id: "about", label: "Go to About", action: () => window.location.hash = "#about" },
    { id: "projects", label: "View Projects", action: () => window.location.hash = "#projects" },
    { id: "contact", label: "Chat with Me", action: () => window.location.hash = "#contact" },
    { id: "github", label: "Open GitHub", action: () => window.open("https://github.com/charlespers", "_blank") },
    { id: "linkedin", label: "Open LinkedIn", action: () => window.open("https://www.linkedin.com/in/charlesmuehl/", "_blank") },
  ];

  const filteredCommands = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="relative w-full max-w-2xl mx-4"
      >
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or search..."
              className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none"
              autoFocus
            />
            <kbd className="px-2 py-1 text-xs bg-white/10 border border-white/20 rounded text-gray-400">ESC</kbd>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {filteredCommands.map((cmd) => (
              <button
                key={cmd.id}
                onClick={() => {
                  cmd.action();
                  setIsOpen(false);
                }}
                className="w-full px-4 py-3 text-left hover:bg-white/5 transition-colors flex items-center justify-between"
              >
                <span className="text-white text-sm">{cmd.label}</span>
                <kbd className="px-2 py-1 text-xs bg-white/10 border border-white/20 rounded text-gray-400">↵</kbd>
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Scroll Progress Indicator
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / windowHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50" style={{ width: `${scrollProgress}%` }} />
  );
};


// Network Graph Visualization
const NetworkGraph = () => {
  const nodes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
      <svg className="w-full h-full">
        {nodes.map((node, i) => (
          <g key={i}>
            {nodes.slice(i + 1).map((target) => (
              <line
                key={`${i}-${target.id}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${target.x}%`}
                y2={`${target.y}%`}
                stroke="rgba(59, 130, 246, 0.2)"
                strokeWidth="0.5"
              />
            ))}
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="2"
              fill="rgba(59, 130, 246, 0.4)"
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ScrollProgress />
      <CommandPalette />
      <NetworkGraph />
      
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className={`relative z-10 max-w-6xl mx-auto ${styles.paddingX} w-full`}>
        <div className="flex flex-col items-start">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-500/10 border border-blue-500/20 mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-xs text-blue-400 font-medium">Available for opportunities</span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 mb-8"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight">
              Charles
              <br />
              <span className="text-gray-400">Muehlberger</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl">
              Focused on AI/ML research and sustainable AI development. Building responsible, efficient systems that push the boundaries of machine learning.
            </p>
          </motion.div>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-blue-400 font-medium mb-12 min-h-[28px]"
          >
            <Typewriter
              options={{
                strings: [
                  "AI/ML Researcher",
                  "Sustainable AI Developer",
                  "Machine Learning Engineer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 100,
              }}
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              Chat with Me
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-200"
            >
              View work
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-12 mt-20 pt-12 border-t border-white/10"
          >
            <div>
              <div className="text-3xl font-bold text-white mb-1">10+</div>
              <div className="text-sm text-gray-400">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">5+</div>
              <div className="text-sm text-gray-400">Years experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">3</div>
              <div className="text-sm text-gray-400">Active roles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">9</div>
              <div className="text-sm text-gray-400">Active repos</div>
            </div>
          </motion.div>

          {/* Command Palette Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 text-xs text-gray-500"
          >
            Press <kbd className="px-2 py-1 bg-white/5 border border-white/10 rounded text-gray-400">⌘K</kbd> or <kbd className="px-2 py-1 bg-white/5 border border-white/10 rounded text-gray-400">Ctrl+K</kbd> to open command palette
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-gray-400 transition-colors cursor-pointer"
          >
            <span className="text-xs">Scroll</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
