import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css';

import logo from '../../assets/images/Logo.svg';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='navbar-links_container'>
          <p><a href='#'>Destinations</a></p>
          <p><a href='#'>Hotels</a></p>
          <p><a href='#'>Flights</a></p>
          <p><a href='#'>Bookings</a></p>
          <p>Login</p>
          <button type='button'>Sign up</button>
        </div>
      </div>
      <div className='navbar-menu'>
        {
          toggleMenu
          ? <RiCloseLine  color='#000' size={27} onClick = {() => setToggleMenu(false)} />
          : <RiMenu3Line color='#000' size={27} onClick = {() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='navbar-menu_container scale-up-center'>
            <div className='navbar-menu_container-links'>
            <p><a href='#'>Destinations</a></p>
          <p><a href='#'>Hotels</a></p>
          <p><a href='#'>Flights</a></p>
          <p><a href='#'>Bookings</a></p>
          <p>Login</p>
          <button type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar