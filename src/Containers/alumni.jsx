import React, {useState, useEffect} from 'react'
import NavBar from '../Components/NavBar'
import SiteHeader from '../Components/home/SiteHeader'
import Image from '../Components/alumni/Image';
import Alumni2 from '../Components/alumni/Alumni2';
import Sidebar from '../Components/alumni/Sidebar';
import Sp_alumni from '../Components/alumni/Sp_alumni';
import Footer from '../Components/home/Footer';

function Alumni(){ 
    return(
        <>
        <SiteHeader/>
        <NavBar/>
        <div className=' bg-orange-100'>
    
    <Image/>
    <Sp_alumni/>
    <div className='flex'>
    <Alumni2 />
    
    </div>
    <Footer/>
    </div>
        </>
    )
}

export default Alumni