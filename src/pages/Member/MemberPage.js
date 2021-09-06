import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import RecordList from './RecordList'
import firebase from '../../firestore_db'
import { Title, Bottom, Button } from './style/memberPageStyles'
import { InlineIcon } from '@iconify/react'
import signOutAlt from '@iconify-icons/fa-solid/sign-out-alt'

const MemberPage = () => {
  const [loading, setLoading] = useState(true)
  const history = useHistory()
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        return true
      } else {
        history.push('/register')
      }
    })
    return () => setLoading(false)
  }, [loading])
  const handleLogout = () => {
    firebase.auth().signOut().then(() => {
      localStorage.removeItem('email')
      history.push('/register')
    })
  }
  return (
    <>
      <Navbar />
      <main>
        <Title>點餐記錄</Title>
        <RecordList />
        <Bottom>
          <Button onClick={ () => handleLogout() }><InlineIcon icon={signOutAlt} /> 登出</Button>
        </Bottom>
      </main>
      <Footer />
    </>
  )
}

export default MemberPage
