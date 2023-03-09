import React from 'react'
import { NavLink } from 'react-router-dom'
import './Upnavbar.scss';

const Upnavbar = () => {
  return (
    <div className='upnavbar'>
        
        <div>
          <nav>
          <NavLink activeclassname={"active"} to="/" className="upnavbar__links"><img src="/assets/fialogo.png" alt="logo" /></NavLink>
            <NavLink activeclassname={"active"} to="/" className="upnavbar__links">F1®</NavLink>
            <NavLink activeclassname={"active"} to="/teams" className="upnavbar__links">F2™</NavLink>
            <NavLink activeclassname={"active"} to="/drivers" className="upnavbar__links">F3™</NavLink>
            <NavLink activeclassname={"active"} to="/video" className="upnavbar__links">F1® ACADEMY</NavLink>
          </nav>
        </div>

        <div>
          <nav>
            <NavLink activeclassname={"active"} to="/" className="upnavbar__links">AUTHENTICS</NavLink>
            <NavLink activeclassname={"active"} to="/teams" className="upnavbar__links">STORE</NavLink>
            <NavLink activeclassname={"active"} to="/drivers" className="upnavbar__links">TICKETS</NavLink>
            <NavLink activeclassname={"active"} to="/video" className="upnavbar__links">HOSPITALITY</NavLink>
            <NavLink activeclassname={"active"} to="/video" className="upnavbar__links">EXPERIENCES</NavLink>
            </nav>
        </div>
    </div>
      
  )
}

export default Upnavbar
