import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import SetMenu from './components/SetMenu'
import MorningDetail from './components/MorningDetail'
import RegularDetail from './components/RegularDetail'
import PointDetail from './components/PointDetail'
import CheckCart from './components/CheckCart'
import { Icon } from '@iconify/react'
import shoppingBasket from '@iconify-icons/fa-solid/shopping-basket'
import './css/foodpage.css'

const storeInfo = JSON.parse(localStorage.getItem("userMessage"))
const storeTitle = storeInfo.store
const localStoreInfo = JSON.parse(localStorage.getItem('cartItems') || '[]' )

const FoodPage = () => {
  const [openMorning, setOpenMorning] = useState()
  const [openRegular, setOpenRegular] = useState()
  const [openPoint, setOpenPoint] = useState()
  const [openCart, setOpenCart] = useState(false)
  const [orders, setOrders] = useState(localStoreInfo)
  const history = useHistory()
  useEffect(() => {
    localStorage.setItem("cartItems",JSON.stringify(orders))
  },[orders])
  const handleReset = () => {
    localStorage.removeItem("userMessage")
    localStorage.removeItem("cartItems")
    setOrders([])
    history.push('/')
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
          <h2>在 { storeTitle + '店' } 取餐</h2>
          <button className="reset_btn" onClick={ () => handleReset() }>
            重選地點
          </button>
        </div>
        <div className="menuBar">
          <div className="barTitle">餐點一覽</div>
        </div>
      </main>
          <section>
            <SetMenu setOpenMorning={setOpenMorning} setOpenRegular={setOpenRegular} setOpenPoint={setOpenPoint} />
            <MorningDetail openMorning={openMorning} setOpenMorning={setOpenMorning} orders={orders} setOrders={setOrders} />
            <RegularDetail openRegular={openRegular} setOpenRegular={setOpenRegular} orders={orders} setOrders={setOrders} />
            <PointDetail openPoint={openPoint} setOpenPoint={setOpenPoint} orders={orders} setOrders={setOrders} />
            <CheckCart openCart={openCart} setOpenCart={setOpenCart} orders={orders} setOrders={setOrders} setOpenMorning={setOpenMorning} />
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
