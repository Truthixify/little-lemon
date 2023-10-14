import React from 'react'

const Rating = ({ rating }) => {
  const { userImage, username } = rating

  return (
    <div className="rating paragraph-16 col-12-xs col-3-md bg-white pl-1 pr-1 pt-1 pb-1">
      <p>Rating</p>
      <div className="flex-md">
        <img src={userImage} alt="User Rating" />
        <b className='paragraph-16'>{username}</b>
      </div>
      <b className='paragraph-16'>User Karma</b>
    </div>
  )
}

export default Rating