import React from 'react'
import Hero from './sections/Hero'
import ShowCaseSection from './sections/ShowCaseSection'
import Navbar from './components/Navbar'
import LogoSection from './sections/LogoSection'
import FeaturedSection from './sections/FeaturedSection'
import ExperienceSection from './sections/ExperienceSection'
import TechStatck from './sections/TechStatck'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ShowCaseSection  />
      <LogoSection />
      <FeaturedSection />
      <ExperienceSection />
      <TechStatck />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
