import React from 'react'

import restaurantFood from '../assets/images/restauranfood.jpg'

const CallToAction = () => {
  return (
    <header className='header row bg-green'>
        <div className='col-12-xs col-6-md'>
          <h1 className='display-64 text-yellow'>Little Lemon</h1>
          <h3 className='regular-40 text-white mt-1'>Chicago</h3>
          <p className='lead-18 mt-3 text-light-gray'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat praesentium pariatur deleniti aspernatur quas amet quasi non temporibus tenetur, est iure, nesciunt, quo officiis enim vero facere esse. Voluptas nulla est tempora neque dicta, quibusdam veritatis aspernatur quas explicabo odio doloremque vitae fugiat beatae praesentium et tempore, sapiente </p>
          <button className="btn-yellow mt-3 mb-3 text-drak-gray">Reserve A Table</button>
        </div>
        <img className='col-12-xs col-6-md' src={restaurantFood} alt="Restaurant Food" />
    </header>
  )
}

export default CallToAction