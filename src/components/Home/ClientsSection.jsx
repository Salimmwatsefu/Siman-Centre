import React from 'react';



const clients = [
  { name: 'Mayo Clinic', logo: 'https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2013/08/26/10/44/mayo-one-logo-8col.jpg' },
  { name: 'Allina Health', logo: 'https://www.allinahealth.org/-/media/allina-health/images/logos/allina-health-logo.ashx' },
  { name: 'HealthPartners', logo: 'https://www.healthpartners.com/content/dam/healthpartners/SiteCollectionImages/logos/hp-logo-color.png' },
  { name: 'Essentia Health', logo: 'https://www.essentiahealth.org/-/media/images/essentia/logos/essentia-health-logo.ashx' },
  { name: 'M Health Fairview', logo: 'https://www.mhealthfairview.org/-/media/project/mhealth/mhealthfairview/images/logos/mhealth-fairview-logo.png' },
  { name: 'Park Nicollet', logo: 'https://www.parknicollet.com/-/media/project/parknicollet/parknicollet/images/logos/park-nicollet-logo.png' },
];

function ClientsSection() {
  return (
    <div className="pt-20 bg-bg py-16">
      <div className="md:ml-16  ml-5">
        {/* Heading */}
        <h1 className="px-4 py-2 border-2 border-dark-green w-fit text-dark-green rounded-3xl uppercase text-sm">
          Our Partners
        </h1>
        <p className="text-dark-green text-5xl/snug font-light mt-8">
          Trusted Healthcare Network.
        </p>

        {/* Carousel */}
        <div className="mt-20 overflow-hidden">
          <div className="flex gap-16 animate-slide">
            
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 mx-8"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
                <h2 className=' mt-8 text-gray-600'>{client.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for Animation */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 20s linear infinite;
        }
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default ClientsSection;