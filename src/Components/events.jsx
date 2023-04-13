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
        <div className='p-6'>
        <select className='w-40 '>
                    <option value="none" selected disabled hidden>Select Year</option>
                    <option value="All">All</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                </select>
        </div>
        </>
    )
}

export default Events