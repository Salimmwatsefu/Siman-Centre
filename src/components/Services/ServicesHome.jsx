import React from 'react'
import ServicesSection from './Services'
import BookNowSection from './BookNowSection'
import ServicesHero from './ServicesHero'


function ServicesHome() {
  return (
    <div>
      <ServicesHero />
        <ServicesSection />
        <BookNowSection />
    </div>
  )
}

export default ServicesHome