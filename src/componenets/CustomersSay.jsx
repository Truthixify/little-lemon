import React from 'react'

import userImage from '../assets/lemon dessert.jpg'
import Rating from './Rating'

const CustomersSay = () => {

  const ratings = [
    {
      userImage: userImage,
      username: "user"
    },
    {
      userImage: userImage,
      username: "user"
    },
    {
      userImage: userImage,
      username: "user"
    },
    {
      userImage: userImage,
      username: "user"
    }
  ]

  return (
    <div className='home-customer-say'>
      <h1 className='center display-64px'>Testimonials</h1>
      <div className="home-customer-say_ratings flex-lg">
        {
          ratings.map(rating => (
            <Rating rating={rating} key={crypto.randomUUID()} />
          ))
        }
      </div>
    </div>
  )
}

export default CustomersSay