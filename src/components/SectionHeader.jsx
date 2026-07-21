import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ subtitle, title, description, align = 'center' }) => {
  const isCenter = align === 'center';
  
  return (
    <div className={`mb-16 md:mb-24 flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'} max-w-3xl ${isCenter ? 'mx-auto' : ''}`}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-gold font-grotesk uppercase tracking-[0.25em] text-xs font-semibold mb-3 block"
        >
          {subtitle}
        </motion.span>
      )}
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-luxury-black font-sans font-light tracking-tight text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight"
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-luxury-gray font-sans font-light text-base md:text-lg leading-relaxed max-w-2xl"
        >
          {description}
        </motion.p>
      )}
      
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: '60px' }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-[1px] bg-gold mt-6"
      />
    </div>
  );
};

export default SectionHeader;
