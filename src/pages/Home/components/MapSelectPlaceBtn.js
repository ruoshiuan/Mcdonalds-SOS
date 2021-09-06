import React, { useState, useEffect } from 'react'
import { OrderOption, MapOrderBtn, MapNoOrderBtn } from '../style/mapSelectPlaceBtnStyles'
import { useHistory } from 'react-router-dom'
import firebase from '../../../firestore_db'
const SelectPlaceBtn = ({ info, storeInfo }) => {
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
    localStorage.setItem('userMessage', JSON.stringify(data))
  }
  const handleErrorAlert = () => {
    alert('距離太遠，或尚未開啟定位功能')
  }
  return (
    <OrderOption>
      { info <= 100
        ? <MapOrderBtn onClick={ handleRedirection }>
          開始點餐
        </MapOrderBtn>
        : <MapNoOrderBtn onClick={ handleErrorAlert }>
          無法點餐
        </MapNoOrderBtn>
      }
    </OrderOption>
  )
}

export default SelectPlaceBtn
