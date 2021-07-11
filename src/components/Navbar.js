import '../css/navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import receipt from '@iconify-icons/fa-solid/receipt'
import userCircle from '@iconify-icons/fa-solid/user-circle'
import brand_icon from '../images/brand_icon.png'
const Navbar = () => {
  return (
    <nav className="fixed_navbar">
      <div className="navbar">
          <img className="brand_icon" src={brand_icon} alt="brand_icon" width="45" height="38" />
          <h1 className="main_title"><Link to="/" style={{ textDecoration: 'none',color: '#6A5959' }}>自助點餐</Link></h1>
          <div className="items"><Icon className="icon receipt" icon={receipt}/></div>
          <div className="items"><Link to="/login" style={{ textDecoration: 'none',color: '#6A5959' }}><Icon className="icon usercircle" icon={userCircle}/></Link></div>
      </div>
    </nav>
  )
}

export default Navbar
