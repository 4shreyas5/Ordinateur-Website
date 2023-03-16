import React from 'react'
import ord from "../Assets/Images/ordinateur_logo.png"

function AboutUs(){
    return(
        <div className="flex bg-black">
            <div className="h-full w-full">
                <img src={ord} alt="Image" className=" my-6"/>
            </div>
            <div className="border-l-4 grid content-baseline">
            <div className="text-white">
                <h2 className="mt-4 ml-80 text-6xl"><b>About Us</b></h2>
            </div>           
            <div> 
            <p className=" mx-10 mt-4 text-white">
                Filled with geeks who are passionate about the world of technology, we are one of the best
Computer Science Society in Delhi University, proving the legacy of Hansraj College and its
faculty. The society members share interests in almost all subfields of Computer Science, from
Web Developers to Competitive Programmers, Ethical Hackers to Data Scientists and from
Blockchain Tech to Graphic Designers. Active throughout the year by seminars, webinars and
tech events, we also publish an yearly magazine - Bitwise, where we encourage creative writing
skills in the technical field. Ordinateur provides students with the opportunities to explore the
vast limitlessness of their potential.
                </p>
            </div>
            </div>
        </div>
    )
}
export default AboutUs