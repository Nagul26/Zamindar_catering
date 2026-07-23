import React from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { HiChevronDown } from "react-icons/hi";
import cateringTableImage from "../assets/images/catering-table.png";

export default function ContactLuxury() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-[#f6efe3]"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Image Card Side (5 columns on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              lg:col-span-5
              relative
              h-[400px]
              sm:h-[500px]
              lg:h-[700px]
              w-full
              rounded-[24px]
              overflow-hidden
              shadow-xl
            "
          >
            <img
              src={cateringTableImage}
              alt="Luxury Catering Table Setup"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                hover:scale-105
                transition-transform
                duration-700
              "
            />
          </motion.div>

          {/* Form Side (7 columns on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <p className="
              uppercase
              tracking-[3px]
              text-[#8d6a3b]
              text-[11px]
              sm:text-xs
              font-semibold
              mb-3
              flex
              items-center
              gap-2
            ">
              <span>✦ </span> Contact and reservations
            </p>

            <h2 className="
              font-sfc-primorsa
              uppercase
              leading-[1.1]
              mb-8
              text-[#4a2f15]
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            ">
              Reserve Your Catering Service Today!
            </h2>

            <form className="space-y-4 font-sans text-sm">
              {/* Full Name */}
              <div className="w-full">
                <input
                  type="text"
                  required
                  className="w-full h-14 rounded-xl px-5 bg-[#efe5d3] text-[#4a2f15] placeholder-[#8c7b6c] focus:outline-none focus:ring-2 focus:ring-[#8d6a3b]/40 transition duration-200"
                  placeholder="Your Name*"
                />
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  className="w-full h-14 rounded-xl px-5 bg-[#efe5d3] text-[#4a2f15] placeholder-[#8c7b6c] focus:outline-none focus:ring-2 focus:ring-[#8d6a3b]/40 transition duration-200"
                  placeholder="Phone Number"
                />
                <input
                  type="email"
                  className="w-full h-14 rounded-xl px-5 bg-[#efe5d3] text-[#4a2f15] placeholder-[#8c7b6c] focus:outline-none focus:ring-2 focus:ring-[#8d6a3b]/40 transition duration-200"
                  placeholder="Email"
                />
              </div>

              {/* Company & Event Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  className="w-full h-14 rounded-xl px-5 bg-[#efe5d3] text-[#4a2f15] placeholder-[#8c7b6c] focus:outline-none focus:ring-2 focus:ring-[#8d6a3b]/40 transition duration-200"
                  placeholder="Company"
                />
                <div className="relative">
                  <select
                    className="w-full h-14 rounded-xl px-5 bg-[#efe5d3] text-[#4a2f15] placeholder-[#8c7b6c] focus:outline-none focus:ring-2 focus:ring-[#8d6a3b]/40 transition duration-200 appearance-none pr-10"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>Event Type</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Social Event">Social Event</option>
                    <option value="Party">Party</option>
                    <option value="Other">Other</option>
                  </select>
                  <HiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8c7b6c] text-lg pointer-events-none" />
                </div>
              </div>

              {/* Date & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="date"
                  className="w-full h-14 rounded-xl px-5 bg-[#efe5d3] text-[#4a2f15] placeholder-[#8c7b6c] focus:outline-none focus:ring-2 focus:ring-[#8d6a3b]/40 transition duration-200 font-sans"
                  placeholder="dd/mm/yyyy"
                />
                <input
                  type="number"
                  className="w-full h-14 rounded-xl px-5 bg-[#efe5d3] text-[#4a2f15] placeholder-[#8c7b6c] focus:outline-none focus:ring-2 focus:ring-[#8d6a3b]/40 transition duration-200"
                  placeholder="Number of Guests"
                />
              </div>

              {/* Message */}
              <div className="w-full">
                <textarea
                  rows={4}
                  className="w-full rounded-xl p-5 bg-[#efe5d3] text-[#4a2f15] placeholder-[#8c7b6c] focus:outline-none focus:ring-2 focus:ring-[#8d6a3b]/40 transition duration-200 resize-none"
                  placeholder="Wishes / questions / requests"
                />
              </div>

              {/* Recaptcha */}
              <div className="py-2">
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={() => {}}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onClick={(e) => e.preventDefault()}
                className="
                  h-14
                  px-8
                  rounded-full
                  bg-[#4a2f15]
                  hover:bg-[#5b3c1d]
                  text-white
                  font-semibold
                  uppercase
                  tracking-wider
                  transition-colors
                  duration-300
                  flex
                  items-center
                  justify-center
                  gap-2
                  cursor-pointer
                  shadow-md
                "
              >
                Submit Request ➔
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
