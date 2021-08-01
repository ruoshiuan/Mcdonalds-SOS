import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import RecordList from './RecordList'
import { useHistory } from 'react-router-dom'
import firebase from '../../firestore_db'
import './memberpage.css'
import { InlineIcon } from '@iconify/react'
import signOutAlt from '@iconify-icons/fa-solid/sign-out-alt'


const MemberPage = () => {
  const history = useHistory()
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
        <h2>點餐記錄</h2>
        <div className="content">
          <RecordList />
          <button className="signoutBtn" onClick={() => handleLogout()}><InlineIcon icon={signOutAlt} /> 登出</button>
        </div>
      </main>
      {/* <RecordDetails /> */}
      <Footer />
    </>
  )
}

export default MemberPage
