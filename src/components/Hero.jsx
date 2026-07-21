import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import HeroVideo from './HeroVideo';
import ScrollIndicator from './ScrollIndicator';

/**
 * Hero Component
 * 
 * Main luxury Hero section featuring full-viewport autoplay video background,
 * Framer Motion fade-up animations, CTAs, statistics bar, and dynamic SVG scroll progress indicator.
 */
const Hero = () => {
  const heroRef = useRef(null);

  // Track scroll progress across the entire page
  const { scrollYProgress } = useScroll();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const statItems = [
    { number: '1,000+', label: 'Events Hosted' },
    { number: '50K+', label: 'Happy Guests' },
    { number: '15+', label: 'Years of Luxury' },
  ];

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center bg-black"
    >
      {/* Full-Screen Autoplay Background Video */}
      <HeroVideo
        videoSrc="/videos/hero-bg.mp4"
        overlayOpacity={0.45}
      />

      {/* Hero Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-center h-full pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Subtitle Tagline */}
          <motion.span
            variants={itemVariants}
            className="text-gold font-grotesk uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold mb-4 block"
          >
            Fine Culinary Artistry
          </motion.span>

          {/* H1 Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-white font-sfc-primorsa font-light text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] mb-6 drop-shadow-lg"
          >
            Creating Memorable <br />
            <span className="italic text-gold">Celebrations</span> with <br />
            Exceptional Catering
          </motion.h1>

          {/* Supporting Description */}
          <motion.p
            variants={itemVariants}
            className="text-white/80 font-sans font-light text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-10 drop-shadow-sm"
          >
            Crafting gourmet experiences tailored to weddings, corporate events, and high-end celebrations. Every dish is a masterpiece, every service is an act of elegance.
          </motion.p>

          {/* Action Buttons (CTAs) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
          >
            {/* Primary CTA */}
            <ScrollLink to="contact" smooth={true} offset={-80} duration={800} className="cursor-pointer">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-hover text-luxury-black font-grotesk text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 rounded-none shadow-xl"
              >
                Book Catering
              </motion.button>
            </ScrollLink>

            {/* Secondary CTA */}
            <ScrollLink to="menu" smooth={true} offset={-80} duration={800} className="cursor-pointer">
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/40 text-white font-grotesk text-xs uppercase tracking-[0.25em] transition-all duration-300 rounded-none hover:border-gold hover:text-gold"
              >
                Explore Menu
              </motion.button>
            </ScrollLink>
          </motion.div>
        </motion.div>

        {/* Floating Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-4xl border-t border-white/15 pt-6"
        >
          {statItems.map((stat, idx) => (
            <div key={idx} className="flex items-center space-x-4">
              <span className="font-sfc-primorsa text-3xl md:text-4xl text-gold font-light tracking-wider">
                {stat.number}
              </span>
              <span className="font-grotesk text-[10px] md:text-xs tracking-[0.2em] text-white/60 uppercase leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dynamic Scroll & Progress Indicator */}
      <ScrollIndicator
        progress={scrollYProgress}
        targetSection="about"
        size={60}
        strokeWidth={2.5}
        colors={{
          track: 'rgba(255, 255, 255, 0.15)',
          progress: '#C5A85C',
          border: 'rgba(255, 255, 255, 0.25)',
          arrow: '#FFFFFF',
        }}
      />
    </section>
  );
};

export default Hero;
