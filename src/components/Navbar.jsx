import React from 'react'
import {useState, useEffect} from 'react'
import '../css/Navbar.css'
// import {Link} from 'react-router-dom'

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)   
  }
    
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
  }

  }, [])

  return (
    <div>
      <nav>
      {(toggleMenu || screenWidth > 500) && (
      <ul className='list top-0'>
        <li className='items link-btn'>HOME</li>
        {/* <Link to='/Schedule' className="items link-btn">SCHEDULE</Link> */}
        <li className="items link-btn">EVENTS</li>
        <li className="items link-btn">ALUMNI</li>
        <li className="items link-btn">FOR STUDENTS </li>
        <li className="items link-btn">FACULTY AND STAFFS</li>
        <li className="items link-btn">ABOUT US</li>
        <li className="items link-btn">FORMS </li>
        
      </ul>
      )}
      <button onClick={toggleNav} className="btn">|||</button>
      </nav>
    </div>
  )
}

export default Navbar
