import { motion } from 'framer-motion';
import React from 'react';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
    whileHover={{ y: -2 }}
    className="group"
  >
    <div className="relative bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-500/30 transition-all duration-200">
      <div className="flex flex-col items-center space-y-3">
        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
          <img src={icon} alt={title} className="w-8 h-8 object-contain" loading="lazy" />
        </div>
        <h3 className="text-white text-sm font-medium">{title}</h3>
      </div>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <div className="relative py-32">
      <motion.div variants={textVariant()}>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-xs text-blue-400 font-medium tracking-wider uppercase">
              About
            </span>
          </motion.div>
          <h2 className={`${styles.sectionHeadText} text-center mb-6`}>
            About me
          </h2>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 md:p-12 mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-300 text-lg leading-relaxed mb-8"
          >
            I'm a student at <span className="text-white font-medium">Princeton University</span> passionate about the intersection of 
            <span className="text-blue-400"> AI</span>, 
            <span className="text-purple-400"> machine learning</span>, and 
            <span className="text-pink-400"> quantitative finance</span>. 
            I build scalable applications and develop ML models that solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4"
          >
            <motion.a
              href="https://www.linkedin.com/in/charlesmuehl/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 rounded-lg transition-all duration-200 text-sm font-medium"
            >
              <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-white">LinkedIn</span>
            </motion.a>
          </motion.div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Core Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
