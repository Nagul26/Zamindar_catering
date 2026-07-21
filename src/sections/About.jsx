import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import aboutImg from '../assets/about_catering.png';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-primary-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-6 relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative z-10"
            >
              {/* Main Image */}
              <div className="overflow-hidden aspect-[4/5] bg-luxury-bg shadow-2xl relative group">
                <img 
                  src={aboutImg} 
                  alt="Fine dining catering close-up" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Overlay filter */}
                <div className="absolute inset-0 bg-gold/5 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
              </div>
              
              {/* Decorative Frame */}
              <div className="absolute -top-6 -left-6 w-1/3 h-1/3 border-t-2 border-l-2 border-gold -z-10" />
              <div className="absolute -bottom-6 -right-6 w-1/3 h-1/3 border-b-2 border-r-2 border-gold -z-10" />
            </motion.div>
            
            {/* Elegant text label floating behind/beside the frame */}
            <div className="absolute -right-12 bottom-20 select-none pointer-events-none hidden xl:block">
              <span className="font-sfc-primorsa text-9xl text-gold/10 font-bold tracking-wider leading-none">
                Est. 2011
              </span>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gold font-grotesk uppercase tracking-[0.25em] text-xs font-semibold mb-3 block"
            >
              Our Heritage
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-luxury-black font-sans font-light tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight"
            >
              Crafting Curated Gastronomy for Royal Affairs
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans font-light text-luxury-gray text-base leading-relaxed space-y-6"
            >
              <p>
                For over a decade, Zamindar Catering has redefined the dining landscape for weddings, grand events, and intimate celebrations. Our brand represents a union of traditional heritage recipes and modern, high-end culinary arts, resulting in experiences that transcend the simple act of eating.
              </p>
              <p>
                We believe that every gathering is unique, requiring a custom culinary voice. Our team of world-class chefs, professional servers, and detail-oriented designers curate every detail of your menu and display to match the scale, elegance, and energy of your vision.
              </p>
              <p className="border-l border-gold pl-4 italic text-luxury-black font-sfc-primorsa text-sm">
                "We do not simply serve food; we design memories that live in the memory of your guests for decades to come."
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <Link to="contact" smooth={true} offset={-80} duration={800} className="cursor-pointer">
                <motion.button
                  whileHover={{ scale: 1.05, color: '#C5A85C' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-luxury-black text-white hover:bg-transparent border border-luxury-black hover:border-gold font-grotesk text-xs uppercase tracking-[0.2em] transition-all duration-300 rounded-none shadow-md"
                >
                  Read More
                </motion.button>
              </Link>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
