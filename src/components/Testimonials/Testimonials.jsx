import React from 'react';
import './testimonials.css';

import person from '../../assets/images/testi.png'

const Testimonials = () => {
  return (
    <div className='testimonial__section section__padding'>
      <div className='testimonial__section-container'>
        <div className='testimonial__section-container_info'>
          <h2>Testimonials</h2>
          <h1>What people say about Us.</h1>
          <div className='testimonial__section-container_info-dots'>
            <div className='dot dot-active'></div>
            <div className='dot'></div>
            <div className='dot'></div>
          </div>
        </div>
        <div className='testimonial__section-container_testi'></div>
        
        <div className='testimonial__section-container_testi-info_1'>
        <div className='testimonial__section-container_testi-image'>
          <img src={person} alt="" />
        </div>
          <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
          <h4>Mike taylor</h4>
          <h5>Lahore, Pakistan</h5>
        </div>
      </div>
    </div>
  )
}

export default Testimonials