import React from "react";
import {Link} from 'react-router-dom'

  
function NavBar(){
    return(
        <div className="NavBar bg-slate-900 h-9">
            <div className="flex justify-evenly text-white pt-1">
                <Link to='/home'>Home</Link>
                <Link to='/events'>Events</Link>  
                <Link to='/alumni'>Alumni</Link>
                <Link to='/forms'>Forms</Link>
                <Link to='/Faculty'>Faculty</Link>
                <Link to='/aboutus'>About Us</Link>
                <Link to='/for_students'>For Students</Link>
                <Link to='/signin'>Sign In </Link>
                <Link to='/signup'>Sign Up</Link>

                

            </div> 
        </div>
    )
}
export default NavBar;