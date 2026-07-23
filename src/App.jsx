import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import EventsWeCater from './sections/EventsWeCater';
// import StickyCards from './components/StickyCards/StickyCards'
import WhyChooseUs from './sections/WhyChooseUs';
import Services from './sections/Services';
import VideoShow from './sections/VideoShow';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import ContactForm from './sections/ContactForm';
import CateringCTA from './sections/CateringCTA';
import Footer from './sections/Footer';

function App() {
  // Initialize Lenis Smooth Inertial Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let frameId;
    function raf(time) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-primary-bg text-luxury-black font-sans selection:bg-gold-light selection:text-gold overflow-x-hidden">
      {/* Sticky Premium Header Navigation */}
      <Navigation />

      {/* Main Single Page Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Zamindar Catering */}
        <About />

        {/* Events We Cater Section */}
        <EventsWeCater />

        {/* <StickyCards /> */}

        {/* 3. Why Choose Us */}
        <WhyChooseUs />

        {/* 4. Catering Services */}
        <Services />

        <VideoShow />

        {/* 10. Gallery Showcase */}
        <Gallery />

        {/* 13. Customer Testimonials */}
        <Testimonials />

        {/* 15. Contact / Booking Form */}
        <ContactForm />

        {/* 15b. Call-To-Action (Unforgettable Catering) */}
        <CateringCTA />
      </main>

      {/* 16. Footer */}
      <Footer />
    </div>
  );
}

export default App;
