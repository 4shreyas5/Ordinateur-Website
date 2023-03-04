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
    <div className='bg-black'>
      <img
      src="https://www.hansrajcollege.ac.in/files/department/full/DEPT-computer-science.jpg"
      className='border-b-8 border-t-8 border-yellow-500'
      />
      {/* <img
        src="/images/bg.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />    */}
      <section className=''>
      <h3 className="mb-4 mt-4 text-5xl text-center text-white font-bold">FACULTY</h3>
           <div className="grid gap-x-10  md:grid-cols-2 xl:grid-cols-4 px-20">
            {facultyData.map(({img, name, position}) => (
              <FacultyCard
                key={name}      
                img={img}
                name={name}
                position={position}
              />
            ))}
            </div>
       </section>
    </div>
  )
}

export default Faculty
