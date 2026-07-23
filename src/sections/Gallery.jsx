import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { HiX, HiOutlinePlus } from 'react-icons/hi';
import serviceLive from '../assets/service_live.png';
import wedding from '../assets/wedding.png';
import Butler from '../assets/Butler.png'

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = ['All', 'Food Photography', 'Wedding Events', 'Buffet Setup', 'Live Cooking', 'Serving Moments'];

  const galleryItems = [
    {
      id: 1,
      category: 'Food Photography',
      title: 'Crafted Wagyu Filet',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      category: 'Wedding Events',
      title: 'Royal Table Setting',
      image: wedding,
    },
    {
      id: 3,
      category: 'Buffet Setup',
      title: 'Artisanal Grazing Board',
      image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      category: 'Live Cooking',
      title: 'Bespoke Flame Searing',
      image: serviceLive,
    },
    {
      id: 5,
      category: 'Serving Moments',
      title: 'Butler Passed Hors d’Oeuvres',
      image: Butler,
    },
    {
      id: 6,
      category: 'Food Photography',
      title: 'Saffron Panna Cotta',
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 7,
      category: 'Wedding Events',
      title: 'Imperial Ballroom Banquet',
      image: 'https://images.unsplash.com/photo-1478812954026-9c750f0e89fc?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 8,
      category: 'Buffet Setup',
      title: 'High-End Canapé Table',
      image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 9,
      category: 'Serving Moments',
      title: 'Sip and Celebrate',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
    }
  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-secondary-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          subtitle=" ✦ Our Portfolio"
          title="The Gallery Showcase"
          description="Visual evidence of our attention to detail, presentation craftsmanship, and successful banquets from recent high-profile events."
          align="center"
        />

        {/* Filter Controls */}
        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-sans text-xs uppercase tracking-widest px-6 py-2.5 transition-all duration-300 border focus:outline-none ${
                activeFilter === filter
                  ? 'bg-luxury-black text-white border-luxury-black'
                  : 'bg-card-bg text-luxury-gray border-warm-brown/10 hover:border-gold hover:text-luxury-black'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="relative aspect-square overflow-hidden group cursor-pointer shadow-md bg-card-bg border border-warm-brown/10"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-luxury-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 border border-gold flex items-center justify-center text-gold mb-4"
                  >
                    <HiOutlinePlus size={20} />
                  </motion.div>
                  <span className="font-sans text-[10px] tracking-[0.2em] text-gold uppercase mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-sfc-primorsa text-white text-lg font-light tracking-wide">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-50 focus:outline-none"
            >
              <HiX size={32} />
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-[75vh] object-contain border border-white/10"
              />
              <div className="text-center mt-6">
                <span className="font-sans text-xs tracking-[0.25em] text-gold uppercase mb-1 block">
                  {selectedImage.category}
                </span>
                <h4 className="font-sfc-primorsa text-white text-2xl font-light tracking-wide">
                  {selectedImage.title}
                </h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
