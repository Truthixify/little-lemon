import React from 'react'

import logo from '../assets/Logo.svg'

const Navbar = () => {
  return (
    <nav className='flex-lg navbar'>
      <img src={logo} alt="Little Lemon Logo" />
      <ul className='flex-md regular-40px'>
        <li><a href="/home">Home</a></li>        
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>  
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  )
}

export default Navbar