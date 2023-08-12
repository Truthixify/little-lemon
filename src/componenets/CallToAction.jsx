import React from 'react'

import restaurantFood from '../assets/restauranfood.jpg'

const CallToAction = () => {
  return (
    <header className='flex-lg home-header'>
        <div className='flex-md home-header_info'>
          <h1 className='display-64px'>Little Lemon</h1>
          <h3 className='regular-40px'>Chicago</h3>
          <p className='lead-18px'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat praesentium pariatur deleniti aspernatur quas amet quasi non temporibus tenetur, est iure, nesciunt, quo officiis enim vero facere esse. Voluptas nulla est tempora neque dicta, quibusdam veritatis aspernatur quas explicabo odio doloremque vitae fugiat beatae praesentium et tempore, sapiente </p>
          <button className="btn btn--primary">Reserve A Table</button>
        </div>
        <img src={restaurantFood} alt="Restaurant Food" />
    </header>
  )
}

export default CallToAction