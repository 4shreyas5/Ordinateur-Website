import React from "react";
import ord from "../Assets/Images/ordinateur_logo.png";
import hrc from "../Assets/Images/hrc_logo.png";

function SiteHeader(){
    return(
        <div className="bg-black w-full h-32">
            <div className="flex justify-between">
         <div className="-mx-4 -mt-1 w-48 h-48">
            <img src={ord} />
        </div>
        <div className="mt-1">
         {/* <span className="text-center text-white"> */}
            <h2 className="-ml-2 text-white text-5xl">
                <b>ORDINATEUR</b>
            </h2>
            <h3 className="text-white text-2xl -ml-9 mt-2">
            <p>THE COMPUTER SCIENCE SOCIETY</p>
            </h3>
            <h3 className="text-white text-xl ml-14 mt-1/2">
            <p>HANSRAJ COLLEGE</p>
            </h3>
            </div>
            <div className="mt-2 mx-4">          
         <img src={hrc} className="h-28"/>
         </div>
         </div>
        </div>
    )
}
export default SiteHeader