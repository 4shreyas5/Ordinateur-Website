import React from 'react'
import NavBar from '../Components/NavBar'
import SiteHeader from '../Components/home/SiteHeader'
import EventCard from '../Components/event/event_card'
import eventData from '../Components/event/event_data'
import Footer from '../Components/home/Footer'
import Events202223 from '../Components/event/events2022_23'

function Events(){
    return(
        <> 
        <SiteHeader/>
        <NavBar/>
        <hr></hr>
        <div className='bg-black'>
        <h2 className='text-center text-3xl font-bold text-white mb-2'><u>Events</u></h2>
        <Events202223/>
        
        <section className='mt-20'>
           <div className="grid gap-x-10 md:grid-cols-2 xl:grid-cols-4 px-20 ">
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