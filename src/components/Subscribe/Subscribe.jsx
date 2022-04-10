import React from 'react';
import './subscribe.css';


const Subscribe = () => {
  return (
    <div className='subscribe__section'>
      <div className='subscribe__section-container'>

        <h2>Subscribe to get information, latest news and other interesting offers about Cobham</h2>
        <form action="" className='subscribe__section-container_form'>
          <input type="email" placeholder='Your email' />
          <button type='submit'>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Subscribe