import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const EmailSection = () => {
  return (
    <motion.div
      variants={fadeIn("", "", 0.1, 1)}
      className="relative py-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.a
            href="mailto:charlespers.m@gmail.com"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 rounded-lg transition-all duration-200 text-base font-medium text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Send Email</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(EmailSection, "");

