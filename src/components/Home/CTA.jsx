import React from 'react'

function CTA() {
  return (
    <div className=' bg-bg flex justify-center py-20 '>

        <div className='  text-center bg-dark-green w-fit px-68 py-20 rounded-3xl'>
            <h1 className=' text-bg text-5xl hero-phrase font-medium'>Begin Your Transformation</h1>

            <p className=' mt-5 text-lg text-gray-200'>Ready to grow, thrive, and achieve your goals? </p>
            <p className=' text-lg text-gray-200'>Let <span className=' italic'>My Soul’s Universe</span> guide you with expert coaching and support.</p>


            <div className=' flex justify-center mt-5'>
            <button className=' bg-[#E2EDE3] px-5 py-4 mt-10 rounded-lg text-dark-green flex gap-2'>
                Contact us today

                <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.75 4C10.75 7.13537 12.9567 9.83761 16.0288 10.4642L19.9559 11.2651C20.3046 11.3363 20.5553 11.6427 20.556 11.9985C20.5567 12.3544 20.3072 12.6618 19.9588 12.7343L16.2209 13.512C13.1471 14.1516 10.9439 16.8604 10.9439 20H9.44394C9.44394 16.8801 11.218 14.1071 13.8966 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H13.7392C11.0416 9.90807 9.25 7.12986 9.25 4H10.75Z" fill="#184D3A"></path>
            </svg>
            </button>
        </div>



        </div>
    </div>
  )
}

export default CTA