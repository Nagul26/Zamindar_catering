import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import smallImg from "../assets/images/about-small.png";
import largeImg from "../assets/images/about-large.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-primary-bg py-8 md:py-12 lg:py-16 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* Heading */}

        <div className="text-center mb-14 md:mb-24">

          <span className="uppercase tracking-[0.3em] text-[11px] md:text-[13px] text-[#4b2e18] font-semibold">
            ✦ WHO WE ARE
          </span>

          <h2 className="font-sfc-primorsa font-light text-[#432615] leading-[0.95]
                         text-[44px]
                         sm:text-[60px]
                         md:text-[72px]
                         lg:text-[92px]
                         mt-4">
            PROFESSIONAL
            <br />
            CATERING TEAMS
            <br />
            IN ZAMINDAR
          </h2>

        </div>

        {/* Content */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-x-16 items-center">

          {/* Left */}

          <div className="lg:col-span-3 flex flex-col items-center lg:items-start">

            <div className="w-full max-w-[300px] h-[200px] rounded-3xl overflow-hidden shadow-lg">
              <img
                src={smallImg}
                alt="About"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="font-sfc-primorsa text-[#432615]
                           text-[70px]
                           sm:text-[80px]
                           lg:text-[96px]
                           leading-none mt-8">
              4.9K
              <span className="text-3xl sm:text-4xl lg:text-5xl align-top">
                +
              </span>
            </h3>

            <p className="text-[#432615] text-lg sm:text-xl mt-2">
              events each year
            </p>

          </div>

          {/* Center */}

          <div className="lg:col-span-5 text-center lg:text-left">

            <h3
              className="font-sfc-primorsa text-[#432615]
              text-[28px]
              sm:text-[34px]
              lg:text-[30px]
              leading-[1.25]"
            >
              EVERY EVENT IS A UNIQUE OPPORTUNITY TO CRAFT A
              CULINARY EXPERIENCE AS EXTRAORDINARY AS DELICIOUS.
            </h3>

            <p
              className="mt-6 text-[#6f655d]
              text-base
              sm:text-lg
              leading-8"
            >
              A meeting or celebration is a unique and unforgettable event!
              Zamindar Catering brings together creative planning, authentic
              South Indian cuisine, elegant presentation, and exceptional
              hospitality to create memorable celebrations.
            </p>

            <Link
              to="contact"
              smooth
              offset={-80}
              duration={800}
            >
              <button
                className="mt-8 md:mt-10 px-8 md:px-10 py-4 rounded-full
                bg-[#4a2d16] text-white uppercase tracking-widest
                text-xs md:text-sm hover:bg-[#5f3d20] transition"
              >
                LEARN ABOUT US →
              </button>
            </Link>

          </div>

          {/* Right */}

          <div className="lg:col-span-4 flex justify-center lg:justify-end">

            <div
              className="w-full
              max-w-[420px]
              h-[450px]
              sm:h-[550px]
              lg:w-[470px]
              lg:h-[650px]
              rounded-[28px]
              overflow-hidden
              shadow-xl"
            >
              <img
                src={largeImg}
                alt="Luxury Catering"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;