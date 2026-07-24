import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import logo from "../assets/images/Zamindar_Catering.png";

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

  // const navLinks = [
  //   { name: 'Home', target: 'home' },
  //   { name: 'About', target: 'about' },
  //   { name: 'Services', target: 'services' },
  //   { name: 'Menu', target: 'menu' },
  //   { name: 'Gallery', target: 'gallery' },
  //   { name: 'Contact', target: 'contact' },
  // ];

  const leftLinks = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Services', target: 'services' },
    { name: 'Menu', target: 'menu' },
    { name: 'Gallery', target: 'gallery' },
  ];

  const rightLinks = [
   
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-20 w-full transition-all duration-300 ease-in-out border-b flex justify-center ${
          isScrolled
            ? 'bg-[#F5F0E8]/90 backdrop-blur-md border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-1.5 md:py-2'
            : 'bg-[#F5F0E8]/90 border-transparent py-3 md:py-4'
        }`}
      >
        <div className="w-full max-w-[1500px] px-6 sm:px-10 lg:px-12 flex items-center justify-between">
          {/* Desktop Navigation Layout */}
          <div className="hidden lg:flex items-center justify-between w-full">
            {/* Left Links */}
            <div className="flex-1 flex justify-start">
              <ul className="flex items-center space-x-10">
                {leftLinks.map((link) => (
                  <li key={link.target}>
                    <Link
                      to={link.target}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={800}
                      activeClass="!text-gold font-semibold"
                      className="font-sans text-xs uppercase tracking-[0.2em] text-luxury-black hover:text-gold transition-colors duration-300 cursor-pointer py-2 block relative group"
                    >
                      <span className="relative z-10">{link.name}</span>
                      <span className="absolute bottom-1.5 left-0 w-full h-[1.5px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Center Logo */}
            <div className="flex-shrink-0 flex justify-center mx-8">
              <Link
                to="home"
                smooth={true}
                duration={800}
                className="cursor-pointer flex flex-col items-center"
              >
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  src={logo}
                  alt="Zamindar Catering"
                  className="h-16 sm:h-18 lg:h-22 w-auto object-contain rounded-md"
                />
              </Link>
            </div>

            {/* Right Links & Button */}
            <div className="flex-1 flex justify-end items-center space-x-10">
              <ul className="flex items-center space-x-10">
                {rightLinks.map((link) => (
                  <li key={link.target}>
                    <Link
                      to={link.target}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={800}
                      activeClass="!text-gold font-semibold"
                      className="font-sans text-xs uppercase tracking-[0.2em] text-luxury-black hover:text-gold transition-colors duration-300 cursor-pointer py-2 block relative group"
                    >
                      <span className="relative z-10">{link.name}</span>
                      <span className="absolute bottom-1.5 left-0 w-full h-[1.5px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
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
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-5 py-2 bg-warm-brown text-white hover:bg-gold hover:text-luxury-black border border-warm-brown hover:border-gold font-sans text-xs uppercase tracking-[0.2em] transition-all duration-300 rounded-full shadow-sm"
                >
                  Book Now
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Layout */}
          <div className="flex lg:hidden items-center justify-between w-full">
            {/* Logo on Left */}
            <Link
              to="home"
              smooth={true}
              duration={800}
              className="cursor-pointer flex flex-col items-start"
            >
              <img
                src={logo}
                alt="Zamindar Catering"
                className="h-18 w-auto object-contain rounded-md"
              />
            </Link>

            {/* Hamburger Button on Right */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-luxury-black hover:text-gold transition-colors duration-300 p-2 focus:outline-none flex items-center justify-center rounded-full hover:bg-black/5"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
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
            className="fixed top-0 left-0 w-full h-screen bg-[#F5F0E8]/98 backdrop-blur-xl z-40 flex flex-col justify-center px-8"
          >
            <div className="absolute top-6 right-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-luxury-black hover:text-gold p-2"
              >
                <HiX size={24} />
              </button>
            </div>
{/* 
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
                    className="font-sans text-lg uppercase tracking-[0.2em] text-luxury-black hover:text-gold transition-colors duration-300 cursor-pointer block py-2"
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
            </ul> */}

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
                  className="w-full py-4 bg-warm-brown text-white hover:bg-gold hover:text-luxury-black border border-warm-brown hover:border-gold font-sans text-xs uppercase tracking-[0.25em] transition-all duration-300 rounded-full shadow-sm"
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
