import React, { useRef } from "react";
import { motion } from "framer-motion";

const events = [
  {
    title: "CORPORATE",
    description: "Professional Elementor adjustment with better compatibility, higher stability, and improved visual consistency.",
    bgImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
    circleImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "WEDDINGS",
    description: "Exquisite culinary creations, seamless service, and elegant presentation customized to make your special day truly magical.",
    bgImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80",
    circleImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "SOCIAL EVENTS",
    description: "From birthdays to family gatherings, we bring together delicious food, impeccable style, and warm hospitality for your loved ones.",
    bgImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
    circleImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "PRIVATE DINING",
    description: "Curated bespoke dining experiences, intimate chef tables, and custom-tailored menus for exclusive gatherings.",
    bgImage: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80",
    circleImage: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80",
  }
];

const EventsWeCater = () => {
  const containerRef = useRef(null);

  const handleDotClick = (index) => {
    if (containerRef.current) {
      const elementTop = containerRef.current.offsetTop;
      const step = window.innerHeight;
      window.scrollTo({
        top: elementTop + index * step,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      ref={containerRef}
      id="events-cater"
      className="relative bg-black w-full"
    >
      {events.map((event, index) => (
        <div
          key={index}
          className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden select-none"
          style={{ zIndex: index + 1 }}
        >
          {/* Background Image Layer with Ken Burns Zoom Effect */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              transition={{
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${event.bgImage})` }}
            />
            {/* Dark radial overlay */}
            <div className="absolute inset-0 bg-black/60 md:bg-black/55 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.85)_100%)]" />
          </div>

          {/* Giant Luxury Background Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-10 overflow-hidden">
            <h2 className="font-sfc-primorsa text-[#ffffff]/[0.05] text-[12vw] sm:text-[10vw] lg:text-[8vw] font-bold leading-[0.9] tracking-[0.25em] text-center">
              EVENTS WE
              <br />
              CATER
            </h2>
          </div>

          {/* Center Card Container */}
          <div className="relative z-20 w-full max-w-[480px] px-8 flex flex-col items-center justify-center">
            {/* Glassmorphic Card */}
            <div className="w-full h-[500px] md:h-[550px] rounded-[36px] bg-gradient-to-b from-[#8C7A6B]/25 to-[#4E3F35]/55 backdrop-blur-xl border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] px-6 py-10 flex flex-col items-center justify-between relative overflow-hidden">

              {/* Card Inner Content */}
              <div className="w-full flex-1 flex flex-col items-center justify-center text-center">
                {/* Circular image wrapper */}
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border border-white/20 mb-8 shadow-[0_10px_25px_rgba(0,0,0,0.4)]">
                  <img
                    src={event.circleImage}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Event Heading */}
                <h3 className="font-sfc-primorsa text-white text-3xl md:text-[38px] font-light tracking-[0.15em] mb-4">
                  {event.title}
                </h3>

                {/* Event Description */}
                <p className="font-sans text-[#EAE2D8] text-[13px] md:text-sm leading-relaxed max-w-[280px] font-light">
                  {event.description}
                </p>
              </div>

              {/* Navigation Dots (inside the card at bottom) */}
              <div className="flex gap-2.5 mt-4 z-30">
                {events.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={() => handleDotClick(dotIndex)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${dotIndex === index ? "w-6 bg-white" : "w-2 bg-white/30 hover:bg-white/50"
                      }`}
                    aria-label={`Go to slide ${dotIndex + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsWeCater;
