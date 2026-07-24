import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

// Import local premium assets
import menuHeroBg from '../assets/images/menu_hero_bg.png';
import ctaBackground from '../assets/images/conservatory-aisle.png';
import ctaCenter from '../assets/images/catering-table.png';

// Categories data exactly matching the mockup image
const categories = [
  {
    name: 'CORPORATE MENU',
    description: 'Raw food & ingredients for home or service splits.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'SOCIAL EVENTS',
    description: 'Slowly cooked, modern and classic techniques.',
    image: 
        "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: 'CATERING WEDDING',
    description: 'Seasonal produce, high-end food and mixology.',
    image: 
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: 'WEDDING EVENTS',
    description: 'Crafted cocktails, wines, and soft pairings.',
    image: 
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: 'OUTDOOR CATERING',
    description: 'Crafted mocktails, wines, and soft pairings.',
    image: 
        "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: 'MODERN DINNER',
    description: 'Crafted cocktails, wines, and soft pairings.',
    image:
      "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=1200&q=80",
  },
];

// Variants for the overlapping card section
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const contentBoxVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const buttonFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.3,
    },
  },
};

const Menu = () => {
  // Fade-up stagger variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  return (
    <div className="bg-[#F8F2E7] text-[#3B2416] font-sans selection:bg-[#C79B53]/20 selection:text-[#C79B53] overflow-x-hidden min-h-screen">
      
      {/* 1. Hero Banner */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-[#23160D]">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img
            src={menuHeroBg}
            alt="Luxury Catering"
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-[#3B2416]/40" />
        </div>

        {/* Center Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="font-sfc-primorsa text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.1em] text-white"
          >
            MENU
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 flex items-center gap-3 font-sans text-xs uppercase tracking-[0.3em] text-white/80"
          >
            <Link to="/" className="hover:text-[#C79B53] transition-colors duration-300">Home</Link>
            <span className="text-white/40 font-light">&gt;</span>
            <span className="text-[#C79B53]">Menu</span>
          </motion.div>
        </div>
      </section>

      {/* 2. Introduction */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 max-w-[1500px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[700px] mx-auto"
        >
          <p className="font-sans text-sm sm:text-base leading-relaxed text-[#6B5A4E]">
            Explore the sample menus below. We're happy to custom design menus for your event, and we offer menu options for those with dietary restrictions or special preferences.
          </p>
        </motion.div>
      </section>

      {/* 3. Menu Categories Grid */}
      <section className="pb-24 px-6 sm:px-12 lg:px-24 max-w-[1500px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              className="group flex flex-col overflow-hidden rounded-[24px] bg-white p-5 shadow-[0_12px_35px_rgba(59,36,22,0.02)] border border-[#3B2416]/5 transition-all duration-300"
            >
              {/* Image with Rounded Corners & Hover Zoom */}
              <div className="relative h-[250px] w-full overflow-hidden rounded-[18px]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Title & Description */}
              <div className="pt-6 pb-2 text-center flex flex-col items-center">
                <h3 className="font-sfc-primorsa text-xl uppercase tracking-[0.1em] text-[#3B2416] group-hover:text-[#C79B53] transition-colors duration-300">
                  {cat.name}
                </h3>
                <p className="mt-3 font-sans text-xs sm:text-sm leading-relaxed text-[#6B5A4E] max-w-[280px]">
                  {cat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="relative w-full flex flex-col items-center">
        {/* Background Image Container starting immediately after the blog section */}
        <div className="relative w-full min-h-[600px] md:min-h-[800px] flex flex-col items-center pb-[250px] md:pb-[380px]">
          {/* Full-width Background Image (Fixed parallax scrolling effect) */}
          <div
            style={{ backgroundImage: `url(${ctaBackground})` }}
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
          />
          {/* Cream Overlapping Card */}
          <motion.div
            variants={contentBoxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10
            w-[92%] md:w-[980px]
            bg-[#F7F0E4]
            mt-0
            px-6 py-12
            md:px-[90px]
            md:py-[90px]
            flex flex-col items-center text-center
            shadow-[0_15px_50px_rgba(0,0,0,0.06)]"         >
            {/* Centered Vertical Image (Increased size) */}
                <div className="mx-auto w-[200px] h-[280px] md:w-[240px] md:h-[340px] rounded-[14px] overflow-hidden">              <img
                src={ctaCenter}
                alt="Catering Showcase"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="mt-10 w-full text-center font-koh uppercase text-[#4B2E1A] text-[42px] md:text-[68px] lg:text-[80px] leading-[0.92] tracking-wide font-normal"            >
              UNFORGETTABLE CATERING FOR ANY OCCASION!
            </motion.h2>

            {/* Paragraph */}
            <p className="mt-6 mx-auto max-w-[560px] text-[#6C6258] font-sans text-[17px] leading-[32px] text-center">
              Whether it's an intimate gathering, a corporate event, or a grand
              celebration, our expert culinary team crafts exquisite menus using
              the finest ingredients.
            </p>

            {/* Button */}
            <div className="mt-8 flex justify-center">
              <Link to="/#contact" className="inline-block">
                <motion.button
                  variants={buttonFade}
                  className="group/btn bg-[#4B2E1A] hover:bg-[#341F11] text-white font-sans text-[13px] font-semibold tracking-[2px] uppercase px-[40px] py-[20px] rounded-full flex items-center gap-3 transition-colors duration-300 shadow-sm cursor-pointer"
                >
                  RESERVE NOW
                  <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1.5">
                    <HiArrowRight size={15} />
                  </span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Menu;
