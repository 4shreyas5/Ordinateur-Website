import React from 'react'
import NavBar from '../Components/NavBar';
import SiteHeader from '../Components/home/SiteHeader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Button } from "@material-tailwind/react";

function ForStudents(){
    return(
        <>
        <SiteHeader/>
        <NavBar/>
        <h2 className='text-center text-3xl font-bold mt-2'>For Students</h2>
        <h1 className='font-bold mt-2 mx-4 text-xl'>Time Table</h1>
        
        <List component="nav" aria-label="mailbox folders">
      <ListItem >
        <ListItemText primary="I Year" />
        <a href='https://drive.google.com/file/d/1RH8CWT5MAEijoHyqoUo-4vicSONJMpZs/view?usp=sharing' target='_blank'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      
      <Divider />
      <ListItem  divider>
        <ListItemText primary="II Year" />
        <a href='https://drive.google.com/file/d/1RH8CWT5MAEijoHyqoUo-4vicSONJMpZs/view?usp=sharing' target='_blank'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      <ListItem >
        <ListItemText primary="III Year" />
        <a href='https://drive.google.com/file/d/1RH8CWT5MAEijoHyqoUo-4vicSONJMpZs/view?usp=sharing' target='_blank'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      <Divider light />
    </List>
    <h1 className='font-bold mt-2 mx-4 text-xl'>Syllabus/Guidlines</h1>
    <List component="nav" aria-label="mailbox folders">
      <ListItem >
        <ListItemText primary="I Year" />
        <a href='https://drive.google.com/file/d/1Jn3P2_RP2vkANkwDN3ipb7ILMJyMSaU0/view?usp=sharing' target='_blank'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      
      <Divider />
      <ListItem  divider>
        <ListItemText primary="II Year" />
        <a href='https://drive.google.com/file/d/1Jn3P2_RP2vkANkwDN3ipb7ILMJyMSaU0/view?usp=sharing' target='_blank'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      <ListItem >
        <ListItemText primary="III Year" />
        <a href='https://drive.google.com/file/d/1Jn3P2_RP2vkANkwDN3ipb7ILMJyMSaU0/view?usp=sharing' target='_blank'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      <Divider light />
    </List>

        </>
    )
}

export default ForStudents