import React from 'react';
import './navbar.css';

import logo from '../../assets/images/Logo.svg';

const Navbar = () => {
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
    </div>
  )
}

export default Navbar