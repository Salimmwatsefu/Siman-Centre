import React from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';


const Section = ({ 
  id, 
  className = '', 
  children, 
  bgColor = 'bg-dark-green',
  fullHeight = false,
  withContainer = true
}) => {
  const { ref, controls, variants } = useScrollAnimation(0.05);

  return (
    <section 
      id={id} 
      className={`${bgColor} ${fullHeight ? 'min-h-screen' : ''} section ${className}`}
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className={withContainer ? 'container' : ''}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;