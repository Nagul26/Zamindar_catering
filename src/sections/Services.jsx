import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "CORPORATE MENU",
      description: "Crafted cocktails, wines, and soft pairings.",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "SOCIAL EVENTS",
      description:
        "Elegant catering for birthdays, anniversaries and private celebrations.",
      image:
        "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "CATERING WEDDING",
      description:
        "Luxury wedding catering with premium South Indian and multi-cuisine menus.",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "WEDDING EVENTS",
      description:
        "Professional catering services for conferences and corporate meetings.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "OUTDOOR CATERING",
      description:
        "Complete outdoor catering setup for all kinds of grand celebrations.",
      image:
        "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "MODERN DINNER",
      description: "Sweet finishes, both bold and nostalgic.",
      image: 
      "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [pause, setPause] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardsToShow, setCardsToShow] = useState(4);

  // Responsive breakpoints matching Tailwind
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(4);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Automatic scroll interval every 4 seconds
  useEffect(() => {
    if (pause) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [pause]);

  // Seamless infinite loop snap back to index 0
  const handleAnimationComplete = () => {
    if (currentIndex >= services.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };


    return (
    <section
      id="services"
      className="relative overflow-hidden  py-24 lg:py-32"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#EFE2CF] opacity-40 blur-3xl" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#EADBC6] opacity-30 blur-3xl" />

      </div>

      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12">

        {/* Header */}

       <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center mb-20"
        >

          {/* Subtitle */}

          <div className="flex justify-center items-center gap-3 mb-6">

            

            <p className="uppercase tracking-[0.45em] text-xs font-medium text-[#8A6C49]">

             ✦ CATERING MENUS

            </p>

           

          </div>

          {/* Heading */}

          <h2 className="font-sfc-primorsa text-[#4A2D14] leading-[0.95] text-5xl md:text-7xl lg:text-[82px]">

            MOST POPULAR

            <br />

            DISHES

          </h2>

        </motion.div>

        {/* Slider Container with Faded Edges */}
        <div
          className="relative overflow-hidden w-full px-2"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          {/* Subtle Side Fades for Premium Look */}
          <div className="left-0 top-0 z-20 h-full w-12 md:w-24 bg-gradient-to-r from-[#F7F1E5] to-transparent absolute pointer-events-none" />
          <div className="right-0 top-0 z-20 h-full w-12 md:w-24 bg-gradient-to-l from-[#F7F1E5] to-transparent absolute pointer-events-none" />

          {/* Sliding Wrapper */}
          <div className="overflow-hidden">
            <motion.div
              animate={{
                x: `-${currentIndex * (100 / cardsToShow)}%`,
              }}
              transition={
                isTransitioning
                  ? {
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1], // Premium easeOutExpo
                    }
                  : {
                      duration: 0,
                    }
              }
              onAnimationComplete={handleAnimationComplete}
              className="flex"
            >
              {[...services, ...services].map((service, index) => (
                <div
                  key={index}
                  className={`px-4 flex-shrink-0 ${
                    cardsToShow === 4
                      ? "w-1/4"
                      : cardsToShow === 2
                      ? "w-1/2"
                      : "w-full"
                  }`}
                >
                  <motion.div
                    whileHover={{
                      y: -12,
                    }}
                    className="group bg-[#FAF6EE] border-2 border-white rounded-[32px] p-4 pb-10 cursor-pointer flex flex-col justify-between shadow-[0_15px_30px_rgba(80,60,40,0.03)] transition-all duration-300 h-[520px]"
                  >
                    {/* Image Container with Inset Padding */}
                    <div className="relative h-[220px] w-full rounded-[24px] overflow-hidden">
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                        className="w-full h-full object-cover rounded-[24px]"
                      />
                    </div>

                    {/* Centered Content */}
                    <div className="flex-grow flex flex-col items-center justify-center text-center mt-8">
                      <h3 className="font-sfc-primorsa text-[28px] tracking-[0.06em] leading-tight text-[#4A2D14] uppercase">
                        {service.title.split(" ").map((word, idx) => (
                          <React.Fragment key={idx}>
                            {word}
                            {idx < service.title.split(" ").length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </h3>

                      <p className="mt-5 text-[#6A625B] text-[14px] leading-relaxed max-w-[240px] font-light">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
                {/* Bottom Content */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="max-w-3xl mx-auto text-center mt-24"
        >

          <p className="text-[#6B625A] text-lg leading-6">

            Our menu is a celebration of tradition and innovation,
            crafted to bring unforgettable flavours to weddings,
            corporate events, family gatherings and every special
            occasion.

          </p>

          <RouterLink
            to="/menu"
          >

            <motion.button
              whileHover={{
                y: -4,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="mt-10 inline-flex items-center gap-3 bg-[#5B3A1F] text-white px-10 py-4 rounded-full uppercase tracking-[0.18em] text-sm font-medium hover:bg-[#472B17] transition-all duration-300"
            >

              Explore Menu

              <motion.span
                whileHover={{
                  x: 4,
                }}
              >
                →
              </motion.span>

            </motion.button>

          </RouterLink>

        </motion.div>

      </div>

    </section>

  );

};

export default Services;