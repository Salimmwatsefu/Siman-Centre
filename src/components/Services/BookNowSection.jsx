import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { IoRocketOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

const BookNowSection = () => {
  return (
    <section className="bg-sage text-deep-green py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto text-center"
      >
        {/* Header Icon */}
        <div className="mx-auto mb-6 h-12 w-12 rounded-full bg-deep-green flex items-center justify-center text-white/70 text-2xl">
          <IoRocketOutline />
        </div>
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Schedule Your Consultation Today
        </h2>
        {/* Description */}
        <p className="text-forest-green max-w-2xl mx-auto mb-8">
          Take the first step toward optimal health and wellness. Schedule a consultation with our experienced healthcare team to begin your personalized wellness journey.
        </p>
        {/* Booking Button */}
        <Link
          to="/contacts"
          className="inline-flex items-center bg-deep-green text-white/70 py-3 px-6 rounded-md font-semibold hover:bg-burnt-orange transition-colors"
        >
          Schedule Consultation
          <FaArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </motion.div>
    </section>
  );
};

export default BookNowSection;