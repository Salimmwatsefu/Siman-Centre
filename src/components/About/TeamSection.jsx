import React from 'react';

const TeamSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gold/5 py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-dark-green/10 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gold/10 rounded-full transform translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 relative">
          <h2 className="text-5xl font-bold text-dark-green mb-4 text-center font-serif relative z-10">
            Visionary Leadership
            <span className="block mt-2 text-3xl font-sans font-medium text-gold">Meet Our Catalysts for Change</span>
          </h2>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gold rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Nelius Mueni - Updated Card */}
          <div className="relative group transform hover:-translate-y-2 transition-all duration-500">
            <div className="absolute inset-0 bg-dark-green rounded-3xl transform rotate-1 group-hover:rotate-2 transition-all duration-500" />
            <div className="relative bg-white p-8 rounded-3xl shadow-2xl border-l-4 border-gold">
              <div className="flex items-start mb-8">
                <div className="relative">
                  <div className="w-20 h-20 bg-dark-green rounded-2xl flex items-center justify-center text-gold text-3xl font-bold shadow-lg">
                    NM
                  </div>
                  
                </div>
                <div className="ml-6 flex-1">
                  <h3 className="text-2xl font-bold text-dark-green mb-1">Nelius Mueni - <span className=' text-xl text-olive-green'>Founder</span></h3>
                  <div className="inline-flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gold/10 text-gold rounded-full text-sm">Psychologist</span>
                    <span className="px-3 py-1 bg-gold/10 text-gold rounded-full text-sm">HR Specialist</span>
                    <span className="px-3 py-1 bg-gold/10 text-gold rounded-full text-sm">Wellness Advocate</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700 mb-8">
                <p className="border-l-2 border-gold pl-4 italic">"Empowering human potential through compassionate strategy"</p>
                <p className="text-gray-700 mt-2">
                  Nelius Mueni is a dedicated Psychologist and Human Resource
                  Specialist with a strong track record in personal development,
                  workplace wellness, and organizational growth. With extensive
                  experience across corporate, non-profit, and community settings,
                  she blends psychological expertise with strategic HR insight to
                  support individuals and teams in unlocking their full potential.
                </p>
                <p className="text-gray-700 mt-2">
                  As the founder of My Soul’s Universe, Nelius leads with
                  compassion and clarity, offering customized training programs
                  that address key areas such as mental health, emotional
                  intelligence, leadership, team dynamics, and customer
                  experience. Her programs are designed to be practical,
                  transformative, and aligned with the evolving needs of modern
                  organizations.
                </p>
                <p className="text-gray-700 mt-2">
                  Known for her warm, relatable approach and results-driven
                  mindset, Nelius brings both depth and direction to every
                  engagement. Her work is grounded in the belief that
                  well-supported individuals lead to thriving organizations—and
                  she partners with clients to build cultures that prioritize
                  well-being, growth, and purpose.
                </p>
                <p className="text-gray-700 mt-2">
                  Whether facilitating trainings, advising HR teams, or advocating
                  for mental wellness, Nelius is committed to creating spaces where
                  people feel empowered, valued, and inspired to lead meaningful
                  change.
                </p>
              </div>

              <div className="bg-dark-green/5 p-6 rounded-xl">
                <h4 className="text-gold font-bold mb-3">Strategic Focus Areas</h4>
                <div className="grid grid-cols-2 gap-3">
                  {['Workplace Wellness', 'Leadership Development', 'Emotional Intelligence', 'Cultural Transformation'].map((item) => (
                    <div key={item} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mr-2" />
                      <span className="text-dark-green/90 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-dark-green/10 pt-6">
                <div className="flex items-center space-x-4 text-dark-green">
                  <a href="mailto:nellymueni@gmail.com" className="flex items-center hover:text-gold transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                    Contact
                  </a>
                  <span className="text-gray-400">|</span>
                  <a href="tel:+254728312076" className="flex items-center hover:text-gold transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                    +254 728 312076
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Cedrick Alusa - Updated Card */}
          <div className="relative group transform hover:-translate-y-2 transition-all duration-500">
            <div className="absolute inset-0 bg-gold rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-all duration-500" />
            <div className="relative bg-white p-8 rounded-3xl shadow-2xl border-r-4 border-dark-green">
              <div className="flex items-start mb-8">
                <div className="relative">
                  <div className="w-20 h-20 bg-gold rounded-2xl flex items-center justify-center text-dark-green text-3xl font-bold shadow-lg">
                    CA
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-dark-green text-white px-3 py-1 rounded-full text-sm font-medium">
                    Strategist
                  </div>
                </div>
                <div className="ml-6 flex-1">
                  <h3 className="text-2xl font-bold text-dark-green mb-1">Cedrick Alusa - <span className=' text-xl text-olive-green'>Head of Communication, Media & Advocacy</span></h3>
                  <div className="inline-flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-dark-green/10 text-dark-green rounded-full text-sm">Comms Expert</span>
                    <span className="px-3 py-1 bg-dark-green/10 text-dark-green rounded-full text-sm">Media Strategist</span>
                    <span className="px-3 py-1 bg-dark-green/10 text-dark-green rounded-full text-sm">Advocacy Leader</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-gray-700 mb-8">
                <p className="border-l-2 border-dark-green pl-4 italic">"Amplifying impact through strategic narrative architecture"</p>
                <p className="text-gray-700 mt-2">
                  Cedrick is a seasoned communications specialist with a wealth of
                  operational and managerial experience in crafting and executing
                  impactful communication campaigns. With over a decade in the
                  field, he has honed his skills in stakeholder engagement
                  strategy and cross-functional collaboration, navigating
                  seamlessly across diverse sectors including service,
                  humanitarian, financial, and manufacturing.
                </p>
                <p className="text-gray-700 mt-2">
                  With extensive experience acquired from reputable advertising
                  and PR agencies, Cedrick has had the privilege of working with
                  esteemed entities such as EABL, KCB, East Africa Portland Cement
                  Company, Bamburi Cement, Water Services Regulatory Board,
                  Parliamentary Service Commission, Mumias Sugar Company, Kenya
                  Tourism Board, Energy & Petroleum Authority of Kenya, STANLIB,
                  among others.
                </p>
                <p className="text-gray-700 mt-2">
                  Currently serving as the Head of Communication Media and
                  Advocacy at My Soul’s Universe, Cedrick holds the pivotal role
                  of managing the communication function of the organization. In
                  this capacity, he leverages his vast experience and strategic
                  vision to drive impactful communication strategies that advance
                  the organization's mission and amplify its impact on society.
                </p>
                <p className="text-gray-700 mt-2">
                  Through strategic foresight, he ensures that communication
                  efforts align seamlessly with organizational goals, driving
                  engagement, awareness, and support for My Soul’s Universe
                  initiatives.
                </p>
              </div>

              <div className="bg-gold/5 p-6 rounded-xl">
                <h4 className="text-dark-green font-bold mb-3">Key Collaborations</h4>
                <div className="grid grid-cols-2 gap-3">
                  {['EABL', 'KCB Bank', 'Kenya Tourism', 'Energy Sector'].map((item) => (
                    <div key={item} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-dark-green rounded-full mr-2" />
                      <span className="text-dark-green/90 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-dark-green/10 pt-6">
                <div className="flex flex-col space-y-2 text-dark-green">
                  <p className="font-medium">Sector Expertise:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Service', 'Humanitarian', 'Financial', 'Manufacturing'].map((sector) => (
                      <span key={sector} className="px-3 py-1 bg-dark-green/5 rounded-full text-sm">
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;