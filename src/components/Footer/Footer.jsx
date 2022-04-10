import React from 'react';
import './footer.css';

import {FaFacebookF, FaInstagram} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';

import playStore from '../../assets/images/playstore.png'
import appStore from '../../assets/images/appstore.png'


const Footer = () => {
  return (
    <div className='footer__section'>
      <div className='footer__section-container'>
        <div className='footer__section-container_block'>
          <h2>Jadoo.</h2>
          <p>Book your trip in minute, get full Control for much longer.</p>
        </div>
        <div className='footer__section-container_block'>
          <h3>Company</h3>
          <a href="#"><h4>About</h4></a>
          <a href="#"><h4>Careers</h4></a>
          <a href="#"><h4>Mobile</h4></a>
        </div>
        <div className='footer__section-container_block'>
          <h3>Contact</h3>
          <a href="#"><h4>Help/FAQ</h4></a>
          <a href="#"><h4>Press</h4></a>
          <a href="#"><h4>Affilates</h4></a>
        </div>
        <div className='footer__section-container_block'>
          <div className='footer__section-container_block-icons'>
            <div className='icon'>
              <FaFacebookF/>
            </div>
            <div className='icon'>
              <FaInstagram/>
            </div>
            <div className='icon'>
              <FaTwitter/>
            </div>
          </div>
          <h4>Discover our app</h4>
          <div className='footer__section-container_block-stors'>
            <img src={playStore} alt="play store" />
            <img src={appStore} alt="app store" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer