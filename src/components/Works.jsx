import React, { useState, useRef, useEffect } from "react";
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

// Before/After Image Slider Component
const BeforeAfterSlider = ({ images, name, isWinner }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoAnimating, setIsAutoAnimating] = useState(true);
  const [direction, setDirection] = useState(1);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsAutoAnimating(false);
    updateSliderPosition(e);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    updateSliderPosition(e);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateSliderPosition = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  // Auto-oscillate animation
  useEffect(() => {
    if (images.length <= 1 || !isAutoAnimating || isDragging) return;

    const animate = () => {
      setSliderPosition((prev) => {
        let next = prev + direction * 0.5;
        
        if (next >= 95) {
          next = 95;
          setDirection(-1);
        } else if (next <= 5) {
          next = 5;
          setDirection(1);
        }
        
        return next;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAutoAnimating, isDragging, direction, images.length]);

  useEffect(() => {
    if (isDragging) {
      const handleMove = (e) => handleMouseMove(e);
      const handleUp = () => handleMouseUp();
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleUp);
      return () => {
        window.removeEventListener('mousemove', handleMove);
        window.removeEventListener('mouseup', handleUp);
      };
    }
  }, [isDragging]);

  if (images.length <= 1) {
    return (
      <div className="relative w-full h-full">
        <img
          src={images[0]}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            console.error(`Failed to load image: ${images[0]}`);
          }}
        />
        {isWinner && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-3 left-3 z-10"
          >
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 px-3 py-1.5 rounded-lg shadow-2xl flex items-center gap-2 border-2 border-white/30">
              <span className="text-white font-bold text-xs whitespace-nowrap">HackPrinceton Winner</span>
            </div>
          </motion.div>
        )}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden cursor-col-resize"
      onMouseDown={handleMouseDown}
      onClick={() => setIsAutoAnimating(false)}
    >
      {/* Before Image (Background) */}
      <div className="absolute inset-0">
        <img
          src={images[0]}
          alt={`${name} - Project`}
          className="w-full h-full object-cover"
          draggable={false}
        />
        {isWinner && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent pointer-events-none" />
        )}
      </div>

      {/* After Image (Foreground with clip) */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <img
          src={images[1]}
          alt={`${name} - Prize`}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-20 transition-opacity"
        style={{ left: `${sliderPosition}%`, opacity: isAutoAnimating ? 0.7 : 1 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-blue-500">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-3 bg-blue-500 rounded-full" />
            <div className="w-0.5 h-3 bg-blue-500 rounded-full" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 z-10 bg-black/40 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-medium">
        Project
      </div>
      <div className="absolute top-3 right-3 z-10 bg-black/40 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-medium">
        Prize
      </div>
    </div>
  );
};

const ProjectCard = ({ name, description, tags, image, source_code_link, live_link, index, prizeImage }) => {
  const isWinner = description.includes("Winner") || tags.some(tag => tag.name.includes("Winner"));
  const images = prizeImage ? [image, prizeImage] : [image];
  
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
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -top-3 -right-3 z-30"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(251, 191, 36, 0.5)",
                "0 0 40px rgba(251, 191, 36, 0.8)",
                "0 0 20px rgba(251, 191, 36, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="px-3 py-1.5 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-lg shadow-2xl border-2 border-white/30"
          >
            <div className="flex items-center gap-1.5">
              <span className="text-white font-bold text-xs whitespace-nowrap">Winner</span>
            </div>
          </motion.div>
        </motion.div>
      )}
      <div className={`relative bg-white/5 border rounded-lg overflow-hidden transition-all duration-200 h-full flex flex-col ${
        isWinner ? "border-yellow-500/30 hover:border-yellow-500/50" : "border-white/10 hover:border-blue-500/30"
      }`}>
        {/* Image Container with Slider */}
        <div className="relative w-full h-48 overflow-hidden bg-white/5">
          <BeforeAfterSlider images={images} name={name} isWinner={isWinner && prizeImage} />
          
          {/* Action Buttons */}
          <div className="absolute bottom-3 right-3 flex gap-2 z-10">
            {live_link && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(live_link, "_blank");
                }}
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
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className="w-8 h-8 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer border border-white/20 transition-colors"
              title="View Source Code"
            >
              <img src={github} alt="source code" className="w-4 h-4 object-contain" />
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors">
              {name}
            </h3>
          </div>
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
                prizeImage={project.name === "Jigsaw" ? "/photos/bestprize-jigsaw.png" : null}
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
