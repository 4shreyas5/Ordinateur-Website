import React, { useState } from 'react'
import FormHeader from '../Components/forms/FormHeader.jsx';
import NavBar from '../Components/NavBar.jsx';
import SiteHeader from '../Components/home/SiteHeader.jsx';
import Footer from '../Components/home/Footer.jsx';


function Forms(){
    
    return(
        <div className=''>
         <SiteHeader/>
         <NavBar/>
         <img
        src="images/img4.jpg"
        className="absolute w-fit h-fit object-cover"
      />
        <FormHeader/>
        <Footer/> 
        </div>
    )
}

export default Forms;
