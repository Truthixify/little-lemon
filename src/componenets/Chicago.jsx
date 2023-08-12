import React from 'react'

import imgA from '../assets/Mario and Adrian A.jpg'
import imgB from '../assets/Mario and Adrian b.jpg'

const Chicago = () => {
  return (
    <div className='home-chicago flex-lg'>
      <div className="flex-md home-chicago_info">
        <h1 className='display-64px'>Little Lemon</h1>
        <h3 className='regular-40px'>Chicago</h3>
        <p className='lead-18px'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta cupiditate quibusdam similique minima facere vel quisquam harum impedit, perferendis laborum alias quae sed nobis at omnis eveniet a earum itaque</p>
      </div>
      <div className="home-chicago_image flex-sm">
        <div className="flex-lg chicago_imageA">
          <img src={imgA} alt="" />
        </div>
        <div className="flex-lg chicago_imageB">
          <img src={imgB} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Chicago