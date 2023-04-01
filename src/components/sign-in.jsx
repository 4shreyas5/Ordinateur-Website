import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom"
import NavBar from './NavBar';
import SiteHeader from './SiteHeader';

export function SignIn(){
    const [roll, setRoll] = useState("");
    const [password, setPassword] = useState("");
    const navigate =useNavigate();

    const handleSubmit =(e) =>{
        e.preventDefault();  
    }

    async function login(){
        console.warn(roll,password)
        let item={roll,password};
        let result = fetch("http://127.0.0.1:8000/accounts/login/",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
        result = await result.json();
        console.log("Result", result)
        localStorage.setItem("user-info", JSON.stringify(result))
        navigate("/sign-in")
    }

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
           navigate("/signin") 
        }
    },[])

    return(
        <>
        <SiteHeader/>
        <NavBar/>
        <div className='flex justify-between box-border border-4 m-8 rounded-lg '>
           <section className='p-40 ml-14 w-full'>
             <h3 className='text-3xl font-bold'>Sign In</h3>
              <form className='grid ' onSubmit={handleSubmit}>
              <label>University Roll Number:
               <input type='number' className='' placeholder='University Roll Number' onChange={(e) => setRoll(e.target.value)}/>
               </label>
               <label>Password:
                <input type='password' className='' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
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