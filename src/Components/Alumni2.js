import React, {useState} from 'react'
import { alumnidata } from './Alumni_data';

function Alumni2() {
  const[adata, setadata]=useState(alumnidata)
    return(   
    
    <div className='pb-11 pl-4 pr-4 h-96 overflow-y-scroll'>
        <div className='place-self-center '>
      <table class="table-fixed max-w-full">
  <thead className='bg-amber-400 transition ease-in-out delay-150 shadow-xl hover:scale-110'>
    <tr>
      <th className='p-3 w-80'>NAME</th>
      <th className='p-3 w-80'>STATUS</th>
      <th className='px-3 w-80'>DESC</th>
    </tr>
  </thead>
  <tbody className=' text-black py-5 divide-y-4'>
  {adata.map((items)=> (
    <tr className=' text-center bold '>
    <td className='p-2  text-black'><img className="text-blsck float-left h-10 w-10 rounded-full box-border border-2 border-blue-300 
      transition ease-in-out delay-150 hover:scale-125" src={items.image} alt={items.name} />
        <div className=' font-semibold'>{items.name}<br/></div>
        {items.email}
    </td>
    <td>
        {items.status}
    </td>
    <td>
        {items.desc}
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
