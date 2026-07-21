import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import logo from "../assets/Zamindar_Catering.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Services', target: 'services' },
    { name: 'Menu', target: 'menu' },
    { name: 'Gallery', target: 'gallery' },
    { name: 'Contact', target: 'contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8 pt-4 lg:pt-6 pointer-events-none"
      >
        <div
          className={`pointer-events-auto w-full max-w-[1450px] bg-card-bg/90 backdrop-blur-md rounded-full border border-warm-brown/10 shadow-[0_10px_35px_rgba(0,0,0,0.08)] flex items-center justify-between transition-all duration-300 ease-in-out ${
            isScrolled
              ? 'py-2.5 px-6 lg:px-8 shadow-[0_12px_40px_rgba(0,0,0,0.12)] bg-card-bg/95'
              : 'py-3.5 px-6 lg:px-10'
          }`}
        >
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={800}
            className="cursor-pointer flex flex-col items-start"
          >
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              src={logo}
              alt="Zamindar Catering"
              className="h-10 sm:h-12 lg:h-14 w-auto object-contain rounded-md"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-10">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.target}>
                  <Link
                    to={link.target}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={800}
                    activeClass="!text-gold font-semibold"
                    className="font-grotesk text-xs uppercase tracking-[0.2em] text-luxury-black hover:text-gold transition-colors duration-300 cursor-pointer py-2 block"
                  >
                    <motion.span
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="inline-block"
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={800}
              className="cursor-pointer"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="px-6 py-2.5 bg-luxury-black text-white hover:bg-gold hover:text-luxury-black border border-luxury-black hover:border-gold font-grotesk text-xs uppercase tracking-[0.2em] transition-all duration-300 rounded-full shadow-sm"
              >
                Book Now
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-luxury-black hover:text-gold transition-colors duration-300 p-2 focus:outline-none flex items-center justify-center rounded-full hover:bg-black/5"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-card-bg/95 backdrop-blur-xl z-40 flex flex-col justify-center px-8"
          >
            <div className="absolute top-6 right-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-luxury-black hover:text-gold p-2"
              >
                <HiX size={24} />
              </button>
            </div>

            <ul className="flex flex-col space-y-6 text-center mb-10">
              {navLinks.map((link) => (
                <li key={link.target}>
                  <Link
                    to={link.target}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={800}
                    onClick={() => setIsMobileMenuOpen(false)}
                    activeClass="!text-gold font-semibold"
                    className="font-grotesk text-lg uppercase tracking-[0.2em] text-luxury-black hover:text-gold transition-colors duration-300 cursor-pointer block py-2"
                  >
                    <motion.span
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="inline-block"
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex justify-center">
              <Link
                to="contact"
                smooth={true}
                offset={-80}
                duration={800}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full max-w-xs"
              >
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-full py-4 bg-luxury-black text-white hover:bg-gold hover:text-luxury-black font-grotesk text-xs uppercase tracking-[0.25em] transition-all duration-300 rounded-full shadow-sm"
                >
                  Book Now
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
