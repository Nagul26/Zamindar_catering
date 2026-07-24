import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

/* ----------------------------
   BLOG IMAGES
---------------------------- */
import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";

/* ----------------------------
   CTA IMAGES
---------------------------- */
import ctaCenter from "../assets/images/catering-table.png";
import ctaBackground from "../assets/images/conservatory-aisle.png";

/* ----------------------------
   BLOG DATA
---------------------------- */
const blogPosts = [
  {
    image: blog1,
    title: "CATERING & EVENT PLANNING PROCESS: FROM IDEA TO EXECUTION",
    date: "APRIL 14, 2026",
    comments: "10 COMMENTS",
  },
  {
    image: blog2,
    title: "HOW TO CHOOSE THE RIGHT CATERING STYLE FOR YOUR EVENT",
    date: "APRIL 14, 2026",
    comments: "10 COMMENTS",
  },
  {
    image: blog3,
    title: "WHY PROFESSIONAL CATERING MATTERS MORE THAN EVER",
    date: "APRIL 14, 2026",
    comments: "10 COMMENTS",
  },
];

/* ----------------------------
   ANIMATIONS (Framer Motion)
---------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // Smooth cubic-bezier
    },
  },
};

const cardsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const contentBoxVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // easeOutExpo
    },
  },
};

const buttonFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.3,
    },
  },
};

export default function CateringCTA() {
  return (
    <section className="w-full bg-[#F7F0E4] overflow-hidden">
      {/* ======================================================
                    SECTION 1: BLOG SECTION
      ====================================================== */}
      <div className="max-w-[1850px] mx-auto px-6 md:px-12 lg:px-16 pt-[120px] pb-[640px] md:pb-[460px]">
        {/* Top Centered Small Text */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="uppercase tracking-[4px] text-[12px] text-[#4B2E1A]/70 text-center font-sans font-medium"
        >
          ✦ NEWS & BLOG
        </motion.p>

        {/* Large Centered Luxury Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 text-center text-[#4B2E1A] font-koh uppercase text-[40px] md:text-[68px] lg:text-[88px] leading-[0.92] tracking-wide max-w-[1000px] mx-auto"
        >
          DISCOVER THE ART
          <br />
          OF CATERING
        </motion.h2>

        {/* Blog Cards Grid */}
        <motion.div
          variants={cardsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-16 md:mt-20 w-full"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={cardFadeUp}
              className="group flex flex-col items-center"
            >
              {/* Card Image Container */}
              <div className="w-full aspect-[740/560] overflow-hidden rounded-[18px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Meta Info */}
              <div className="mt-6 flex items-center justify-center gap-2 text-[11px] font-sans tracking-[2px] uppercase text-[#8A6B56]">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.comments}</span>
              </div>

              {/* Title */}
              <h3 className="mt-4 font-koh uppercase text-[#4B2E1A] text-center text-[22px] md:text-[26px] leading-[1.2] tracking-wide line-clamp-2 h-[62px] max-w-[420px]">
                {post.title}
              </h3>

              {/* Read More Link */}
              <div className="mt-6 flex justify-center">
                <a
                  href="#"
                  className="group/btn inline-flex items-center gap-1.5 uppercase text-[11px] font-sans font-semibold tracking-[2px] text-[#4B2E1A] pb-0.5 border-b border-[#4B2E1A]/40 hover:border-[#4B2E1A] transition-colors duration-300"
                >
                  READ MORE
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover/btn:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ======================================================
                    SECTION 2: CTA SECTION
      ====================================================== */}
      <section className="relative w-full flex flex-col items-center">
        {/* Background Image Container starting immediately after the blog section */}
        <div className="relative w-full min-h-[600px] md:min-h-[800px] flex flex-col items-center pb-[250px] md:pb-[380px]">
          {/* Full-width Background Image (Fixed parallax scrolling effect) */}
          <div
            style={{ backgroundImage: `url(${ctaBackground})` }}
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
          />
          {/* Cream Overlapping Card */}
          <motion.div
            variants={contentBoxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10 w-[92%] md:w-[980px] bg-[#F7F0E4] -mt-[580px] md:-mt-[350px] px-6 py-12 md:pt-[90px] md:pb-[90px] md:px-[90px] text-center flex flex-col items-center shadow-[0_15px_50px_rgba(0,0,0,0.06)]"
          >
            {/* Centered Vertical Image (Increased size) */}
            <div className="w-[200px] h-[280px] md:w-[240px] md:h-[340px] rounded-[14px] overflow-hidden">
              <img
                src={ctaCenter}
                alt="Catering Showcase"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="mt-10 font-koh uppercase text-[#4B2E1A] text-[42px] md:text-[68px] lg:text-[80px] leading-[0.92] text-center tracking-wide font-normal"
            >
              UNFORGETTABLE CATERING FOR ANY OCCASION!
            </motion.h2>

            {/* Paragraph */}
            <p className="mt-6 max-w-[560px] text-[#6C6258] font-sans text-[17px] leading-[32px] text-center">
              Whether it's an intimate gathering, a corporate event, or a grand
              celebration, our expert culinary team crafts exquisite menus using
              the finest ingredients.
            </p>

            {/* Button */}
            <div className="mt-8 flex justify-center">
              <motion.button
                variants={buttonFade}
                className="group/btn bg-[#4B2E1A] hover:bg-[#341F11] text-white font-sans text-[13px] font-semibold tracking-[2px] uppercase px-[40px] py-[20px] rounded-full flex items-center gap-3 transition-colors duration-300 shadow-sm cursor-pointer"
              >
                RESERVE NOW
                <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1.5">
                  <HiArrowRight size={15} />
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
}