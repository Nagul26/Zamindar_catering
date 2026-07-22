import React from 'react';

/**
 * HeroVideo Component
 * 
 * Renders a full-screen, responsive background autoplay video with a dark overlay.
 * 
 * TO REPLACE THE VIDEO LATER:
 * 1. Place your new MP4 file into the `public/videos/` directory (e.g. `public/videos/custom-hero.mp4`).
 * 2. Update the `videoSrc` prop when calling `<HeroVideo videoSrc="/videos/custom-hero.mp4" />`
 *    or change the default parameter in this component.
 */
const HeroVideo = ({
  videoSrc = '/videos/hero-bg.mp4',
  posterSrc = '',
  overlayOpacity = 0.45,
  className = '',
}) => {
  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden select-none ${className}`}>
      {/* Full-width responsive autoplay background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={posterSrc}
        className="w-full h-full object-cover object-center pointer-events-none scale-105"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Subtle dark overlay (40-50%) to ensure text readability */}
      <div 
        className="absolute inset-0 bg-black pointer-events-none z-10 transition-opacity duration-300"
        style={{ opacity: overlayOpacity }}
      />

      {/* Luxury Gradient Overlays for smooth visual transition */}
      <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/90 via-luxury-black/50 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black/40 pointer-events-none z-10" />
    </div>
  );
};

export default HeroVideo;
