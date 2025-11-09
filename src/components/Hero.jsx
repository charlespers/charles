import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
              Building AI systems and scalable applications at the intersection of machine learning and quantitative finance.
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
                  "Machine Learning Engineer",
                  "Full-Stack Developer",
                  "Quantitative Researcher",
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
              Get in touch
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
            className="flex gap-12 mt-20 pt-12 border-t border-white/10"
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
