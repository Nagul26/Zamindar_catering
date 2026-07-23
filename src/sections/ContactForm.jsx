// import React from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker, HiStar } from "react-icons/hi";

 import contactImage from "../assets/images/contact-banner.jpg";



export default function ContactLuxury() {
  return (
    <section
  id="contact"
  className="py-14 sm:py-20 lg:py-24 bg-[#f6efe3]"
>
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[30px] ">

          {/* Image Side */}
          <motion.div
            initial={{opacity:0,x:-50}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:.8}}
            className="
            relative
            h-[320px]
            sm:h-[450px]
            md:h-[600px]
            lg:min-h-[820px]
            overflow-hidden
            ">

            <img
              src={contactImage}
              alt="contact"
              className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              transition-transfor
              "
            />
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{opacity:0,x:50}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:.8}}
            className="
              p-6
              sm:p-8
              md:p-10
              lg:p-14
              ">

            <p className="
              uppercase
              tracking-[3px]
              text-[#8d6a3b]
              text-[10px]
              sm:text-xs
              font-semibold
              ">
                  Contact & Reservation
            </p>

            <h2   className="
              font-sfc-primorsa
              uppercase
              leading-[1.05]
              mt-4
              mb-8
              text-[#4a2f15]

              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              ">
              Reserve Your Catering Service Today
            </h2>

            <form className="space-y-5">

              <input className="w-full h-14 rounded-2xl px-5 bg-[#efe5d3]" placeholder="Full Name"/>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <input className="h-12 sm:h-14 rounded-2xl px-5 bg-[#efe5d3]" placeholder="Phone"/>
                <input className="h-12 sm:h-14 rounded-2xl px-5 bg-[#efe5d3]" placeholder="Email"/>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <select className="h-12 sm:h-14 rounded-2xl px-5 bg-[#efe5d3]">
                  <option>Event Type</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Other">Other</option>
                </select>

                <input type="date" className="h-12 sm:h-14 rounded-2xl px-5 bg-[#efe5d3]"/>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <input className="h-12 sm:h-14 rounded-2xl px-5 bg-[#efe5d3]" placeholder="Guests"/>
                <input className="h-12 sm:h-14 rounded-2xl px-5 bg-[#efe5d3]" placeholder="Venue"/>
              </div>

              <textarea rows={4} className="w-full rounded-2xl p-4 sm:p-5 resize-none bg-[#efe5d3]" placeholder="Message"/>

              <div className="flex justify-left w-[100px] h-[60px]">
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={()=>{}}
                />
              </div>

              <button
                className="
                w-[200px]
                h-10
                sm:h-12
                rounded-full
                bg-[#5b3513]
                text-white
                font-semibold
                transition
                ">
                Submit Request →
              </button>

            </form>

            {/* <div className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
              mt-10
              text-sm
              ">

              <div className="
                flex
                items-start
                gap-3
                bg-white
                rounded-2xl
                p-4
                shadow-sm
                ">
                <HiOutlinePhone className="text-xl"/>
                <div>
                  <b>Phone</b>
                  <p>+91 XXXXX XXXXX</p>
                </div>
              </div>

              <div className="    flex gap-3">
                <HiOutlineMail className="text-xl"/>
                <div>
                  <b>Email</b>
                  <p>booking@zamindar.com</p>
                </div>
              </div>

              <div className="flex gap-3">
                <HiOutlineLocationMarker className="text-xl"/>
                <div>
                  <b>Location</b>
                  <p>Coimbatore, India</p>
                </div>
              </div>

            </div> */}

          </motion.div>

        </div>
      </div>
    </section>
  );
}
