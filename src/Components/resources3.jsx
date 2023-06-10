import React from "react";
import NavBar from '../Components/NavBar';
import SiteHeader from '../Components/home/SiteHeader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Footer from '../Components/home/Footer';
import { Button } from "@material-tailwind/react";

function Resources3 (){
    return(
             <div className='bg-black text-white'>
        <SiteHeader/>
        <NavBar/>
        <h2 className='text-center text-3xl font-bold mt-2'>Resources - III Year</h2>
        <div className='mx-20 mt-4'>
        <h1 className='font-bold mt-2 mx-4 text-xl'>Semester 5</h1>
        
        <List component="nav" aria-label="mailbox folders">
        <ListItem >
        <ListItemText primary="Data Analysis and Visualisation" />
        <a href='https://drive.google.com/file/d/1x2xdr3zk4rzV37A7Us1h5Wl0Z76G8Rc4/view?usp=sharing' target='_blank'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      <ListItem  divider>
        <ListItemText primary="Internet Technologies" />
        <a href='https://drive.google.com/file/d/1x2xdr3zk4rzV37A7Us1h5Wl0Z76G8Rc4/view?usp=sharing' target='_blank'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      <ListItem >
        <ListItemText primary="Digital Image Processing" />
        <a href='https://drive.google.com/file/d/1x2xdr3zk4rzV37A7Us1h5Wl0Z76G8Rc4/view?usp=sharing' target='_blank'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      <ListItem >
        <ListItemText primary="Theory of Computation" />
        <a href='https://drive.google.com/file/d/1x2xdr3zk4rzV37A7Us1h5Wl0Z76G8Rc4/view?usp=sharing' target='_blank'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      <hr></hr>
    </List>
    <h1 className='font-bold mt-2 mx-4 text-xl'>Semester 6</h1>
        
        <List component="nav" aria-label="mailbox folders">
      <ListItem >
        <ListItemText primary="Artificial Intelligence" />
        <a href='https://drive.google.com/file/d/1x2xdr3zk4rzV37A7Us1h5Wl0Z76G8Rc4/view?usp=sharing' target='_blank'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      <ListItem  divider>
        <ListItemText primary="Computer Graphics" />
        <a href='https://drive.google.com/file/d/1x2xdr3zk4rzV37A7Us1h5Wl0Z76G8Rc4/view?usp=sharing' target='_blank'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      <ListItem >
        <ListItemText primary="Information Security" />
        <a href='https://drive.google.com/file/d/1x2xdr3zk4rzV37A7Us1h5Wl0Z76G8Rc4/view?usp=sharing' target='_blank'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      <ListItem >
        <ListItemText primary="Machine Learning" />
        <a href='https://drive.google.com/file/d/1x2xdr3zk4rzV37A7Us1h5Wl0Z76G8Rc4/view?usp=sharing' target='_blank'>
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
export default Resources3