import React,{ useState, useEffect } from 'react'
import '../css/map.css'
import { useHistory } from 'react-router-dom'
import firebase from '../../../firestore_db'
const SelectPlaceBtn = ({ info,storeInfo }) => {
  const [login, setLogin] = useState(null)
  const [loading, setLoading] = useState(true)
  const history = useHistory()
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        setLogin(user)
      } else {
        history.push('/register')
      }
    })
    return () => setLoading(false)
  }, [loading])
  const handleRedirection = () => {
    if(login){
      history.push('/menu')
      handleStoreInfo()

    } else {
      history.push('/register')
    }
  }
  const handleStoreInfo = () => {
    const getUser = firebase.auth().currentUser
    const data = {
      email: getUser.email,
      store: storeInfo.storeName,
      address: storeInfo.address,
      tel: storeInfo.tel
    }
    localStorage.setItem('userMessage',JSON.stringify(data))
  }
  return (
    <div className="orderOption">
      { info <= 50 ?
        <button
          className="mapBtn mapOrderBtn"
          onClick={ () => handleRedirection() }
        >
          開始點餐
        </button>
        :<button className="mapBtn mapNoOrderBtn">無法點餐</button> }
    </div>
  )
}

export default SelectPlaceBtn
