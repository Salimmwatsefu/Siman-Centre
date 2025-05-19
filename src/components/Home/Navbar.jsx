import React from 'react';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav'; 
import logo from '../../assets/newLogoFull.png'; 

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md border-b border-dark-green/20">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center py-4">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="My Soul’s Universe Logo" className="h-16 mr-2" />
          </Link>
          <span className="md:text-xl text-lg font-bold text-gray-800">MySoulsUniverse</span>
        </div>

        {/* Desktop Links and Mobile Nav */}
        <div className="flex items-center">
          {/* Desktop Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center space-x-6 mr-14">
            <Link to="/" className="text-dark-green hover:text-gold transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-dark-green hover:text-gold transition-colors">
              About
            </Link>
            <Link to="/services" className="text-dark-green hover:text-gold transition-colors">
              Services
            </Link>
            <Link to="/contacts" className="text-dark-green hover:text-gold transition-colors">
              Contacts
            </Link>
          </div>

          {/* Get Started Button (Desktop) */}
          <Link to="/contacts" className="hidden md:block">
            <button className="bg-sage-green hover:bg-dark-green text-dark-green hover:text-white font-semibold py-2 px-4 rounded cursor-pointer transition-colors">
              Get Started
            </button>
          </Link>

          {/* Mobile Nav (Visible on Mobile) */}
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;