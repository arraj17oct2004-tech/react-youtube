import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id='navbar'>
      <h3>Company Name</h3>

      <div id='links'>
         <Link to="/">Home</Link>
         <Link to="/about">About</Link>
         <Link to="/contact">Contact</Link>
      </div>
      
      
    </div>
  )
}

export default Navbar
