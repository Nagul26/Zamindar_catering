import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const BookingProcess = () => {
  const steps = [
    {
      num: '01',
      title: 'Send Inquiry',
      desc: 'Fill out our digital booking form with your event date, location, expected guest count, and specific culinary desires.'
    },
    {
      num: '02',
      title: 'Menu Discussion',
      desc: 'Our culinary concierge schedules a personalized call to co-create and fine-tune your bespoke dining menu.'
    },
    {
      num: '03',
      title: 'Custom Quotation',
      desc: 'Receive a transparent, fully customized quotation detailing ingredients, setup configurations, and staff assignments.'
    },
    {
      num: '04',
      title: 'Booking Confirmed',
      desc: 'Secure your date on our calendar. We begin coordinating logistics, ingredient sourcing, and visual decoration design.'
    },
    {
      num: '05',
      title: 'The Event Day',
      desc: 'Our chefs and serving staff execute the banquet with white-glove precision, allowing you to relax and enjoy.'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="py-24 md:py-32 bg-secondary-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          subtitle="Our Methodology"
          title="The Booking Process"
          description="How we coordinate from the initial spark of inquiry to a flawlessly executed banquet on your event day."
          align="center"
        />

        {/* Steps Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 mt-16"
        >
          {/* Connecting Line for Desktop */}
          <div className="absolute top-[35px] left-[10%] right-[10%] h-[1px] bg-warm-brown/10 hidden lg:block z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="relative flex flex-col items-center lg:items-start text-center lg:text-left z-10 group"
            >
              {/* Step Number Circle */}
              <div className="w-[70px] h-[70px] bg-card-bg border border-warm-brown/10 flex items-center justify-center mb-6 group-hover:border-gold group-hover:bg-gold-light transition-all duration-500 shadow-md">
                <span className="font-grotesk text-sm font-semibold tracking-wider text-luxury-black group-hover:text-gold transition-colors duration-500">
                  {step.num}
                </span>
              </div>

              {/* Step Details */}
              <h3 className="font-grotesk text-lg uppercase tracking-wider text-luxury-black mb-3">
                {step.title}
              </h3>
              
              <p className="font-sans font-light text-luxury-gray text-xs sm:text-sm leading-relaxed max-w-xs px-4 lg:px-0">
                {step.desc}
              </p>

              {/* mobile connector arrow */}
              {index < steps.length - 1 && (
                <div className="w-[1px] h-10 bg-warm-brown/10 lg:hidden my-4" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BookingProcess;
