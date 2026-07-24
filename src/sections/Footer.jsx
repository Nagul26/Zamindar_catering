import React from 'react';
import { Link } from 'react-scroll';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
// import Logo from '../assets/images/Zamindar_Logo.jpg';
// import Logo from '../assets/images/Zamindar_Catering.png';
import Logo from '../assets/images/Zamindar_catering_logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#23160d] text-[#e5dcd3] border-t border-[#3a291d]/40 py-12 sm:py-14 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* ================= FOOTER GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">

          {/* ================= LOGO ================= */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">

            <Link
              to="home"
              smooth
              duration={800}
              className="cursor-pointer"
            >
              <img
                src={Logo}
                alt="Zamindar Catering"
                className="w-52 sm:w-60 md:w-72 lg:w-80 h-auto object-contain"
              />
            </Link>

            <p className="text-[#9d8d81] text-sm leading-7 max-w-sm mt-4">
              Creating unforgettable dining experiences with authentic South
              Indian flavors, premium ingredients, and exceptional hospitality
              for every celebration.
            </p>

            <div className="flex items-center gap-5 mt-8">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-[#4b3728] flex items-center justify-center hover:bg-[#c8a96a] hover:text-[#23160d] transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-[#4b3728] flex items-center justify-center hover:bg-[#c8a96a] hover:text-[#23160d] transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-[#4b3728] flex items-center justify-center hover:bg-[#c8a96a] hover:text-[#23160d] transition-all duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Discover + Events */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-8">

              {/* Discover */}
              <div className="text-left">
                <h4 className="uppercase tracking-[3px] text-[#8c7b6c] text-xs font-semibold mb-6">
                  Discover
                </h4>

                <ul className="space-y-4 text-sm uppercase font-semibold">

                  <li>
                    <Link to="about" smooth duration={800} offset={-80}
                      className="cursor-pointer hover:text-[#c8a96a] transition">
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link to="services" smooth duration={800} offset={-80}
                      className="cursor-pointer hover:text-[#c8a96a] transition">
                      Menus
                    </Link>
                  </li>

                  <li>
                    <Link to="gallery" smooth duration={800} offset={-80}
                      className="cursor-pointer hover:text-[#c8a96a] transition">
                      Gallery
                    </Link>
                  </li>

                  <li>
                    <a href="#" className="hover:text-[#c8a96a] transition">
                      Blog
                    </a>
                  </li>

                  <li>
                    <Link to="contact" smooth duration={800} offset={-80}
                      className="cursor-pointer hover:text-[#c8a96a] transition">
                      Contact
                    </Link>
                  </li>

                </ul>
              </div>

              {/* Events */}
              <div className="text-left">
                <h4 className="uppercase tracking-[3px] text-[#8c7b6c] text-xs font-semibold mb-6">
                  Events
                </h4>

                <ul className="space-y-4 text-sm uppercase font-semibold">

                  <li>
                    <Link to="contact" smooth duration={800}
                      className="cursor-pointer hover:text-[#c8a96a] transition">
                      Corporate
                    </Link>
                  </li>

                  <li>
                    <Link to="contact" smooth duration={800}
                      className="cursor-pointer hover:text-[#c8a96a] transition">
                      Wedding
                    </Link>
                  </li>

                  <li>
                    <Link to="contact" smooth duration={800}
                      className="cursor-pointer hover:text-[#c8a96a] transition">
                      Social Events
                    </Link>
                  </li>

                  <li>
                    <Link to="contact" smooth duration={800}
                      className="cursor-pointer hover:text-[#c8a96a] transition">
                      Parties
                    </Link>
                  </li>

                </ul>
              </div>

            </div>
          </div>
          {/* ================= CONTACT ================= */}
          <div className="lg:col-span-3 text-center lg:text-left">

            <h4 className="uppercase tracking-[3px] text-[#8c7b6c] text-xs font-semibold mb-6">
              Contact
            </h4>

            <address className="not-italic text-[#a8998d] space-y-5 text-sm leading-7">

              <p>
                2972 Westheimer Rd,
                <br />
                Santa Ana, Illinois 85486
              </p>

              <p>
                <a
                  href="mailto:support@example.com"
                  className="hover:text-[#c8a96a] transition"
                >
                  support@example.com
                </a>
              </p>

              <p>
                <a
                  href="tel:+0844560789"
                  className="text-[#c8a96a] text-xl font-semibold hover:text-[#d7b97a]"
                >
                  +(084) 456-0789
                </a>
              </p>

            </address>

          </div>

        </div>

        {/* ================= COPYRIGHT ================= */}

        <div className="border-t border-[#3a291d]/40 mt-12 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-[#8c7b6c] text-xs text-center md:text-left">
              © {currentYear}{" "}
              <span className="text-[#c8a96a] font-semibold">
                Zamindar Catering
              </span>
              . All Rights Reserved.
            </p>

     

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;