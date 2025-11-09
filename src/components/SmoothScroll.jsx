import { useEffect } from "react";

const SmoothScroll = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        const href = target.getAttribute('href');
        if (href && href !== '#') {
          const element = document.querySelector(href);
          if (element) {
            e.preventDefault();
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
};

export default SmoothScroll;

