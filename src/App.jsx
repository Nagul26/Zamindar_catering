import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navigation from './sections/Navigation';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Footer from './sections/Footer';

function App() {
  const { pathname } = useLocation();

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

    // Reset scroll to top on route change
    window.scrollTo(0, 0);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, [pathname]);

  return (
    <div className="relative w-full min-h-screen bg-primary-bg text-luxury-black font-sans selection:bg-gold-light selection:text-gold overflow-x-hidden">
      {/* Sticky Premium Header Navigation */}
      <Navigation />

      {/* Main Single Page Sections */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </main>

      {/* 16. Footer */}
      <Footer />
    </div>
  );
}

export default App;
