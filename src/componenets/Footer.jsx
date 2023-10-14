import React from 'react'

import logo from '../assets/images/Logo.svg'

const Footer = () => {
  return (
    <footer className='row gap-2 footer p-1 pt-3'>
      <img src={logo} alt="Little Lemon Logo" />
      <nav className='row gap-2'>
        <div className='col-12-xs col-4-md'>
          <h3 className='highlight-16 text-black'>Doormat Navigation</h3>
          <ul className='lead-18'>
            <li><a href="/home">Home</a></li>        
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>  
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        <div className='col-12-xs col-4-md'>
          <h3 className='highlight-16'>Contacts</h3>
          <ul className='lead-18'>
            <li><a href="">Address</a></li>
            <li><a href="">Address</a></li>
            <li><a href="">Address</a></li>
          </ul>
        </div>
        <div className='col-12-xs col-4-md'>
          <h3 className='highlight-16'>Social Media Links</h3>
          <ul className='lead-18'>
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