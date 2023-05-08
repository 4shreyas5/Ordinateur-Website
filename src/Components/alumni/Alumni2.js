import React, {useState, useEffect} from 'react'
import { alumnidata } from './Alumni_data';

function Alumni2() {
  const[adata, setadata]=useState(alumnidata)
  
  useEffect(() => {
    fetch('http://127.0.0.1:8000/ordinateur/get_alumnidata/2024324/')
      .then(response => response.json())
      .then(adata => setadata(adata))
      .catch(error => console.error(error));
  }, []); 
  
    return(   
      
    <div className='pb-11 pl-4 pr-4 h-96 overflow-y-scroll'>
        <div className='place-self-center'>
      <table class="table-fixed max-w-full">
  <thead className='bg-amber-400  shadow-xl sticky top-0 '>
    <tr>
      <th className='p-3 w-80'>NAME</th>
      <th className='p-3 w-80'>GENDER</th>
      <th className='p-3 w-80'>DATE OF BIRTH</th>
      <th className='p-3 w-80'>UNIVERSITY ROLL NO.</th>
      <th className='p-3 w-80'>YEAR OF GRADUATION</th>
      <th className='p-3 w-80'>STATUS</th>
      <th className='p-3 w-80'>COMPANY</th>
      
    </tr> 
  </thead>
  <tbody className=' text-black py-5 divide-y-4'>
  {adata.map((items)=> (
    <tr className=' text-center bold '>
    <td className='p-2  text-black'>
      <img 
      className="text-blsck float-left h-10 w-10 rounded-full box-border border-2 border-blue-300 
      transition ease-in-out delay-150 hover:scale-125" 
      src='/images/icon.png' 
      alt={items.first_name} 
      />
        <div className=' font-semibold'>{items.first_name} {items.last_name}<br/></div>
        {items.email}
    </td>
    <td>
        {items.gender} 
    </td>
    <td >
        {items.date_of_birth}
    </td>
    <td>
        {items.roll_no} 
    </td>
    <td>
        {items.year_of_graduation} 
    </td>
    <td>
        {items.status} 
    </td>
    <td>
        {items.firm} 
    </td>
   
</tr>    
  ))}
   
  </tbody>
</table>
</div>
    </div>
    );
}

export default Alumni2
