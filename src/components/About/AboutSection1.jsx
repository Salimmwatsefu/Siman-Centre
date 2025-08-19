import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import about1 from '../../assets/siman_wellness_therapy_room.png';
import { FiTarget, FiCompass } from 'react-icons/fi';

const AboutSection1 = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the section is visible
    triggerOnce: true, // Animations run only once
  });

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.section
      ref={ref}
      className="bg-dark-green pb-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0, y: scrolled && inView ? -10 : 0 }}
      transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.2 }}
    >
      <motion.h1
        className="pt-20 ml-28 text-5xl text-terracotta"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.3 }}
      >
        {['Our', 'Mission', 'and', 'Vision'].map((word, index) => (
          <span
            key={index}
            style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: '0.25em' }}
          >
            {word}
            {index < 3 && <span style={{ whiteSpace: 'pre' }}> </span>}
          </span>
        ))}
      </motion.h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mx-5">
        {/* Left column - Image */}
        <div className="order-2 lg:order-1">
          <div className="relative">
            <motion.img
              src={about1}
              alt="Siman Wellness Therapy Room"
              className="rounded-xl w-full h-auto object-cover shadow-xl mt-28"
              style={{ maxHeight: '500px' }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
              transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.4 }}
            />
            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-goldenrod rounded-xl -z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.95 }}
              transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.5 }}
            />
            <motion.div
              className="absolute -top-6 -right-6 w-32 h-32 border-4 border-primary rounded-xl -z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.95 }}
              transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.6 }}
            />
          </div>
        </div>

        {/* Right column - Content */}
        <div className="order-1 lg:order-2">
          <div className="h-1 w-20 mt-4 rounded bg-bg" />
          <div className="space-y-8 mt-20">
            {/* Vision */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.7 }}
            >
              <div className="flex items-start">
                <div className="p-3 bg-sage rounded-lg text-primary mr-4">
                  <FiTarget size={24} />
                </div>
                <div>
                  <h3 className="text-lg text-deep-green font-semibold mb-2">Vision</h3>
                  <p className="text-gray-600">
                    To create a world where individuals and organizations thrive through holistic growth, 
                    empowered by knowledge, self-awareness, and emotional resilience.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.8 }}
            >
              <div className="flex items-start">
                <div className="p-3 bg-sage rounded-lg text-primary mr-4">
                  <FiCompass size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-deep-green mb-2">Mission</h3>
                  <p className="text-gray-600">
                    To empower individuals and organizations to thrive through expert training, customized coaching, and mentorship focused on results. Through a holistic approach that nurtures both the mind and heart, we integrate psychosocial support to foster emotional well-being, resilience, and meaningful transformation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection1;