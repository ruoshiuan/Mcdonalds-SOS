import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import windowClose from '@iconify-icons/fa-solid/window-close'
import minusCircle from '@iconify-icons/fa-solid/minus-circle'
import plusCircle from '@iconify-icons/fa-solid/plus-circle'
import '../css/mealdetail.css'
const PointDetail = ({ openPoint, setOpenPoint, orders, setOrders }) => {
  const [count, setCount] = useState(1)
  const plus = () => {
    if (count < 5) {
      setCount(count + 1)
    }
  }
  const minus = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }
  let order = {}
  if (openPoint) {
    order = {
      id: Date.now(),
      meal: '單點 ' + openPoint.meal,
      price: openPoint.price,
      quantity: count,
      total: (count * openPoint.price)
    }
  }
  const addToOrder = () => {
    setOrders([...orders, order])
    setOpenPoint(null)
    setCount(1)
    const items = localStorage.getItem('cartItems') === null ? [] : JSON.parse(localStorage.getItem('cartItems'))
    items.push(order)
    localStorage.setItem('cartItems', JSON.stringify(items))
  }
  const closeDetailBox = () => {
    setOpenPoint(null)
    setCount(1)
  }
  return openPoint
    ? (
      <>
        <div className="blackBackground" onClick={() => closeDetailBox() }></div>
          <div className="detailBox">
            <Icon className="closeIcon" icon={ windowClose } onClick={() => closeDetailBox() } />
            <form className="detailInfo" onClick={ (e) => e.preventDefault() }>
              <img src={ openPoint.image } alt="photo" width="200" />
              <div className="detailTitle">
                { openPoint.meal }
                <div className="detailPrice">$<span>{ openPoint.price } / 杯</span></div>
              </div>
              <div className="detailDescription">{ openPoint.description }</div>
              <div className="detailTitle">數量</div>
              <div className="countBar">
                <Icon icon={ minusCircle } className="countIcon" onClick={ () => minus() } />
                { count }
                <Icon icon={ plusCircle } className="countIcon" onClick={ () => plus() } />
              </div>
              <button className="addCartBtn" onClick={ addToOrder }>加入購物車</button>
            </form>
          </div>
      </>
      )
    : null
}

export default PointDetail
