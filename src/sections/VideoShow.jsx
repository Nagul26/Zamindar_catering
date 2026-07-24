import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaTimes } from "react-icons/fa";

import previewImage from "../assets/images/video-cover.png"; // Replace with your image
import videoFile from "../assets/videos/catering.mp4"; // Replace with your video

const VideoShow = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative w-full h-[80vh] overflow-hidden bg-black">
        {/* Background Image (Fixed parallax scrolling effect) */}
        <div
          style={{ backgroundImage: `url(${previewImage})` }}
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed opacity-75 blur-[1px]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Huge Transparent Overlay Text */}
        {/* Moving Background Text */}
        <div className="absolute top-6 left-0 w-full overflow-hidden pointer-events-none z-0">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex whitespace-nowrap"
          >
            {[...Array(4)].map((_, index) => (
              <h1
                key={index}
                className="
                mx-10
                text-[16vw]
                md:text-[14vw]
                lg:text-[12vw]
                uppercase
                text-white/20
                font-light
                tracking-[10px]
                leading-none
                select-none
                whitespace-nowrap
                "
              >
                ZAMINDAR  CATERING
              </h1>
            ))}
          </motion.div>
        </div>
        {/* Center Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <div className="relative flex items-center justify-center">

            {/* Rotating Text Circle */}
            <motion.svg
              className="absolute w-44 h-44 font-[100px]"
              viewBox="0 0 200 200"
              animate={{ rotate: 360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* White Ring */}
              <circle
                cx="100"
                cy="100"
                r="70"
                fill="none"
                stroke="white"
                strokeWidth="22"
              />

              <defs>
                <path
                  id="circlePath"
                  d="
    M100,100
    m-70,0
    a70,70 0 1,1 140,0
    a70,70 0 1,1 -140,0
  "
                />
              </defs>

              {/* Black Text on White Ring */}
              <text
                fill="#000"
                fontSize="12"
                fontWeight="700"
                letterSpacing="5"
              >
                <textPath
                  href="#circlePath"
                  startOffset="0%"
                >
                  CATERING & EVENT - CATERING & EVENT -
                </textPath>
              </text>
            </motion.svg>


            {/* Play Button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(true)}
              className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <FaPlay className="text-white text-[34px] drop-shadow-lg" />
            </motion.button>

          </div>
        </div>
      </section>

      {/* Video Popup */}
      {open && (
        <div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-6">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-8 right-8 text-white text-3xl hover:rotate-90 transition"
          >
            <FaTimes />
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-6xl rounded-xl overflow-hidden shadow-2xl"
          >
            <video
              src={videoFile}
              controls
              autoPlay
              className="w-full h-full"
            />
          </motion.div>
        </div>
      )}
    </>
  );
};

export default VideoShow;