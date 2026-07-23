import React from 'react';
import { Link } from 'react-scroll';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import Logo from '../assets/images/zamindar_Catering.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#23160d] text-[#e5dcd3] py-16 md:py-20 border-t border-[#3a291d]/40 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 font-sans text-xs">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 mb-16">
          
          {/* Column 1: Logo & Socials (4 columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link to="home" smooth={true} duration={800} className="cursor-pointer mb-6">
             <img src={Logo} alt="Logo" className="w-84 h-80" />
            </Link>
            
            {/* Social Icons */}
            <div className="flex space-x-5 ">
              <a href="#" aria-label="Facebook" className="text-[#a8998d] hover:text-[#c8a96a] transition-colors duration-300 text-sm">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-[#a8998d] hover:text-[#c8a96a] transition-colors duration-300 text-sm">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Instagram" className="text-[#a8998d] hover:text-[#c8a96a] transition-colors duration-300 text-sm">
                <FaInstagram />
              </a>
            </div>
          </div>
          
          {/* Column 2: Discover Links (2 columns on desktop) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <h4 className="text-[#8c7b6c] text-[11px] font-bold tracking-[3px] uppercase mb-6">
              Discover
            </h4>
            <ul className="space-y-4 font-semibold tracking-wider text-[11px]">
              <li>
                <Link to="about" smooth={true} duration={800} offset={-80} className="hover:text-[#c8a96a] transition-colors duration-300 cursor-pointer block uppercase">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="services" smooth={true} duration={800} offset={-80} className="hover:text-[#c8a96a] transition-colors duration-300 cursor-pointer block uppercase">
                  Menus
                </Link>
              </li>
              <li>
                <Link to="gallery" smooth={true} duration={800} offset={-80} className="hover:text-[#c8a96a] transition-colors duration-300 cursor-pointer block uppercase">
                  Gallery
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[#c8a96a] transition-colors duration-300 cursor-pointer block uppercase">
                  Blog
                </a>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={800} offset={-80} className="hover:text-[#c8a96a] transition-colors duration-300 cursor-pointer block uppercase">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Event Categories (2 columns on desktop - aligned with Discover) */}
          <div className="lg:col-span-2 flex flex-col items-start pt-0 lg:pt-[33px]">
            <ul className="space-y-4 font-semibold tracking-wider text-[11px]">
              <li>
                <span className="bg-[#c8a96a] text-[#23160d] px-2.5 py-1 rounded text-[9px] font-bold tracking-widest uppercase inline-block mb-1 shadow-sm">
                  Corporate
                </span>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={800} className="hover:text-[#c8a96a] transition-colors duration-300 cursor-pointer block uppercase">
                  Wedding
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={800} className="hover:text-[#c8a96a] transition-colors duration-300 cursor-pointer block uppercase">
                  Social Events
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={800} className="hover:text-[#c8a96a] transition-colors duration-300 cursor-pointer block uppercase">
                  Parties
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info (3 columns on desktop) */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h4 className="text-[#8c7b6c] text-[11px] font-bold tracking-[3px] uppercase mb-6">
              Contact
            </h4>
            <address className="not-italic space-y-4 text-[#a8998d] font-medium leading-relaxed">
              <p>
                2972 Westheimer Rd. Santa Ana, <br />
                Illinois 85486
              </p>
              <p>
                <a href="mailto:support@exemple.com" className="hover:text-[#c8a96a] transition-colors duration-300">
                  support@exemple.com
                </a>
              </p>
              <p className="pt-1">
                <a href="tel:+0844560789" className="text-[#c8a96a] text-base lg:text-lg font-bold hover:text-[#b29456] transition-colors duration-300">
                  +(084) 456-0789
                </a>
              </p>
            </address>
          </div>

        </div>

        {/* Footer Bottom Border */}
        <div className="border-t border-[#3a291d]/40 pt-8 mt-8 flex justify-center text-center">
          <p className="text-[#8c7b6c] tracking-wide text-[10px] sm:text-xs">
            © Copyright {currentYear} <span className="text-[#c8a96a] font-semibold">Zamindar</span> . All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
