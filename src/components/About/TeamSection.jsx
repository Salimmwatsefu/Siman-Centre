import React from 'react';

const TeamSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-[#b3cde0]/40 py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#b3cde0]/50 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#0d3a49]/10 rounded-full transform translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Title */}
        <div className="mb-16 text-center relative">
          <h2 className="text-4xl font-bold text-[#0d3a49] mb-2 font-serif">
            Meet the Siman Wellness Team
          </h2>
          <p className="text-lg text-[#0d3a49]/80">Guiding you towards balance and growth</p>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#0d3a49] rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="relative group hover:-translate-y-2 transition-all duration-500">
            <div className="absolute inset-0 bg-[#0d3a49] rounded-3xl transform rotate-1 group-hover:rotate-2 transition-all duration-500" />
            <div className="relative bg-white p-8 rounded-3xl shadow-xl border-l-4 border-[#0d3a49]">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-[#0d3a49] rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  AF
                </div>
                <div className="ml-5">
                  <h3 className="text-xl font-bold text-[#0d3a49]">Amina Farah</h3>
                  <p className="text-[#0d3a49]/80 text-sm">Founder & Psychologist</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Amina is passionate about mental wellness and holistic growth,
                guiding individuals towards balance in personal and professional life.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Wellness Advocate', 'Trainer', 'Psychologist'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#b3cde0]/30 text-[#0d3a49] rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group hover:-translate-y-2 transition-all duration-500">
            <div className="absolute inset-0 bg-[#b3cde0] rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-all duration-500" />
            <div className="relative bg-white p-8 rounded-3xl shadow-xl border-r-4 border-[#0d3a49]">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-[#b3cde0] rounded-2xl flex items-center justify-center text-[#0d3a49] text-2xl font-bold shadow-lg">
                  OM
                </div>
                <div className="ml-5">
                  <h3 className="text-xl font-bold text-[#0d3a49]">Omar Mahmoud</h3>
                  <p className="text-[#0d3a49]/80 text-sm">Head of Communication</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Omar ensures Siman’s vision of wellness is shared with the community
                through clear communication and inspiring advocacy.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Communications', 'Media', 'Advocacy'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#b3cde0]/30 text-[#0d3a49] rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
