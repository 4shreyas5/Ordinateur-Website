import React from 'react'
import './forms.css'
import EventForm from './event_form';

import { Link } from 'react-router-dom';

function FormHeader(){  
    return( 
      <>
    <div class="m-4 absolute inline-flex gap-2">
      <Link to='/alumni_form' className="bg-gray-300 w-40 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg">
      Alumni Form</Link>
     <Link to='/forms' className="bg-gray-300 w-40 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg">
      Event Form</Link >
      </div>
      <EventForm/>
      </>
    ) 
}
export default FormHeader;
