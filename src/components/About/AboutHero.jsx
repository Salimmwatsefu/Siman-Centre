import React from 'react';
import video1 from '../../assets/video1.mp4';

function AboutHero() {
  return (
    <div className='bg-bg  pb-20'>

      <div className="absolute top-36 left-0 w-32 h-32 bg-dark-green/10 rounded-full transform -translate-x-1/2 -translate-y-1/2" />

      
      <div className='md:flex md:mx-20 mx-5 md:pt-24 pt-5 gap-20 md:pl-5'>
        
        
        <div className='mt-16 md:max-w-[580px]'>
          <h1 className='text-6xl text-dark-green '>About Us</h1>
          <p className=' mt-10 text-gray-600'>At My Soul’s Universe, we are dedicated to empowering individuals and organizations on their
journey to personal and professional growth. Our holistic approach blends expert training,
personalized coaching, and mentoring to help people achieve their full potential.
We recognize that true development extends beyond skills and knowledge—it encompasses
emotional well-being and resilience. That’s why we provide psychosocial support, equipping
individuals with the tools to navigate life’s challenges with confidence and clarity.
Whether you're seeking professional advancement, personal transformation, or a stronger sense
of purpose, My Soul’s Universe is here to guide you. Together, we create a path toward growth,
fulfillment, and lasting success.</p>
        </div>
        <div className='md:w-[500px]  bg-[#E2EDE3] flex justify-center rounded-2xl mt-20 md:mt-0'>
          <div>
            <video
              src={video1}
              className='w-[300px] rounded-md  shadow-lg hover:shadow-xl transition-shadow duration-300'
              controls
              playsInline
              muted
              title='Welcome to My Soul’s Universe'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;