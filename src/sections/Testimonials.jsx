import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { HiStar, HiArrowLeft, HiArrowRight } from 'react-icons/hi';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const testimonials = [
    {
      quote: "The culinary journey curated by Zamindar Catering for our daughter's wedding was absolute perfection. Guests are still talking about the Gold-Leaf Galouti Kebab and the flawless service. They are truly the gold standard of hospitality.",
      author: "Devendra Singh Rathore",
      role: "Royal Wedding Host",
      rating: 5,
    },
    {
      quote: "Zamindar Catering delivered an exceptional dining experience for our global leadership summit. The wood-fired stations and signature biryani were stellar, and their serving team operated with impeccable precision.",
      author: "Aishwarya Sen",
      role: "VP of Events, Tata Group",
      rating: 5,
    },
    {
      quote: "We hosted an intimate dinner party for our anniversary at our private residence. The custom menu, visual plating, and premium serving staff transformed our lawn into a Michelin-starred fine dining venue.",
      author: "Vikramaditya & Gayatri Oberoi",
      role: "Private Residence Hosts",
      rating: 5,
    },
  ];

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.5, ease: 'easeIn' }
    })
  };

  return (
    <section className="py-24 md:py-32 bg-primary-bg relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02]">
        <span className="font-sfc-primorsa text-[25vw] font-bold text-luxury-black">
          "
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          subtitle="Client Praise"
          title="Customer Testimonials"
          description="We take pride in our service. Read about the catering experiences from our esteemed hosts and event organizers."
          align="center"
        />

        {/* Testimonial Slider Container */}
        <div className="relative mt-8 min-h-[320px] sm:min-h-[260px] flex flex-col justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full text-center flex flex-col items-center px-4"
            >
              {/* Star Rating */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <HiStar key={i} className="text-gold w-6 h-6" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-sfc-primorsa font-light text-xl sm:text-2xl md:text-3xl text-luxury-black tracking-wide leading-relaxed italic mb-8 max-w-4xl">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              {/* Author & Info */}
              <div className="flex flex-col items-center">
                <span className="font-grotesk text-sm uppercase tracking-widest text-luxury-black font-semibold mb-1">
                  {testimonials[activeIndex].author}
                </span>
                <span className="font-sans text-xs tracking-wider text-gold uppercase">
                  {testimonials[activeIndex].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls */}
        <div className="flex justify-center items-center space-x-8 mt-12">
          <motion.button
            whileHover={{ scale: 1.1, borderColor: '#C5A85C', color: '#C5A85C' }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="w-12 h-12 border border-warm-brown/20 rounded-full flex items-center justify-center text-luxury-black/75 hover:text-gold transition-colors duration-300 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <HiArrowLeft size={18} />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > activeIndex ? 1 : -1);
                  setActiveIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none ${
                  activeIndex === idx ? 'bg-gold w-6' : 'bg-warm-brown/20'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1, borderColor: '#C5A85C', color: '#C5A85C' }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="w-12 h-12 border border-warm-brown/20 rounded-full flex items-center justify-center text-luxury-black/75 hover:text-gold transition-colors duration-300 focus:outline-none"
            aria-label="Next testimonial"
          >
            <HiArrowRight size={18} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
