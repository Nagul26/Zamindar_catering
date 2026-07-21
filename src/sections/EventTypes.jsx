import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const EventTypes = () => {
  const events = [
    {
      title: 'Wedding Celebrations',
      category: 'Unforgettable Unions',
      image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Corporate Galas',
      category: 'Brand Milestones',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Birthday Soirées',
      category: 'Custom Gatherings',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Grand Receptions',
      category: 'Elegant Socials',
      image: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Housewarming Feasts',
      category: 'Intimate Homecomings',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Private Dinners',
      category: 'Bespoke Gastronomy',
      image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-24 md:py-32 bg-section-alt relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          subtitle="Tailored Settings"
          title="Bespoke Events We Cater"
          description="Whether celebrating a grand life milestone or hosting an exclusive corporate banquet, we construct bespoke environments and curate matching dining menus."
          align="center"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer shadow-lg"
            >
              {/* Background Image */}
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/40 to-transparent transition-colors duration-500 group-hover:bg-luxury-black/70 z-10" />

              {/* Luxury Accent Border (Fade in on hover) */}
              <div className="absolute inset-4 border border-gold/0 group-hover:border-gold/40 transition-all duration-500 z-20 pointer-events-none" />

              {/* Text Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <span className="font-grotesk text-[10px] tracking-[0.25em] text-gold uppercase mb-2 block opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {event.category}
                </span>
                
                <h3 className="font-grotesk text-white text-2xl md:text-3xl font-light tracking-wide mb-1 transition-all duration-500 transform group-hover:text-gold">
                  {event.title}
                </h3>
                
                <div className="w-0 group-hover:w-12 h-[1px] bg-gold transition-all duration-500 mt-2" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventTypes;
