import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import RegisterForm from './RegisterForm'
import firebase from '../../firestore_db'
import { useHistory } from 'react-router-dom'
const LoginPage = () => {
  const [loading, setLoading] = useState(true)
  const history = useHistory()
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        history.push('/member')
      } else {
        history.push('/register')
      }
    })
    return () => setLoading(false)
  }, [loading])
  return (
    <>
      <Navbar />
      <main>
        <RegisterForm />
      </main>
      <Footer />
    </>
  )
}

export default LoginPage
