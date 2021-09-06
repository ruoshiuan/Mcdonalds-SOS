import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import firebase from '../firestore_db'
import { Icon } from '@iconify/react'
import { FixedNavbar, NavbarContent, BrandIcon, MainTitle, Items, Usercircle } from '../style/navbarStyles'
import userCircle from '@iconify-icons/fa-solid/user-circle'
import brandIcon from '../images/brand_icon.png'
const Navbar = () => {
  const [login, setLogin] = useState(null)
  const [loading, setLoading] = useState(true)
  const history = useHistory()
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setLogin(user)
      }
    })
    return () => setLoading(false)
  }, [loading])
  const handleRedirection = () => {
    if (login) {
      history.push('/member')
    } else {
      history.push('/register')
    }
  }
  return (
    <FixedNavbar>
      <NavbarContent>
          <BrandIcon src={ brandIcon } alt="brand_icon" />
          <MainTitle><Link to="/" style={{ textDecoration: 'none', color: '#6A5959' }}>自助點餐</Link></MainTitle>
          <Items>
            <Usercircle><Icon icon={ userCircle } onClick={ () => handleRedirection() } /></Usercircle>
          </Items>
      </NavbarContent>
    </FixedNavbar>
  )
}

export default Navbar
