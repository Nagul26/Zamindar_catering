import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { BiLeaf, BiDish, BiTimeFive, BiBookOpen } from 'react-icons/bi';
import { GiChefToque } from 'react-icons/gi';
import { MdOutlineLocalOffer } from 'react-icons/md';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <BiLeaf className="w-8 h-8 text-gold" />,
      title: 'Fresh Ingredients',
      description: 'Sourcing organic, local produce and premium ingredients daily to ensure the highest standards of culinary quality and vibrant flavor profile.'
    },
    {
      icon: <GiChefToque className="w-8 h-8 text-gold" />,
      title: 'Professional Chefs',
      description: 'Our world-class culinary experts combine global techniques and traditional mastery to create culinary masterpieces for every palate.'
    },
    {
      icon: <BiBookOpen className="w-8 h-8 text-gold" />,
      title: 'Customized Menus',
      description: 'Completely tailored culinary journeys adapted to your tastes, event size, nutritional requirements, and cultural expectations.'
    },
    {
      icon: <BiTimeFive className="w-8 h-8 text-gold" />,
      title: 'On-Time Service',
      description: 'Punctuality is a virtue of royalty. We plan logistics meticulously to ensure your banquet is ready and served at the exact perfect moment.'
    },
    {
      icon: <BiDish className="w-8 h-8 text-gold" />,
      title: 'Elegant Presentation',
      description: 'Visual gastronomy that pleases the eye before the palate. Minimalist layouts, bespoke cutlery, and elegant setups designed to amaze.'
    },
    {
      icon: <MdOutlineLocalOffer className="w-8 h-8 text-gold" />,
      title: 'Affordable Packages',
      description: 'Bespoke high-end catering solutions structured to deliver maximum premium value and luxurious experiences within your defined scale.'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="why-choose-us" className="py-24 md:py-32 bg-secondary-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader 
          subtitle="The Zamindar Standard"
          title="Why Discriminating Clients Choose Us"
          description="We elevate catering from standard food service to a luxurious, customized event experience, matching exceptional taste with flawless service."
          align="center"
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-card-bg p-10 border border-warm-brown/10 shadow-sm flex flex-col items-start transition-all duration-300 relative group overflow-hidden"
            >
              {/* Gold top border animation */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500 ease-out" />
              
              {/* Icon Container with subtle animation */}
              <div className="mb-6 p-3 bg-primary-bg group-hover:bg-gold-light transition-colors duration-300">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="flex items-center justify-center"
                >
                  {feature.icon}
                </motion.div>
              </div>

              <h3 className="font-grotesk text-xl uppercase tracking-wider text-luxury-black mb-4 group-hover:text-gold transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="font-sans font-light text-luxury-gray text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
