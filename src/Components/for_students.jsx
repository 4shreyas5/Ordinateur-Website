import React from 'react'
import NavBar from './NavBar'
import SiteHeader from './SiteHeader'

function ForStudents(){
    return(
        <>
        <SiteHeader/>
        <NavBar/>
        <h2 className='text-center text-3xl font-bold mt-2'>For Students</h2>
        </>
    )
}

export default ForStudents