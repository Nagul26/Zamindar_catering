import React from "react";
import { motion } from "framer-motion";
import { BiDish, BiLeaf } from "react-icons/bi";

import mainImage from "../assets/images/whychoose-main.png";

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="relative bg-primary-bg py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <p className="uppercase tracking-[3px] text-xs sm:text-sm font-semibold text-warm-brown mb-6">
              ✦ WHY CHOOSE US
            </p>

            <h2
              className="
                font-sfc-primorsa
                uppercase
                text-luxury-black
                leading-[0.95]

                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-[78px]
              "
            >
              UNFORGETTABLE
              <br />
              CATERING FOR
              <br />
              EVERY CELEBRATION
            </h2>

            {/* FEATURES */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12">
              {/* Feature 1 */}

              <div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-warm-brown flex items-center justify-center flex-shrink-0">
                    <BiDish className="text-2xl sm:text-3xl text-warm-brown" />
                  </div>

                  <div>
                    <h3 className="font-sfc-primorsa uppercase leading-none text-luxury-black text-2xl sm:text-3xl lg:text-[34px]">
                      Premium
                      <br />
                      Dining
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-sm sm:text-base text-luxury-gray leading-7">
                  Traditional South Indian catering prepared with authentic
                  recipes, premium ingredients and elegant banquet
                  presentation.
                </p>
              </div>

              {/* Feature 2 */}

              <div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-warm-brown flex items-center justify-center flex-shrink-0">
                    <BiLeaf className="text-2xl sm:text-3xl text-warm-brown" />
                  </div>

                  <div>
                    <h3 className="font-sfc-primorsa uppercase leading-none text-luxury-black text-2xl sm:text-3xl lg:text-[34px]">
                      Authentic
                      <br />
                      Flavours
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-sm sm:text-base text-luxury-gray leading-7">
                  From traditional weddings to grand corporate events, every
                  dish is crafted with unforgettable taste and rich heritage.
                </p>
              </div>
            </div>

            {/* Divider */}

            <div className="border-t border-[#d8cab8] my-10"></div>

            {/* Description */}

            <p className="text-luxury-gray text-sm sm:text-base leading-8 max-w-xl">
              Zamindar Catering transforms every occasion into an unforgettable
              celebration. From weddings and receptions to corporate events and
              family gatherings, our experienced chefs deliver authentic South
              Indian cuisine with impeccable hospitality and luxurious
              presentation.
            </p>

            {/* Button */}

            <button
              className="
                mt-10
                w-[250px]
                sm:w-[250px]

                px-4
                py-3

                rounded-full

                bg-[#4a2d12]
                text-white

                uppercase
                tracking-[2px]

                hover:bg-black
                transition-all
                duration-300
              "
            >
              Call Us Now →
            </button>

            {/* ================= MOBILE IMAGE ================= */}

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="block lg:hidden mt-12"
            >
              <img
                src={mainImage}
                alt="Why Choose Us"
                className="
                  w-full
                  h-[300px]
                  sm:h-[450px]
                  object-cover
                  rounded-3xl
                "
              />
            </motion.div>
          </motion.div>

          {/* ================= DESKTOP IMAGE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <img
              src={mainImage}
              alt="Why Choose Us"
              className="
                w-full
                object-cover
                rounded-3xl
                h-[760px]
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;