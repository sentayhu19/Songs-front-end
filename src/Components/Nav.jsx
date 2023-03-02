import React from 'react'
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
const Nav = () => {
    const location = useLocation();
    let activeStyle = {
        backgroundColor: "#4CAF50",
        color: "white",
        textAlign: "center",
        textDecoration: "none",
        cursor: "pointer",
        borderRadius: "7px",

      };
  return (
    <div>
        <div className='flex justify-between m-10 items-center'>
              <h1 className='flex items-center justify-center text-3xl rounded-lg  border-2 w-[15%]'>
                <NavLink to="/">
                <span className='text-green-500 '>
                <FontAwesomeIcon icon={faPlay} /></span> <span className='text-green-500'>Addis</span>Music
                </NavLink>
                </h1>
              <ul className='flex gap-3'>
               <li> <NavLink to="/" className='hover:bg-green-500 hover:text-white hover:border hover:rounded-lg p-2'  style={({ isActive }) => isActive ? activeStyle : undefined }>Home</NavLink></li>
               <li> <NavLink to="/addnewsong" className='hover:bg-green-500 hover:text-white hover:border hover:rounded-lg p-2'style={({ isActive }) => isActive ? activeStyle : undefined }>Add New Song</NavLink></li>
               <li> <NavLink to="/managesong" className="hover:bg-green-500 hover:text-white hover:border hover:rounded-lg p-2" style={({ isActive }) => isActive ? activeStyle : undefined } >Manage Songs </NavLink></li>
              </ul> 
              </div>
    </div>
  )
}

export default Nav