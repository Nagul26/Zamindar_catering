import React from 'react';
import { motion } from 'framer-motion';

const MeetTeam = () => {
  // Anim variants for subtle entrance
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
      },
    }),
  };

  return (
    <section id="meet-team" className="relative py-24 bg-primary-bg overflow-hidden select-none">
    {/* <div>  
      1. Floating Tomatoes (Top-Left)
      <motion.div
        className="absolute top-[-40px] left-[-30px] z-30 pointer-events-none origin-top-left"
        initial={{ rotate: -15, scale: 0.85, opacity: 0 }}
        animate={{ rotate: [0, 4, -4, 0], scale: 1, opacity: 0.95 }}
        transition={{
          rotate: { repeat: Infinity, duration: 8, ease: "easeInOut" },
          default: { duration: 1.2, ease: "easeOut" }
        }}
      >
        <svg width="220" height="220" viewBox="0 0 200 200" className="drop-shadow-2xl">
          <path d="M20,20 Q60,30 100,20 T170,50" fill="none" stroke="#3d622c" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M70,25 Q65,60 60,80" fill="none" stroke="#3d622c" strokeWidth="3" />
          <path d="M120,22 Q130,70 135,90" fill="none" stroke="#3d622c" strokeWidth="3" />
          <g transform="translate(45, 30)">
            <path d="M 0,0 L -8,-12 L 2,-8 L 12,-12 L 4,-4 L 12,8 L 0,0" fill="#3d622c" />
            <circle cx="0" cy="12" r="26" fill="url(#tomatoGrad1)" />
            <ellipse cx="-8" cy="4" rx="7" ry="3" fill="white" opacity="0.6" transform="rotate(-30 -8 4)" />
          </g>
          <g transform="translate(70, 95)">
            <path d="M 0,0 L -4,-16 L 4,-10 L 16,-8 L 6,-2 L 8,10 L 0,0" fill="#3d622c" />
            <circle cx="0" cy="12" r="30" fill="url(#tomatoGrad2)" />
            <ellipse cx="-10" cy="3" rx="8" ry="4" fill="white" opacity="0.6" transform="rotate(-30 -10 3)" />
          </g>
          <g transform="translate(135, 80)">
            <path d="M 0,0 L -10,-12 L -2,-6 L 8,-14 L 3,-2 L 10,6 L 0,0" fill="#3d622c" />
            <circle cx="0" cy="10" r="28" fill="url(#tomatoGrad3)" />
            <ellipse cx="-8" cy="2" rx="7" ry="3.5" fill="white" opacity="0.6" transform="rotate(-30 -8 2)" />
          </g>
          <defs>
            <radialGradient id="tomatoGrad1" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ff5252" />
              <stop offset="75%" stopColor="#d32f2f" />
              <stop offset="100%" stopColor="#8e0000" />
            </radialGradient>
            <radialGradient id="tomatoGrad2" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ff6b6b" />
              <stop offset="75%" stopColor="#e63946" />
              <stop offset="100%" stopColor="#9b2226" />
            </radialGradient>
            <radialGradient id="tomatoGrad3" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ff5252" />
              <stop offset="75%" stopColor="#d32f2f" />
              <stop offset="100%" stopColor="#8e0000" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>

      2. Floating Basil Leaf & Cherry Tomato Slice (Top-Right)
      <motion.div
        className="absolute top-[40px] right-[60px] z-30 pointer-events-none hidden md:block"
        initial={{ y: -20, rotate: 10, opacity: 0 }}
        animate={{ y: [0, 8, -8, 0], rotate: [10, 16, 6, 10], opacity: 0.9 }}
        transition={{
          y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
          rotate: { repeat: Infinity, duration: 8, ease: "easeInOut" },
          default: { duration: 1.2 }
        }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100" className="drop-shadow-lg">
          <path d="M 50,10 C 20,35 20,65 50,85 C 80,65 80,35 50,10 Z" fill="url(#leafGrad)" />
          <path d="M 50,10 Q 51,45 50,85" fill="none" stroke="#234717" strokeWidth="2" opacity="0.4" />
          <path d="M 50,28 Q 38,36 33,40 M 50,42 Q 38,50 31,56 M 50,56 Q 40,64 36,70" fill="none" stroke="#234717" strokeWidth="1" opacity="0.3" />
          <path d="M 50,28 Q 62,36 67,40 M 50,42 Q 62,50 69,56 M 50,56 Q 60,64 64,70" fill="none" stroke="#234717" strokeWidth="1" opacity="0.3" />
          <defs>
            <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a3e635" />
              <stop offset="50%" stopColor="#65a30d" />
              <stop offset="100%" stopColor="#3f6212" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-[120px] right-[20px] z-30 pointer-events-none"
        initial={{ y: 20, rotate: -15, opacity: 0 }}
        animate={{ y: [0, -6, 6, 0], rotate: [-15, -10, -20, -15], opacity: 0.95 }}
        transition={{
          y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
          rotate: { repeat: Infinity, duration: 7, ease: "easeInOut" },
          default: { duration: 1.2 }
        }}
      >
        <svg width="70" height="70" viewBox="0 0 100 100" className="drop-shadow-lg">
          <circle cx="50" cy="50" r="44" fill="#bd1f2d" />
          <circle cx="50" cy="50" r="39" fill="#ea580c" opacity="0.9" />
          <circle cx="50" cy="50" r="36" fill="#b91c1c" />
          <path d="M 50,16 L 50,84 M 16,50 L 84,50" stroke="#ea580c" strokeWidth="3.5" />
          <g>
            <circle cx="34" cy="34" r="2.5" fill="#facc15" />
            <circle cx="38" cy="27" r="2" fill="#facc15" />
            <circle cx="66" cy="34" r="2.5" fill="#facc15" />
            <circle cx="62" cy="27" r="2" fill="#facc15" />
            <circle cx="34" cy="66" r="2.5" fill="#facc15" />
            <circle cx="38" cy="73" r="2" fill="#facc15" />
            <circle cx="66" cy="66" r="2.5" fill="#facc15" />
            <circle cx="62" cy="73" r="2" fill="#facc15" />
          </g>
          <path d="M 28,24 Q 38,26 42,42 Q 26,38 24,28 Z" fill="#84cc16" opacity="0.25" />
          <path d="M 72,24 Q 62,26 58,42 Q 74,38 76,28 Z" fill="#84cc16" opacity="0.25" />
          <path d="M 28,76 Q 38,74 42,58 Q 26,62 24,72 Z" fill="#84cc16" opacity="0.25" />
          <path d="M 72,76 Q 62,74 58,58 Q 74,62 76,72 Z" fill="#84cc16" opacity="0.25" />
        </svg>
      </motion.div>
    </div> */}
      {/* 3. Faint hatched/dotted World Map SVG (Center Background) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.06] select-none">
        <svg viewBox="0 0 1000 500" className="w-[85%] max-w-[1200px] h-auto">
          <g fill="none" stroke="var(--color-warm-brown)" strokeWidth="1.5" strokeDasharray="3 4">
            {/* North America */}
            <path d="M 150,130 Q 180,90 250,110 T 320,150 T 290,200 T 220,230 T 150,160 Z" />
            {/* South America */}
            <path d="M 210,230 Q 270,240 280,300 T 250,400 T 210,420 T 190,300 Z" />
            {/* Eurasia */}
            <path d="M 450,90 Q 550,70 700,80 T 850,110 T 890,170 T 780,230 T 580,200 T 450,160 Z" />
            {/* Africa */}
            <path d="M 450,160 Q 540,170 570,230 T 510,350 T 450,320 T 410,230 Z" />
            {/* Australia */}
            <path d="M 740,280 Q 810,290 840,330 T 790,380 T 720,330 Z" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 flex flex-col items-center">
        
        {/* Title Block */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <span className="text-[10px] sm:text-xs tracking-[0.3em] font-semibold text-warm-brown uppercase mb-4 flex items-center justify-center gap-2">
            ✦ MEET INCREDIBLE PEOPLE 
          </span>
          <h2 className="font-sfc-primorsa font-light text-warm-brown leading-[1.08] text-[36px] sm:text-[48px] md:text-[64px] lg:text-[76px] uppercase tracking-wide">
            MEET THE
            <br />
            PEOPLE BEHIND
            <br />
            ZAMINDAR
          </h2>
        </div>

        {/* Asymmetrical Grid of Chefs */}
<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 items-start justify-items-center">          
          {/* Card 1: Chef Alex Johnson (Left) */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="lg:col-span-4 flex flex-col items-start w-[350px] group"
          >
            <div className="w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-lg border border-warm-brown/5 relative">
              <motion.img
                src="https://cdn.prod.website-files.com/6768d22d2e2a54359ac30895/6773b531b465cbb3f4fdf631_Team%2001.webp"
                alt="Alex Johnson"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </div>
            <h3 className="font-sfc-primorsa text-warm-brown text-2xl lg:text-3xl font-normal uppercase mt-6 tracking-wide duration-300">
              ALEX JOHNSON
            </h3>
            <p className="text-luxury-gray text-xs md:text-sm tracking-widest uppercase mt-1">
              Founder & Main Chef
            </p>
          </motion.div>

          {/* Card 2: Chef Michael Harris (Middle - Offset Downwards) */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="lg:col-span-4 flex flex-col items-start w-[350px] md:mt-12 lg:mt-44 group"
          >
            <div className="w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-lg border border-warm-brown/5 relative">
              <motion.img
                src="https://cdn.prod.website-files.com/6768d22d2e2a54359ac30895/6773b5310ea91412031a72ab_Team%2002.webp"
                alt="Michael Harris"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </div>
            <h3 className="font-sfc-primorsa text-warm-brown text-2xl lg:text-3xl font-normal uppercase mt-6 tracking-wide  duration-300">
              MICHAEL HARRIS
            </h3>
            <p className="text-luxury-gray text-xs md:text-sm tracking-widest uppercase mt-1">
              Event planner
            </p>
          </motion.div>

          {/* Card 3: Kitchen Action Cooking (Right - Taller & Custom Styled) */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="col-span-1 md:col-span-2 lg:col-span-4 flex flex-col items-center lg:items-start w-full max-w-sm md:max-w-md lg:max-w-[400px] mx-auto mt-8 md:mt-10 lg:mt-0"
          >
            <div className="w-full aspect-[3/4.2] rounded-2xl lg:rounded-[24px] overflow-hidden shadow-lg border border-warm-brown/5 relative group">
              <motion.img
                src="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&h=1000&q=80"
                alt="Chef preparing fresh pasta"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-warm-brown-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6 lg:p-8">
                <span className="font-sfc-primorsa text-white text-base sm:text-lg lg:text-xl tracking-wide uppercase font-light leading-snug">
                  Crafting fresh culinary experiences daily
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default MeetTeam;
