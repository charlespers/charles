import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className="relative">
      <motion.div variants={textVariant()}>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-xs text-blue-400 font-medium tracking-wider uppercase">
              Technologies
            </span>
          </motion.div>
          <h2 className={`${styles.sectionHeadText} text-center mb-6`}>
            Tech stack
          </h2>
        </div>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-center text-gray-400 text-base max-w-2xl mx-auto mb-12"
      >
        Technologies I use to build modern applications and AI systems
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-5xl mx-auto">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={fadeIn("up", "spring", index * 0.05, 0.75)}
            whileHover={{ y: -2 }}
            className="group"
          >
            <div className="relative bg-white/5 border border-white/10 rounded-lg p-4 hover:border-blue-500/30 transition-all duration-200 flex flex-col items-center justify-center aspect-square">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-2 border border-white/10">
                <span className="text-white font-bold text-xs">{tech.name.split(' ')[0].charAt(0)}</span>
              </div>
              <p className="text-center text-gray-400 text-xs group-hover:text-blue-400 transition-colors">
                {tech.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
