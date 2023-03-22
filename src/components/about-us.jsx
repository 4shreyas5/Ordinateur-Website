import React from 'react'
import NavBar from './NavBar'
import SiteHeader from './SiteHeader'
import Footer from './Footer'

export function AboutUs(){

    return(
      <div className=''>
        <SiteHeader/>
        <NavBar/>
        <div className='flex justify-between'>
            <h3 className='font-bold text-2xl m-4 italic'>About us</h3>
        <img
        src="/images/background.jpg"
        className='h-auto max-w-lg '
        />
        </div>
      <section>
        <h3 className='font-bold text-2xl m-4 italic'>About The Society</h3>
        <p className='m-4'>Filled with geeks who are passionate about the world of technology, We are one of the best Computer
            Science Society in Delhi University, proving the legacy of the CS Department of Hansraj College. 
            The society members share interest in almost all subfields of Computer Science. We are made of people 
            ranging from Web Developers to Competitive Programmers, from Ethical Hackers to Data Scientists and from 
            BlockChainTech to Graphic Designers. Being active throughout the year by seminars, webinars and tech events,
            We also publish an yearly magazine 'Bitwise' where we encourage creative writing skills in the technical
            field. Ordinateur provides students with the opportunities to explore the vast limitlessness of their potential.
            Following the hierarchy of Computer Techies, the students along with teachers provide a great community support
            not only in the field of studies but in every aspect of life. This is a place of most helpful and community 
            friendly human beings.</p>
      </section>
      <section>
        <h3 className='font-bold text-2xl m-4 italic'>Core Team</h3>
      </section>
      <Footer/>
      </div>
    )
}
export default AboutUs