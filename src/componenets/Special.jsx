import React from 'react'

import deliverImage from '../assets/images/deliver.png'

const Special = ({ special }) => {
  const { dishImage, title, price, content } = special
  return (
    <div className='special card col-12-xs col-4-md bg-light-gray'>
      <header>
        <img src={dishImage} alt="" />
      </header>
      <main className='mt-2'>
        <div className="section-20 row justify-space-between">
          <b>{title}</b>
          <b className="text-orange">{price}</b>
        </div>
        <p className='mt-1'>{content}</p>
      </main>
      <footer className='section-20 mt-4'>
        <div className='row justify-space-between'>
          <p>Order a delivery</p>
          <img src={deliverImage} alt="" />
        </div>
      </footer>
    </div>
  )
}

export default Special