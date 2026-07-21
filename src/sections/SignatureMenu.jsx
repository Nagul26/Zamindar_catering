import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const SignatureMenu = () => {
  const categories = ['Starters', 'Main Course', 'Desserts', 'Live Counters', 'Beverages'];
  const [activeCategory, setActiveCategory] = useState('Starters');

  const menuData = {
    'Starters': [
      {
        name: 'Gold-Leaf Galouti Kebab',
        desc: 'Melt-in-mouth smoked minced lamb kebab with secret heritage spices, crowned with edible 24k gold leaf.',
        tag: 'Royal Signature'
      },
      {
        name: 'Truffle Malai Broccoli',
        desc: 'Creamy broccoli florets infused with royal cardamom, white cheddar, and finished with a drizzle of Italian white truffle oil.',
        tag: 'Gourmet Selection'
      },
      {
        name: 'Crispy Asparagus & Lotus Stem',
        desc: 'Wok-tossed baby asparagus and crispy lotus stems glazed with a hot sweet chili reduction and toasted sesame.',
        tag: 'Vegan Exquisite'
      },
      {
        name: 'Tandoori Saffron Lobster',
        desc: 'Fresh lobster tails marinated in Kashmiri saffron, Greek yogurt, and stone-ground spices, clay-oven roasted to perfection.',
        tag: 'Ocean Premium'
      }
    ],
    'Main Course': [
      {
        name: 'Royal Zamindari Biryani',
        desc: 'Slow-cooked long-grain Basmati rice, premium saffron, and tender baby lamb, sealed in clay pots with rose water essence.',
        tag: 'Heritage Specialty'
      },
      {
        name: 'Paneer Lazeez Pasanda',
        desc: 'Stuffed cottage cheese layers with dried fruits and nuts, bathed in a rich creamy cashew and gold tomato gravy.',
        tag: 'Vegetarian Luxury'
      },
      {
        name: 'Slow-Cooked Nihari Lamb Shank',
        desc: 'Traditional slow-simmered lamb shank in a rich, aromatic broth flavored with vetiver and long pepper.',
        tag: 'Slow Cooked'
      },
      {
        name: 'Smoked Dal Bukhara',
        desc: 'Black lentils slow-cooked for 24 hours over charcoal, finished with fresh churned white butter and cream.',
        tag: 'Classic Masterpiece'
      }
    ],
    'Desserts': [
      {
        name: 'Saffron Pistachio Elaneer Payasam',
        desc: 'Chilled tender coconut kernel pudding sweetened with pure saffron threads and crushed Iranian pistachios.',
        tag: 'Chilled Delight'
      },
      {
        name: 'Baked Rabri Tart',
        desc: 'Buttery puff pastry shell filled with reduced caramelized milk cream, served with silver-dusted rose petals.',
        tag: 'Contemporary Classic'
      },
      {
        name: 'Golden Shahi Tukda',
        desc: 'Crispy ghee-fried bread steeped in cardamom milk, layered with condensed milk rabri and gold leaf.',
        tag: 'Royal Sweet'
      }
    ],
    'Live Counters': [
      {
        name: 'Flaming Teppanyaki Station',
        desc: 'Fresh ocean prawns and exotic vegetables seared with mirin-sake glaze and served with spicy sesame cream.',
        tag: 'Interactive Culinary'
      },
      {
        name: 'Gourmet Tacos & Quesadillas',
        desc: 'Handmade blue corn tortillas with charcoal-grilled fillings, artisanal fresh avocado crema, and pickled red onions.',
        tag: 'Artisanal Street'
      },
      {
        name: 'Neapolitan Wood-Fired Pizza',
        desc: 'Ultra-thin hand-stretched sourdough crust topped with fresh mozzarella, sweet heirloom tomatoes, and organic basil leaves.',
        tag: 'Stone Oven'
      }
    ],
    'Beverages': [
      {
        name: 'Rose Petal & Cardamom Lassi',
        desc: 'Thick creamy yogurt churned with organic damask rose syrup, green cardamom powder, and crushed pistachios.',
        tag: 'Refreshing Herbal'
      },
      {
        name: 'Smoked Rosemary Infused Mojito',
        desc: 'Fresh lime juice, organic sugarcane syrup, mint leaves, topped with sparkling water and smoked rosemary sprig.',
        tag: 'Artisanal Mocktail'
      },
      {
        name: 'Saffron Almond Thandai',
        desc: 'Traditional milk beverage cooled with almonds, fennel seeds, watermelon seeds, saffron, and fragrant rose water.',
        tag: 'Classic Cooler'
      }
    ]
  };

  return (
    <section id="menu" className="py-24 md:py-32 bg-primary-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          subtitle="The Culinary Showcase"
          title="Signature Menu Highlights"
          description="A preview of our gastronomical creations. We build customized menu structures reflecting traditional Indian royal heritage blended with contemporary world-class cuisines."
          align="center"
        />

        {/* Categories Tab Selector */}
        <div className="flex justify-center border-b border-warm-brown/10 mb-16 overflow-x-auto no-scrollbar py-2">
          <div className="flex space-x-8 md:space-x-12 px-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-grotesk text-xs md:text-sm uppercase tracking-[0.2em] pb-4 transition-all duration-300 relative focus:outline-none whitespace-nowrap ${
                  activeCategory === category
                    ? 'text-gold font-semibold'
                    : 'text-luxury-gray hover:text-luxury-black'
                }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeTabLine"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-gold"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid Container */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
            >
              {menuData[activeCategory].map((dish, index) => (
                <div 
                  key={index} 
                  className="group flex flex-col p-8 border border-warm-brown/10 bg-card-bg hover:border-gold/30 hover:shadow-xl transition-all duration-500 relative"
                >
                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-8 border-r-8 border-t-gold/0 border-r-gold/0 group-hover:border-t-gold group-hover:border-r-gold transition-all duration-300" />
                  
                  {/* Header Row */}
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-grotesk font-normal text-lg sm:text-xl text-luxury-black tracking-wide group-hover:text-gold transition-colors duration-300">
                      {dish.name}
                    </h3>
                    <span className="font-grotesk text-[8px] sm:text-[10px] tracking-wider uppercase text-gold bg-gold-light border border-gold/20 px-2 py-0.5 whitespace-nowrap">
                      {dish.tag}
                    </span>
                  </div>
                  
                  {/* Description */}
                  <p className="font-sans font-light text-luxury-gray text-sm leading-relaxed flex-grow pr-4">
                    {dish.desc}
                  </p>
                  
                  {/* Bottom elegant line decoration */}
                  <div className="w-full h-[1px] bg-warm-brown/10 mt-6 group-hover:bg-gold/30 transition-colors duration-500" />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Call to Customization */}
        <div className="mt-16 text-center">
          <p className="font-sans font-light text-luxury-gray text-sm">
            Have custom preferences or dietary constraints? 
            <span className="text-gold font-semibold ml-1 cursor-pointer underline hover:text-gold-hover">
              Discuss with our chef
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignatureMenu;
