import React from "react";

function SiteHeader(){
    return( 
        <div className="bg-black w-full h-32 ">
           <div className="flex justify-between flex-wrap">

         <div className="-mx-4 -mt-1 w-48 h-48 ">
            <img src='/images/ordinateur_logo.png' />
        </div> 

        <div className="mt-1"> 
            <h2 className="-ml-2 text-white xl:text-5xl md:text-4xl sm:text-4xl">
                <b>ORDINATEUR</b>
            </h2>
            <h3 className="text-white xl:text-2xl md:text-xl sm:text-l -ml-9 mt-2 ">   
            <p>THE COMPUTER SCIENCE SOCIETY</p>
            </h3>
            <h3 className="text-white xl:text-xl md:text-l ml-14 mt-1/2 hidden sm:block">
            <p>HANSRAJ COLLEGE</p>
            </h3>
            </div>

            <div className="mt-2 mx-4 ">          
         <img src='/images/hrc_logo.png' className="h-28 hidden md:block"/>
         </div>

         </div>
        </div>
    )
}
export default SiteHeader