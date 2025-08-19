import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import leaves from '../../assets/leaves.png';

function Section2() {
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

  const cards = [
    {
      title: 'Integrative Medicine',
      text: 'We combine traditional medical care with complementary therapies for comprehensive healing.',
      image: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      title: 'Expert Healthcare Team',
      text: 'Our experienced practitioners are dedicated to providing exceptional, personalized care.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoJTIwY2FyZSUyMHRlYW18ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Personalized Treatment',
      text: 'We create customized wellness plans tailored to your unique health goals and needs.',
      image: 'https://plus.unsplash.com/premium_photo-1702599147284-ced5c5c194a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYWxpemVkJTIwdHJlYXRtZW50fGVufDB8fDB8fHww',
    },
    {
      title: 'Long-term Wellness',
      text: 'We focus on sustainable lifestyle changes that promote lasting health and vitality.',
      image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
  ];

  return (
    <motion.div
      ref={ref}
      className="mt-20 bg-deep-blue relative overflow-hidden pb-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: scrolled && inView ? -10 : 0 }}
      transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.2 }}
    >
      {/* Leaves Background */}
      <motion.img
        src={leaves}
        alt="Leaves Background"
        className="absolute top-0 -right-[100px] w-[200px] opacity-15 pointer-events-none select-none"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: inView ? 0.15 : 0, x: inView ? 0 : 50 }}
        transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.4 }}
      />

      <div className="md:mx-16 ml-5 relative z-10">
        <div className="md:pt-28 pt-16 pb-10">
          <motion.h1
            className="px-4 py-2 border-2 border-terracotta w-fit text-terracotta rounded-3xl uppercase text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.3 }}
          >
            Why Siman Wellness?
          </motion.h1>
          <motion.p
            className="text-bg md:text-6xl text-4xl font-light mt-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.5 }}
          >
            Discover comprehensive <br /> wellness care.
          </motion.p>
        </div>

        <div className="mt-10 grid md:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg group h-80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.6 + index * 0.1 }}
            >
              {/* Background image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>
              {/* Text */}
              <div className="absolute inset-0 flex flex-col justify-center items-start p-6 text-white">
                <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
                <p className="text-white/80">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Section2;