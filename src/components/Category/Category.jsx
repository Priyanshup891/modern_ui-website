import React from 'react';
import './category.css';

import weather from '../../assets/images/category_1.png';
import flight from '../../assets/images/category_2.png';
import events from '../../assets/images/category_3.png';
import customization from '../../assets/images/category_4.png';


const Category = () => {
  return (
    <div className='category__section'>
      <h2>CATEGORY</h2>
      <h1>We Offer Best Services</h1>
      <div className='category__section-content'>
        <div className='category__section-content__container'>
          <div className='category__section-content__container-block'>
            <img src={weather} alt="weather"/>
            <h3>calculate weather</h3>
            <p>Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>
          <div className='category__section-content__container-block'>
          <img src={flight} alt="flight" />
            <h3>best flights</h3>
            <p>Engrossed listening. Park gate sell they west hard for the.</p>
          </div>
          <div className='category__section-content__container-block'>
          <img src={events} alt="weather" />
            <h3>local events</h3>
            <p>Barton vanity itself do in it. Preferd to men it engrossed. </p>
          </div>
          <div className='category__section-content__container-block'>
          <img src={customization} alt="weather" />
            <h3>customization</h3>
            <p>We deliver outsourced aviation services for military</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category