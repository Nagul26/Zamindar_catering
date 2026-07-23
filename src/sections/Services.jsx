import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import SectionHeader from "../components/SectionHeader";

import serviceLive from "../assets/service_live.png";

const Services = () => {
  const services = [
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
      title: "CORPORATE EVENTS",
      description:
        "Professional catering services for conferences and corporate meetings.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "LIVE FOOD STATION",
      description:
        "Interactive live cooking counters with experienced master chefs.",
      image: serviceLive,
    },
    {
      title: "OUTDOOR CATERING",
      description:
        "Complete outdoor catering setup for all kinds of grand celebrations.",
      image:
        "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  // Duplicate cards for seamless loop
  const marqueeCards = [...services, ...services];

  const [pause, setPause] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (pause) return;

    const interval = setInterval(() => {
    setCurrentIndex((prev) =>
      prev === services.length - 1 ? 0 : prev + 1
    );
  }, 3000);

    return () => clearInterval(interval);
  }, [pause]);


    return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F7F1E5] py-24 lg:py-32"
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

            <span className="w-2 h-2 rounded-full bg-[#9C6B30]" />

            <p className="uppercase tracking-[0.45em] text-xs font-medium text-[#8A6C49]">

              CATERING MENUS

            </p>

            <span className="w-2 h-2 rounded-full bg-[#9C6B30]" />

          </div>

          {/* Heading */}

          <h2 className="font-sfc-primorsa text-[#4A2D14] leading-[0.95] text-5xl md:text-7xl lg:text-[82px]">

            MOST POPULAR

            <br />

            DISHES

          </h2>

        </motion.div>

        {/* Marquee Container */}

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >

          {/* Left Fade */}

          <div className="left-0 top-0 z-20 h-full w-32 " />

          {/* Right Fade */}

          <div className=" right-0 top-0 z-20 h-full w-32 " />

          

          {/* Sliding Cards */}

          <div className="overflow-hidden">

          <motion.div
            animate={{
              x: `-${currentIndex * 25}%`,
            }}
            transition={{
              duration: 0.10,
              ease: "easeInOut",
            }}
            className="flex"
        >

            {[...services, ...services].map((service, index) => (

              <div
                key={index}
                className="w-1/4 min-w-[330px] px-4 flex-shrink-0"
              >

                <motion.div
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.4 }}
                  className="group rounded-[32px] overflow-hidden shadow-xl border border-[#E7DCCB] cursor-pointer h-[560px]"
                >
                  {/* Image */}
                  <div className="relative h-[240px] overflow-hidden">

                    <motion.img
                      src={service.image}
                      alt={service.title}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full object-cover"
                    />

                    {/* Dark Overlay */}
                    {/* <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-all duration-500" /> */}

                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between h-[220px] p-2 pt-16">

                    <div>

                      <div className="flex items-center justify-between">

                        <h3 className="font-sfc-primorsa text-[34px] leading-tight text-[#4A2D14]">
                          {service.title}
                        </h3>

                      </div>

                      <p className="mt-5 text-[#6A625B] text-[15px]">
                        {service.description}
                      </p>

                    </div>

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

          <Link
            to="contact"
            smooth={true}
            duration={700}
            offset={-80}
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

          </Link>

        </motion.div>

      </div>

    </section>

  );

};

export default Services;