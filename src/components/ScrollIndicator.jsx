import React from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const ScrollIndicator = ({
  targetSection = "about",
  className = "",
}) => {

  const { scrollY, scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.5,
  });

  const size = 40;
  const stroke = 2.5;

  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  // Hide at top
  const topOpacity = useTransform(
    scrollY,
    [0, 120],
    [0, 1]
  );

  // Hide near bottom
  const bottomOpacity = useTransform(
    scrollYProgress,
    [0.92, 1],
    [1, 0]
  );

const opacity = useTransform(
  [topOpacity, bottomOpacity],
  (values) => values[0] * values[1]
);

  const handleClick = () => {

    if (scrollY.get() > 350) {

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    } else {

      const element =
        document.getElementById(targetSection);

      if (element) {

        element.scrollIntoView({
          behavior: "smooth",
        });

      }

    }

  };
    return (
    <motion.button
      onClick={handleClick}
      aria-label="Scroll"
      style={{ opacity }}
      initial={{
        scale: 0.8,
      }}
      animate={{
        scale: 1,
      }}
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className={`
        fixed
        bottom-10
        right-10
        z-[999]
        hidden
        lg:flex
        items-center
        justify-center
        w-[40px]
        h-[40px]
        rounded-full
        bg-white
        shadow-[0_12px_35px_rgba(0,0,0,0.18)]
        transition-all
        duration-300
        overflow-hidden
        ${className}
      `}
    >
      {/* Progress Ring */}
<svg
  className="absolute inset-0 -rotate-90"
  width={size}
  height={size}
>
  <circle
    cx={size / 2}
    cy={size / 2}
    r={radius}
    fill="none"
    stroke="#E8DDD0"
    strokeWidth="2"
  />

  <motion.circle
    cx={size / 2}
    cy={size / 2}
    r={radius}
    fill="none"
    stroke="#4B2E14"
    strokeWidth="2"
    strokeLinecap="round"
    strokeDasharray={circumference}
    style={{
      strokeDashoffset: useTransform(
        progress,
        (value) => circumference * (1 - value)
      ),
    }}
  />
</svg>

      {/* Inner Circle */}
      {/* <div
        className="
          absolute
          inset-[7px]
          rounded-full
          border-2
          border-[#4B2E14]
          bg-white
        "
      /> */}

      {/* Arrow */}
 <motion.svg
  animate={{
    y: [0, -2, 0],
  }}
  transition={{
    repeat: Infinity,
    duration: 1.6,
  }}
  className="relative z-20"
  width="14"
  height="14"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#111"
  strokeWidth="2.3"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M12 18V6" />
  <path d="M7 11L12 6L17 11" />
</motion.svg>
    </motion.button>
  );
};

export default ScrollIndicator;