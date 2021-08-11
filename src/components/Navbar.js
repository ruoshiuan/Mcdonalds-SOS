import '../css/navbar.css'
import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import firebase from '../firestore_db'
import { Icon } from '@iconify/react'
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
      } else {
        history.push('/register')
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
    <nav className="fixed_navbar">
      <div className="navbar">
          <img className="brand_icon" src={ brandIcon } alt="brand_icon" />
          <h1 className="main_title"><Link to="/" style={{ textDecoration: 'none', color: '#6A5959' }}>自助點餐</Link></h1>
          <div className="items">
              <Icon className="icon usercircle" icon={ userCircle } onClick={ () => handleRedirection() } />
          </div>
      </div>
    </nav>
  )
}

export default Navbar
