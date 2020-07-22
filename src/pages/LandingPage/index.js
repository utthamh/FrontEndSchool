import React from 'react'
import NavBar from '../../components/LandingPageComponent/NavBar'
import HeroSection from '../../components/LandingPageComponent/HeroSection'
import AboutSection from '../../components/LandingPageComponent/AboutSection'
import TeachersSection from '../../components/LandingPageComponent/TeachersSection'
import ContactSection from '../../components/LandingPageComponent/ContactSection'
import FooterSection2 from '../../components/LandingPageComponent/FooterSection2'


export default function index() {
    return (<>
        
        <NavBar/>
        <HeroSection/>
        <AboutSection/>
        <TeachersSection/>
        <ContactSection/>
        
        <FooterSection2/>
        </>
    )
}
