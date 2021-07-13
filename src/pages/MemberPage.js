import React from 'react'
import Navbar from '../components/Navbar'
import { useHistory } from 'react-router-dom'
import firebase from '../firestore_db'
const MemberPage = () => {
  const history = useHistory()
  const handleLogout = () => {
    firebase.auth().signOut().then(() => {
      console.log('user logout')
    })
    history.push('/login')
  }
  return (
    <div>
      <Navbar />
      <main>
        Here is MemberPage
        <button onClick={() => handleLogout()}>登出</button>
      </main>
    </div>
  )
}

export default MemberPage
