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
      <h1 className='center'>Testimonials</h1>
      <div className="home-customer-say_ratings flex-lg">
        {
          ratings.map(rating => (
            <Rating rating={rating} />
          ))
        }
      </div>
    </div>
  )
}

export default CustomersSay