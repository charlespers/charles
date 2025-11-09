import { useEffect, useState } from "react";

const ViewportTracker = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          } else {
            setVisibleSections((prev) => {
              const next = new Set(prev);
              next.delete(entry.target.id);
              return next;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id], div[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Update active nav link based on visible sections
  useEffect(() => {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href && visibleSections.has(href.slice(1))) {
        link.classList.add("active-section");
      } else {
        link.classList.remove("active-section");
      }
    });
  }, [visibleSections]);

  return null;
};

export default ViewportTracker;

