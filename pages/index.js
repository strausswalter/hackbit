import React from 'react'

import { Product, FooterBanner, HeroBanner } from '../components';

const Home = () => {
  return (
    <>
      <HeroBanner/>

    <div className='products-heading'>
      <h2>Top de Vendas</h2>
      <p>Veja os produtos mais vendidos</p>
    </div>

    <div className='products-container'>
      {['Product 1', 'Product 2'].map((product) => product)}
    </div>

    <FooterBanner/>

    </>
  )
}

export default Home