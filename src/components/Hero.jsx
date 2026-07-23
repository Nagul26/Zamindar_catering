import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import HeroVideo from "./HeroVideo";
import left from "../assets/images/hero-left.png";
import right from "../assets/images/hero-right.png";
import ScrollIndicator from "./ScrollIndicator";


const Hero = () => {
  const heroRef = useRef(null);

  const { scrollY } = useScroll();

  const videoScale = useTransform(scrollY, [0, 1000], [1.05, 1.18]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (window.innerWidth < 1024) return;

    const { clientX, clientY } = e;

    const x = (clientX - window.innerWidth / 2) / 40;
    const y = (clientY - window.innerHeight / 2) / 40;

    setMousePos({ x, y });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
      },
    },
  };

  return (
    <section
      ref={heroRef}
      id="home"
      onMouseMove={handleMouseMove}
      className="relative h-[1000px] overflow-hidden bg-black"
    >
      {/* Video */}

      <motion.div
        style={{
          scale: videoScale,
        }}
        className="absolute inset-0"
      >
        <HeroVideo
          videoSrc="/videos/hero-bg.mp4"
          overlayOpacity={0.75}
        />
      </motion.div>

      {/* Brown Overlay */}

      <div className="absolute inset-0 bg-[#3D220B]/55 z-10" />

      {/* Main Content */}

      <div className="relative z-30 flex items-center justify-center min-h-screen px-6">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative w-full max-w-7xl mx-auto"
        >

          {/* LEFT IMAGE */}

          <motion.img
            src={left}
            alt="hero-left"
            style={{
              x: mousePos.x * 0.4,
              y: mousePos.y * 0.4,
            }}
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="
            hidden
            lg:block
            absolute
            left-0
            top-20
            w-[360px]
            rounded-[28px]
            rotate-[-8deg]
            shadow-2xl
            object-cover
            "
          />

          {/* RIGHT IMAGE */}

          <motion.img
            src={right}
            alt="hero-right"
            style={{
              x: mousePos.x * -0.3,
              y: mousePos.y * -0.3,
            }}
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
            }}
            className="
            hidden
            lg:block
            absolute
            right-0
            top-0
            w-[300px]
            rounded-[28px]
            rotate-[8deg]
            shadow-2xl
            object-cover
            "
          />

          {/* CENTER CONTENT */}

          <motion.div
            variants={containerVariants}
            className="
            relative
            z-40
            flex
            flex-col
            items-center
            justify-center
            text-center
            max-w-5xl
            mx-auto
            py-40
            "
          >
            <motion.span
              variants={itemVariants}
              className="
              uppercase
              tracking-[0.35em]
              text-[#E0B15B]
              text-xs
              md:text-sm
              font-semibold
              mb-5
              "
            >
              ✦ THE BEST EVENTS START HERE
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="
              font-sfc-primorsa
              text-white
              font-light
              leading-[0.95]
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              xl:text-[110px]
              "
            >
              AUTHENTIC
              <br />

              SOUTH INDIAN

              <br />

              CATERING
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="
              mt-8
              max-w-2xl
              text-white/75
              text-base
              md:text-lg
              
              "
            >
              Creating unforgettable culinary experiences with authentic South
              Indian flavors, luxury presentation and impeccable hospitality
              for weddings, receptions, corporate events and private
              celebrations.
            </motion.p>

            {/* CTA Button */}

            <motion.div
              variants={itemVariants}
              className="mt-12 flex justify-center"
            >
              <ScrollLink
                to="contact"
                smooth={true}
                offset={-80}
                duration={800}
                className="cursor-pointer"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#D89A42]
                  hover:bg-[#E8AE56]
                  px-10
                  py-5
                  text-sm
                  uppercase
                  tracking-[0.25em]
                  font-semibold
                  text-[#2A1608]
                  shadow-[0_15px_40px_rgba(0,0,0,0.25)]
                  transition-all
                  duration-500
                  "
                >
                  CONTACT US NOW

                  <motion.span
                    animate={{
                      x: [0, 4, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.6,
                    }}
                    className="text-lg"
                  >
                    →
                  </motion.span>
                </motion.button>
              </ScrollLink>
            </motion.div>

          </motion.div>

          {/* Floating Food Plate */}

          <motion.img
            src="/images/hero-food.webp"
            alt="South Indian Food"
            style={{
              x: mousePos.x * 0.15,
            }}
            animate={{
              y: [0, -12, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
            }}
            className="
            hidden
            lg:block
            absolute
            left-1/2
            -translate-x-1/2
            bottom-[-140px]
            w-[360px]
            drop-shadow-[0_40px_50px_rgba(0,0,0,0.45)]
            z-40
            "
          />

          {/* Decorative Glow */}

          <div
            className="
            absolute
            left-1/2
            bottom-[-120px]
            -translate-x-1/2
            w-[420px]
            h-[160px]
            rounded-full
            bg-[#D89A42]/20
            blur-[100px]
            z-20
            "
          />

          {/* Mobile Hero Image */}

          <motion.img
            src="/images/hero-food.webp"
            alt=""
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="
            block
            lg:hidden
            mx-auto
            mt-12
            w-[240px]
            drop-shadow-2xl
            "
          />

          {/* Decorative Circles */}

          <div
            className="
            hidden
            lg:block
            absolute
            top-20
            left-1/2
            -translate-x-1/2
            w-[700px]
            h-[700px]
            rounded-full
            border
            border-white/5
            "
          />

          <div
            className="
            hidden
            lg:block
            absolute
            top-10
            left-1/2
            -translate-x-1/2
            w-[900px]
            h-[900px]
            rounded-full
            border
            border-white/5
            "
          />

          {/* Glass Overlay */}

          <div
            className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[700px]
            h-[420px]
            rounded-[40px]
            bg-white/[0.02]
            backdrop-blur-[2px]
            border
            border-white/5
            -z-10
            "
          />

        </motion.div>

      </div>

      {/* Scroll Progress Indicator */}
      <ScrollIndicator
        // progress={scrollY}
        targetSection="about"
        size={72}
        strokeWidth={2.5}
        colors={{
          track: "rgba(255,255,255,0.15)",
          progress: "#D89A42",
          border: "rgba(255,255,255,0.25)",
          arrow: "#FFFFFF",
        }}
      />
    </section> 
  );
};

export default Hero;