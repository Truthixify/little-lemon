import { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import logo from '../assets/images/Logo.svg'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const navbarMenu = useRef()

  const handleMenuClick = () => {
    if(menuOpen) {
      setMenuOpen(false)
      console.log(navbarMenu.current.classlist)
     } else {
      setMenuOpen(true)
     }
  }

  return (
    <nav className='navbar'>
      <img src={logo} alt="Little Lemon Logo" />
      <ul className='navbar__links regular-18'>
        <li><a className='text-dark-gray' href="/home">Home</a></li>        
        <li><a className='text-dark-gray' href="/about">About</a></li>
        <li><a className='text-dark-gray' href="/menu">Menu</a></li>  
        <li><a className='text-dark-gray' href="/reservations">Reservations</a></li>
        <li><a className='text-dark-gray' href="/order">Order Online</a></li>
        <li><a className='text-dark-gray' href="/login">Login</a></li>
      </ul>
      <ul className={`navbar__menu regular-18 ${!menuOpen ? "hidden" : ""}`}>
        <li><a className='text-dark-gray' href="/home">Home</a></li>        
        <li><a className='text-dark-gray' href="/about">About</a></li>
        <li><a className='text-dark-gray' href="/menu">Menu</a></li>  
        <li><a className='text-dark-gray' href="/reservations">Reservations</a></li>
        <li><a className='text-dark-gray' href="/order">Order Online</a></li>
        <li><a className='text-dark-gray' href="/login">Login</a></li>
      </ul>
      {
        menuOpen ? <FontAwesomeIcon className='navbar__icon_close' icon={faXmark} fontSize={30} color='white' onClick={handleMenuClick}/> : <FontAwesomeIcon className='navbar__icon_open' icon={faBars} fontSize={30} onClick={handleMenuClick}/>
      }
    </nav>
  )
}

export default Navbar