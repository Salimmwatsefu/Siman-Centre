import React from 'react';
// Import icons from react-icons
import { FaArrowRight, FaHeartbeat, FaUserMd, FaLeaf, FaStethoscope } from 'react-icons/fa';
import { IoRocketOutline } from "react-icons/io5"; // Example using an ionicon for the main header
import { Link } from 'react-router-dom';



// Define your services data
const services = [
  {
    title: 'Primary Care & Preventive Medicine',
    description: 'Comprehensive health screenings, annual physicals, and preventive care to maintain optimal health.',
    icon: <FaUserMd className="w-full h-full" />
  },
  {
    title: 'Integrative Wellness Therapies',
    description: 'Combining traditional medicine with complementary therapies like acupuncture, massage, and nutrition counseling.',
    icon: <FaLeaf className="w-full h-full" />
  },
  {
    title: 'Chronic Disease Management',
    description: 'Personalized treatment plans for diabetes, hypertension, heart disease, and other chronic conditions.',
    icon: <FaHeartbeat className="w-full h-full" />
  },
  {
    title: 'Mental Health & Wellness',
    description: 'Stress management, anxiety treatment, depression care, and mindfulness-based wellness programs.',
    icon: <FaStethoscope className="w-full h-full" />
  },
];

const ServicesSection = () => {
  return (
    // Main section background color: --color-bg (#fbf7f0)
    // Default text color for the section: --color-dark-green (#184D3A)
    <section className="bg-bg text-dark-green py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Main Header Icon: Background --color-goldenrod, Icon color --color-cream */}
          <div className="mx-auto mb-6 h-12 w-12 rounded-full bg-sage flex items-center justify-center text-dark-green text-2xl">
             <IoRocketOutline /> {/* Example Main Icon */}
          </div>
          {/* Title color inherits from section text color: --color-dark-green */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-deep-green">
            Our Services
          </h2>
          {/* Description color: --color-forest-green */}
          <p className="text-gray-500 max-w-2xl mx-auto">
            We offer comprehensive healthcare services that integrate traditional medicine with holistic wellness approaches for optimal health and vitality.
          </p>
        </div>

        {/* Services Grid - max 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              // Card background: --color-cream, Border: --color-pale-green
              className="bg-deep-green rounded-lg p-8 shadow-lg border border-sage flex flex-col"
            >
              {/* Service Card Icon color: --color-goldenrod */}
              <div className="mb-6 h-10 w-10 text-sage">
                 {service.icon} {/* Use the icon defined in the service object */}
              </div>

              {/* Title color: --color-dark-green */}
              <h3 className="text-xl font-semibold text-sage mb-3">
                {service.title}
              </h3>
              {/* Description color: --color-forest-green */}
              <p className="text-bg/50 text-sm mb-6 flex-grow">
                {service.description}
              </p>

              {/* Get Started Button text color: --color-goldenrod, Hover color: --color-burnt-orange */}
              <Link to='/contacts'>
              <button className="inline-flex items-center text-terracotta hover:text-burnt-orange font-semibold">
                Get Started
                <FaArrowRight className="ml-2 h-4 w-4" /> {/* Use FaArrowRight icon */}
              </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;