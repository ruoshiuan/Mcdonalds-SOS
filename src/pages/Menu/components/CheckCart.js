import React, { useState, useEffect } from 'react'
import firebase from '../../../firestore_db'
import { Redirect, useHistory } from 'react-router-dom'
import '../css/checkCart.css'
import { Icon } from '@iconify/react'
import trashAlt from '@iconify-icons/fa-solid/trash-alt'

const CheckCart = ({ openCart, setOpenCart, orders, setOrders }) => {
  const [login, setLogin] = useState(null)
  const [loading, setLoading] = useState(true)
  const history = useHistory()
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLogin(user)
      } else {
        return <Redirect to='/register' />
      }
    })
    return () => setLoading(false)
  }, [loading])
  const getTotal = orders.reduce((total, order) => {
    return total + order.total
  }, 0)
  const deleteItem = (index) => {
    const newOrders = [...orders]
    newOrders.splice(index, 1)
    setOrders(newOrders)
    localStorage.setItem('cartItems', JSON.stringify(newOrders))
  }
  const handleRedirection = () => {
    if (login) {
      history.push('/order')
    } else {
      history.push('/register')
    }
  }
  return openCart
    ? (
      <>
      <div className="blackBackground" onClick={() => setOpenCart(null)}></div>
        <div className="cartBox">
          <div className="cartInner">
            <div className="checkMealTitle">確認購物車</div>
              <div className="cart">
              {orders.length === 0 ? <div className="emptyAlert">目前尚未加入任何餐點</div> : null }
              {orders.map((order, index) => (
                <div className="mealInfo" key={ order.id }>
                  <div className="mealMainTitle"><span>{ order.meal }</span><span className="mealQuantity">x{ order.quantity }</span></div>
                  {order.side || order.drink === null ? <div className="mealSide">{ order.side }, { order.drink }</div> : null}
                  <div className="oneMealTotal">$ { order.total }</div>
                  <Icon icon={ trashAlt } className="removeIcon" onClick={ () => deleteItem(index) }/>
                </div>)
              )}
              </div>
            <div className="cartTotal">合計 ＄<span className="totalPrice">{ getTotal }</span></div>
            <div className="bottomBtn">
              <button className="goOrderMeal" onClick={() => setOpenCart(null)} >繼續點餐</button>
              {
                orders.length === 0
                  ? <button className="goOrderBtn stopGoOrderBtn">前往結帳</button>
                  : <button className="goOrderBtn" onClick={ handleRedirection }>前往結帳</button>
              }
            </div>
          </div>
        </div>
      </>
      )
    : null
}

export default CheckCart
