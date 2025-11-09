import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  // Get initials from company name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      whileHover={{ y: -2 }}
      className="relative group"
    >
      <div className="relative bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-500/30 transition-all duration-200">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 border border-white/10">
            <span className="text-white font-bold text-sm">{getInitials(experience.company_name)}</span>
          </div>
          <div className="flex-1">
            <h3 className="text-white text-lg font-semibold mb-1">{experience.title}</h3>
            <p className="text-blue-400 text-sm font-medium mb-1">{experience.company_name}</p>
            <p className="text-gray-400 text-xs">{experience.date}</p>
          </div>
        </div>

        <ul className="space-y-2 ml-16">
          {experience.points.map((point, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="text-gray-300 text-sm leading-relaxed flex items-start gap-2"
            >
              <span className="text-blue-400 mt-1 text-xs">•</span>
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => (
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
            Experience
          </span>
        </motion.div>
        <h2 className={`${styles.sectionHeadText} text-center mb-6`}>
          Work experience
        </h2>
      </div>
    </motion.div>

    <div className="max-w-4xl mx-auto">
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} index={index} />
        ))}
      </div>
    </div>
  </div>
);

export default SectionWrapper(Experience, "experience");
