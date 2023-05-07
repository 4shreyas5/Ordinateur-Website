import React from 'react'
import NavBar from '../Components/NavBar'
import SiteHeader from '../Components/home/SiteHeader'
import {Link} from "react-router-dom"
import EventCard from '../Components/event/event_card'
import eventData from '../Components/event/event_data'
import Footer from '../Components/home/Footer'

function Events(){
    return(
        <>
        <SiteHeader/>
        <NavBar/>
        <div className=''>
        <h2 className='text-center text-3xl font-bold mt-2'>Events</h2>
        <section className=''>
           <div className="grid gap-x-10 md:grid-cols-2 xl:grid-cols-4 px-20 mb-6">
            {eventData.map(({img, eventYear, events}) => (
              <EventCard
                key={eventYear}       
                img={img}
                eventYear={eventYear}
                events={events}
                
              />
            ))}
            </div>
       </section>
       </div>
       <Footer/>
       </>
    )
}

export default Events