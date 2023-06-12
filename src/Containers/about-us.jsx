import React from 'react'
import NavBar from '../Components/NavBar'
import SiteHeader from '../Components/home/SiteHeader'
import AboutSociety from '../Components/about_us/about _society'
import CoreTeam from '../Components/about_us/core_team';
import WingsHead from '../Components/about_us/wings';
import Footer from '../Components/home/Footer'

export function AboutUs(){
    return(
      <div className='bg-black'>
        <SiteHeader/>
        <NavBar/>
        <hr></hr>
        <AboutSociety/>
        <CoreTeam/>
        <WingsHead/>
        <Footer/>
      </div>
    )
}

export default AboutUs