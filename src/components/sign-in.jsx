import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
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
import NavBar from './NavBar';

export function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    return(
        <>
        <NavBar/>
         <img
        src="/images/login-bg3.jpg"
        className="absolute z-0 h-full w-full object-cover"
        />
        <div className="absolute z-0 h-full w-full bg-black/75" />
        <div>
            <Card className='absolute mt-8 top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4 bg-white rounded-lg shadow shadow-2xl'>
                <div>
                <CardHeader 
                   className="mb-4 w-80 mx-8 bottom-6 grid h-28 place-items-center rounded-lg bg-gradient-to-r from-sky-400 to-blue-600"
                >
                    <Typography className='text-3xl' color="white">
                       <b>Sign In</b>
                    </Typography>
                </CardHeader>
                </div>
                
                <CardBody className="mx-8 flex flex-col gap-8">
                  <Input 
                  className='rounded-md h-10 px-2 bg-gray-200 shadow-md border focus:outline-none focus:shadow-outline focus:bg-white' 
                  placeholder='Email' 
                  type="email" required
                  onChange={(e) => setEmail(e.target.value)}
                   />
                  <Input 
                  className="rounded-md h-10 px-2 bg-gray-200 shadow-md border focus:outline-none focus:shadow-outline focus:bg-white" 
                  placeholder='Password' 
                  type="password" required
                  onChange={(e) => setPassword(e.target.value)}
                   />
                  <div className="text-gray-700 px-2">
                     <Checkbox label="Remember Me"/>
                  </div>
                </CardBody>
                
                <CardFooter className='text-center mb-4 mt-4'>
                <Button className="w-80 h-10 rounded text-sm">
                    Sign In
                </Button>
                <Typography variant="small" className="mt-6 flex justify-center">
                    Don't have an account?
                    <Link to='/signup' >
                    <Typography
                       as="span"
                       variant="small"
                       color="blue"
                       className="ml-1 font-bold text-blue-500 link-btn"
                    >
                       Sign Up
                    </Typography>
                    </Link>
                </Typography>
                </CardFooter>
            </Card>
        </div>
        </>

    )
}
export default SignIn;