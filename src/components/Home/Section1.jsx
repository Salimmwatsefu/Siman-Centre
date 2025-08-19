import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import section1 from '../../assets/siman_wellness_hero.png';

function Section1() {
  const [scrolled, setScrolled] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the section is visible
    triggerOnce: true, // Animations run only once when entering viewport
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      ref={ref}
      className="md:flex my-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: scrolled && inView ? -10 : 0 }}
      transition={{ type: 'spring', stiffness: 70, damping: 25 }}
    >
      {/* Left Column: Text */}
      <div className="md:w-[550px] flex flex-col justify-center mx-5 px-7 mb-10">
        <motion.h1
          className="text-deep-green text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.2 }}
        >
          Welcome to <br />Siman Wellness Clinic
        </motion.h1>

        <motion.h2
          className="px-4 py-2 font-medium border-terracotta border-2 w-fit text-terracotta rounded-3xl uppercase text-sm mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.4 }}
        >
          Our Approach
        </motion.h2>

        <motion.p
          className="text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.6 }}
        >
          At Siman Wellness, we believe in treating the whole person, not just symptoms. Our comprehensive approach combines traditional medical care with integrative wellness therapies to address your physical, mental, and emotional well-being. From preventive care and chronic disease management to stress reduction and nutritional counseling, we partner with you on your journey to optimal health and vitality.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.95 }}
          transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.8 }}
        >
          <Link to="/services">
            <button className="bg-terracotta px-4 py-3 rounded-full text-pale-mint flex gap-2 items-center">
              Our Services
              <svg
                className="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.75 4C10.75 7.13537 12.9567 9.83761 16.0288 10.4642L19.9559 11.2651C20.3046 11.3363 20.5553 11.6427 20.556 11.9985C20.5567 12.3544 20.3072 12.6618 19.9588 12.7343L16.2209 13.512C13.1471 14.1516 10.9439 16.8604 10.9439 20H9.44394C9.44394 16.8801 11.218 14.1071 13.8966 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H13.7392C11.0416 9.90807 9.25 7.12986 9.25 4H10.75Z"
                  fill="#D7A24E"
                ></path>
              </svg>
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Right Column: Image */}
      <motion.div
        className="flex-1 h-full"
        initial={{ opacity: 0, x: 50, scale: 0.98 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50, scale: inView ? 1 : 0.98 }}
        transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.3 }}
      >
        <img
          src={section1}
          alt="Welcome"
          className="md:w-full h-full object-contain md:rounded-l-2xl mx-2"
        />
      </motion.div>
    </motion.div>
  );
}

export default Section1;