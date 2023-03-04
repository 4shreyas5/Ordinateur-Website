import React from "react";

function NavBar(){
    return(
        <div className="NavBar bg-slate-900 h-9">
            <div className="flex justify-evenly text-white pt-1">
                <a href="#" >Home</a>
                <a href="#" >Events</a>
                <a href="#" >Alumni</a>
                <a href="#" >For Students</a>
                <a href="#" >Faculties and Staff</a>
                <a href="#" >About Us</a>

            </div>
        </div>
    )
}
export default NavBar;