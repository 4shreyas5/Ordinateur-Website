import React from 'react'
import {Link} from "react-router-dom"


function Wings_head(){
    return(
        <>
        <section>
        <h3 className='font-bold text-2xl m-4 text-white'><u>Wings</u></h3>
        <div className='flex m-6 gap-6 grid md:grid-cols-3 xl:grid-cols-6 '>
          <Link to='/home' className=' list-disc m-4 text-white'><b>Technical Wing</b>
          <img src="/images/technical.jpg " alt="img" className='h-40 w-40 mt-2 mb-2 rounded-full border-2 border-zinc-300 '/>
            <li className='ml-4'><b>Head:</b> Arun Chandra </li>
            <li className='ml-4'><b>Head:</b> Arun Krishna </li>
            <li className='ml-4'><b>De-Head:</b> Nitin</li>
          </Link>
          <Link to='/home' className='list-disc m-4 text-white'><b>Editorial Wing</b>
          <img src="/images/editorial.jpg " alt="img" className='h-40 w-40 mt-2 mb-2 rounded-full border-2 border-zinc-300 '/>
            <li className='ml-4'><b>Head:</b> Neelam </li>
            <li className='ml-4'><b>Bitwise Head:</b> Aasim </li>
          </Link>
          <Link to='/home' className='list-disc m-4 text-white'><b>PR & Marketing Wing</b>
          <img src="/images/marketing.jpg " alt="img" className='h-40 w-40 mt-2 mb-2 rounded-full border-2 border-zinc-300 '/>
            <li className='ml-4'><b>Head:</b> Tanmay</li>
          </Link>
          <Link to='/home' className='list-disc m-4 text-white'><b>Operations Wing</b>
          <img src="/images/event.jpg " alt="img" className='h-40 w-40 mt-2 mb-2 rounded-full border-2 border-zinc-300 '/>
            <li className='ml-4'><b>Head:</b> Sajal </li>
            <li className='ml-4'><b>Head:</b> Deepak </li>
          </Link>
          <Link to='/home' className='list-disc m-4 text-white'><b>Internship Wing</b>
          <img src="/images/internship.jpg " alt="img" className='h-40 w-40 mt-2 mb-2 rounded-full border-2 border-zinc-300 '/>
            <li className='ml-4'><b>Head:</b> Manvi </li>
          </Link>
          <Link to='/home' className='list-disc m-4 text-white'><b>R & D Wing</b>
          <img src="/images/r&d.jpg " alt="img" className='h-40 w-40 mt-2 mb-2 rounded-full border-2 border-zinc-300 '/>
            <li className='ml-4'><b>Head:</b> Mina </li>
          </Link>
        </div>
      </section>
        </>
    )
}

export default Wings_head