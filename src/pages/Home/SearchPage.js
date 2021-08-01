import React, { useState, useEffect, useContext } from 'react'
import { storesContext } from './HomePage'
import { useHistory } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SearchBar from './components/SearchBar'
import SearchList from './components/SearchList'
import firebase from '../../firestore_db'
import './css/homepage.css'
const SearchPage = (props) => {
  const [loading, setLoading] = useState()
  const [login,setLogin] = useState(null)
  const [ data, setData ] = useState([])
  const { storeData } = useContext(storesContext)
  const history = useHistory()
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            setLogin(user)
        }else{
            return null
        }
    })
    onFormSubmit('')
    return() => setLoading(false)
  }, [loading])

  const onFormSubmit = (term) => {
    let emptyArray =[]
    storeData.filter(store => {
        if(term === ''){
            emptyArray.push(store)
            setData(emptyArray)
        } else if (store.address && store.address.includes(term) || store.storeName && store.storeName.includes(term) || store.keywords && store.keywords.includes(term)){
            emptyArray.push(store)
            setData(emptyArray)
        } else {
            return null
        }
    })
  }
  const onStoreSelect = (store) => {
    if(login){
        const getUser = firebase.auth().currentUser
        const data = {
        email: getUser.email,
        store: store.storeName,
        address: store.address,
        tel: store.tel
        }
        localStorage.setItem('userMessage',JSON.stringify(data))
        history.push('/menu')
    } else {
        history.push('/register')
      }
  }
  return (
      <div style={{display:`${props.display}`}}>
        <Navbar />
        <main>
          <div className="subtitle">
            <h2>請選擇取餐地點</h2>
            <button
              className="keyword_btn"
              onClick={() => props.switchPage()}
            >
            地圖搜尋
            </button>
            </div>
            <SearchBar onFormSubmit={ onFormSubmit } />
            <SearchList data={ data } onStoreSelect={ onStoreSelect } />
        </main>
        <Footer />
      </div>
  )
}

export default SearchPage
