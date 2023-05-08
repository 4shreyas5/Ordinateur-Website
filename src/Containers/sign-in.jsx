import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom"
import NavBar from '../Components/NavBar';
import SiteHeader from '../Components/home/SiteHeader';

export function SignIn(){
    const [first_name, setFirst_Name] = useState("");
    const [roll_no, setRoll_no] = useState("");
    const navigate =useNavigate();

    const handleSubmit =(e) =>{
        e.preventDefault();  
    } 
 
    async function login(){ 
        let item={first_name, roll_no};
        console.warn("login-data",item)
        let result = await fetch("http://127.0.0.1:8000/ordinateur/login/",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
        result = await result.json();
        console.log("Result", result)
        localStorage.setItem("login-data", JSON.stringify(result))
        navigate("/signin")
        alert('LoggedIn Successfully');
    }

    return(
        <>
        <SiteHeader/>
        <NavBar/>
        <div className='flex justify-between box-border border-4 m-8 rounded-lg'>
           <section className='p-40 ml-14 w-full'>
             <h3 className='text-3xl font-bold'>Sign In</h3>
              <form className='grid ' onSubmit={handleSubmit}>
               <label>First Name:
                <input type='text' className='' placeholder='First Name' value={first_name} onChange={(e) => setFirst_Name(e.target.value)} />
               </label>
               <label>University Roll No.:
                <input type='number' className='' placeholder='University Roll No.' value={roll_no} onChange={(e) => setRoll_no(e.target.value)} />
               </label>
               <button onClick={login} className='text-center p-2 px-4 w-32 h-12 bg-sky-600 rounded text-lg hover:bg-sky-900'>Sign In</button>
               <div className='flex mt-2'>
                <p >Don't have an account?</p>
                <Link to='/signup' className=' ml-1 text-cyan-700 font-bold' type='submit'>Sign Up</Link>
                </div>
              </form>
        </section>
           <img
            src="/images/login_img.jpg"
            className='h-auto max-w-lg mr-40'
            />
        </div>
        </>

    )
}
export default SignIn;