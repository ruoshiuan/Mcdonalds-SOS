import React, { useState, useEffect, useContext } from 'react'
import { storesContext } from './HomePage'
import { useHistory } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SearchBar from './components/SearchBar'
import SearchList from './components/SearchList'
import firebase from '../../firestore_db'
import './css/homepage.css'
import { Icon } from '@iconify/react'
import mapMarkedAlt from '@iconify-icons/fa-solid/map-marked-alt'

const SearchPage = (props) => {
  const [login, setLogin] = useState(null)
  const [data, setData] = useState([])
  const [noResult, setNoResult] = useState('')
  const { storeData } = useContext(storesContext)
  const history = useHistory()
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setLogin(user)
      } else {
        return null
      }
    })
    onFormSubmit('')
  }, [])

  const onFormSubmit = (term) => {
    const emptyArray = []
    storeData.filter(store => {
      if (term === '') {
        emptyArray.push(store)
        setData(emptyArray)
      } else if ((store.address && store.address.includes(term)) || (store.storeName && store.storeName.includes(term)) || (store.keywords && store.keywords.includes(term))) {
        emptyArray.push(store)
        setData(emptyArray)
      } else {
        setData(emptyArray)
        setNoResult(`沒有符合「${term}」的相關地點`)
      }
      return false
    })
  }
  const onStoreSelect = (store) => {
    if (login) {
      const getUser = firebase.auth().currentUser
      const data = {
        email: getUser.email,
        store: store.storeName,
        address: store.address,
        tel: store.tel
      }
      localStorage.setItem('userMessage', JSON.stringify(data))
      history.push('/menu')
    } else {
      history.push('/register')
    }
  }
  return (
      <div style={{ display: `${props.display}` }}>
        <Navbar />
        <main>
          <div className="subtitle">
            <h2>請選擇取餐地點</h2>
            <button className="keyword_btn" onClick={ () => props.switchPage() }>
              <Icon icon={ mapMarkedAlt } style={{ fontSize: '35px' }} />
            </button>
          </div>
            <div className="smallAlert">◎本服務需開啟定位功能以取得完整資訊</div>
            <SearchBar onFormSubmit={ onFormSubmit } />
            <SearchList data={ data } onStoreSelect={ onStoreSelect } noResult={ noResult }/>
        </main>
        <Footer />
      </div>
  )
}

export default SearchPage
