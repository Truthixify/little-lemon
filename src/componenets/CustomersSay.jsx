import React from 'react'

import userImage from '../assets/images/lemon dessert.jpg'
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
    <div className='bg-light-gray mt-5 mb-5 pt-3 pb-3 pl-3 pr-3'>
      <h1 className='center display-64'>Testimonials</h1>
      <div className="row gap-1">
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