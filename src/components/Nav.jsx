import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Nav.css"
const Nav = () => {
  return (
    <div className='navContainer'>
        <ul>
            <li>
                <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
                <NavLink to={'/about'}>About</NavLink>
            </li>
            <li>
                <NavLink to={'/services'}>Services</NavLink>
            </li>
            <li>
                <NavLink to={'/contact'}>Contact</NavLink>
            </li>
            <li>
                <NavLink to={'/nest'}>Nest</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Nav