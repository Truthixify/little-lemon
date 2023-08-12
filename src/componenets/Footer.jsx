import React from 'react'

import logo from '../assets/Logo.svg'

const Footer = () => {
  return (
    <footer className='flex-lg footer'>
      <img src={logo} alt="Little Lemon Logo" />
      <nav className='flex-lg'>
        <div>
          <h3>Doormat Navigation</h3>
          <ul>
            <li><a href="/home">Home</a></li>        
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>  
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        <div>
          <h3>Contacts</h3>
          <ul>
            <li><a href="">Address</a></li>
            <li><a href="">Address</a></li>
            <li><a href="">Address</a></li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li><a href="">Address</a></li>
            <li><a href="">Address</a></li>
            <li><a href="">Address</a></li>
          </ul>
        </div>
      </nav>
    </footer>
  )
}

export default Footer