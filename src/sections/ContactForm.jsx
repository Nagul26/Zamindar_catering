import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import ReCAPTCHA from "react-google-recaptcha";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiCheckCircle } from 'react-icons/hi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    location: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('IDLE'); // IDLE, SUBMITTING, SUCCESS, ERROR
const [captchaToken, setCaptchaToken] = useState(null);

const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
};

  const eventTypes = [
    'Wedding Celebration',
    'Corporate Gala / Event',
    'Birthday Soirée',
    'Grand Reception',
    'Housewarming Feast',
    'Private Dinner Party',
    'Other Event'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('SUBMITTING');
    setErrorMessage('');

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus('SUCCESS');
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          eventType: '',
          eventDate: '',
          guestCount: '',
          location: '',
          message: ''
        });
      } else {
        setFormStatus('ERROR');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setFormStatus('ERROR');
      setErrorMessage('Unable to connect to the server. Please check your network.');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-primary-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-gold font-grotesk uppercase tracking-[0.25em] text-xs font-semibold mb-3 block">
                Reserve Your Date
              </span>
              <h2 className="text-luxury-black font-sans font-light tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                Let’s Co-create Your Feast
              </h2>
              <p className="font-sans font-light text-luxury-gray text-base leading-relaxed mb-10">
                To inquire about our luxury catering services, package details, or to arrange a personal tasting consultation, please fill out the booking form. Our culinary coordinator will contact you within 24 hours.
              </p>
            </div>

            {/* Contact Details Card */}
            <div className="space-y-6 border-t border-warm-brown/10 pt-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-secondary-bg border border-warm-brown/10 text-gold">
                  <HiOutlinePhone size={20} />
                </div>
                <div>
                  <h4 className="font-grotesk text-xs uppercase tracking-wider text-luxury-black mb-1 font-semibold">
                    Phone Consultation
                  </h4>
                  <p className="font-sans text-sm text-luxury-gray hover:text-gold transition-colors duration-300">
                    <a href="tel:+18005557890">+1 (800) 555-7890</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-secondary-bg border border-warm-brown/10 text-gold">
                  <HiOutlineMail size={20} />
                </div>
                <div>
                  <h4 className="font-grotesk text-xs uppercase tracking-wider text-luxury-black mb-1 font-semibold">
                    Email Inquiry
                  </h4>
                  <p className="font-sans text-sm text-luxury-gray hover:text-gold transition-colors duration-300">
                    <a href="mailto:concierge@zamindarcatering.com">concierge@zamindarcatering.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-secondary-bg border border-warm-brown/10 text-gold">
                  <HiOutlineLocationMarker size={20} />
                </div>
                <div>
                  <h4 className="font-grotesk text-xs uppercase tracking-wider text-luxury-black mb-1 font-semibold">
                    Headquarters
                  </h4>
                  <p className="font-sans text-sm text-luxury-gray">
                    Royal Enclave, Block C, Heritage Road, New Delhi, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-card-bg p-8 md:p-12 border border-warm-brown/10 shadow-2xl relative">
              {/* Thin top accent gold bar */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gold" />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="font-grotesk text-[10px] uppercase tracking-wider text-luxury-black mb-2 font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-b border-warm-brown/20 focus:border-gold py-2 text-sm font-sans focus:outline-none transition-colors duration-300"
                      placeholder="e.g. Devendra Rathore"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="font-grotesk text-[10px] uppercase tracking-wider text-luxury-black mb-2 font-semibold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-b border-warm-brown/20 focus:border-gold py-2 text-sm font-sans focus:outline-none transition-colors duration-300"
                      placeholder="e.g. +91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="font-grotesk text-[10px] uppercase tracking-wider text-luxury-black mb-2 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-b border-warm-brown/20 focus:border-gold py-2 text-sm font-sans focus:outline-none transition-colors duration-300"
                      placeholder="e.g. devendra@royalmail.com"
                    />
                  </div>

                  {/* Event Type */}
                  <div className="flex flex-col">
                    <label htmlFor="eventType" className="font-grotesk text-[10px] uppercase tracking-wider text-luxury-black mb-2 font-semibold">
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="border-b border-warm-brown/20 focus:border-gold py-2 text-sm font-sans focus:outline-none bg-card-bg transition-colors duration-300"
                    >
                      <option value="" disabled>Select event type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Event Date */}
                  <div className="flex flex-col sm:col-span-1">
                    <label htmlFor="eventDate" className="font-grotesk text-[10px] uppercase tracking-wider text-luxury-black mb-2 font-semibold">
                      Event Date *
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      required
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="border-b border-warm-brown/20 focus:border-gold py-2 text-sm font-sans focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  {/* Guest Count */}
                  <div className="flex flex-col sm:col-span-1">
                    <label htmlFor="guestCount" className="font-grotesk text-[10px] uppercase tracking-wider text-luxury-black mb-2 font-semibold">
                      Expected Guests *
                    </label>
                    <input
                      type="number"
                      id="guestCount"
                      name="guestCount"
                      required
                      min="10"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      className="border-b border-warm-brown/20 focus:border-gold py-2 text-sm font-sans focus:outline-none transition-colors duration-300"
                      placeholder="e.g. 150"
                    />
                  </div>

                  {/* Location */}
                  <div className="flex flex-col sm:col-span-1">
                    <label htmlFor="location" className="font-grotesk text-[10px] uppercase tracking-wider text-luxury-black mb-2 font-semibold">
                      Venue / Location *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleInputChange}
                      className="border-b border-warm-brown/20 focus:border-gold py-2 text-sm font-sans focus:outline-none transition-colors duration-300"
                      placeholder="e.g. Udaipur Palace"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="font-grotesk text-[10px] uppercase tracking-wider text-luxury-black mb-2 font-semibold">
                    Message & Dietary Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-b border-warm-brown/20 focus:border-gold py-2 text-sm font-sans focus:outline-none resize-none transition-colors duration-300"
                    placeholder="Share any special cuisine demands, dietary preferences or requests..."
                  />
                </div>
                <div className="flex justify-center py-4">
                    <ReCAPTCHA
                        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                        onChange={handleCaptchaChange}
                    />
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={formStatus === 'SUBMITTING'}
                    className={`w-full py-4 font-grotesk text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 rounded-none shadow-lg ${
                      formStatus === 'SUBMITTING'
                        ? 'bg-luxury-gray text-white/50 cursor-not-allowed'
                        : 'bg-gold hover:bg-gold-hover text-luxury-black'
                    }`}
                  >
                    {formStatus === 'SUBMITTING' ? 'Submitting Request...' : 'Submit Inquiry'}
                  </motion.button>
                </div>
              </form>

              {/* Status Alert Overlay */}
              <AnimatePresence>
                {formStatus === 'SUCCESS' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-card-bg/95 flex flex-col items-center justify-center p-8 text-center z-20"
                  >
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-gold mb-6"
                    >
                      <HiCheckCircle size={64} />
                    </motion.div>
                    
                    <h3 className="font-grotesk text-3xl text-luxury-black mb-4 font-light tracking-wide">
                      Inquiry Received
                    </h3>
                    
                    <p className="font-sans font-light text-luxury-gray text-sm max-w-md leading-relaxed mb-8">
                      Thank you for contacting Zamindar Catering. A customized calendar entry has been logged. Our culinary specialist will review your request and get in touch within 24 hours.
                    </p>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFormStatus('IDLE')}
                      className="px-6 py-2.5 bg-luxury-black text-white hover:bg-gold hover:text-luxury-black font-grotesk text-xs uppercase tracking-[0.2em] transition-colors duration-300"
                    >
                      Close Window
                    </motion.button>
                  </motion.div>
                )}

                {formStatus === 'ERROR' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-x-8 bottom-8 bg-red-50 border border-red-200 p-4 text-center z-20"
                  >
                    <p className="font-sans text-xs text-red-800">
                      {errorMessage}
                    </p>
                    <button
                      onClick={() => setFormStatus('IDLE')}
                      className="mt-2 font-grotesk text-[10px] uppercase tracking-wider text-red-900 underline"
                    >
                      Try Again
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
