import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import '../css/forms.css'
import Footer from './Footer';
import { useNavigate } from "react-router-dom"

function FormHeader(){
    const [roll_no, setRoll_no] = useState("");
    const[first_name, setFirst_name] = useState('');
    const[last_name, setLast_name] = useState('');
    const [email, setEmail] = useState("");
    const [phone_number, setPhone_number] = useState("");
    // const[linkedIn, setLinkedIn] = useState('');
    // const[graduate, setGraduate] = useState("")
    const[image, setImage] = useState('');
    const[status, setStatus] = useState('');
    const[gender, setGender] = useState('');
    const[date, setDate] = useState('');   //date=date of joining
    const[date_of_birth, setDate_of_birth] = useState(''); 
    const[firm, setFirm] = useState(''); //firm=company name
    const navigate = useNavigate();

    
    const handleSubmit =(e) =>{
        e.preventDefault(); 
    }
  
    async function submit(){
      let data={roll_no, first_name, last_name, email, phone_number, date,  image, status, gender, date_of_birth, firm};
      console.warn("alumni-data",data)
 
      let result = await fetch("http://127.0.0.1:8000/alumnipage/alumni_data/",{
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
    }

    return(
        <div className=''>
            {/* alumni form */}
            <section className='box-border p-4 border-4 m-20 rounded-lg'>
            <h3 className='text-3xl font-bold text-center'>Alumni Form</h3>
            <form className='grid p-20 ' onSubmit={handleSubmit}>
              <label>University Roll Number:
               <input type='number' className='w-2/3' placeholder='University Roll Number' value={roll_no} onChange={(e) => setRoll_no(e.target.value)}/>
               </label>
               <div className='flex gap-4'>
               <label className='label'>First Name:
               <input type='text' className='' placeholder='First Name' value={first_name} onChange={(e) => setFirst_name(e.target.value)}/>
               </label>
               <label className='label'>Last Name:
               <input type='text' className='' placeholder='Last Name' value={last_name} onChange={(e) => setLast_name(e.target.value)}/>
               </label >
               </div>
               {/* <label className='label'>Year Of Graduation:
               <input type='date' className='w-2/3' placeholder='Year Of Graduation' />
               </label> */}
               <label>Gender :
               <select className='w-2/3' placeholder='select Gender' defaultValue={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="none">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                </label>
               <label className='label'>Email:
               <input type='email' className='w-2/3' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
               </label>
               <label className='label'>Phone Number: 
               <input type='number' className='w-2/3' placeholder='Phone Number' value={phone_number} onChange={(e) => setPhone_number(e.target.value)}/>
               </label>
               <label className='label'>Date of Birth:
               <input type='text' className='w-2/3' placeholder='YYYY-MM-DD' value={date_of_birth} onChange={(e) => setDate_of_birth(e.target.value)}/>
               </label>
               {/* <label className='label'>LinkedIn:  
               <input type='url' className='w-2/3' placeholder='LinkedIn' value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)}/>
               </label> */}
               {/* <label className='label'>Upload pdf of graduation degree:
               <input type='file' className='w-1/4 focus:outline-none bg-white' value={graduate} onChange={(e) => setGraduate(e.target.value)}/>
               </label> */}
               <label className='label'>Name of company:
               <input type='text' className='w-2/3' placeholder='Name of Compnany' value={firm} onChange={(e) => setFirm(e.target.value)}/>
               </label >
               <label className='label'>Date of joining:
               <input type='text' className='w-2/3' placeholder='YYYY-MM-DD' value={date} onChange={(e) => setDate(e.target.value)}/>
               </label>
               <label className='label'>Photo:
               <input type='file' className='w-2/3 focus:outline-none bg-white' value={image} onChange={(e) => setImage(e.target.value)}/>
               </label>
               <label className='label'>Current Status:
                <textarea className=' rounded-md w-2/3 px-2 bg-gray-200 shadow-md border focus:outline-none focus:shadow-outline focus:bg-white' placeholder='Description of current status, for ex- job in xyz company' type='text' rows={4}
                value={status} onChange={(e) => setStatus(e.target.value)}/>
               </label>
               {/* <label>Status :
               <select className='w-2/3' placeholder='select Status' defaultValue={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="none">Select Status</option>
                    <option value="HigherEducation">HigherEducation</option>
                    <option value="PLACED">PLACED</option>
                    <option value="OTHER">OTHER</option>
                </select>
               </label> */}
               <Link to='' onClick={submit} className='text-center p-2 px-4 mt-4 w-40 h-12 bg-sky-600 rounded text-lg hover:bg-sky-900'>Submit</Link>
            </form>
            </section>


            {/* event form */}
            {/* <section className='box-border p-4 border-4 m-20 rounded-lg'>
            <h3 className='text-3xl font-bold text-center'>Event Form</h3>
            <form className='grid p-20 '>
              <label>Name:
                <input type='text' className='w-2/3' placeholder='Name'/>
              </label>
              <label>Email:
                <input type='email' className='w-2/3' placeholder='Email'/>
              </label>
              <label>Year:
                <select className='w-2/3'>
                    <option value="none" selected disabled hidden>Select Year</option>
                    <option value="1st year">1st Year</option>
                    <option value="2nd year">2nd Year</option>
                    <option value="3rd year">3rd Year</option>
                </select>
              </label>
              <label>Department:
                <input type='text' className='w-2/3' placeholder='Department'/>
              </label>
              <label>College Roll No.:
                <input type='number' className='w-2/3' placeholder='College Roll No.'/>
              </label>
              <label>Phone Number:
                <input type='number' className='w-2/3' placeholder='Phone Number'/>
              </label>
              <Link to='' className='text-center p-2 px-4 mt-4 w-40 h-12 bg-sky-600 rounded text-lg hover:bg-sky-900'>Submit</Link>
            </form>
            </section> */}

        <Footer/>
        </div>
        
    )
}
export default FormHeader;
