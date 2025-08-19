import React from 'react';
import { Link } from 'react-router-dom';


function CTA() {
  return (
    <div
      className="bg-deep-green flex justify-center py-20 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(https://plus.unsplash.com/premium_photo-1669613233557-1676c121fe73?q=100&w=1571&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
    >
      <div className="md:mx-5 mx-1 text-center bg-dark-green/90 w-fit md:px-68 py-20 rounded-3xl">
        <h1 className="text-bg md:text-5xl text-4xl hero-phrase font-medium">
          Begin Your Wellness Journey
        </h1>

        <p className="mt-5 md:text-lg text-gray-200">
          Ready to prioritize your health and well-being?
        </p>
        <p className="md:text-lg text-gray-200 px-1">
          Let <span className="italic">Siman Wellness</span> guide you toward optimal health and vitality.
        </p>

        <div className="flex justify-center mt-5">
          <Link to="/contacts">
            <button className="bg-[#E2EDE3] px-5 py-4 mt-10 rounded-lg text-dark-green flex gap-2">
              Schedule Consultation

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
                  fill="#184D3A"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CTA;
