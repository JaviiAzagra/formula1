import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
        <NavLink activeclassname={"active"} to="/" className="navbar__links"><img src="/assets/F1logo.png" alt="logo" /></NavLink>
      <nav>
        <NavLink activeclassname={"active"} to="/" className="navbar__links">Home</NavLink>
        <NavLink activeclassname={"active"} to="/teams" className="navbar__links">Teams</NavLink>
        <NavLink activeclassname={"active"} to="/drivers" className="navbar__links">Drivers</NavLink>
        <NavLink activeclassname={"active"} to="/video" className="navbar__links">Video</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
