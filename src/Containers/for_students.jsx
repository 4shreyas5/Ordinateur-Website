import React from 'react'
import NavBar from '../Components/NavBar';
import SiteHeader from '../Components/home/SiteHeader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Footer from '../Components/home/Footer';
import { Button } from "@material-tailwind/react";
import {Link} from 'react-router-dom'

function ForStudents(){
    return(
        <div className='bg-black text-white'>
        <SiteHeader/>
        <NavBar/>
        <h2 className='text-center text-3xl font-bold mt-2'>For Students</h2>
        <div className='mx-20 mt-4'>
        <h1 className='font-bold mt-2 mx-4 text-xl'>Time Table</h1>
        
        <List component="nav" aria-label="mailbox folders">
      <ListItem >
        <ListItemText primary="I Year" />
        <a href='https://drive.google.com/file/d/1TeYwVb2DhpqXy21CEUP-9KnxICEXa5pB/view?usp=drive_link' target='_blank'>
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
        <a href='https://drive.google.com/file/d/1x2xdr3zk4rzV37A7Us1h5Wl0Z76G8Rc4/view?usp=sharing' target='_blank'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      <hr></hr>
      <Divider light />
    </List>
    <h1 className='font-bold mt-2 mx-4 text-xl'>Syllabus/Guidelines</h1>
    <List component="nav" aria-label="mailbox folders">
      <ListItem >
        <ListItemText primary="I Year" />
        <Link to='/guidlines'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </Link>
      </ListItem>
      
      <Divider />
      <ListItem  divider>
        <ListItemText primary="II Year" />
        <Link to='/guidlines2'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </Link>
      </ListItem>
      <ListItem >
        <ListItemText primary="III Year" />
        <Link to='/guidlines3'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </Link>
      </ListItem>
      <Divider light />
      <hr></hr>
      </List>
      <h1 className='font-bold mt-2 mx-4 text-xl'>Resources</h1>
    <List component="nav" aria-label="mailbox folders">
      <ListItem >
        <ListItemText primary="I Year" />
        <Link to='/resources'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </Link>
      </ListItem>
      
      <Divider />
      <ListItem  divider>
        <ListItemText primary="II Year" />
        <Link to='/resources2'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </Link>
      </ListItem>
      <ListItem >
        <ListItemText primary="III Year" />
        <Link to='/resources3'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </Link>
      </ListItem>
      <Divider light />
      <hr></hr>
    </List>
    </div>
    <Footer/>
        </div>
    )
}

export default ForStudents