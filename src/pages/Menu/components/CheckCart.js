import React from 'react'
import '../css/checkCart.css'
import { Icon } from '@iconify/react'
import minusSquare from '@iconify-icons/fa-solid/minus-square'

const CheckCart = ({ openCart ,setOpenCart, orders, setOrders }) => {
  return openCart ? (
    <>
    <div className="blackBackground" onClick={() => setOpenCart(null)}></div>
      <div className="cartBox">
        <div className="cartInner">
          <div className="checkMealTitle">確認購物車</div>
          {orders.length === 0 ? <div>目前尚未加入任何餐點</div>:<div>已選取{orders.length}項餐點</div>}
            <div className="cart">
            {orders.map(order => (
              <div className="mealInfo" key={ order.id }>
                <div className="mealName">{order.meal}</div>
                <div className="mealSide">{order.side}, {order.drink}</div>
                <div>{order.price}</div>
                <Icon icon={ minusSquare } className="removeIcon" />
              </div>)
            )}
            </div>
          <div className="cartTotal">合計 ＄<span className="totalPrice">108</span></div>
          <div className="bottomBtn">
            <button className="goOrderMeal" onClick={() => setOpenCart(null)} >繼續點餐</button>
            <button className="goOrderBtn">前往結帳</button>
          </div>
        </div>
      </div>
    </>
  ):null
}

export default CheckCart
