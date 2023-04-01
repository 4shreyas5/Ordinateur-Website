import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
import facultyData from './faculty-data';
import FacultyCard from './faculty-card';
import NavBar from './NavBar'; 
import SiteHeader from './SiteHeader';
import Footer from './Footer';

export function Faculty() {
  return (
    <div className='bg-black '>
      <SiteHeader/>
      <NavBar/>
      <hr></hr>
      <section className=''>
      <h3 className="mb-4 mt-4 text-3xl text-center font-bold text-white">FACULTY</h3>
           <div className="grid gap-x-10 md:grid-cols-2 xl:grid-cols-4 px-20 mb-6">
            {facultyData.map(({img, name, position,profile}) => (
              <FacultyCard
                key={name}      
                img={img}
                name={name}
                position={position}
                profile={profile}
              />
            ))}
            </div>
       </section>
       <Footer/>
    </div>
  )
}

export default Faculty
