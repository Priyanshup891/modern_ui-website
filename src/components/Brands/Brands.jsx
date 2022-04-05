import React from 'react';
import './brands.css';

import brand_1 from '../../assets/images/brand_1.png';
import brand_2 from '../../assets/images/brand_2.png';
import brand_3 from '../../assets/images/brand_3.png';
import brand_4 from '../../assets/images/brand_4.png';
import brand_5 from '../../assets/images/brand_5.png';

const Brands = () => {
  return (
    <div className='brands__section'>
      <div className='brands__section-container'>
        <div className='brand'>
          <img src={brand_1} alt="" />
        </div>
        <div className='brand'>
          <img src={brand_2} alt="" />
        </div>
        <div className='brand brand-active'>
          <img src={brand_3} alt="" />
        </div>
        <div className='brand'>
          <img src={brand_4} alt="" />
        </div>
        {/* <div className='brand'>
          <img src={brand_5} alt="" />
        </div> */}
      </div>
    </div>
  )
}

export default Brands