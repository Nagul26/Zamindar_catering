import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiOutlinePlus } from 'react-icons/hi';
import dinner from '../assets/images/catering-table.png'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      title: 'Sip and Celebrate',
      category: 'Catering Events',
      url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 2,
      title: 'Artisanal Table Setting',
      category: 'Wedding Feast',
      url: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 3,
      title: 'Gourmet Sliders Buffet',
      category: 'Buffet Setup',
      url: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 4,
      title: 'Bespoke Plating',
      category: 'Fine Dining',
      url: 'https://media.istockphoto.com/id/2190243662/photo/delicious-individual-salad-cups-with-fresh-ingredients-on-a-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=SyNNyrzVCk032QIfuirXCKaB1CPZdDXNTowYQu_WWms=',
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-[#E6D9CE] relative overflow-hidden">
      {/* Background large text "GALLERY" */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none select-none z-0">
        <h2 className="font-sfc-primorsa text-[#EAE2D5] text-[15vw] leading-none font-bold opacity-60 uppercase">
          GALLERY
        </h2>
      </div>

      <div className="relative z-20 w-full flex flex-col items-center">
        {/* Header Title Block */}
        <div className="text-center mt-20 mb-16 md:mb-20">
          <h3 className="font-sfc-primorsa text-warm-brown text-xl md:text-2xl lg:text-5xl tracking-[0.25em] font-light uppercase">
            CATERING
          </h3>
          <h4 className="font-sfc-primorsa text-warm-brown text-3xl md:text-4xl lg:text-6xl tracking-[0.1em] font-light uppercase mt-2">
            THAT CREATES
          </h4>
          <h4 className="font-sfc-primorsa text-warm-brown text-3xl md:text-4xl lg:text-6xl tracking-[0.1em] font-bold uppercase mt-1">
            MOMENTS!
          </h4>
        </div>

        {/* 4-Column Seamless Images Block */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mb-24 border-y border-warm-brown/10">
          {images.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="relative aspect-[3/4] overflow-hidden group cursor-pointer border-r border-warm-brown/10 last:border-r-0 max-lg:border-b max-lg:border-warm-brown/10"
            >
              {/* Image */}
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Subtle Overlay on Hover */}
              <div className="absolute inset-0 bg-warm-brown-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center z-10">
                <div className="w-12 h-12 border border-gold flex items-center justify-center text-gold mb-3 rounded-full">
                  <HiOutlinePlus size={20} />
                </div>
                <span className="font-sans text-[10px] tracking-[0.2em] text-gold uppercase mb-1">
                  {item.category}
                </span>
                <h4 className="font-sfc-primorsa text-white text-lg font-light tracking-wide">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      
        {/* Testimonial Section */}
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">
          
          {/* Left Side: Overlapping Images */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div className="relative w-[340px] h-[280px]">
              {/* Background Rectangular Image */}
              <div className="w-[340px] h-[270px] rounded-2xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.15)] absolute left-0 top-4">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
                  alt="Plating"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Foreground Circular Image */}
              <div className="w-[180px] h-[180px] rounded-full  overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.15)] absolute right-0 left-55 top-50 bottom-0 z-10">
                <img
                  src="https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=600&q=80"
                  alt="Lamb chops"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Center Side: Testimonial Quote */}
          <div className="lg:col-span-6 text-center flex flex-col items-center justify-center relative min-h-[300px] px-4">
            {/* Faint Hatched World Map Background */}
            <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06] z-0">
              <defs>
                <pattern id="hatchedPattern" width="10" height="6" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="3" x2="10" y2="3" stroke="#5A3E2B" strokeWidth="1" />
                </pattern>
                <clipPath id="worldClip">
                  <path d="M 150,150 Q 180,100 250,120 T 320,160 T 300,220 T 220,250 T 150,180 Z" />
                  <path d="M 220,250 Q 280,260 290,320 T 260,420 T 220,440 T 200,320 Z" />
                  <path d="M 450,100 Q 550,80 700,90 T 850,120 T 900,180 T 800,250 T 600,220 T 450,180 Z" />
                  <path d="M 460,180 Q 550,190 580,250 T 520,380 T 460,350 T 420,250 Z" />
                  <path d="M 750,300 Q 820,310 850,350 T 800,400 T 730,350 Z" />
                </clipPath>
              </defs>
              <rect x="0" y="0" width="1000" height="500" fill="url(#hatchedPattern)" clipPath="url(#worldClip)" />
            </svg>

            {/* Rotating Badge */}
            <div className="relative w-24 h-24 flex items-center justify-center mb-6 z-10">
              <svg className="absolute w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                <defs>
                  <path
                    id="badgePath"
                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                    fill="none"
                  />
                </defs>
                <text className="font-sans text-[7px] font-semibold tracking-[0.25em] fill-warm-brown uppercase">
                  <textPath href="#badgePath" startOffset="0%">
                    HAPPY USERS SAYS ✦ HAPPY USERS SAYS ✦
                  </textPath>
                </text>
              </svg>
              <div className="w-12 h-12 rounded-full bg-warm-brown flex items-center justify-center shadow-md">
                <span className="font-sfc-primorsa text-white text-[24px] font-semibold leading-none translate-y-[1px]">”</span>
              </div>
            </div>

            {/* Quote Text */}
            <blockquote className="font-sfc-primorsa text-warm-brown text-[18px] md:text-[21px] lg:text-[26px] font-light leading-relaxed uppercase tracking-wider max-w-lg z-10">
              “EDENLY CRAFTED A MAGICAL PICNIC FOR US! THE PRESENTATION WAS BEAUTIFUL, AND THE CUISINE WAS ABSOLUTELY DELIGHTFUL. THANKS!”
            </blockquote>

            <span className="font-sans text-[24px] tracking-[0.2em] font-bold text-warm-brown uppercase mt-6 z-10">
              SHARON GUNTHER
            </span>
            <span className="font-sfc-primorsa text-[24px] italic text-luxury-gray mt-1 z-10">
              Fresh Design
            </span>
          </div>

          {/* Right Side: Portrait Image */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <div className="w-[350px] h-[520px] rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.15)]">
              <img
                src={dinner}
                alt="Dining Group"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
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
                src={selectedImage.url}
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
