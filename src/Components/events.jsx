import React from 'react'
import NavBar from './NavBar'
import SiteHeader from './SiteHeader'
import {Link} from "react-router-dom"

function Events(){
    return(
        <>
        <SiteHeader/>
        <NavBar/>
        <h2 className='text-center text-3xl font-bold mt-2'>Events</h2>
        <div>
        <select className='w-2/3'>
                    <option value="none" selected disabled hidden>Select Year</option>
                    <option value="1st year">1st Year</option>
                    <option value="2nd year">2nd Year</option>
                    <option value="3rd year">3rd Year</option>
                </select>
        </div>
        </>
    )
}

export default Events