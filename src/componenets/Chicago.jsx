import React from 'react'

import imgA from '../assets/Mario and Adrian A.jpg'
import imgB from '../assets/Mario and Adrian b.jpg'

const Chicago = () => {
  return (
    <div className='home-chicago flex-lg'>
      <div className="flex-md home-chicago_info">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta cupiditate quibusdam similique minima facere vel quisquam harum impedit, perferendis laborum alias quae sed nobis at omnis eveniet a earum itaque officia doloremque. Saepe laborum non blanditiis quae fugiat libero aspernatur voluptatum, doloribus tempore laboriosam dicta, voluptatem autem, molestias tenetur omnis!</p>
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