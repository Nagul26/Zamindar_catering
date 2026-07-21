import React from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import WhyChooseUs from './sections/WhyChooseUs';
import Services from './sections/Services';
import EventTypes from './sections/EventTypes';
import SignatureMenu from './sections/SignatureMenu';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import BookingProcess from './sections/BookingProcess';
import ContactForm from './sections/ContactForm';
import Footer from './sections/Footer';

function App() {
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

        {/* 3. Why Choose Us */}
        <WhyChooseUs />

        {/* 4. Catering Services */}
        <Services />

        {/* 5. Event Types */}
        <EventTypes />

        {/* 6. Signature Menu Highlights */}
        <SignatureMenu />

        {/* 7. Gallery Showcase */}
        <Gallery />

        {/* 8. Customer Testimonials */}
        <Testimonials />

        {/* 9. Booking Process Timeline */}
        <BookingProcess />

        {/* 10. Contact / Booking Form */}
        <ContactForm />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}

export default App;
