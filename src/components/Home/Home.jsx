import React from 'react'
import Hero from './Hero'
import Section1 from './Section1'
import Section2 from './Section2'
import ClientsSection from './ClientsSection'
import CTA from './CTA'
import Footer from './Footer'

function Home() {
  return (
    <div>

        <Hero />
        <Section1 />
        <Section2 />
        <ClientsSection />
        <CTA />
        
    </div>
  )
  
}

export default Home