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

export function Faculty() {
  return (
    <div className=''>
      <img
      src="https://www.hansrajcollege.ac.in/files/department/full/DEPT-computer-science.jpg"
      className=''
      />
      {/* <img
        src="/images/background.jpg"
        className="absolute inset-0 z-0 h-full w-full "
      />    */}
      {/* <div className='absolute inset-0 z-0 h-full w-full bg-black/50'/> */}
      <section className=''>
      <h3 className="mb-4 mt-4 text-5xl text-center italic font-bold">FACULTY</h3>
           <div className="grid gap-x-10 md:grid-cols-2 xl:grid-cols-4 px-20 ">
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
       <footer className='bg-black text-white text-center mt-8 p-4'></footer>
    </div>
  )
}

export default Faculty
