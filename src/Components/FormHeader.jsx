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
            <section className='box-border p-4 border-4 m-20 rounded-lg '>
            <h3 className='text-3xl font-bold text-center'>Forms</h3>
            <form className='grid p-20 ' onSubmit={handleSubmit}>
               <label>University Roll Number:
               <input type='number' className='w-5/6' placeholder='University Roll Number' onChange={(e) => setRoll(e.target.value)}/>
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
               <input type='date' className='w-5/6' placeholder='Year Of Graduation' />
               </label>
               <label className='label'>Email:
               <input type='email' className='w-5/6' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
               </label>
               <label className='label'>Phone Number: 
               <input type='number' className='w-5/6' placeholder='Phone Number' onChange={(e) => setPhoneNo(e.target.value)}/>
               </label>
               <label className='label'>LinkedIn:  
               <input type='url' className='w-5/6' placeholder='LinkedIn' onChange={(e) => setLinkedIn(e.target.value)}/>
               </label>
               <label className='label'>Upload pdf of graduation degree:
               <input type='file' className='w-1/4 focus:outline-none bg-white' />
               </label>
               <label className='label'>Photo:
               <input type='file' className='w-1/4 focus:outline-none bg-white' />
               </label>
               <label className='label'>Current Status:
                <textarea className=' rounded-md w-5/6 px-2 bg-gray-200 shadow-md border focus:outline-none focus:shadow-outline focus:bg-white' placeholder='Description of current status, for ex- job in xyz company' type='text' rows={4}
                onChange={(e) => setStatus(e.target.value)}/>
               </label>
               <Link to='/alumni' className='text-center p-2 px-4 mt-4 w-40 h-12 bg-sky-600 rounded text-lg hover:bg-sky-900'>Submit</Link>
            </form>
            </section>
            
        {/* <Card className=' absolute mt-16 left-2/4 w-full max-w-5xl -translate-x-2/4 rounded-lg bg-gradient-to-r from-sky-200 to-blue-400'>

        <CardHeader className='-mt-6 mb-4 w-96 mx-20 bottom-6 grid h-28 place-items-center rounded-lg bg-gradient-to-r from-sky-400 to-blue-600'>
            <Typography className='text-3xl font-bold italic' >Alumni Forms</Typography>
        </CardHeader>

        <form className='flex flex-col mx-8 gap-8'>
        <label>University Roll Number
           <Input className='rounded-md h-10 w-5/6 px-2 bg-gray-200 shadow-md border focus:outline-none focus:shadow-outline focus:bg-white ' 
        placeholder='University Roll Number' value={roll} type='number' onChange={(e) => setRoll(e.target.value)}/>
        </label>
       <div className='flex gap-4 '>
        <label>First Name
           <Input  className='rounded-md h-10  px-2 bg-gray-200 shadow-md border focus:outline-none focus:shadow-outline focus:bg-white ' 
        placeholder='First Name' type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label>Last Name
            <Input className='rounded-md h-10  px-2 bg-gray-200 shadow-md border focus:outline-none focus:shadow-outline focus:bg-white ' 
        placeholder='Last Name' value={lastName}  type='text' onChange={(e) => setLastName(e.target.value)}/>
        </label>
        </div>
       <label>Year Of Graduation
            <Input className='rounded-md h-10 w-5/6 px-2 bg-gray-200 shadow-md border focus:outline-none focus:shadow-outline focus:bg-white '
             placeholder='year of graduation' type='date' />
        </label>
       <label>Email
           <Input type="email" className='rounded-md h-10 w-5/6 px-2 bg-gray-200 shadow-md border focus:outline-none focus:shadow-outline focus:bg-white' 
        placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>
       <label>Phone Number
            <Input className='rounded-md h-10 w-5/6 px-2 bg-gray-200 shadow-md border focus:outline-none focus:shadow-outline focus:bg-white ' 
        placeholder='Phone Number' type='number' value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)}/>
        </label>
        <label>LinkedIn
            <Input className='rounded-md h-10 w-5/6 px-2 bg-gray-200 shadow-md border focus:outline-none focus:shadow-outline focus:bg-white'
             placeholder='LinkedIn' type='url' value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)} />
        </label>
       <label>Upload pdf of graduation degree
          <Input className='w-1/4 focus:outline-none' type='file'
           />
        </label>
        <label className='flex flex-col'>Current Status
            <textarea className=' rounded-md w-5/6 px-2 bg-gray-200 shadow-md border focus:outline-none focus:shadow-outline focus:bg-white'
            size='lg' placeholder='Description of current status, for ex- job in xyz company' type='text' rows={4}
            value={status} onChange={(e) => setStatus(e.target.value)}/>
        </label>
        </form>

        <CardFooter className='text-center mb-4 mt-4'>
        <Link to='/alumni'>
        <Button className="w-80 h-12 rounded text-lg hover:bg-sky-900 ">
            Submit
        </Button>
        </Link>
        </CardFooter>
        </Card> */}
        <Footer/>
        </div>
        
    )
}
export default FormHeader;
