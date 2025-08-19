import React from 'react'
import AboutHero from './AboutHero'
import AboutSection1 from './AboutSection1'
import Philosophy from './Philosophy'
import Values from './Values'
import TeamSection from './TeamSection'
import HeroAbout from './HeroAbout'
import CTA from '../Home/CTA'

function About() {
  return (
    <div>
      <HeroAbout />
        <AboutHero />
        <AboutSection1 />
        <Philosophy />
        <Values />
        <TeamSection />
        
    </div>
  )
}

export default About