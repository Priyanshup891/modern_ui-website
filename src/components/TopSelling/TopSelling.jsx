import React from 'react';
import './topSelling.css';

import rome from '../../assets/images/rome.png';
import london from '../../assets/images/london.png';
import europe from '../../assets/images/europe.png';

const TopSelling = () => {
  return (
    <div className='topSelling__section section__padding'>
      <h2>Top Selling</h2>
      <h1>Top Destinations</h1>
      <div className='topSelling__section-container'>
        <div className='topSelling__section-container_block'>
          <div className='topSelling__section-container_block-info'>
            <div>
            <h3>Rome, Italy</h3>
            <h3>$5,42k</h3>
            </div>
          <p>10 Days Trip</p>
          </div>
        </div>
        <div className='topSelling__section-container_block'>
          <div className='topSelling__section-container_block-info'>
            <div>
            <h3>London, UK</h3>
            <h3>$4.2k</h3>
            </div>
          <p>12 Days Trip</p>
          </div>
        </div>
        <div className='topSelling__section-container_block'>
          <div className='topSelling__section-container_block-info'>
            <div>
            <h3>Full Europe</h3>
            <h3>$15k</h3>
            </div>
          <p>28 Days Trip</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopSelling