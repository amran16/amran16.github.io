import React from 'react'
import { NavLink } from "react-router-dom";
import '../Styles/navbar.css'

const Navbar = props => {
  return (
    <nav className="">
      <div className="">
        <div className="ui secondary pointing menu">
          <NavLink to="/">
            <h5>M.Gulaid</h5>
          </NavLink>
           <div className="right menu">
          
            <NavLink to="/projects" className="item">Projects</NavLink>
          
            <NavLink to="/footer" className="item">Contacts</NavLink>
        </div>
        </div>
       
       </div>
      </nav>
  )
}
export default Navbar;
