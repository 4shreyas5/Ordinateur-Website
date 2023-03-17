import React from 'react'
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
import { Link } from "react-router-dom";
import NavBar from '../Components/NavBar';

function SignUp(){
    return(
        <div>
          <NavBar/>
         {/* <img 
        src={require('assets/css/img/background-2.jpg')}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      /> */}
      <div className="absolute z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute mt-8 top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            className="mb-4 w-80 mx-8 bottom-6 grid h-28 place-items-center bg-blue-500"
          >
            <Typography variant="h3" color="white">
              <p><b>Sign Up</b></p>
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-1 mx-8">
            <div className="flex flex-row gap-4">
            <Input placeholder = "First Name" 
            className="rounded-md required:" 
            type="text"
             />

            <Input placeholder = "Last Name" 
            className="rounded-md" 
            type="text" />
            </div>
            <Input type="email" placeholder="Email" className="rounded-md"  />
            <Input type="number" placeholder="Phone Number" className="rounded-md" />
            <div className="flex flex-row gap-4">
              <Input type="date" className="rounded-md"  />
              <select className="rounded-md ">
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Others</option>
              </select>
            </div>
            <Input
              type="password"
              className="rounded-md"
              placeholder="Password"
            />
            <div className="text-gray-700 -ml-2.5">
              <Checkbox label="I agree the Terms and Conditions" />
            </div>
          </CardBody>
          <CardFooter className="text text-center mb-4">
            <Button variant="contained" className="w-80 h-10 rounded mt-4 text-sm" >
              Sign Up
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
                <Link to='/signin'>
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  SignIn
                </Typography>
                </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    {/* </> */}
        </div>
    )
}

export default SignUp