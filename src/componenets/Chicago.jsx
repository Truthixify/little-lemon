import React from 'react'

import imgA from '../assets/images/Mario and Adrian A.jpg'
import imgB from '../assets/images/Mario and Adrian b.jpg'

const Chicago = () => {
  return (
    <div className='chicago row bg-green p-3'>
      <div className="col-12-xs col-6-md mb-3">
        <h1 className='display-64  text-yellow'>Little Lemon</h1>
        <h3 className='regular-40 text-white mt-1'>Chicago</h3>
        <p className='lead-18 text-light-gray mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta cupiditate quibusdam similique minima facere vel quisquam harum impedit, perferendis laborum alias quae sed nobis at omnis eveniet a earum itaque</p>
      </div>
      <div className="col-12-xs col-6-md  chicago__images">
        <div className="chicago__images_a">
          <img src={imgA} alt="" />
        </div>
        <div className="chicago__images_b">
          <img src={imgB} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Chicago