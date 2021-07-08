import '../css/navbar.css'
import React from 'react'
import { Icon } from '@iconify/react'
import receipt from '@iconify-icons/fa-solid/receipt'
import userCircle from '@iconify-icons/fa-solid/user-circle'
import brand_icon from '../images/brand_icon.png'
const Navbar = () => {
  return (
    <nav className="fixed_navbar">
      <div className="navbar">
          <img className="brand_icon" src={brand_icon} alt="brand_icon" width="45" height="38" />
          <h1>自助點餐</h1>
          <ul className="list">
              <li className="items"><Icon className="icon receipt" icon={receipt}/></li>
              <li className="items"><Icon className="icon usercircle" icon={userCircle}/></li>
          </ul>
      </div>
    </nav>
  )
}

export default Navbar
