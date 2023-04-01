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
    const[firstName, setFirstName]=useState('');
    const[lastName, setLastName]=useState('');
    const [email, setEmail] = useState("");
    const [roll, setRoll] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    

    return(
        <>
        <SiteHeader/>
        <NavBar/>
        <h2 className='text-center text-3xl font-bold mt-2'>Alumni</h2>
        <div className=''>
        </div>
        </>
    )
}

export default Alumni