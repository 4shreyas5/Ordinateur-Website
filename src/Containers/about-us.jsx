import React from 'react'
import NavBar from '../Components/NavBar'
import SiteHeader from '../Components/home/SiteHeader'
import About_Society from '../Components/about_us/about _society'
import Core_team from '../Components/about_us/core_team';
import Wings_head from '../Components/about_us/wings';
import Footer from '../Components/home/Footer'

export function AboutUs(){
    return(
      <div className='bg-black'>
        <SiteHeader/>
        <NavBar/>
        <hr></hr>
        <About_Society/>
        <Core_team/>
        <Wings_head/>
        <Footer/>
      </div>
    )
}

export default AboutUs