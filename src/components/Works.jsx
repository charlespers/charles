import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// Project Filter Component
const ProjectFilter = ({ activeFilter, setActiveFilter }) => {
  const filters = ["All", "AI/ML", "Web", "Full-Stack"];
  
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeFilter === filter
              ? "bg-blue-500 text-white"
              : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

const ProjectCard = ({ name, description, tags, image, source_code_link, live_link, index }) => {
  const isWinner = description.includes("Winner") || tags.some(tag => tag.name.includes("Winner"));
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
      className="group relative"
    >
      {isWinner && (
        <div className="absolute -top-2 -right-2 z-20 px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-md text-xs font-bold text-white shadow-lg">
          Winner
        </div>
      )}
      <div className="relative bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-blue-500/30 transition-all duration-200 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative w-full h-48 overflow-hidden bg-white/5">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />
          
          {/* Action Buttons */}
          <div className="absolute bottom-3 right-3 flex gap-2">
            {live_link && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(live_link, "_blank")}
                className="w-8 h-8 rounded-md bg-blue-500 hover:bg-blue-600 flex items-center justify-center cursor-pointer transition-colors"
                title="View Live Site"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.div>
            )}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(source_code_link, "_blank")}
              className="w-8 h-8 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer border border-white/20 transition-colors"
              title="View Source Code"
            >
              <img src={github} alt="source code" className="w-4 h-4 object-contain" />
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors">
            {name}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className={`text-xs px-2 py-1 rounded-md ${tag.color} bg-white/5 border border-white/10`}
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = React.useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter(project => {
      const tagsString = project.tags.map(t => t.name.toLowerCase()).join(" ");
      const descriptionLower = project.description.toLowerCase();
      const combinedText = `${tagsString} ${descriptionLower}`;
      
      if (activeFilter === "AI/ML") {
        return (
          tagsString.includes("machine learning") || 
          tagsString.includes("ml") || 
          combinedText.includes("ai") ||
          combinedText.includes("neural") ||
          tagsString.includes("regression") ||
          tagsString.includes("quantitative")
        );
      }
      
      if (activeFilter === "Web") {
        return (
          tagsString.includes("react") || 
          tagsString.includes("web development") ||
          tagsString.includes("web") ||
          descriptionLower.includes("website") ||
          descriptionLower.includes("web application")
        );
      }
      
      if (activeFilter === "Full-Stack") {
        return (
          tagsString.includes("full-stack") || 
          tagsString.includes("fullstack") ||
          (tagsString.includes("react") && tagsString.includes("supabase"))
        );
      }
      
      return true;
    });
  }, [activeFilter]);

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
              Projects
            </span>
          </motion.div>
          <h2 className={`${styles.sectionHeadText} text-center mb-6`}>
            Featured work
          </h2>
        </div>
      </motion.div>
      
      <motion.div
        variants={fadeIn("", "", 0.1)}
        className="max-w-5xl mx-auto text-center mb-12"
      >
        <p className="text-gray-400 text-base leading-relaxed">
          A collection of projects showcasing innovation in AI, machine learning, and full-stack development.
        </p>
      </motion.div>

      <ProjectFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.name} 
                {...project} 
                index={index} 
              />
            ))
          ) : (
            <motion.div
              key="no-projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-full text-center py-12"
            >
              <p className="text-gray-400">No projects found in this category.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
