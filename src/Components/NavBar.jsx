import React from "react";
import {Link} from 'react-router-dom'
import './navbar.css'

  
function NavBar(){
    return(
        <div className="nav absolute">
        <div className="NavBar bg-slate-900 h-9">
            <div className="flex justify-evenly text-white pt-1 ">
                <Link to='/home'>Home</Link>
                <Link to='/events'>Events</Link> 
                <Link to='/for_students'>For Students</Link> 
                <Link to='/Faculty'>Faculty</Link>
                <Link to='/aboutus'>About Us</Link>
            </div> 
        </div>
        </div>
    )
}
export default NavBar;