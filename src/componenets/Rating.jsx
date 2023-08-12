import React from 'react'

const Rating = ({ rating }) => {
  const { userImage, username } = rating

  return (
    <div className="flex-xs rating">
      <p>Rating</p>
      <div className="flex-md">
        <img src={userImage} alt="User Rating" />
        <b>{username}</b>
      </div>
      <b>User Karma</b>
    </div>
  )
}

export default Rating