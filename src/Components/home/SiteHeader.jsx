import React from "react";

function SiteHeader(){
    return( 
        <div className="bg-black w-full h-32 ">
           <div className="flex justify-between flex-wrap">

         <div className="-mx-4 -mt-1 w-28 md:w-48 h-24 md:h-48 mt-6 md:mt-0">
            <img src='/images/ordinateur_logo.png' alt="img" />
        </div> 

        <div className="mt-1 md:-ml-20"> 
            <h2 className=" text-white text-2xl md:text-5xl mt-4 md:mt-0 sm:text-4xl ml-14 md:ml-9 ">
                <b>ORDINATEUR</b>
            </h2>
            <h3 className="text-white md:text-2xl sm:text-l mr-2 md:mt-2 ml-2 ">   
            <p>THE COMPUTER SCIENCE SOCIETY</p>
            </h3>
            <h3 className="text-white md:text-xl  mt-1/2 md:ml-28 sm:block ml-16 ">
            <p>HANSRAJ COLLEGE</p>
            </h3>
            </div>

            <div className="mt-2 mx-4 ">          
         <img src='/images/hrc_logo.png' alt="img" className="h-28 hidden md:block"/>
         </div>

         </div>
        </div>
    )
}
export default SiteHeader