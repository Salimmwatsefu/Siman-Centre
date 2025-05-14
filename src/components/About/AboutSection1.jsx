import React from 'react';
import about1 from '../../assets/about1.jpg'


import { FiTarget, FiCompass } from 'react-icons/fi';

const AboutSection1 = () => {
 
  
  return (
    <section id="about" className=' bg-dark-green pb-40'>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20 mx-5">
        {/* Left column - Image */}
        <div
         
          className="order-2 lg:order-1"
        >
          <div className="relative">
            <img 
              src={about1}
              alt="Diverse team collaboration" 
              className="rounded-xl w-full h-auto object-cover shadow-xl mt-28" 
              style={{ maxHeight: '500px' }}
            />
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-goldenrod rounded-xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-primary rounded-xl -z-10"></div>
          </div>
        </div>
        
        {/* Right column - Content */}
        <div className="order-1 lg:order-2">
          <h1 className=' text-3xl md:text-5xl font-bold leading-tight  text-bg' >Our Mission & Vision</h1>
          <div 
        className={`h-1 w-20 mt-4  rounded bg-bg`}
      />
          <div
            
            className="space-y-8 mt-20"
          >
            {/* Vision */}
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="flex items-start">
                <div className="p-3 bg-pale-green rounded-lg text-primary mr-4">
                  <FiTarget size={24} />
                </div>
                <div>
                  <h3 className=" text-lg text-dark-green font-semibold  mb-2">Vision</h3>
                  <p className="text-gray-600">
                    To create a world where individuals and organizations thrive through holistic growth, 
                    empowered by knowledge, self-awareness, and emotional resilience.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Mission */}
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="flex items-start">
                <div className="p-3 bg-pale-green rounded-lg text-primary mr-4">
                  <FiCompass size={24} />
                </div>
                <div>
                  <h3 className=" text-lg font-semibold text-dark-green mb-2">Mission</h3>
                  <p className="text-gray-600">
                    To empower individuals and organizations thrive through expert training, customized coaching, and mentorship focused on results. Through holistic approach that nurtured both the mind and heart, we integrate psychosocial support to foster emotional wellbeing, resilience and meaningful transformation
                  </p>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection1;