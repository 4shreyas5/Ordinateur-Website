import React from 'react'
import facultyData from '../Components/faculty/faculty-data';
import FacultyCard from '../Components/faculty/faculty-card';
import NavBar from '../Components/NavBar'; 
import SiteHeader from '../Components/home/SiteHeader';
import Footer from '../Components/home/Footer';

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
