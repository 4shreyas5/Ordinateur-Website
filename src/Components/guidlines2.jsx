import React from "react";
import NavBar from '../Components/NavBar';
import SiteHeader from '../Components/home/SiteHeader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Footer from '../Components/home/Footer';
import { Button } from "@material-tailwind/react";

function Guidlines2 (){
    return(
             <div className='bg-black text-white'>
        <SiteHeader/>
        <NavBar/>
        <h2 className='text-center text-3xl font-bold mt-2'>Syllabus/Guidelines - II Year</h2>
        <div className='mx-20 mt-4'>
        <h1 className='font-bold mt-2 mx-4 text-xl'>Semester 3</h1>
        
        <List component="nav" aria-label="mailbox folders">
      <ListItem >
        <ListItemText primary="Data Structures and Algorithms" />
        <a href='https://drive.google.com/file/d/10MFIwglFiaLofvKSeCJ69_pNLsukxtvI/view?usp=drive_link' target='_blank'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      <ListItem  divider>
        <ListItemText primary="Operating Systems" />
        <a href='https://drive.google.com/file/d/1BFNDe-yG61h3LIojLzefXDKU6u-Nsh4g/view?usp=drive_link' target='_blank'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      <ListItem >
        <ListItemText primary="Computer Networks" />
        <a href='https://drive.google.com/file/d/1kOzsYDNg0ZK2KGTGFwMcXGOe8noEThFg/view?usp=drive_link' target='_blank'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      <hr></hr>
    </List>
    <h1 className='font-bold mt-2 mx-4 text-xl'>Semester 4</h1>
        
        <List component="nav" aria-label="mailbox folders">
      <ListItem >
        <ListItemText primary="Design Analysis of Algorithms" />
        <a href='https://drive.google.com/file/d/1NznRx9ruFamVfRU_SmYRfbFHhjHqKxP8/view?usp=drive_link' target='_blank'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      <ListItem  divider>
        <ListItemText primary="Database Management System" />
        <a href='https://drive.google.com/file/d/1wN4dfdVztfKbhp4zsU_bwUBiQRsmW5M3/view?usp=drive_link' target='_blank'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      <ListItem >
        <ListItemText primary="Software Engineering" />
        <a href='https://drive.google.com/file/d/10Q-L6aw8wIYUAYfT1odrt1OMM_mhg7OG/view?usp=drive_link' target='_blank'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      <hr></hr>
    </List>
    </div>
   
    <Footer/>

        </div>
    )
}
export default Guidlines2