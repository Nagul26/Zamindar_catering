import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Link } from 'react-scroll';

// Import local asset(s) and define high-end Unsplash URLs for the rest
import serviceLive from '../assets/service_live.png';

const Services = () => {
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-primary-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          subtitle="Our Offerings"
          title="Curated Catering Services"
          description="Every celebration demands a distinct culinary narrative. We customize our fine dining setups, staff, and selections to suit the nature of your event."
          align="center"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group flex flex-col bg-card-bg border border-warm-brown/10 shadow-md overflow-hidden transition-all duration-500 hover:shadow-2xl"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary-bg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow items-start">
                <h3 className="font-grotesk text-xl uppercase tracking-wider text-luxury-black mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-sans font-light text-luxury-gray text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                <Link to="contact" smooth={true} offset={-80} duration={800} className="cursor-pointer">
                  <span className="font-grotesk text-xs uppercase tracking-[0.2em] font-semibold text-luxury-black group-hover:text-gold border-b border-warm-brown/30 group-hover:border-gold pb-1 transition-all duration-300">
                    Inquire Details
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
