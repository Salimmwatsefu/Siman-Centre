import React from 'react'
import hero2 from '../../assets/siman-hero-bg.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-contain bg-right bg-no-repeat bg-[#0d3a49]"
      style={{ backgroundImage: `url(${hero2})` }}
    >
      <div className="relative container mx-auto px-6 md:px-12 items-center gap-16 h-full pt-[120px]">
        
        {/* Left Content */}
        <motion.div 
          className="flex-1 text-center md:text-left max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-sage font-bold md:text-7xl text-4xl leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          >
            Comprehensive <span className="italic text-sage">wellness</span> care
          </motion.h1>

          <motion.h2 
            className="text-deep-green md:text-3xl text-2xl font-medium mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          >
            Minnesota's trusted mental clinic
          </motion.h2>

          <motion.p 
            className="mt-6 text-mist-blue text-base md:text-lg max-w-md leading-relaxed mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
          >
            We provide compassionate mental health services, blending therapy and counseling
            to help individuals and families across Minnesota 
            find balance, resilience, and healing.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row gap-5 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
          >
            <Link to="/services">
              <motion.button 
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="bg-terracotta hover:bg-sand text-white px-8 py-3 rounded-full shadow-lg transition-colors"
              >
                Our Services
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button 
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white border border-sage text-deep-green hover:bg-sage hover:text-white px-8 py-3 rounded-full shadow-md transition-colors"
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
