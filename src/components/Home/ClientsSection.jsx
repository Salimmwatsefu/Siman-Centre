import React from 'react';



const clients = [
  { name: 'USIU-Africa', logo: 'https://www.usiu.ac.ke/assets/image/usiu-logo.png' },
  { name: 'Iwazolab', logo: 'https://iwazolab.com/images/logo.webp' },
  { name: 'SIMELab', logo: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBEQACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABQECAwQGB//EADQQAAEEAgAEAwQIBwAAAAAAAAEAAgMEBREGEiExQWFxExQyUSIzUoGRoaLRBxUjQlNicv/EABsBAQACAwEBAAAAAAAAAAAAAAABAwIEBQYH/8QAKBEBAAICAAUDAwUAAAAAAAAAAAECAxEEEiExQQUiUaGx0RNigcHx/9oADAMBAAIRAxEAPwD3FAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBa17XDbSCO3RBcgICAgICAgICAgIOZ4n4Rr5jms0rM2NyWvo2qzyzm/7AI5h+fn4K/FnnH0mNwwtTmeZZPO8dcI2xWv35nN6+zdM1s0co+YcRs+mwV0aYuGzxusKZtkrPV7JTyMTsPVv3JIoGywske57w1rS4A9z6rkzWeaaw2N9NyzNyFJ9X3ptuua3+YSt5Pl8W9KJrMTrRuO69tqu6w6u2eIztG3RB45gPTv4hRqe6drP5hS5ZXe+V+WIgSH2rdMJOgD16dVPLPwjcMRy+O9nI9l2vII2OkcI5A48oGydDqp5LfBzQ2KdmK7UgtVyXQzxtkjJBG2kbHQ+RUWiazMSRO+rGchXGTbji4+9OhM4bynXIHBpO+3cjop5Z5ebwbjem0sUiCh7IICVlszaEl0ND5BtsZ0QS7X93hoaPy192e4QrcipWsZPVzMRsQPPSKZhBd02CNnexvW+nULS4r1HHwMfqWtqfER3lZjwzl9sQhuLsayxW4drVJqImryA1qWR2YrOma0dd3Adl0eCz89JyTE+6Nzrxtr5qamK/EuS4idDDwzxdRdiGYy8PdJbEVecSQOBlaA5oGgw/Ma69Fv4tzlx25tx11vuov0paNalIX7TMP/ABCymbk6RVpoYZ3f6SVna/Wxn4quIm/D1xx539J/DKZ5bzZAPrSVOFOMIrA1MW4ySbX238r3fqcVfW3NlxzH7lcxqtv4dtTxE9KvkZrOJ4aqt9wmDZMZze13y9urR9HW/wAlpWyRaYiLWnr5/wBX1rqJ6QyYfJ5aeLH4zFT0qzKeHrWZHWo3PMvM3QaNOHK0cvV3Xv2TJSkTNrddzMJra2oiPhqY6/l81lcJdq2KdW7bwjpJHyQl7R/UaSGs5h5ePTqsr1pjpaJiZiLf1KIm1rRMfDreFMpNmMLFbssjbPzyRSey+BzmPLC5vkeXY9Vq5scUvqFtLbjaYVbIQRWQyrIdx19OkHQnwb+64HqPrePh948Put9IbeDhZv7rdIQUsj5Xl8ji5x7krxubNkzWm+Sdy6daVrGoT9vEUMxjIa2TqRWYg1rg2RvwnXcHuD6L6ZwV748NJrOp1H2cLLWLWnfywQ8K4KDGz46LGVxUnIdNHon2hB2C49zo+a2pzZJtFt9YVxjrEa0zW+H8TcFv3qjDL74WGxzD6zk+HfoorlvXWp7JmlZ30VscP4qyLgnowvF0xmyCPreT4N+mgojLeutT27E0rPeGrT4P4eozGaniasMhY5hcxujyuGiPvCztxGW0amyIx1jtDPb4aw1xtZtrHwSCtGIotj4WfZ829Ox2FjXLeu9T3TNKz4WWOFsJYirxTY6FzK8fsoe4MbPkCDsKYzZImZ33RNKz4SdSrBSrR1qkLIYIm8rI2N0Gj5AKuZm07llEa7MyhIUHJTRSPuyxNYS/nPQDzXzfiOHy34y+OtZmdz93bpkrXFFpnwmMfiWw6ksafJ4N8G/uvUeneh0wayZ/db6R+Whn4ub9K9ISq9A0xAQEBAQEBAQEFOUb3rqo1G9iqkEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQf/2Q==' },
  { name: 'Roamroar Safaris', logo: 'https://cdn.prod.website-files.com/664501c0a1543edee1fe122e/664506572ee39282855166c9_Frame%2029.svg' },
  { name: 'Nexacore Technologies', logo: 'https://static.wixstatic.com/media/998d9f_569695cd22ae42a0bee87c847fb230ff~mv2.png/v1/crop/x_0,y_0,w_3000,h_1204/fill/w_492,h_192,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/998d9f_569695cd22ae42a0bee87c847fb230ff~mv2.png' },
  { name: 'Clean Start Africa', logo: 'https://cleanstartafrica.org/_next/image?url=%2Flogo.svg&w=256&q=75' },
];

function ClientsSection() {
  return (
    <div className="pt-20 bg-bg py-16">
      <div className="md:ml-16  ml-5">
        {/* Heading */}
        <h1 className="px-4 py-2 border-2 border-dark-green w-fit text-dark-green rounded-3xl uppercase text-sm">
          Our Clients
        </h1>
        <p className="text-dark-green text-5xl/snug font-light mt-8">
          Trusted by Leading Organizations.
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