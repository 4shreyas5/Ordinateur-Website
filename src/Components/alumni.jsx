import React from 'react'
import NavBar from './NavBar'
import SiteHeader from './SiteHeader'
import Image from './Image';
import Alumni2 from './Alumni2';
import Sidebar from './Sidebar';

function Alumni(){
    return(
        <>
        <SiteHeader/>
        <NavBar/>
        <h2>Alumni</h2>
        <div className=' bg-yellow-300'>
    
    <Image/>
    <div className='flex'>
    <Sidebar/>
    <Alumni2 />
    </div>
    
    </div>
        </>
    )
}

export default Alumni