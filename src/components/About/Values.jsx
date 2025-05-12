import React from 'react';
import { motion } from 'framer-motion';
import Section from '../../ui/Section';
import SectionTitle from '../../ui/SectionTitle';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { 
  FiHeart, FiLifeBuoy, FiShield, FiUsers, 
  FiRefreshCw, FiBookOpen, FiGlobe, FiTarget 
} from 'react-icons/fi';

const Values = () => {
  const animation = useScrollAnimation(0.1);

  // Core values data
  const values = [
    {
      icon: <FiHeart />,
      name: 'Empowerment',
      description: 'We inspire individuals and organizations to take charge of their growth.'
    },
    {
      icon: <FiLifeBuoy />,
      name: 'Holistic Growth',
      description: 'True development integrates the mind, heart, and spirit.'
    },
    {
      icon: <FiShield />,
      name: 'Integrity & Authenticity',
      description: 'We operate with honesty, transparency, and authenticity.'
    },
    {
      icon: <FiUsers />,
      name: 'Compassion & Emotional Well-being',
      description: 'We create a nurturing space where individuals feel seen, heard, and supported.'
    },
    {
      icon: <FiRefreshCw />,
      name: 'Resilience & Adaptability',
      description: 'We encourage the strength, flexibility, and mindset to embrace change.'
    },
    {
      icon: <FiBookOpen />,
      name: 'Lifelong Learning & Innovation',
      description: 'We champion curiosity, continuous learning, and the pursuit of knowledge.'
    },
    {
      icon: <FiGlobe />,
      name: 'Community & Connection',
      description: 'We foster collaboration, inclusivity, and a strong sense of belonging.'
    },
    {
      icon: <FiTarget />,
      name: 'Purpose-Driven Success',
      description: 'We believe true fulfillment comes from aligning passion, skills, and values.'
    }
  ];

  return (
    <Section id="values" bgColor="bg-dark-green">
      <h1 className=' text-goldenrod text-center font-medium uppercase pt-20'>Core Values</h1>
      <h2 className=' text-center pt-5 text-4xl text-gray-200 font-semibold'>The Principles That Guide Us</h2>

      <motion.div
        ref={animation.ref}
        initial="hidden"
        animate={animation.controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 mx-5"
      >
        {values.map((value, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/20 transition-colors"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-goldenrod rounded-full mr-3">
                <span className="text-dark-green">
                  {value.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold">{value.name}</h3>
            </div>
            <p className="text-white/80">{value.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative element */}
      <div className="mt-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="inline-block"
        >
          <div className="h-24 w-24 rounded-full bg-secondary/20 backdrop-blur-sm p-6 mx-auto">
            <div className="h-full w-full rounded-full border-2 border-dashed border-secondary animate-spin-slow"></div>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-white/70 mt-6 max-w-2xl mx-auto"
        >
          Our values form the foundation of everything we do at My Soul's Universe, guiding our approach to empowering individuals and organizations on their growth journey.
        </motion.p>
      </div>
    </Section>
  );
};

export default Values;