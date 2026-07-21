import React from 'react';
import { Link } from 'react-scroll';
import { FaInstagram, FaFacebookF, FaPinterestP, FaLinkedinIn } from 'react-icons/fa';
import logo from "../assets/Zamindar_Catering.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', target: 'home' },
    { name: 'About Us', target: 'about' },
    { name: 'Services', target: 'services' },
    { name: 'Signature Menu', target: 'menu' },
    { name: 'Gallery Portfolio', target: 'gallery' },
    { name: 'Inquire Now', target: 'contact' },
  ];

  const servicesLinks = [
    'Wedding Catering',
    'Corporate Events',
    'Birthday Parties',
    'Cocktail Receptions',
    'Outdoor Galas',
    'Live Food Stations'
  ];

  return (
    <footer className="bg-section-alt border-t border-warm-brown/10 py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col items-start">
            <Link to="home" smooth={true} duration={800} className="cursor-pointer mb-6">
           <img
                        src={logo}
                        alt="Zamindar Catering"
                        className="h-12 md:h-18 lg:h-22 w-auto object-contain"
                      />
            </Link>
            
            <p className="font-sans font-light text-luxury-gray text-xs sm:text-sm leading-relaxed mb-6 max-w-xs">
              Crafting curated gastronomic experiences for weddings, corporate galas, and luxury private celebrations across the nation.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="w-10 h-10 border border-warm-brown/10 hover:border-gold hover:text-gold text-luxury-black bg-card-bg flex items-center justify-center transition-all duration-300">
                <FaInstagram size={14} />
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 border border-warm-brown/10 hover:border-gold hover:text-gold text-luxury-black bg-card-bg flex items-center justify-center transition-all duration-300">
                <FaFacebookF size={14} />
              </a>
              <a href="#" aria-label="Pinterest" className="w-10 h-10 border border-warm-brown/10 hover:border-gold hover:text-gold text-luxury-black bg-card-bg flex items-center justify-center transition-all duration-300">
                <FaPinterestP size={14} />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 border border-warm-brown/10 hover:border-gold hover:text-gold text-luxury-black bg-card-bg flex items-center justify-center transition-all duration-300">
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-start">
            <h3 className="font-grotesk text-xs uppercase tracking-widest text-luxury-black mb-6 font-semibold border-b border-gold pb-2">
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.target}
                    smooth={true}
                    offset={-80}
                    duration={800}
                    className="font-sans text-xs sm:text-sm text-luxury-gray hover:text-gold transition-colors duration-300 cursor-pointer block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col items-start">
            <h3 className="font-grotesk text-xs uppercase tracking-widest text-luxury-black mb-6 font-semibold border-b border-gold pb-2">
              Our Services
            </h3>
            <ul className="space-y-3">
              {servicesLinks.map((service, idx) => (
                <li key={idx}>
                  <Link
                    to="services"
                    smooth={true}
                    offset={-80}
                    duration={800}
                    className="font-sans text-xs sm:text-sm text-luxury-gray hover:text-gold transition-colors duration-300 cursor-pointer block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col items-start">
            <h3 className="font-grotesk text-xs uppercase tracking-widest text-luxury-black mb-6 font-semibold border-b border-gold pb-2">
              Contact Information
            </h3>
            <address className="not-italic space-y-4 font-sans text-xs sm:text-sm text-luxury-gray">
              <p>
                Royal Enclave, Block C, <br />
                Heritage Road, New Delhi, India
              </p>
              <p className="hover:text-gold transition-colors duration-300">
                <a href="tel:+18005557890">+1 (800) 555-7890</a>
              </p>
              <p className="hover:text-gold transition-colors duration-300">
                <a href="mailto:concierge@zamindarcatering.com">concierge@zamindarcatering.com</a>
              </p>
            </address>
          </div>

        </div>

        {/* Footer Bottom (Copyrights) */}
        <div className="border-t border-warm-brown/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
          <p className="font-sans text-[10px] sm:text-xs text-luxury-gray">
            © {currentYear} Zamindar Catering. All Rights Reserved. Crafted with royal elegance.
          </p>
          <div className="flex space-x-6 font-sans text-[10px] sm:text-xs text-luxury-gray">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
