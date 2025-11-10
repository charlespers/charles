import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { close, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

// Keyboard Shortcuts Indicator
const KeyboardShortcuts = () => {
  const [showShortcuts, setShowShortcuts] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === '?') {
        e.preventDefault();
        setShowShortcuts(!showShortcuts);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showShortcuts]);

  if (!showShortcuts) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setShowShortcuts(false)}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold">Keyboard Shortcuts</h3>
          <button onClick={() => setShowShortcuts(false)} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Command Palette</span>
            <kbd className="px-2 py-1 bg-white/5 border border-white/10 rounded text-gray-400">⌘K</kbd>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Show Shortcuts</span>
            <kbd className="px-2 py-1 bg-white/5 border border-white/10 rounded text-gray-400">⌘?</kbd>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleResume = () => {
    const resumeUrl = `${import.meta.env.BASE_URL}Resume.pdf`;
    window.open(resumeUrl, '_blank');
  };

  return (
    <>
      <KeyboardShortcuts />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <div className="flex flex-col">
              <p className="text-white text-xl font-bold">Charles</p>
              <p className="text-gray-400 text-xs -mt-1">Muehlberger</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="list-none hidden sm:flex flex-row gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`text-sm font-medium transition-colors relative group ${
                    active === link.title
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setActive(link.title)}
                >
                  {link.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={toggleResume}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Resume
              </button>
            </li>
            <li className="ml-4">
              <div className="text-xs text-gray-500">
                <kbd className="px-2 py-1 bg-white/5 border border-white/10 rounded">⌘K</kbd>
              </div>
            </li>
          </ul>

          {/* Mobile Navigation */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-6 h-6 object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                toggle ? 'flex' : 'hidden'
              } p-6 absolute top-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl bg-[#0a0a0f]/95 backdrop-blur-xl border border-white/10`}
            >
              <ul className="list-none flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className={`text-sm font-medium ${
                        active === link.title ? 'text-white' : 'text-gray-400'
                      }`}
                      onClick={() => {
                        setActive(link.title);
                        setToggle(false);
                      }}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
                <li>
                  <button
                    onClick={toggleResume}
                    className="text-sm font-medium text-gray-400"
                  >
                    Resume
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
