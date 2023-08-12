import React from 'react'

import deliverImage from '../assets/deliver.png'

const Special = ({ special }) => {
  const { dishImage, title, price, content } = special
  return (
    <div className='special'>
      <header>
        <img src={dishImage} alt="" />
      </header>
      <main>
        <div className="flex-lg section-title">
          <b>{title}</b>
          <b className="special-price">{price}</b>
        </div>
        <p>{content}</p>
      </main>
      <footer className='section-title'>
        <div className='flex-lg'>
          <p>Order a delivery</p>
          <img src={deliverImage} alt="" />
        </div>
      </footer>
    </div>
  )
}

export default Special