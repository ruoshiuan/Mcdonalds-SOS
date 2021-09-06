import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import LoadingEffect from './LoadingEffect'
import firebase, { ordersCollection } from '../../firestore_db'
import './css/orderpage.css'
const OrderPage = () => {
  const [mealWay, setMealWay] = useState(null)
  const [payWay, setPayWay] = useState(null)
  const [direct, setDirect] = useState()
  const history = useHistory()
  const storeInfo = JSON.parse(localStorage.getItem('userMessage'))
  const getCartInfo = JSON.parse(localStorage.getItem('cartItems')) || []
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        return true
      } else {
        history.push('/register')
      }
    })
    if (!storeInfo) {
      history.push('/')
    } else if (getTotal === 0) {
      history.push('menu')
    }
  }, [])
  const submitOrder = (e) => {
    e.preventDefault()
    if (mealWay === null) {
      alert('請選擇用餐方式')
    } else if (payWay === null) {
      alert('請選擇付款方式')
    } else {
      const currentTime = new Date().toLocaleString()
      const currentDate = new Date().toISOString().slice(4, 10).replace(/-/g, '')
      const randomParams = Math.floor(Math.random() * 1000)
      ordersCollection.doc().set({
        orderTime: currentTime,
        orderNumber: currentDate + randomParams,
        email: storeInfo.email,
        store: storeInfo.store,
        address: storeInfo.address,
        tel: storeInfo.tel,
        items: getCartInfo,
        mealType: mealWay,
        payType: payWay,
        total: getTotal
      })
      const data = {
        orderNumber: currentDate + randomParams,
        mealType: mealWay,
        store: storeInfo.store,
        address: storeInfo.address
      }
      sessionStorage.setItem('orderRecord', JSON.stringify(data))
      localStorage.setItem('cartItems', JSON.stringify([]))
      setDirect(true)
      setTimeout(() => history.push('/complete'), 3000)
    }
  }
  const getTotal = getCartInfo.reduce((total, order) => {
    return total + order.total
  }, 0)
  const orderInfo = getCartInfo.map(info => {
    return (
    <div className="orderInfo" key={ info.id }>
      <div className="orderMainTitle">
        <span>{ info.meal }</span>
        <span className="orderQuantity">x{ info.quantity }</span>
      </div>
      {info.side || info.drink === null ? <div className="mealSide">{ info.side }, { info.drink }</div> : null }
      <div className="orderMealTotal">$ { info.total }</div>
    </div>
    )
  })
  return (
    <>
      <Navbar />
      <main>
        <div className="orderTitle">
          {storeInfo ? <h2>在 { storeInfo.store } 取餐</h2> : null}
          {storeInfo ? <div>{ storeInfo.address }</div> : null}
        </div>
          <form className="orderForm">
            <h3>選擇用餐方式</h3>
            <div className="oneOption">
              <input type="radio" className="radioStyle" id="takeout" name="diningTypes" value="外帶" onChange={(e) => setMealWay(e.target.value)}/>
              <label htmlFor="takeout" className="labelStyle">外帶<span style={{ color: '#C50406', fontSize: '14px' }}> 得來速不得使用自助點餐</span></label>
            </div>
            <div className="oneOption">
              <input type="radio" className="radioStyle" id="takein" name="diningTypes" value="內用" onChange={(e) => setMealWay(e.target.value)}/>
              <label htmlFor="takein" className="labelStyle">內用</label>
            </div>
            <h3>選擇付款方式</h3>
            <div className="oneOption">
              <input type="radio" className="radioStyle" id="line" name="payWays" value="LinePay" onChange={(e) => setPayWay(e.target.value)} />
              <label htmlFor="line" className="labelStyle">Line Pay</label>
            </div>
            <div className="oneOption">
              <input type="radio" className="radioStyle" id="apple" name="payWays" value="ApplePay" onChange={(e) => setPayWay(e.target.value)} />
              <label htmlFor="apple" className="labelStyle">Apple Pay</label>
            </div>
            <div className="oneOption">
              <input type="radio" className="radioStyle" id="jko" name="payWays" value="街口支付" onChange={(e) => setPayWay(e.target.value)} />
              <label htmlFor="jko" className="labelStyle">街口支付</label>
            </div>
            <div className="oneOption">
              <input type="radio" className="radioStyle" id="credit" name="payWays" value="信用卡" onChange={(e) => setPayWay(e.target.value)} />
              <label htmlFor="credit" className="labelStyle">信用卡</label>
            </div>
            <h3>餐點最終確認</h3>
            <div className="orderCart">
              { orderInfo }
            </div>
            <div className="orderTotal">合計 $<span>{ getTotal }</span></div>
          </form>
          <div className="orderBottomBtn">
            <button className="backToCartBtn" onClick={() => history.push('menu') }>回上一頁</button>
            <button className="orderBtn" onClick={ submitOrder }>確定結帳</button>
          </div>
          {direct ? <LoadingEffect /> : null}
      </main>
      <Footer />
    </>
  )
}

export default OrderPage
