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
            <NavLink activeclassname={"active"} to="https://github.com/JaviiAzagra" target={'_blank'} className="upnavbar__links">GITHUB</NavLink>
            <NavLink activeclassname={"active"} to="https://www.linkedin.com/in/javier-azagra-garc%C3%ADa/" target={'_blank'} className="upnavbar__links">LINKEDIN</NavLink>
            <NavLink activeclassname={"active"} to="/drivers" className="upnavbar__links">INSTAGRAM</NavLink>
            <NavLink activeclassname={"active"} to="/video" className="upnavbar__links">TWITTER</NavLink>
            <NavLink activeclassname={"active"} to="https://javierazagra.com" target={'_blank'} className="upnavbar__links">javierazagra.com</NavLink>
            </nav>
        </div>
    </div>
      
  )
}

export default Upnavbar
