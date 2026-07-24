import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import ctaBg from "../assets/images/cta-bg.png";
import conservatoryAisle from "../assets/images/conservatory-aisle.png";

export default function CateringCTA() {
  return (
    <section
      className="relative w-full py-20 lg:py-28 bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${ctaBg})` }}
    >
      {/* Soft color overlay to blend background image */}
      <div className="absolute inset-0 bg-[#efe5d3]/50 backdrop-blur-[1px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[600px] mx-auto px-4">
        {/* Centered Luxury Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            bg-[#f6efe3]
            rounded-[32px]
            p-8
            sm:p-12
            shadow-2xl
            flex
            flex-col
            items-center
            text-center
            border
            border-white/20
          "
        >
          {/* Aisle Image with rounded corners */}
          <div className="w-[160px] h-[200px] sm:w-[180px] sm:h-[220px] rounded-[24px] overflow-hidden shadow-md mb-8">
            <img
              src={conservatoryAisle}
              alt="Conservatory Wedding Aisle"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Headline */}
          <h3 className="
            font-sfc-primorsa
            uppercase
            leading-[1.1]
            text-[#4a2f15]
            text-2xl
            sm:text-3xl
            md:text-4xl
            mb-4
            tracking-wide
          ">
            Unforgettable Catering for Any Occasion!
          </h3>

          {/* Subtitle / Paragraph */}
          <p className="
            font-sans
            text-xs
            sm:text-sm
            text-[#6b5037]
            leading-relaxed
            mb-8
            max-w-md
          ">
            Whether it's an intimate gathering, a corporate event, or a grand celebration, our expert culinary team crafts exquisite menus using the finest ingredients.
          </p>

          {/* Reserve Now Pill Button */}
          <Link
            to="contact"
            smooth={true}
            duration={800}
            offset={-80}
            className="
              inline-flex
              items-center
              justify-center
              h-12
              px-8
              rounded-full
              bg-[#4a2f15]
              hover:bg-[#5b3c1d]
              text-white
              font-semibold
              text-xs
              uppercase
              tracking-wider
              transition-colors
              duration-300
              cursor-pointer
              shadow-md
            "
          >
            Reserve Now ➔
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
