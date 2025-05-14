import React from 'react';
// Import Link from react-router-dom
import { Link } from 'react-router-dom';
import logo from '../../assets/logo1.png';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md border-b border-dark-green/20">
      <div className="container mx-auto px-4 md:px-6  flex justify-between items-center">
       
        <div className="flex items-center">
          <img src={logo} alt="MSU Logo" className="h-14 mr-2 mt-5" />
          <span className="md:text-xl text-lg font-bold text-gray-800">MySoulsUniverse</span>
        </div>

        
        <div className="flex items-center">
          
          <div className="hidden md:flex items-center space-x-6 mr-14"> 
            {/* Use Link component for navigation */}
            <Link to="/" className="text-gray-800 hover:text-gray-800 flex items-center">
              Home
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-gray-800 flex items-center">
              About
            </Link>
            <Link to="/services" className="text-gray-800 hover:text-gray-800 flex items-center">
              Services
            </Link>
            <Link to="/contacts" className="text-gray-800 hover:text-gray-800 flex items-center"> {/* Corrected path to /contacts */}
              Contacts
            </Link>
          </div>

          <Link to="/contacts">
          <button className="bg-sage-green hover:bg-teal-700 text-dark-green font-semibold py-2 md:px-4 px-2 rounded cursor-pointer">
            Get Started
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
