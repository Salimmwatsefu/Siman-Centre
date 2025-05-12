import React from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';

// A reusable component for section titles with animation
const SectionTitle = ({ 
  subtitle, 
  title, 
  center = false,
  light = false,
  className = '' 
}) => {
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={`mb-12 ${center ? 'text-center mx-auto max-w-3xl' : ''} ${className}`}
    >
      {subtitle && (
        <div className="inline-block mb-2">
          <span className={`text-sm uppercase font-semibold tracking-widest text-goldenrod`}>
            {subtitle}
          </span>
        </div>
      )}
      <h2 className={`heading-lg ${light ? 'text-white' : 'text-dark'}`}>
        {title}
      </h2>
      <div 
        className={`h-1 w-20 mt-4 ${center ? 'mx-auto' : ''} rounded ${light ? 'bg-secondary' : 'bg-primary'}`}
      />
    </motion.div>
  );
};

export default SectionTitle;