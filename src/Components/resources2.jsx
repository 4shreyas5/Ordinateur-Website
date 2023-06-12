import React from "react";
import NavBar from '../Components/NavBar';
import SiteHeader from '../Components/home/SiteHeader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Footer from '../Components/home/Footer';
import { Button } from "@material-tailwind/react";

function Resources2 (){
    return(
             <div className='bg-black text-white'>
        <SiteHeader/>
        <NavBar/>
        <h2 className='text-center text-3xl font-bold mt-2'>Resources - II Year</h2>
        <div className='mx-20 mt-4'>
        <h1 className='font-bold mt-2 mx-4 text-xl'>Semester 3</h1>
        
        <List component="nav" aria-label="mailbox folders">
        <ListItem >
        <ListItemText primary="Data Structures and Algorithms" />
        <a href='https://drive.google.com/file/d/1x2xdr3zk4rzV37A7Us1h5Wl0Z76G8Rc4/view?usp=sharing' target='_blank' rel="noreferrer">
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      <ListItem  divider>
        <ListItemText primary="Operating Systems" />
        <a href='https://drive.google.com/file/d/1x2xdr3zk4rzV37A7Us1h5Wl0Z76G8Rc4/view?usp=sharing' target='_blank' rel="noreferrer">
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      <ListItem >
        <ListItemText primary="Computer Networks" />
        <a href='https://drive.google.com/file/d/1x2xdr3zk4rzV37A7Us1h5Wl0Z76G8Rc4/view?usp=sharing' target='_blank' rel="noreferrer">
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      <hr></hr>
    </List>
    <h1 className='font-bold mt-2 mx-4 text-xl'>Semester 4</h1>
        
        <List component="nav" aria-label="mailbox folders">
      <ListItem >
        <ListItemText primary="Design Analysis of Algorithms" />
        <a href='https://drive.google.com/file/d/1x2xdr3zk4rzV37A7Us1h5Wl0Z76G8Rc4/view?usp=sharing' target='_blank' rel="noreferrer">
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      <ListItem  divider>
        <ListItemText primary="Database Management System" />
        <a href='https://drive.google.com/file/d/1x2xdr3zk4rzV37A7Us1h5Wl0Z76G8Rc4/view?usp=sharing' target='_blank' rel="noreferrer">
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      <ListItem >
        <ListItemText primary="Software Engineering" />
        <a href='https://drive.google.com/file/d/1x2xdr3zk4rzV37A7Us1h5Wl0Z76G8Rc4/view?usp=sharing' target='_blank' rel="noreferrer">
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
export default Resources2