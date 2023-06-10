import React from "react";
import NavBar from '../Components/NavBar';
import SiteHeader from '../Components/home/SiteHeader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Footer from '../Components/home/Footer';
import { Button } from "@material-tailwind/react";

function Guidlines (){
    return(
             <div className='bg-black text-white'>
        <SiteHeader/>
        <NavBar/>
        <h2 className='text-center text-3xl font-bold mt-2'>Syllabus/Guidlines - I Year</h2>
        <div className='mx-20 mt-4'>
        <h1 className='font-bold mt-2 mx-4 text-xl'>Semester 1</h1>
        
        <List component="nav" aria-label="mailbox folders">
      <ListItem >
        <ListItemText primary="Computer System Architecture" />
        <a href='https://docs.google.com/document/d/10x5_6RvalPpQHjn4ReXuSpICU7UMAK79/edit?usp=drive_link&ouid=100436684651758325144&rtpof=true&sd=true' target='_blank'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      <ListItem  divider>
        <ListItemText primary="Programming using Python" />
        <a href='https://drive.google.com/file/d/1gCsA8bE4EIJZ3iPScPRB3iTNIVXFTHwl/view?usp=drive_link' target='_blank'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      <ListItem >
        <ListItemText primary="Mathematics for Computing" />
        <a href='https://docs.google.com/document/d/1HQonTlDmNdjO35-98J6wi9R6BOCvf1iI/edit?usp=drive_link&ouid=100436684651758325144&rtpof=true&sd=true' target='_blank'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      <hr></hr>
    </List>
    <h1 className='font-bold mt-2 mx-4 text-xl'>Semester 2</h1>
        
        <List component="nav" aria-label="mailbox folders">
      <ListItem >
        <ListItemText primary="Object Oriented Programming with C++ " />
        <a href='https://docs.google.com/document/d/1bLszqbP1zwfT3ofuS9PT3iEYk0-HZlmu/edit?usp=drive_link&ouid=100436684651758325144&rtpof=true&sd=true' target='_blank'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      <ListItem  divider>
        <ListItemText primary="Discrete Mathematics" />
        <a href='https://drive.google.com/file/d/10L83S2B7b8NSKCKt6bhKnUSdD5-O_BqL/view?usp=drive_link' target='_blank'>
        <Button className='bg-sky-500 w-20'>Visit</Button>
        </a>
      </ListItem>
      <ListItem >
        <ListItemText primary="Probability for Computing" />
        <a href='https://docs.google.com/document/d/1HQonTlDmNdjO35-98J6wi9R6BOCvf1iI/edit?usp=drive_link&ouid=100436684651758325144&rtpof=true&sd=true' target='_blank'>
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
export default Guidlines