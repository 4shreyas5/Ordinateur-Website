import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import './forms.css'
import { useNavigate } from "react-router-dom"

function EventForm(){  
    const[name, setName] = useState('');
    const[year, setYear] = useState('');
    const[college_roll, setCollege_roll] = useState('');
    const[department, setDepartment] = useState('');
    const[phone_no, setPhone_no] = useState('');
    const[college, setCollege] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit =(e) =>{ 
        e.preventDefault(); 
    }; 

    async function eventSubmit(){
      let data={name, year, college_roll, department, phone_no, college};
      console.warn("event-data", data);
      let result = await fetch("http://127.0.0.1:8000/ordinateur/event_data/",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(data)
        });
        
        result = await result.json();
        console.log("Result", result)
        localStorage.setItem("event-data", JSON.stringify(result))
        navigate("/forms");
        alert('Form Submitted Successfully');
    }

    return(
      <>
        <div className=''>
            <section className='relative  m-10 rounded-lg'>
            <h3 className='text-3xl font-bold text-center'>Event Form</h3>
            <form className='grid p-20' onSubmit={handleSubmit}>
              <label>Name:
                <input type='text' className='w-2/5' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
              </label>
              <label>College:
                <input type='text' className='w-2/5' placeholder='College' value={college} onChange={(e) => setCollege(e.target.value)}/>
              </label>
              <div className='flex gap-6'>
              <label>Year:
              <input type='number' className='' placeholder='Year' value={year} onChange={(e) => setYear(e.target.value)}/>
              </label>
              <label>College Roll No.:
                <input type='number' className='' placeholder='College Roll No.' value={college_roll} onChange={(e) => setCollege_roll(e.target.value)}/>
              </label>
              </div>
              <label>Department:
                <input type='text' className='w-2/5' placeholder='Department' value={department} onChange={(e) => setDepartment(e.target.value)}/>
              </label>
              <label>Phone Number:
                <input type='number' className='w-2/5' placeholder='Phone Number' value={phone_no} onChange={(e) => setPhone_no(e.target.value)}/>
              </label>
              <Link to='' onClick={eventSubmit} className='text-center p-2 px-4 mt-4 w-40 h-12 bg-sky-600 rounded text-lg hover:bg-sky-900'>Submit</Link>
            </form>
            </section>
        </div>
        </>
    )
}
export default EventForm;
