import { useEffect } from "react";

const KeyboardNavigation = () => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Skip if user is typing in an input/textarea
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }

      // Arrow key navigation between sections
      if (e.key === 'ArrowDown' && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        const sections = document.querySelectorAll('section[id], div[id]');
        const currentSection = Array.from(sections).find(section => {
          const rect = section.getBoundingClientRect();
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        });
        
        if (currentSection) {
          const currentIndex = Array.from(sections).indexOf(currentSection);
          const nextSection = sections[currentIndex + 1];
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }

      if (e.key === 'ArrowUp' && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        const sections = document.querySelectorAll('section[id], div[id]');
        const currentSection = Array.from(sections).find(section => {
          const rect = section.getBoundingClientRect();
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        });
        
        if (currentSection) {
          const currentIndex = Array.from(sections).indexOf(currentSection);
          const prevSection = sections[currentIndex - 1];
          if (prevSection) {
            prevSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }

      // Home key to scroll to top
      if (e.key === 'Home' && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      // End key to scroll to bottom
      if (e.key === 'End' && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return null;
};

export default KeyboardNavigation;

