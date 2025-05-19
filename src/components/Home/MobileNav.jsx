import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../../assets/newLogoFull.png'; // Adjust path based on your folder structure

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Animation variants for the menu
  const menuVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { x: '100%', opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  // Animation variants for menu items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="text-dark-green focus:outline-none"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-pale-green z-50 flex flex-col items-center justify-center"
          >
            {/* Logo */}
            <div className="absolute top-6 left-6">
              <Link to="/" onClick={toggleMenu}>
                <img src={logo} alt="My Soul’s Universe Logo" className="h-12" />
              </Link>
            </div>

            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 text-dark-green focus:outline-none"
              aria-label="Close menu"
            >
              <FiX size={28} />
            </button>

            {/* Menu Items */}
            <nav className="flex flex-col items-center space-y-6 text-xl font-semibold">
              <motion.div variants={itemVariants}>
                <Link
                  to="/"
                  className="text-dark-green hover:text-gold transition-colors"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  to="/about"
                  className="text-dark-green hover:text-gold transition-colors"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  to="/services"
                  className="text-dark-green hover:text-gold transition-colors"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  to="/contacts"
                  className="text-dark-green hover:text-gold transition-colors"
                  onClick={toggleMenu}
                >
                  Contacts
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  to="/contacts"
                  className="bg-sage-green hover:bg-dark-green text-dark-green hover:text-white font-semibold py-2 px-6 rounded cursor-pointer transition-colors"
                  onClick={toggleMenu}
                >
                  Get Started
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;