// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileNav from './MobileNav';
import logo from '../../assets/siman_wellness_logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{
          opacity: 0,
          top: 12,
          width: '90%',
          maxWidth: '80rem',
          borderRadius: 9999,
          padding: '6px 24px',
        }}
        animate={{
          opacity: 1,
          top: scrolled ? 0 : 12,
          width: scrolled ? '100%' : '90%',
          maxWidth: scrolled ? '100%' : '80rem',
          borderRadius: scrolled ? 0 : 9999,
          padding: scrolled ? '12px 24px' : '6px 24px',
        }}
        transition={{
          opacity: { duration: 0.3 },
          default: scrolled ? { type: 'spring', stiffness: 70, damping: 25 } : { duration: 0 },
        }}
        className={`fixed left-1/2 z-50 transform -translate-x-1/2 ${
          scrolled ? 'bg-sage' : 'bg-sinse/90'
        } backdrop-blur-lg shadow-lg flex justify-between items-center w-[90%] md:max-w-[80rem] rounded-[9999px] py-[6px] md:px-6 border border-sage/20 overflow-visible`}
      >
        {/* Logo and Brand */}
        <motion.div
          className="flex items-center space-x-2"
          animate={{ scale: scrolled ? 0.95 : 1 }}
          transition={scrolled ? { type: 'spring', stiffness: 70, damping: 25 } : { duration: 0 }}
        >
          <Link to="/">
            <img src={logo} alt="Siman Wellness Logo" className="h-8 w-auto" />
          </Link>
          <span
            className={`italic ${
              scrolled ? 'text-deep-blue' : 'text-sage'
            } text-lg md:text-xl transition-colors duration-300`}
          >
            Siman Wellness
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`${
              scrolled ? 'text-deep-blue' : 'text-sage'
            } hover:text-mist-blue transition-colors duration-300`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${
              scrolled ? 'text-deep-blue' : 'text-sage'
            } hover:text-mist-blue transition-colors duration-300`}
          >
            About
          </Link>
          <Link
            to="/services"
            className={`${
              scrolled ? 'text-deep-blue' : 'text-sage'
            } hover:text-mist-blue transition-colors duration-300`}
          >
            Services
          </Link>
          <Link
            to="/contacts"
            className={`${
              scrolled ? 'text-deep-blue' : 'text-sage'
            } hover:text-mist-blue transition-colors duration-300`}
          >
            Contacts
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/contacts">
            <motion.button
              className="bg-deep-green hover:bg-pale-mint text-terracotta font-normal text-sm rounded-full shadow-md transition-colors duration-300"
              animate={{
                scale: scrolled ? 0.95 : 1,
                padding: scrolled ? '6px 12px' : '8px 18px',
                fontSize: scrolled ? '0.8rem' : '0.9rem',
              }}
              transition={scrolled ? { type: 'spring', stiffness: 70, damping: 25 } : { duration: 0 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Get In Touch
            </motion.button>
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden ">
          <MobileNav />
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
