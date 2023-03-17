import React, {useState, useEffect} from 'react'
import NavBar from './NavBar'
import SiteHeader from './SiteHeader'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
 
function Alumni(){ 
    const [email, setEmail] = useState("");

    return(
        <>
        <SiteHeader/>
        <NavBar/>
        {/* <h2 className='text-center text-3xl italic font-bold mt-2'>Alumni</h2> */}
        {/* alumni forms, have to create a component of this, figure out how */}

        <div className=''>
            <Card className='absolute mt-16 left-2/4 w-full max-w-5xl -translate-x-2/4 bg-blue-300 shadow shadow-4xl rounded-lg'>

              <CardHeader className='-mt-6 mb-4 w-96 mx-20 bottom-6 grid h-28 place-items-center bg-red-300 rounded-lg'>
                  <Typography className='text-3xl font-bold italic' >Alumni Forms</Typography>
              </CardHeader>

              <CardBody className='flex flex-col mx-8 gap-8'>
                <div className='flex flex-row gap-4 w-96 '>
                <label>First Name
                 <Input className='rounded-md h-10  px-2 bg-gray-200 shadow-md border focus:outline-none focus:shadow-outline focus:bg-white ' 
                 placeholder='First Name' type='text'/>
                 </label>
                 <label>Last Name
                 <Input className='rounded-md h-10 px-2 bg-gray-200 shadow-md border focus:outline-none focus:shadow-outline focus:bg-white ' 
                 placeholder='Last Name' type='text'/>
                 </label>
                 </div>
                 <label>Email
                  <Input type="text" className='rounded-md h-10 px-2 bg-gray-200 shadow-md border focus:outline-none focus:shadow-outline focus:bg-white' 
                 placeholder='Email'  onChange={(e) => setEmail(e.target.value)}/>
                 </label>

                 <label>University Roll Number
                 <Input className='rounded-md h-10 px-2 bg-gray-200 shadow-md border focus:outline-none focus:shadow-outline focus:bg-white ' 
                 placeholder='University Roll Number' type='number'/>
                 </label>

                 <label>Phone Number
                 <Input className='rounded-md h-10 px-2 bg-gray-200 shadow-md border focus:outline-none focus:shadow-outline focus:bg-white ' 
                 placeholder='Phone Number' type='number'/>
                 </label>

                 <label>LinkedIn
                 <Input className='rounded-md' placeholder='LinkedIn'
                  type='link'/>
                 </label>

              </CardBody>
            </Card>
        </div>
        </>
    )
}

export default Alumni