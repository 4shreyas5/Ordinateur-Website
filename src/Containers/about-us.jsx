import React from 'react'
import NavBar from '../Components/NavBar'
import{
  Button
} from "@material-tailwind/react";
import SiteHeader from '../Components/home/SiteHeader'
import Footer from '../Components/home/Footer'
import {Link} from "react-router-dom"

export function AboutUs(){
    return(
      <div className='bg-black'>
        <SiteHeader/>
        <NavBar/>
        <hr></hr>
      <section className=''>
        <h3 className='font-bold text-2xl m-4 text-white '><u>About The Society</u></h3>
        <p className='m-4 text-white'>Filled with geeks who are passionate about the world of technology, We are one of the best Computer
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
      <section className=''>
        <h3 className='font-bold text-2xl m-4 text-white'><u>Core Team</u></h3>
        <div className='flex'>
        <ul className='grid text-sky-500  m-4 group-hover:border-solid border-2 p-2 rounded-lg bg-zinc-900 hover:border-sky-500 '><b><u>Faculty Members</u></b>
          <li className='ml-4 m-4 text-white'><b className=''>Course Coordinator:</b> Ms.Sunita Chand</li>
          <li className='ml-4 m-4 text-white'><b>Convenor:</b> Suyash Kumar</li>
          <li className='ml-4 m-4 text-white'><b>Co-Convenor:</b> Aarti Goel</li>

        </ul>
        {/* <img
        src="/images/about.jpg"
        className='h-auto max-w-lg px-20'
        /> */}
        <ul className='grid text-sky-500 list-disc m-4 group-hover:border-solid border-2 p-2 rounded-lg bg-zinc-900 hover:border-sky-500 '><b><u>Student Coordinator</u></b>
          <a href='https://www.linkedin.com/in/4shreyassingh5/' target="_blank" className='ml-4 m-4 text-white'><b>President:</b> Shreyas Singh</a>
          <a href='https://www.linkedin.com/in/paramjeet-bamaniya-230160226/' target="_blank" className='ml-4 m-4 text-white'><b>Vice President:</b> Paramjeet Bamaniya</a>
          <a href='https://www.linkedin.com/in/akansha-bharti/' target="_blank" className='ml-4 m-4  text-white'><b>General Secretary:</b> Akansha Bharti</a>
          <a href='https://www.linkedin.com/in/ankit-kanojiya-242a15225/' target="_blank" className='ml-4 m-4 text-white'><b>Treasurer:</b> Ankit</a>
        </ul>
        
        </div>
        <Link to='/events'>
        <Button className='m-4 w-40 p-2 bg-sky-500 hover:bg-sky-800'>Society Report</Button>
        </Link>
      </section>

      <section>
        <h3 className='font-bold text-2xl m-4 text-white'><u>Wings</u></h3>
        <div className='flex m-6 gap-6 grid md:grid-cols-3 xl:grid-cols-6 '>
          <Link to='/home' className=' list-disc m-4 text-white'><b>Technical Wing</b>
          <img src="/images/technical.jpg " className='h-40 w-40 mt-2 mb-2 rounded-full border-2 border-zinc-300 '/>
            <li className='ml-4'><b>Head:</b> Arun Chandra </li>
            <li className='ml-4'><b>Head:</b> Arun Krishna </li>
            <li className='ml-4'><b>De-Head:</b> Nitin</li>
          </Link>
          <Link to='/home' className='list-disc m-4 text-white'><b>Editorial Wing</b>
          <img src="/images/editorial.jpg " className='h-40 w-40 mt-2 mb-2 rounded-full border-2 border-zinc-300 '/>
            <li className='ml-4'><b>Head:</b> Neelam </li>
            <li className='ml-4'><b>Bitwise Head:</b> Aasim </li>
          </Link>
          <Link to='/home' className='list-disc m-4 text-white'><b>PR & Marketing Wing</b>
          <img src="/images/marketing.jpg " className='h-40 w-40 mt-2 mb-2 rounded-full border-2 border-zinc-300 '/>
            <li className='ml-4'><b>Head:</b> Tanmay</li>
          </Link>
          <Link to='/home' className='list-disc m-4 text-white'><b>Operations Wing</b>
          <img src="/images/event.jpg " className='h-40 w-40 mt-2 mb-2 rounded-full border-2 border-zinc-300 '/>
            <li className='ml-4'><b>Head:</b> Sajal </li>
            <li className='ml-4'><b>Head:</b> Deepak </li>
          </Link>
          <Link to='/home' className='list-disc m-4 text-white'><b>Internship Wing</b>
          <img src="/images/internship.jpg " className='h-40 w-40 mt-2 mb-2 rounded-full border-2 border-zinc-300 '/>
            <li className='ml-4'><b>Head:</b> Manvi </li>
          </Link>
          <Link to='/home' className='list-disc m-4 text-white'><b>R & D Wing</b>
          <img src="/images/r&d.jpg " className='h-40 w-40 mt-2 mb-2 rounded-full border-2 border-zinc-300 '/>
            <li className='ml-4'><b>Head:</b> Mina </li>
          </Link>
        </div>
      </section>
      
      <Footer/>
      </div>
    )
}
export default AboutUs