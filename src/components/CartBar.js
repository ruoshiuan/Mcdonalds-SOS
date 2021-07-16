import React from 'react'
import { Icon } from '@iconify/react';
import shoppingBasket from '@iconify-icons/fa-solid/shopping-basket';


const CartBar = () => {
  return (
    <div className="bottomOuter">
      <div className="bottomBar">
        <div className="shoppingCart">
          <Icon icon={shoppingBasket} className="cartIcon"/>
          <div className="itemCount">0</div>
          <div className="itemTotal">$<span>0</span></div>
        </div>
        <button className="checkCart">確認購物車</button>
      </div>
    </div>
  )
}

export default CartBar
