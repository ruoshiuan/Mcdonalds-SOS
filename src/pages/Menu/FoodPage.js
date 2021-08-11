import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import MorningMenu from './components/MorningMenu'
import RegularMenu from './components/RegularMenu'
import PointMenu from './components/PointMenu'
import MorningDetail from './components/MorningDetail'
import RegularDetail from './components/RegularDetail'
import PointDetail from './components/PointDetail'
import CheckCart from './components/CheckCart'
import { Icon } from '@iconify/react'
import shoppingBasket from '@iconify-icons/fa-solid/shopping-basket'
import firebase from '../../firestore_db'
import './css/foodpage.css'

const FoodPage = () => {
  const localStoreInfo = JSON.parse(localStorage.getItem('cartItems') || '[]')
  const [toMorning, setToMorning] = useState(true)
  const [toRegular, setToRegular] = useState()
  const [toPoint, setToPoint] = useState()
  const [openMorning, setOpenMorning] = useState()
  const [openRegular, setOpenRegular] = useState()
  const [openPoint, setOpenPoint] = useState()
  const [openCart, setOpenCart] = useState(false)
  const [orders, setOrders] = useState(localStoreInfo)
  const [loading, setLoading] = useState()
  const history = useHistory()
  const storeInfo = JSON.parse(localStorage.getItem('userMessage'))
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        if (!storeInfo) {
          history.push('/')
        }
      } else {
        history.push('/register')
      }
    })
    localStorage.setItem('cartItems', JSON.stringify(orders))
    return () => setLoading(false)
  }, [loading, orders])

  const handleReset = () => {
    localStorage.removeItem('userMessage')
    history.push('/')
  }
  const handleToMorningMenu = () => {
    setToMorning(true)
    setToRegular(null)
    setToPoint(null)
  }
  const handleToRegularMenu = () => {
    setToRegular(true)
    setToPoint(null)
    setToMorning(null)
  }
  const handleToPointMenu = () => {
    setToPoint(true)
    setToRegular(null)
    setToMorning(null)
  }
  const getTotal = orders.reduce((total, order) => {
    return total + order.total
  }, 0)
  const getCount = orders.reduce((total, order) => {
    return total + order.quantity
  }, 0)

  return (
    <>
      <Navbar />
      <main>
        <div className="subtitle">
          {storeInfo ? <h2>在 { storeInfo.store + '店' } 取餐</h2> : null}
          <button className="reset_btn" onClick={ () => handleReset() }>
            重選地點
          </button>
        </div>
        <div className="menuBar">
          <div className={ toMorning ? 'barTitle selected' : 'barTitle' } onClick={ handleToMorningMenu }>早餐</div>
          <div className={ toRegular ? 'barTitle selected' : 'barTitle' } onClick={ handleToRegularMenu }>全餐</div>
          <div className={ toPoint ? 'barTitle selected' : 'barTitle' } onClick={ handleToPointMenu }>飲品</div>
        </div>
      </main>
        <section>
          <MorningMenu setOpenMorning={ setOpenMorning } toMorning={ toMorning } />
          <RegularMenu setOpenRegular={ setOpenRegular } toRegular={ toRegular } />
          <PointMenu setOpenPoint={ setOpenPoint } toPoint={ toPoint } />
          <MorningDetail openMorning={ openMorning } setOpenMorning={ setOpenMorning } orders={ orders } setOrders={ setOrders } />
          <RegularDetail openRegular={ openRegular } setOpenRegular={ setOpenRegular } orders={ orders } setOrders={ setOrders } />
          <PointDetail openPoint={ openPoint } setOpenPoint={ setOpenPoint } orders={ orders } setOrders={ setOrders } />
          <CheckCart openCart={ openCart } setOpenCart={ setOpenCart } orders={ orders } setOrders={ setOrders } />
        </section>
        <div className="bottomOuter">
        <div className="bottomBar">
          <div className="shoppingCart">
            <Icon icon={ shoppingBasket } className="cartIcon"/>
            <div className="itemCount">{ getCount }</div>
            <div className="itemTotal">$<span>{ getTotal }</span></div>
          </div>
          <button className="checkCart" onClick={() => setOpenCart(true)}>確認購物車</button>
        </div>
      </div>
    </>
  )
}

export default FoodPage
