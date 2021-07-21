import React,{ useState } from 'react'
import '../css/checkCart.css'
import { Icon } from '@iconify/react'
import trashAlt from '@iconify-icons/fa-solid/trash-alt'

const CheckCart = ({ openCart ,setOpenCart, orders, setOrders }) => {
  const getTotal = orders.reduce((total, order)=> {
    return total + order.total
  },0)

  return openCart ? (
    <>
    <div className="blackBackground" onClick={() => setOpenCart(null)}></div>
      <div className="cartBox">
        <div className="cartInner">
          <div className="checkMealTitle">確認購物車</div>
          {orders.length === 0 ? <div>目前尚未加入任何餐點</div>:<div>已選取的餐點如下</div>}
            <div className="cart">
            {orders.map(order => (
              <div className="mealInfo" key={ order.id }>
                <div className="mealMainTitle"><span>{ order.meal }</span><span className="mealQuantity">x{ order.quantity }</span></div>
                {order.side || order.drink === null ? <div className="mealSide">{ order.side }, { order.drink }</div> : null}
                <div className="oneMealTotal">$ { order.total }</div>
                <Icon icon={ trashAlt } className="removeIcon" />
              </div>)
            )}
            </div>
          <div className="cartTotal">合計 ＄<span className="totalPrice">{ getTotal }</span></div>
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
