import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Hero from '../sections/Hero';
import About from '../sections/About';
import EventsWeCater from '../sections/EventsWeCater';
import WhyChooseUs from '../sections/WhyChooseUs';
import Services from '../sections/Services';
import VideoShow from '../sections/VideoShow';
import MeetTeam from '../sections/MeetTeam';
import Gallery from '../sections/Gallery';
import ContactForm from '../sections/ContactForm';
import CateringCTA from '../sections/CateringCTA';

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = hash.replace('#', '');
      const timer = setTimeout(() => {
        scroller.scrollTo(target, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          offset: -80,
        });
      }, 150); // Small delay to let the page mount and Lenis setup
      return () => clearTimeout(timer);
    }
  }, [hash]);

  return (
    <>
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="events"><EventsWeCater /></div>
      <div id="why-choose-us"><WhyChooseUs /></div>
      <div id="services"><Services /></div>
      <div id="video-show"><VideoShow /></div>
      <div id="meet-team"><MeetTeam /></div>
      <div id="gallery"><Gallery /></div>
      <div id="contact"><ContactForm /></div>
      <div id="cta"><CateringCTA /></div>
    </>
  );
};

export default Home;
