import React from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';


const Card = ({ 
  className = '', 
  children, 
  icon, 
  title, 
  description,
  hoverEffect = true,
  delay = 0
}) => {
  const { ref, controls } = useScrollAnimation(0.1);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1],
        delay: delay * 0.1
      } 
    }
  };

  // If custom content is provided, just wrap it in the card
  if (children) {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className={`card ${hoverEffect ? 'hover:-translate-y-2' : ''} ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  // Otherwise use the standard card layout with icon, title and description
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={`card ${hoverEffect ? 'hover:-translate-y-2' : ''} ${className}`}
    >
      {icon && (
        <div className="mb-4 text-primary">{icon}</div>
      )}
      {title && (
        <h3 className="heading-sm mb-3">{title}</h3>
      )}
      {description && (
        <p className="text-gray-600">{description}</p>
      )}
    </motion.div>
  );
};

export default Card;