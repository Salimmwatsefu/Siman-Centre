import React from 'react'

import holistic from '../../assets/holisticIcon.png'
import expert from '../../assets/expert.png'
import personalized from '../../assets/personalized.png'
import sustainable from '../../assets/sustainable.png'
import leaves from '../../assets/leaves.png' 
import logo1 from '../../assets/logo1.png' 

function Section2() {
  return (
    <div className='mt-20 bg-dark-green relative overflow-hidden pb-20'> {/* Added relative for positioning */}
      {/* Leaves Image */}
      <img
        src={logo1}
        alt='shadow leaves'
        className='absolute top-0  -right-[400px] w-[700px] opacity-[15%] pointer-events-none select-none' // Subtle, non-interactive
      />
      
      <div className='md:ml-16 ml-5'>
        <div className='md:pt-28 pt-16 pb-10'>
          <h1 className='px-4 py-2 border-2 border-goldenrod w-fit text-goldenrod rounded-3xl uppercase text-sm'>
            Why My Soul’s Universe ?
          </h1>
          <p className='text-bg md:text-6xl/snug text-4xl/snug font-light mt-14'>
            Learn how we can <br /> help you grow.
          </p>
        </div>

        <div className='mt-10 md:flex  gap-8'> {/* Added gap for better spacing */}
          <div>
            <img
              src={holistic}
              alt='holistic'
              className='w-20 opacity-70'
            />
            <h2 className='text-goldenrod mt-5 font-medium text-xl'>Holistic Approach</h2>
            <p className='text-bg/70 mt-3'>
              We go beyond traditional training by integrating emotional well-being and resilience-building.
            </p>
          </div>

          <div>
            <img
              src={expert}
              alt='expert'
              className='w-20 opacity-70'
            />
            <h2 className='text-goldenrod mt-5 font-medium text-xl'>Expert-Led Programs</h2>
            <p className='text-bg/70 mt-3'>
              Our team consists of experienced professionals passionate about transformation.
            </p>
          </div>

          <div>
            <img
              src={personalized}
              alt='personalized'
              className='w-20 opacity-70'
            />
            <h2 className='text-goldenrod mt-5 font-medium text-xl'>Personalized Support</h2>
            <p className='text-bg/70 mt-3'>
              We tailor our services to meet the unique needs of individuals and organizations.
            </p>
          </div>

          <div>
            <img
              src={sustainable}
              alt='sustainable'
              className='w-20 opacity-70'
            />
            <h2 className='text-goldenrod mt-5 font-medium text-xl'>Sustainable Impact</h2>
            <p className='text-bg/70 mt-3'>
              We focus on long-term growth, ensuring our clients continue to thrive beyond our programs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2