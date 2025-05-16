import React from 'react';

import { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo1 from '../../assets/logo1.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerNavLinks = [
    { name: 'Home', target: '/' },
    { name: 'About', target: 'about' },
    { name: 'Services', target: 'services' },
    { name: 'Contact', target: 'contacts' },
  ];

  return (
    <footer className="bg-[#E2EDE3] text-dark-green pt-16 pb-8">
      <div className="container mx-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mt-2">
              <img
              src={logo1}
              alt='logo'
              className=' w-12 mt-3'
              />
              <span className="text-xl font-serif font-semibold">My Soul's Universe</span>
            </div>
            <p className="text-gray-700 mt-4 md:ml-4 ml-2">
              Empowering individuals and organizations on their journey to personal and professional growth.
            </p>
            <div className="flex space-x-4 pt-4 ml-4 text-gray-600 ">
              <a href="" className=" hover:text-gray-300  transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/mysoulsuniverse/" className=" hover:text-gray-300  transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className=" hover:text-gray-300 transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="https://x.com/mysoulsuniverse" className=" hover:text-gray-300 transition-colors">
                <FiTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
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
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 flex flex-wrap md:block gap-5">
              <li className="text-gray-500 hover:text-gray-300 transition-colors">Professional Training</li>
              <li className="text-gray-500 hover:text-gray-300 transition-colors">Personalized Coaching</li>
              <li className="text-gray-500 hover:text-gray-300 transition-colors">Mentoring Programs</li>
              <li className="text-gray-500 hover:text-gray-300 transition-colors">Psychosocial Support</li>
              <li className="text-gray-500 hover:text-gray-300 transition-colors">Organizational Growth</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="mt-1 text-secondary">
                  <FiMapPin size={18} />
                </div>
                <span className="text-gray-500">2nd Floor, Mbandu Complex, Karen</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="text-secondary">
                  <FiMail size={18} />
                </div>
                <a href="mailto:info@mysoulsuniverse.com" className="text-gray-500 hover:text-secondary transition-colors">
                  info@mysoulsuniverse.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="text-secondary">
                  <FiPhone size={18} />
                </div>
                <a href="tel:+254728312076" className="text-gray-500 hover:text-secondary transition-colors">
                  +254 728312076
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} My Soul's Universe. All rights reserved.
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;