import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import NavBar from '../Components/NavBar';
import SiteHeader from '../Components/home/SiteHeader';
 
function SignUp(){
    const [roll_no, setRoll_no] = useState("");
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");  
    const[gender, setGender] = useState('');
    const [password, setPassword] = useState("");
    const navigate =useNavigate();

    const handleSubmit =(e) =>{
        e.preventDefault();  
    } 

    async function register(){
        let data={roll_no, first_name, last_name, email, gender, password};
        console.warn("Register-data", data);
        let result = await fetch("http://127.0.0.1:8000/ordinateur/register/",{
              method:'POST',
              headers:{
                  "Content-Type":"application/json",
                  "Accept":"application/json"
              },
              body:JSON.stringify(data)
          });
          
          result = await result.json();
          console.log("Result", result)
          localStorage.setItem("register-data", JSON.stringify(result))
          navigate("/signup")
          alert('Registered Successfully');
      }

    return(
        <>
        <SiteHeader/>
        <NavBar/>
        <div className='flex justify-between box-border border-4 m-8 rounded-lg '>
           <section className='p-32  w-full'>
             <h3 className='text-3xl font-bold'>Sign Up</h3>
              <form className='grid ' onSubmit={handleSubmit}>
              <label>University Roll Number:
               <input type='number' className='' placeholder='University Roll Number' value={roll_no} onChange={(e) => setRoll_no(e.target.value)}/>
               </label>
               <div className='flex gap-4'>
               <label className='label'>First Name:
               <input type='text' className='' placeholder='First Name' value={first_name} onChange={(e) => setFirst_name(e.target.value)}/>
               </label>
               <label className='label'>Last Name:
               <input type='text' className='' placeholder='Last Name' value={last_name} onChange={(e) => setLast_name(e.target.value)}/>
               </label >
               </div>
               <label className='label'>Email:
               <input type='email' className='' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
               </label>

               <label>Gender :
               <select className='' placeholder='select Gender' value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="none">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                </label>
               <label>Password:
                <input type='password' className='' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
               </label>
               <button onClick={register} className='text-center p-2 px-4 w-32 h-12 bg-sky-600 rounded text-lg hover:bg-sky-900'>Sign Up</button>
               <div className='flex mt-2'>
                <p >Already have an account?</p>
                <Link to='/signin' className=' ml-1 text-cyan-700 font-bold'>Sign In</Link>
                </div>
              </form>
        </section>
           <img
            src="/images/register2.jpg"
            className='h-auto max-w-lg mr-40'
            />
        </div>
        </>
    )
}

export default SignUp