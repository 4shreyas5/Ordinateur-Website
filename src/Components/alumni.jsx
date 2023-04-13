import React from 'react'
import NavBar from './NavBar'
import SiteHeader from './SiteHeader'
import Image from './Image';
import Alumni2 from './Alumni2';
import Sidebar from './Sidebar';
import Sp_alumni from './Sp_alumni';

function Alumni(){
    return(
        <>
        <SiteHeader/>
        <NavBar/>
        <div className=' bg-orange-100'>
    
    <Image/>
    <Sp_alumni/>
    <div className='flex'>
    <Sidebar/>
    <Alumni2 />
    </div>
    
    </div>
        </>
    )
}

export default Alumni