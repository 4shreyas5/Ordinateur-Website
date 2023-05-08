import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import './forms.css'
import { useNavigate } from "react-router-dom"
import NavBar from '../NavBar';
import SiteHeader from '../home/SiteHeader';
 
function AlumniForm(){  
    const [roll_no, setRoll_no] = useState("");  
    const[first_name, setFirst_name] = useState('');  
    const[last_name, setLast_name] = useState('');  
    const [email, setEmail] = useState("");  
    const [phone_number, setPhone_number] = useState("");  
    const[year_of_graduation, setYear_of_graduation] = useState("") 
    const[image, setImage] = useState('');  
    const[status, setStatus] = useState('');  
    const[gender, setGender] = useState('');  
    const[date_of_birth, setDate_of_birth] = useState(''); 
    const[firm, setFirm] = useState('');  
    const navigate = useNavigate(); 

    const handleSubmit =(e) =>{
        e.preventDefault(); 
    }; 
  
    async function submit(){
      let data={roll_no, first_name, last_name, email, phone_number, image, status, gender, date_of_birth, firm, year_of_graduation};
      console.warn("alumni-data",data)
 
      let result = await fetch("http://127.0.0.1:8000/ordinateur/alumni_data/",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(data)
        });
        
        result = await result.json();
        console.log("Result", result)
        localStorage.setItem("alumni-data", JSON.stringify(result))
        navigate("/forms")
        alert('submitted successfully');

    }

    return(
      <>
      <SiteHeader/>
         <NavBar/>
         <img
        src="images/img4.jpg"
        className="absolute w-fit h-fit object-cover"
        />
        <div class="m-4 absolute inline-flex gap-2">
        <Link to='/alumni_form' className="bg-gray-300 w-40 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg">
          Alumni Form
          </Link>
        <Link to='/forms' className="bg-gray-300 w-40 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg">
          Event Form
          </Link >
          </div>  
        
        <div className=''>
            <section className='relative rounded-lg  m-10'>
            <h3 className='text-3xl font-bold text-center'>Alumni Form</h3>
            <form className='grid p-20 ' onSubmit={handleSubmit}>
              <label>University Roll Number:
               <input type='number' className='w-2/5' placeholder='University Roll Number' value={roll_no} onChange={(e) => setRoll_no(e.target.value)}/>
               </label>
               <div className='flex gap-4'>
               <label className='label'>First Name:
               <input type='text' className='' placeholder='First Name' value={first_name} onChange={(e) => setFirst_name(e.target.value)}/>
               </label>
               <label className='label'>Last Name:
               <input type='text' className='' placeholder='Last Name' value={last_name} onChange={(e) => setLast_name(e.target.value)}/>
               </label >
               </div>
               <div className='flex gap-6'>
               <label className='label'>Year Of Graduation:
               <input type='text' className='' placeholder='Year Of Graduation' value={year_of_graduation} onChange={(e) => setYear_of_graduation(e.target.value)}  />
               </label>
               <label>Gender :
               <select className='pr-16' placeholder='select Gender' defaultValue={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="none">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                </label>
                </div>
                <div className='flex gap-4'>
               <label className='label'>Date of Birth:
               <input type='text' className='' placeholder='YYYY-MM-DD' value={date_of_birth} onChange={(e) => setDate_of_birth(e.target.value)}/>
               </label>
               <label className='label'>Phone Number: 
               <input type='number' className='' placeholder='Phone Number' value={phone_number} onChange={(e) => setPhone_number(e.target.value)}/>
               </label>
               </div>
               <label className='label'>Email:
               <input type='email' className='w-2/5' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
               </label>
               <div className='flex gap-4'>
               <label className='label'>Name of Company:
               <input type='text' className='' placeholder='Name of Company' value={firm} onChange={(e) => setFirm(e.target.value)}/>
               </label >
               <label className='label'>Current Status:
                <input className='' placeholder='1-HE, 2-placed, 3-other' type='text'
                value={status} onChange={(e) => setStatus(e.target.value)}/>
               </label>
               </div>
               <div className='flex gap-4'>
               <label className='label'>Degree:
               <input type='file' className='focus:outline-none ' value={image} onChange={(e) => setImage(e.target.value)}/>
               </label>
               </div>
               <Link to='' onClick={submit} className='text-center p-2 px-4 mt-4 w-40 h-12 bg-sky-600 rounded text-lg hover:bg-sky-900'>Submit</Link>
            </form>
            </section>
            
        </div>
        </>
    )
}
export default AlumniForm;
