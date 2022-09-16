/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Style.css'
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/Logo.svg'

const Index = () => {
  const navigate =useNavigate();
  return (
    <div>
      <nav>
    <div className="logo">
      <img src={Logo} alt="logo" onClick={()=>{navigate("/Home")}} style={{cursor:"pointer"}}/>
    </div>
    <input type="checkbox" id="click" />
    <label htmlFor="click" className="menu-btn">
      <i className="fas fa-bars" />
    </label>
    <ul>
      <li> 
      <NavLink
            to="/Home"
            exact
            className={({isActive})=>(isActive?"active":null)}
          >
            Home
          </NavLink>
        </li>
        <li> 
      <NavLink
            to="/Product"
            className={({isActive})=>(isActive?"active":null)}

            
          >
            Our product
          </NavLink>
        </li>
        <li> 
      <NavLink
            to="/Service"
            className={({isActive})=>(isActive?"active":null)}

          >
            Services
          </NavLink>
        </li>
        <li> 
      <NavLink
            to="/About"
            className={({isActive})=>(isActive?"active":null)}

          >
            About us
          </NavLink>
        </li>
        <li> 
      <NavLink
            to="/Contact"
            className={({isActive})=>(isActive?"active":null)}

          >
            Contact us
          </NavLink>
        </li>
    </ul>
  </nav>
    </div>
  )
}

export default Index