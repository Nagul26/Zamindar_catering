import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Link } from 'react-scroll';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

// Import local asset(s) and define high-end Unsplash URLs for the rest
import serviceLive from '../assets/service_live.png';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const lastScrollTime = useRef(0);

  const services = [
    {
      title: 'Wedding Catering',
      description: 'Elegant custom menus, stunning presentation, and flawless white-glove service. We design a culinary experience that matches the romance and majesty of your special day.',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Corporate Catering',
      description: 'From executive board meetings to grand annual galas, our team delivers premium culinary designs and seamless logistics that elevate your brand image.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Birthday Catering',
      description: 'Celebrate life milestones in style. Whether it is an intimate private gathering or a grand thematic party, we craft customized menus that delight your guests.',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Reception Catering',
      description: 'Curated collections of premium hors d’oeuvres, luxury cocktails, and artisanal grazing tables. Perfectly designed to stimulate conversation and delight palates.',
      image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Outdoor Catering',
      description: 'Gourmet dining without boundaries. We bring our full kitchen setups and luxury dining presentations to estates, beaches, and gardens, ensuring zero compromise on quality.',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Live Food Stations',
      description: 'Interactive culinary theater that engages and entertains. Watch our master chefs prepare flame-torched seafood, custom carving stations, and artisanal desserts.',
      image: serviceLive,
    },
  ];

  // Premium feature points for each service mapping
  const serviceFeatures = {
    'Wedding Catering': [
      'Customized multi-course menus',
      'Stunning floral & table presentations',
      'Flawless white-glove silver service',
      'Sommelier-curated wine pairings'
    ],
    'Corporate Catering': [
      'Executive board meeting luncheons',
      'Grand annual galas & logistics',
      'Premium coffee & custom mocktail bars',
      'Full dietary customization options'
    ],
    'Birthday Catering': [
      'Bespoke culinary themes & matching setups',
      'Artisanal luxury dessert tables',
      'Interactive live children food stations',
      'Signature welcome mocktail creations'
    ],
    'Reception Catering': [
      'Artisanal gourmet grazing tables',
      'Exquisite passed hot & cold canapés',
      'Premium mixology & mocktail bars',
      'Elegant bite-sized dessert platters'
    ],
    'Outdoor Catering': [
      'Fully-equipped mobile kitchen setups',
      'Temperature-controlled specialized transit',
      'Professional estate, beach & yacht staffing',
      'Weather-adaptive high-end menu designs'
    ],
    'Live Food Stations': [
      'Interactive flame-torched gourmet theater',
      'Professional chef carving & preparation',
      'Aura-infused liquid nitrogen dessert bars',
      'Fresh seafood & custom-tossed pasta bar'
    ]
  };

  // Screen size detection for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        return;
      }
      if (e.key === 'ArrowRight' && activeIndex < services.length - 1) {
        setActiveIndex(prev => prev + 1);
      } else if (e.key === 'ArrowLeft' && activeIndex > 0) {
        setActiveIndex(prev => prev - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, services.length]);

  // Mouse wheel scroll navigation support
  useEffect(() => {
    const handleWheel = (e) => {
      const now = Date.now();
      if (now - lastScrollTime.current < 800) return;

      if (Math.abs(e.deltaY) > 20) {
        if (e.deltaY > 0 && activeIndex < services.length - 1) {
          e.preventDefault();
          setActiveIndex(prev => prev + 1);
          lastScrollTime.current = now;
        } else if (e.deltaY < 0 && activeIndex > 0) {
          e.preventDefault();
          setActiveIndex(prev => prev - 1);
          lastScrollTime.current = now;
        }
      }
    };

    const element = sectionRef.current;
    if (element) {
      // Use non-passive event listener so we can prevent default scrolling
      element.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (element) {
        element.removeEventListener('wheel', handleWheel);
      }
    };
  }, [activeIndex, services.length]);

  // Card Animation Settings (Spring Transition)
  const cardTransition = {
    type: 'spring',
    stiffness: 120,
    damping: 20,
    mass: 1,
  };

  const cardAnimationVariants = {
    desktop: (diff) => {
      if (diff < 0) {
        // Card swiped away (flies upward and out of stack)
        return {
          y: -100,
          x: 0,
          scale: 0.9,
          opacity: 0,
          zIndex: 0,
          pointerEvents: 'none',
        };
      }
      if (diff === 0) {
        // Active Card in focus
        return {
          y: 0,
          x: 0,
          scale: 1,
          opacity: 1,
          zIndex: 30,
          pointerEvents: 'auto',
        };
      }
      if (diff === 1) {
        // Second card, layered behind
        return {
          y: 20,
          x: 0,
          scale: 0.95,
          opacity: 0.8,
          zIndex: 20,
          pointerEvents: 'none',
        };
      }
      if (diff === 2) {
        // Third card, layered behind
        return {
          y: 40,
          x: 0,
          scale: 0.90,
          opacity: 0.4,
          zIndex: 10,
          pointerEvents: 'none',
        };
      }
      // Out of view/hidden background cards
      return {
        y: 60,
        x: 0,
        scale: 0.85,
        opacity: 0,
        zIndex: 0,
        pointerEvents: 'none',
      };
    },
    mobile: (diff) => {
      if (diff < 0) {
        // Swiped away left on mobile
        return {
          x: '-120%',
          y: 0,
          scale: 0.9,
          opacity: 0,
          zIndex: 0,
          pointerEvents: 'none',
        };
      }
      if (diff === 0) {
        // Active card on mobile
        return {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          zIndex: 10,
          pointerEvents: 'auto',
        };
      }
      // Upcoming card off-screen right
      return {
        x: '120%',
        y: 0,
        scale: 0.9,
        opacity: 0,
        zIndex: 0,
        pointerEvents: 'none',
      };
    },
  };

  // Hover animations for active card
  const activeCardHoverVariants = {
    hover: {
      y: -8,
      boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)',
      borderColor: 'rgba(200, 155, 60, 0.25)',
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
      },
    },
  };

  const imageVariants = {
    initial: { scale: 1, filter: 'brightness(0.9)' },
    hover: {
      scale: 1.08,
      filter: 'brightness(1.02)',
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const overlayVariants = {
    initial: { opacity: 0.65 },
    hover: {
      opacity: 0.85,
      transition: { duration: 0.4 },
    },
  };

  const arrowVariants = {
    initial: { x: 0 },
    hover: {
      x: 6,
      transition: { type: 'spring', stiffness: 200, damping: 10 },
    },
  };

  // Features list entrance animations
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#F8F4EC] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          subtitle="Our Offerings"
          title="Curated Catering Services"
          description="Every celebration demands a distinct culinary narrative. We customize our fine dining setups, staff, and selections to suit the nature of your event."
          align="center"
        />

        {/* Dynamic Card Deck Stack container */}
        <div className="relative w-full max-w-5xl mx-auto h-[640px] md:h-[500px] lg:h-[460px] mt-16 flex justify-center items-start">
          {services.map((service, index) => {
            const diff = index - activeIndex;

            return (
              <motion.div
                key={index}
                custom={diff}
                variants={cardAnimationVariants}
                animate={isMobile ? 'mobile' : 'desktop'}
                transition={cardTransition}
                whileHover={diff === 0 ? 'hover' : undefined}
                drag={isMobile ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={(e, info) => {
                  if (!isMobile) return;
                  const threshold = 70;
                  if (info.offset.x < -threshold && activeIndex < services.length - 1) {
                    setActiveIndex(prev => prev + 1);
                  } else if (info.offset.x > threshold && activeIndex > 0) {
                    setActiveIndex(prev => prev - 1);
                  }
                }}
                className={`absolute left-0 right-0 mx-auto w-full h-full max-w-5xl ${diff === 0 ? 'cursor-grab active:cursor-grabbing md:cursor-pointer' : 'pointer-events-none'
                  }`}
                style={{
                  transformOrigin: 'bottom center',
                }}
              >
                {/* Outer Luxury Card Shell */}
                <motion.div
                  variants={diff === 0 ? activeCardHoverVariants : undefined}
                  className="w-full h-full rounded-[28px] border border-white/8 bg-[#1D1815] shadow-2xl backdrop-blur-md overflow-hidden flex flex-col md:flex-row relative transition-all duration-300"
                >
                  {/* Left Side: Service Image (45% on desktop) */}
                  <div className="relative w-full h-[240px] md:h-full md:w-[45%] overflow-hidden bg-[#2D241F]">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      variants={imageVariants}
                      initial="initial"
                      className="w-full h-full object-cover"
                    />
                    {/* Dark gradient overlay */}
                    <motion.div
                      variants={overlayVariants}
                      initial="initial"
                      className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1D1815] via-[#1D1815]/30 to-transparent pointer-events-none"
                    />
                  </div>

                  {/* Right Side: Service Details (55% on desktop) */}
                  <div className="w-full md:w-[55%] p-8 md:p-10 lg:p-12 flex flex-col justify-between relative h-auto md:h-full overflow-hidden">
                    {/* Transparent Giant service number counter */}
                    <div className="absolute right-8 top-6 md:right-10 md:top-8 font-grotesk text-7xl md:text-8xl lg:text-9xl font-bold select-none text-[#F5EEE3] opacity-[0.03] pointer-events-none leading-none">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div>
                      {/* Service Category */}
                      <span className="font-grotesk text-xs uppercase tracking-[0.25em] text-[#C89B3C] font-semibold block mb-3">
                        Luxury Offering
                      </span>
                      {/* Service Title */}
                      <h3 className="font-grotesk text-2xl md:text-3xl lg:text-4xl text-[#F5EEE3] uppercase tracking-wider mb-4 leading-tight">
                        {service.title}
                      </h3>
                      {/* Premium Description */}
                      <p className="font-sans font-light text-[#F5EEE3]/70 text-sm md:text-base leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Feature Checklist */}
                      <motion.ul
                        variants={listVariants}
                        initial="hidden"
                        animate={diff === 0 ? 'visible' : 'hidden'}
                        className="space-y-3 mb-8"
                      >
                        {(serviceFeatures[service.title] || []).map((feature, fIndex) => (
                          <motion.li
                            key={fIndex}
                            variants={itemVariants}
                            className="flex items-center gap-3 text-sm text-[#F5EEE3]/90"
                          >
                            <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-[#C89B3C]/10 text-[#C89B3C]">
                              <svg className="w-3.5 h-3.5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <motion.path
                                  initial={{ pathLength: 0 }}
                                  animate={diff === 0 ? { pathLength: 1 } : { pathLength: 0 }}
                                  transition={{ duration: 0.5, delay: fIndex * 0.15 + 0.3, ease: 'easeOut' }}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </span>
                            <span className="font-sans font-light tracking-wide">{feature}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>

                    {/* Book Service CTA Button */}
                    <div className="z-10 mt-auto">
                      <Link to="contact" smooth={true} offset={-80} duration={800} className="inline-block cursor-pointer">
                        <motion.button
                          className="group/btn flex items-center gap-4 font-grotesk text-xs uppercase tracking-[0.2em] font-bold text-[#C89B3C] border border-[#C89B3C]/25 hover:border-[#C89B3C] px-7 py-4 rounded-full transition-all duration-300 bg-transparent cursor-pointer"
                        >
                          <span>Book This Service</span>
                          <motion.span variants={arrowVariants} className="inline-block text-[#C89B3C] text-sm">
                            →
                          </motion.span>
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Stacking Slider Navigation Controls */}
        <div className="flex justify-center items-center gap-8 mt-12">
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: activeIndex === 0 ? 1 : 1.08 }}
            whileTap={{ scale: activeIndex === 0 ? 1 : 0.95 }}
            disabled={activeIndex === 0}
            onClick={() => setActiveIndex(prev => prev - 1)}
            className={`w-12 h-12 flex items-center justify-center rounded-full border border-warm-brown/20 text-[#593E30] transition-all duration-300 ${activeIndex === 0
                ? 'opacity-30 cursor-not-allowed border-warm-brown/10'
                : 'hover:border-[#C89B3C] hover:text-[#C89B3C] cursor-pointer bg-white/40 backdrop-blur-sm'
              }`}
          >
            <HiArrowLeft size={18} />
          </motion.button>

          {/* Luxury Minimalist Indicator */}
          <span className="font-grotesk text-xs uppercase tracking-[0.25em] text-[#593E30] font-semibold select-none">
            <span className="text-[#C89B3C]">{String(activeIndex + 1).padStart(2, '0')}</span>
            <span className="opacity-40 mx-2">/</span>
            <span className="opacity-60">{String(services.length).padStart(2, '0')}</span>
          </span>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: activeIndex === services.length - 1 ? 1 : 1.08 }}
            whileTap={{ scale: activeIndex === services.length - 1 ? 1 : 0.95 }}
            disabled={activeIndex === services.length - 1}
            onClick={() => setActiveIndex(prev => prev + 1)}
            className={`w-12 h-12 flex items-center justify-center rounded-full border border-warm-brown/20 text-[#593E30] transition-all duration-300 ${activeIndex === services.length - 1
                ? 'opacity-30 cursor-not-allowed border-warm-brown/10'
                : 'hover:border-[#C89B3C] hover:text-[#C89B3C] cursor-pointer bg-white/40 backdrop-blur-sm'
              }`}
          >
            <HiArrowRight size={18} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Services;

