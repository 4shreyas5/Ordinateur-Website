import React from 'react'
import ord from "../assets/Images/ordinateur_logo.png"
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer(){
    return(
        <div className='bg-zinc-800 text-white'>
            <div className="flex flex-row justify-between">
            <div>
        <div className='flex'>
            <div className="w-48 h-48">
                <img src={ord} />
            </div>
            <div className='mt-6 -ml-6 '>
                <b className='text-2xl'>Ordinateur</b>
                <p className='text-md'>The Computer Science Society</p>
                <p className='text-lg'>Hansraj College</p>
            </div>
        </div>
        
        <div className='ml-10 -mt-10'>
        <p>Address:</p>
        <p className='ml-4'><i>Mahatma Hans Raj Marg, Hansraj College, University of Delhi,</i></p>
        <p className='ml-4'><i>Malka Ganj, Delhi, 110007</i></p>

        <p>Contact:</p>
        <p className='ml-4'><i>Email: hrccsd19@gmail.com</i></p>
        </div>
        </div>

        <div>
        <div className="mt-6 -ml-40 text-center">
        <div className=' flex flex-col'>
                <a href="#" className='my-3' >About Us</a>
                <a href="#" className='my-3' >Home</a>
                <a href="#" className='my-3' >Events</a>
                <a href="#" className='my-3' >Alumni</a>
                <a href="#" className='my-3' >For Students</a>
                <a href="#" className='my-3' >Faculties and Staff</a>
        </div>
        </div>
        </div>

        <div>
        <div className="mt-8 mr-44 -ml-24 text-end">
            
            <p className='text-xl italic'>Follow Us</p>
            <div className='grid gap-8 mr-10 mt-5 justify-end text-center transition ease-in-out'>
                <div className="hover:text-2xl">
                <a href="https://www.linkedin.com/company/ordinateur-hrc/mycompany/" target="_blank" ><FaLinkedin/></a>
                </div>
                <div className="hover:text-2xl">
                <a href="https://www.instagram.com/ordinateur.hrc/" target="_blank" ><FaInstagram/></a>
                </div>
                <div className="hover:text-2xl">
                <a href="https://m.facebook.com/ordinateur.hrc/" target="_blank" ><FaFacebook/></a>
                </div>
            </div>

        </div>
        </div>
        </div>

        <div className='bg bg-black text-center'>
        <p>© 2023 Department of Computer Science, Hansraj College</p>
        </div>
        </div>
    )
}
export default Footer