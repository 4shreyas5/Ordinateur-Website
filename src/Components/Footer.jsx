import React from 'react'
import ord from "../Assets/Images/ordinateur_logo.png"

function Footer(){
    return(
        <div className='bg-zinc-900 text-white'>
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

        <div className="-mt-64 text-center">
        <div className=' flex flex-col'>
                <a href="#" className='my-3' >About Us</a>
                <a href="#" className='my-3' >Home</a>
                <a href="#" className='my-3' >Events</a>
                <a href="#" className='my-3' >Alumni</a>
                <a href="#" className='my-3' >For Students</a>
                <a href="#" className='my-3' >Faculties and Staff</a>
        </div>
        </div>
        <div className='text-end -mt-72 mr-32'>
            <p className='text-xl'>Contact Us</p>
        </div>
        <div className='mt-80'>
            2023
        </div>
        </div>
    )
}
export default Footer