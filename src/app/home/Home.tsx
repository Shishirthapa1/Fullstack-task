import React from 'react'
import PortFolio from './Components/PortFolio'
import OutputSection from './Components/Output'
import AboutMe from './Components/AboutMe'
import HeroSection from './Components/HeroSection'

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <PortFolio />
            <OutputSection />
            <AboutMe />
        </div>
    )
}

export default HomePage;
