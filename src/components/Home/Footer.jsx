import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import logo1 from '../../assets/siman_wellness_logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [scrolled, setScrolled] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the footer is visible
    triggerOnce: true, // Animations run only once when entering viewport
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const footerNavLinks = [
    { name: 'Home', target: '/' },
    { name: 'About', target: 'about' },
    { name: 'Services', target: 'services' },
    { name: 'Contact', target: 'contacts' },
  ];

  return (
    <motion.footer
      ref={ref}
      className="bg-deep-blue text-sage pt-16 pb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: scrolled && inView ? -10 : 0 }}
      transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.2 }}
    >
      <div className="container mx-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.3 }}
          >
            <div className="flex items-center space-x-2 mt-2">
              <img src={logo1} alt="logo" className="w-12" />
              <span className="text-xl font-serif font-semibold">Siman Wellness Centre</span>
            </div>
            <p className="text-gray-600 mt-4 md:ml-4 ml-2">
              Empowering individuals and organizations on their journey to mental wellness.
            </p>
            <div className="flex space-x-4 pt-4 ml-4 text-terracotta">
              <a href="" className="hover:text-gray-300 transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="" className="hover:text-gray-300 transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="" className="hover:text-gray-300 transition-colors">
                <FiTwitter size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.4 }}
          >
            <h3 className="text-xl font-serif font-semibold mb-6 md:ml-10 ml-2">Quick Links</h3>
            <ul className="space-y-3 md:ml-16 ml-2 flex md:block gap-5">
              {footerNavLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.target}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="text-gray-500 hover:text-gray-300 cursor-pointer transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.5 }}
          >
            <h3 className="text-xl font-serif font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 flex flex-wrap md:block gap-5">
              <li className="text-gray-500 hover:text-gray-300 transition-colors">Integrative Medicine</li>
              <li className="text-gray-500 hover:text-gray-300 transition-colors">Personalized Coaching</li>
              <li className="text-gray-500 hover:text-gray-300 transition-colors">Mentoring Programs</li>
              <li className="text-gray-500 hover:text-gray-300 transition-colors">Psychosocial Support</li>
              <li className="text-gray-500 hover:text-gray-300 transition-colors">Organizational Growth</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.6 }}
          >
            <h3 className="text-xl font-serif font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="mt-1 text-secondary">
                  <FiMapPin size={18} />
                </div>
                <span className="text-gray-500">1234 Wellness Drive, Minneapolis, MN 55401</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="text-secondary">
                  <FiMail size={18} />
                </div>
                <a href="mailto:info@mysoulsuniverse.com" className="text-gray-500 hover:text-secondary transition-colors">
                  info@simanwellness.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="text-secondary">
                  <FiPhone size={18} />
                </div>
                <a href="tel:+254728312076" className="text-gray-500 hover:text-secondary transition-colors">
                  (612) 555-1234
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="border-t border-gray-300 mt-12 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.7 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Siman Wellness Centre. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 ml-10 hover:text-secondary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary mr-20 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;