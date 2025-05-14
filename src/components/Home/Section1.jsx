import React from 'react'
import section1 from '../../assets/section1.png'
import { Link } from 'react-router-dom'

function Section1() {
  return (
    <div>
        <div className=' mt-20 mb-10'>
            <h1 className=' text-center text-burnt-orange text-4xl'>Welcome to My Soul’s Universe</h1>
           
        </div>

        <div className=' md:ml-16 ml-5 mt-20'>
             <h1 className='px-4 py-2  font-medium border-dark-green border-2 w-fit text-dark-green rounded-3xl uppercase text-sm'>
            What we do 
          </h1>
        </div>

        <div className=' md:flex md:mx-20 mx-4 mt-10 gap-20'>
            <div className=' mt-10 md:max-w-[480px]'>
                <p className=' text-lg text-gray-700' >At My Soul’s Universe, we empower individuals and organizations to reach their full potential through expert training, personalized coaching, and mentoring. Our holistic approach combines skill development with psychosocial support, fostering emotional resilience and personal growth. Whether you seek professional success, personal transformation, or a stronger sense of purpose, we guide you toward lasting fulfillment. </p>
                
                <div className=' flex justify-center md:block  '>
                    <Link to='/services'>
            <button className=' bg-dark-green px-5 py-4 mt-10 rounded-lg text-goldenrod flex gap-2 cursor-pointer'>
                Our Services

                <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.75 4C10.75 7.13537 12.9567 9.83761 16.0288 10.4642L19.9559 11.2651C20.3046 11.3363 20.5553 11.6427 20.556 11.9985C20.5567 12.3544 20.3072 12.6618 19.9588 12.7343L16.2209 13.512C13.1471 14.1516 10.9439 16.8604 10.9439 20H9.44394C9.44394 16.8801 11.218 14.1071 13.8966 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H13.7392C11.0416 9.90807 9.25 7.12986 9.25 4H10.75Z" fill="#D7A24E"></path>
            </svg>
            </button>
            </Link>
        </div>
            </div>
            <div>

                <img src={section1} alt=" Welcome" className=' md:w-[900px] rounded-[100px] md:-mt-10 mt-10' />

            </div>
        </div>
    </div>
  )
}

export default Section1