import React from 'react'
import{ Button } from "@material-tailwind/react";
import {Link} from "react-router-dom"


function Core_team(){
    return(
        <>
        <section>
        <h3 className='font-bold text-2xl m-4 text-white'><u>Core Team</u></h3>
        <div className='flex'>
        <ul className='grid text-sky-500  m-4 group-hover:border-solid border-2 p-2 rounded-lg bg-zinc-900 hover:border-sky-500 '><b><u>Faculty Members</u></b>
          <li className='ml-4 m-4 text-white'><b className=''>Course Coordinator:</b> Ms.Sunita Chand</li>
          <li className='ml-4 m-4 text-white'><b>Convenor:</b> Suyash Kumar</li>
          <li className='ml-4 m-4 text-white'><b>Co-Convenor:</b> Aarti Goel</li>

        </ul>
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
        </>
    )
}

export default Core_team