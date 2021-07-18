import React, { useState,useEffect } from 'react'
import { Icon } from '@iconify/react';
import CheckCart from './CheckCart'
import shoppingBasket from '@iconify-icons/fa-solid/shopping-basket';
const CartBar = () => {
  const [check, setCheck] = useState('')
  const [num, setNum] = useState(0)
  const getCartItemInfo = () => {
    const cartItemInfo = JSON.parse(localStorage.getItem("cartItem")) || []
    let sum = 0
    cartItemInfo.forEach(item => {
      sum += item.total
    })
    setNum(sum)
  }
  return (
    <>
    <div className="bottomOuter">
      <div className="bottomBar">
        <div className="shoppingCart">
          <Icon icon={shoppingBasket} className="cartIcon"/>
          <div className="itemCount">0</div>
          <div className="itemTotal">$<span>{num}</span></div>
        </div>
        <button className="checkCart" onClick={()=>getCartItemInfo()}>確認購物車</button>
      </div>
    </div>
    </>
  )
}

export default CartBar
