// MobileNav.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../../assets/siman_wellness_logo.png';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { x: '100%', opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contacts', label: 'Contacts' },
  ];

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={toggleMenu}
        className="text-white focus:outline-none z-50 relative"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-sage z-60 flex flex-col h-[90vh] items-center justify-center overflow-y-auto"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Logo */}
            <div className="absolute top-6 left-6">
              <Link to="/" onClick={toggleMenu}>
                <img src={logo} alt="Siman logo" className="h-12" />
              </Link>
            </div>

            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 text-white focus:outline-none"
            >
              <FiX size={28} />
            </button>

            {/* Menu Items */}
            <nav className="flex flex-col items-center space-y-6 text-xl font-semibold">
              {links.map((link, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <Link
                    to={link.path}
                    className="text-white hover:text-gold transition-colors"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants}>
                <Link
                  to="/contacts"
                  className="bg-white text-sage hover:bg-deep-green hover:text-white font-semibold py-2 px-6 rounded cursor-pointer transition-colors"
                  onClick={toggleMenu}
                >
                  Get Started
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
