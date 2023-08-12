import React from 'react'

const Rating = ({ rating }) => {
  const { userImage, username } = rating

  return (
    <div className="flex-xs rating paragraph">
      <p>Rating</p>
      <div className="flex-md">
        <img src={userImage} alt="User Rating" />
        <b className='paragraph'>{username}</b>
      </div>
      <b className='paragraph'>User Karma</b>
    </div>
  )
}

export default Rating