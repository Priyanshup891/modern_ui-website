import React from 'react';
import './hero.css';

import hero from '../../assets/images/hero2.svg'
import play from '../../assets/images/play.png'


const Hero = () => {
  return (
    <div className='header section__padding'>
      <div className='header-content'>
        <h2>Best Destinations around the world</h2>
        <h1>Travel, enjoy and live a new and full life</h1>
        <p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
        <div className='header-content__findMore'>
          <button type='button' className='find__button'>Find more</button>
          <button type='button' className='play__button'><img src={play} alt="" /></button>
          <p>Play Demo</p>
        </div>
      </div>

      <div className='header-image'>
        <img src={hero} alt="hero" />
      </div>
    </div>
  )
}

export default Hero