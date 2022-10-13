import React from 'react';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <p className='beats-solo'>SMALL TEXT</p>
      <h3>MID TEXT</h3>
      <img src="" alt="headphones" className='hero-banner-image'/>

      <div>
        <Link href="/product/ID">
          <button type="button">BUTTON TEXT</button>
        </Link>
        
      </div>
    </div>
  )
}

export default HeroBanner