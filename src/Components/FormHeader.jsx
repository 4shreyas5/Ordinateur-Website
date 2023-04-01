import React, {useState, useEffect} from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import '../css/forms.css'
import Footer from './Footer';


function FormHeader(){
    const [roll, setRoll] = useState("");
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const[linkedIn, setLinkedIn] = useState('');
    const[status, setStatus] = useState('');

    const handleSubmit =(e) =>{
        e.preventDefault();  
    }

    return(
        <div className=''>
            {/* alumni form */}
            <section className='box-border p-4 border-4 m-20 rounded-lg'>
            <h3 className='text-3xl font-bold text-center'>Alumni Form</h3>
            <form className='grid p-20 ' onSubmit={handleSubmit}>
               <label>University Roll Number:
               <input type='number' className='w-2/3' placeholder='University Roll Number' onChange={(e) => setRoll(e.target.value)}/>
               </label>
               <div className='flex gap-4'>
               <label className='label'>First Name:
               <input type='text' className='' placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
               </label>
               <label className='label'>Last Name:
               <input type='text' className='' placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
               </label >
               </div>
               <label className='label'>Year Of Graduation:
               <input type='date' className='w-2/3' placeholder='Year Of Graduation' />
               </label>
               <label className='label'>Email:
               <input type='email' className='w-2/3' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
               </label>
               <label className='label'>Phone Number: 
               <input type='number' className='w-2/3' placeholder='Phone Number' onChange={(e) => setPhoneNo(e.target.value)}/>
               </label>
               <label className='label'>LinkedIn:  
               <input type='url' className='w-2/3' placeholder='LinkedIn' onChange={(e) => setLinkedIn(e.target.value)}/>
               </label>
               <label className='label'>Upload pdf of graduation degree:
               <input type='file' className='w-1/4 focus:outline-none bg-white' />
               </label>
               <label className='label'>Photo:
               <input type='file' className='w-1/4 focus:outline-none bg-white' />
               </label>
               <label className='label'>Current Status:
                <textarea className=' rounded-md w-2/3 px-2 bg-gray-200 shadow-md border focus:outline-none focus:shadow-outline focus:bg-white' placeholder='Description of current status, for ex- job in xyz company' type='text' rows={4}
                onChange={(e) => setStatus(e.target.value)}/>
               </label>
               <Link to='/alumni' className='text-center p-2 px-4 mt-4 w-40 h-12 bg-sky-600 rounded text-lg hover:bg-sky-900'>Submit</Link>
            </form>
            </section>

            {/* event form */}
            <section className='box-border p-4 border-4 m-20 rounded-lg'>
            <h3 className='text-3xl font-bold text-center'>Event Form</h3>
            <form className='grid p-20 '>
              <label>Name:
                <input type='text' className='w-2/3' placeholder='Name'/>
              </label>
              <label>Email:
                <input type='email' className='w-2/3' placeholder='Email'/>
              </label>
              <label>Year:
                <select className='w-2/3'>
                    <option value="none" selected disabled hidden>Select Year</option>
                    <option value="1st year">1st Year</option>
                    <option value="2nd year">2nd Year</option>
                    <option value="3rd year">3rd Year</option>
                </select>
              </label>
              <label>Department:
                <input type='text' className='w-2/3' placeholder='Department'/>
              </label>
              <label>College Roll No.:
                <input type='number' className='w-2/3' placeholder='College Roll No.'/>
              </label>
              <label>Phone Number:
                <input type='number' className='w-2/3' placeholder='Phone Number'/>
              </label>
              <Link to='' className='text-center p-2 px-4 mt-4 w-40 h-12 bg-sky-600 rounded text-lg hover:bg-sky-900'>Submit</Link>
            </form>
            </section>

        <Footer/>
        </div>
        
    )
}
export default FormHeader;
