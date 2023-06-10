// import React from 'react'
// import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
// import {Link} from 'react-router-dom'

// function Footer(){
//     return(
//         <div className='bg-zinc-800 text-white'>
//             <div className="flex flex-row justify-between">
//             <div>
//         <div className='flex'>
//             <div className="w-48 h-48">
//                 <img src='/images/ordinateur_logo.png' />
//             </div>
//             <div className='mt-6 -ml-6 '>
//                 <b className='text-2xl'>Ordinateur</b>
//                 <p className='text-md'>The Computer Science Society</p>
//                 <p className='text-lg'>Hansraj College</p>
//             </div>
//         </div>
        
//         <div className='ml-10 -mt-10'>
//         <p>Address:</p>
//         <p className='ml-4'><i>Mahatma Hans Raj Marg, Hansraj College, University of Delhi,</i></p>
//         <p className='ml-4'><i>Malka Ganj, Delhi, 110007</i></p>

//         <p>Contact:</p>
//         <p className='ml-4'><i>Email: hrccsd19@gmail.com</i></p>
//         </div>
//         </div>

//         <div>
//         <div className="mt-6 -ml-40 text-center">
//         <div className=' flex flex-col'>
//                 <Link to='/aboutus' className='my-3' >About Us</Link>
//                 <Link to='/home' className='my-3' >Home</Link>
//                 <Link to='/events' className='my-3' >Events</Link>
//                 {/* <Link to='/alumni' className='my-3' >Alumni</Link> */}
//                 <Link to='/for_students' className='my-3' >For Students</Link>
//                 <Link to='/Faculty' className='my-3' >Faculty</Link>
//         </div>
//         </div>
//         </div>

//         <div>
//         <div className="mt-8 mr-44 -ml-24 text-end">
            
//             <p className='text-xl italic'>Follow Us</p>
//             <div className='grid gap-8 mr-10 mt-5 justify-end text-center transition ease-in-out'>
//                 <div className="hover:text-2xl">
//                 <a href="https://www.linkedin.com/company/ordinateur-hrc/mycompany/" target="_blank" ><FaLinkedin/></a>
//                 </div>
//                 <div className="hover:text-2xl">
//                 <a href="https://www.instagram.com/ordinateur.hrc/" target="_blank" ><FaInstagram/></a>
//                 </div>
//                 <div className="hover:text-2xl">
//                 <a href="https://m.facebook.com/ordinateur.hrc/" target="_blank" ><FaFacebook/></a>
//                 </div>
//             </div>

//         </div>
//         </div>
//         </div>

//         <div className='bg bg-black text-center'>
//         <p>© 2023 Department of Computer Science, Hansraj College</p>
//         </div>
//         </div>
//     )
// }
// export default Footer
import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bg-zinc-800 text-white">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="sm:w-1/2">
          <div className="flex">
            <div className="w-48 h-48">
              <img src="/images/ordinateur_logo.png" alt="Logo" />
            </div>
            <div className="mt-6 -ml-6">
              <b className="text-xl sm:text-2xl">Ordinateur</b>
              <p className="text-md sm:text-lg">The Computer Science Society</p>
              <p className="text-lg sm:text-xl">Hansraj College</p>
            </div>
          </div>

          <div className="ml-10 mt-4 sm:mt-0">
            <p>Address:</p>
            <p className="ml-4">
              <i>Mahatma Hans Raj Marg, Hansraj College, University of Delhi,</i>
            </p>
            <p className="ml-4">
              <i>Malka Ganj, Delhi, 110007</i>
            </p>

            <p>Contact:</p>
            <p className="ml-4">
              <i>Email: hrccsd19@gmail.com</i>
            </p>
          </div>
        </div>

        <div className="mt-6 sm:mt-0 sm:w-1/4">
          <div className="mt-4 ml-10">
            <p>Navigation:</p>
            <div className="mt-2 space-y-2">
              <Link to="/aboutus" className="block">
                About Us
              </Link>
              <Link to="/home" className="block">
                Home
              </Link>
              <Link to="/events" className="block">
                Events
              </Link>
              <Link to="/for_students" className="block">
                For Students
              </Link>
              <Link to="/Faculty" className="block">
                Faculty
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:w-1/4">
          <div className="mt-4 mr-4 sm:mr-0 text-center">
            <p className="text-xl italic">Follow Us</p>
            <div className="flex justify-center mt-2 space-x-4">
              <a href="https://www.linkedin.com/company/ordinateur-hrc/mycompany/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-2xl" />
              </a>
              <a href="https://www.instagram.com/ordinateur.hrc/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-2xl" />
              </a>
              <a href="https://m.facebook.com/ordinateur.hrc/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="hover:text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg bg-black text-center">
        <p>© 2023 Department of Computer Science, Hansraj College</p>
      </div>
    </div>
  )
}
export default Footer;
