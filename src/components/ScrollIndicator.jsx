import React, { useEffect } from 'react';
import { motion, useTransform, useSpring, isMotionValue, useMotionValue, useScroll } from 'framer-motion';
import { scroller } from 'react-scroll';

/**
 * ScrollIndicator Component
 * 
 * Reusable luxury circular scroll indicator with real-time SVG progress animation.
 * 
 * Props:
 * @param {MotionValue | number} progress - Scroll progress value (0 to 1)
 * @param {string} targetSection - ID of the target section to scroll to on click
 * @param {number} size - Outer size/diameter of the circle in px (default: 60)
 * @param {number} strokeWidth - Thickness of the progress stroke in px (default: 2.5)
 * @param {Object} colors - Styling color object { track, progress, border, arrow }
 * @param {string} className - Additional CSS classes
 */
const ScrollIndicator = ({
  progress,
  targetSection = 'about',
  size = 60,
  strokeWidth = 2.5,
  colors = {
    track: 'rgba(255, 255, 255, 0.15)',
    progress: '#C5A85C',
    border: 'rgba(255, 255, 255, 0.25)',
    arrow: '#FFFFFF',
  },
  className = '',
}) => {
  // Fallback to global window scroll progress if progress prop is omitted
  const { scrollYProgress: defaultWindowProgress } = useScroll();
  const defaultProgress = useMotionValue(0);

  // Sync numerical progress prop to defaultProgress safely if a raw number is passed
  useEffect(() => {
    if (typeof progress === 'number' && !isNaN(progress)) {
      const clamped = Math.min(1, Math.max(0, progress));
      defaultProgress.set(clamped);
    }
  }, [progress, defaultProgress]);

  // Determine active MotionValue source
  const rawProgress = isMotionValue(progress)
    ? progress
    : typeof progress === 'number'
    ? defaultProgress
    : defaultWindowProgress;

  // Smooth spring physics for liquid motion
  const smoothProgress = useSpring(rawProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // SVG dimensions calculation
  const center = size / 2;
  const radius = Math.max(0, (size - strokeWidth) / 2);

  // Rotate arrow smoothly when reaching bottom of page (points UP to scroll back to top)
  const arrowRotation = useTransform(rawProgress, [0, 0.85, 0.95], [0, 0, 180]);

  const handleClick = () => {
    // If user has scrolled near the bottom of the page, scroll back to top
    if (rawProgress.get() > 0.85) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    if (!targetSection) return;
    const targetElement = document.getElementById(targetSection);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    } else {
      scroller.scrollTo(targetSection, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -80,
      });
    }
  };

  return (
    <motion.div
      className={`fixed bottom-10 right-10 z-40 hidden md:flex flex-col items-center justify-center pointer-events-auto cursor-pointer select-none ${className}`}
      onClick={handleClick}
      aria-label="Scroll progress indicator"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <motion.div
        whileHover="hover"
        className="relative flex items-center justify-center rounded-full p-2 group transition-all duration-300"
        style={{
          width: size + 8,
          height: size + 8,
        }}
      >
        {/* Backdrop glassmorphism circle */}
        <div 
          className="absolute inset-0 rounded-full backdrop-blur-md transition-all duration-500 group-hover:scale-110 shadow-2xl"
          style={{
            backgroundColor: 'rgba(12, 12, 12, 0.45)',
            border: `1px solid ${colors.border || 'rgba(255, 255, 255, 0.25)'}`,
          }}
        />

        {/* SVG Circular Progress Track and Fill */}
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="relative z-10 transform -rotate-90 pointer-events-none"
        >
          {/* Background Track Circle */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke={colors.track || 'rgba(255, 255, 255, 0.15)'}
            strokeWidth={strokeWidth}
          />

          {/* Clockwise Progress Fill Circle */}
          <motion.circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke={colors.progress || '#C5A85C'}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            style={{
              pathLength: smoothProgress,
            }}
          />
        </svg>

        {/* Centered Downward/Upward Arrow with Continuous Motion */}
        <motion.div
          className="absolute z-20 flex items-center justify-center text-white"
          style={{ rotate: arrowRotation }}
          variants={{
            hover: { scale: 1.2, color: colors.progress || '#C5A85C' },
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: 'easeInOut',
              times: [0, 0.5, 1],
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: colors.arrow || '#FFFFFF' }}
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
