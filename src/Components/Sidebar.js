import React from 'react'

function  Sidebar(){
  const years = [2000,2001,2002,2003,2004,2005,2006]
  return (
    <div className='pr-11 pl-3 h-96 overflow-y-scroll'>
      {years.map(year =>(
        <div className='py-2'> 
        <ui>
          <button class="font-bold text-xl rounded-lg h-14 w-80 bg-gradient-to-r from-green-300 via-green-400 to-green-300 transition ease-in-out delay-150 hover: bg-green-400 hover:scale-110 active: bg-green-400 focus:outline-none focus:ring focus:ring-green-800">{year}</button>
        <br/>
        </ui>
        </div>
      ))}
    
    </div>
  )
 }

export default Sidebar
