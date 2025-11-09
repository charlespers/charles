import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

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
    const resumeUrl = 'https://drive.google.com/file/d/1ca93iRLZ9_L6lf323_3HT2qflpIGJeP-/view?usp=sharing';
    window.open(resumeUrl, '_blank');
  };

  return (
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
          className="flex items-center gap-3 group"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <div>
            <p className="text-white text-xl font-bold">Charles</p>
            <p className="text-gray-400 text-xs -mt-1">Muehlberger</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`text-sm font-medium transition-colors ${
                  active === link.title
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActive(link.title)}
              >
                {link.title}
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
  );
};

export default Navbar;
