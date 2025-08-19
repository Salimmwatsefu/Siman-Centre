import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import aboutHero from '../../assets/heroAbout1.png';

function ServicesHero() {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the section is visible
    triggerOnce: true, // Animations run only once
  });

  // Split text into words
  const text = 'Services at Siman Wellness Centre';
  const words = text.split(' ');

  // Variants for letter animation
  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 25,
        delay: 0.3 + i * 0.03, // Stagger each letter by 30ms
      },
    }),
  };

  // Track letter index across words
  let letterIndex = 0;

  return (
    <div ref={ref} className="grid grid-cols-2 md:h-[95vh] h-[50vh]">
      {/* Left Column: Text */}
      <div className="bg-deep-blue flex items-center  ">
        <motion.p
          className="md:mt-[45%] px-10 md:text-6xl text-3xl font-bold text-sage"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.95 }}
          transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.3 }}
        >
          {words.map((word, wordIndex) => (
            <motion.span
              key={wordIndex}
              style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: '0.25em' }}
            >
              {word.split('').map((letter, charIndex) => {
                const currentIndex = letterIndex++;
                return (
                  <motion.span
                    key={`${wordIndex}-${charIndex}`}
                    variants={letterVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    custom={currentIndex}
                    style={{ display: 'inline-block' }}
                  >
                    {letter}
                  </motion.span>
                );
              })}
              {wordIndex < words.length - 1 && (
                <span style={{ display: 'inline-block', whiteSpace: 'pre' }}> </span>
              )}
            </motion.span>
          ))}
        </motion.p>
      </div>

      {/* Right Column: Image */}
      <div>
        <img
          src={aboutHero}
          alt="Siman Wellness Centre Services"
          className="md:h-[95vh] h-[50vh] object-cover w-full"
        />
      </div>
    </div>
  );
}

export default ServicesHero;