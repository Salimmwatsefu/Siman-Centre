import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import logo from '../../assets/siman_wellness_logo.png';

function AboutHero() {
  const [scrolled, setScrolled] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the section is visible
    triggerOnce: true, // Animations run only once
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Split h1 text into words
  const h1Text = 'About Siman Wellness';
  const h1Words = h1Text.split(' ');

  // Split paragraph into sentences
  const pText = 'At Siman Wellness, we are dedicated to providing comprehensive healthcare that treats the whole person, not just symptoms. Our integrative approach combines traditional medical care with evidence-based wellness therapies to address your physical, mental, and emotional well-being. We understand that true health extends beyond the absence of disease—it encompasses vitality, balance, and quality of life. That\'s why our experienced healthcare team provides personalized treatment plans, preventive care, and wellness education to help you achieve optimal health. Whether you\'re managing a chronic condition, seeking preventive care, or looking to enhance your overall wellness, Siman Wellness is here to support you. Together, we create a path toward lasting health, vitality, and well-being.';
  const pSentences = pText.split('. ').map((sentence, index, arr) => (index < arr.length - 1 ? `${sentence}.` : sentence));

  // Variants for word animation (h1)
  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 25,
        delay: 0.4 + i * 0.1, // Stagger each word by 100ms
      },
    }),
  };

  // Variants for sentence animation (p)
  const sentenceVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 25,
        delay: 0.6 + i * 0.2, // Stagger each sentence by 200ms
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      className="bg-mist-blue pb-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.98, y: scrolled && inView ? -10 : 0 }}
      transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.2 }}
    >
      <motion.div
        className="absolute top-36 left-0 w-32 h-32 bg-dark-green/10 rounded-full transform -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0.5, scale: 0.9 }}
        animate={{ opacity: inView ? 1 : 0.5, scale: inView ? 1 : 0.9 }}
        transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.3 }}
      />

      <div className="md:flex md:mx-20 mx-5 md:pt-24 pt-5 gap-20 md:pl-5">
        <div className="mt-16 md:max-w-[580px]">
          <motion.h1
            className="text-5xl text-deep-green"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.95 }}
            transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.4 }}
          >
            {h1Words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                custom={index}
                style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: '0.25em' }}
              >
                {word}
                {index < h1Words.length - 1 && (
                  <span style={{ display: 'inline-block', whiteSpace: 'pre' }}> </span>
                )}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className="mt-10 text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.6 }}
          >
            {pSentences.map((sentence, index) => (
              <motion.span
                key={index}
                variants={sentenceVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                custom={index}
                style={{ display: 'inline-block', whiteSpace: 'normal', marginRight: '0.25em' }}
              >
                {sentence}
                {index < pSentences.length - 1 && (
                  <span style={{ display: 'inline-block', whiteSpace: 'pre' }}> </span>
                )}
              </motion.span>
            ))}
          </motion.p>
        </div>
        <motion.div
          className="md:w-[500px] bg-pale-green flex justify-center rounded-2xl mt-20 md:mt-0"
          initial={{ opacity: 0, scale: 1.05, clipPath: 'inset(0 50% 0 50%)' }}
          animate={{
            opacity: inView ? 1 : 0,
            scale: inView ? 1 : 1.05,
            clipPath: inView ? 'inset(0 0 0 0)' : 'inset(0 50% 0 50%)',
          }}
          transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.5 }}
        >
          <div>
            <img
              src={logo}
              alt="Siman Wellness Logo"
              className=""
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutHero;