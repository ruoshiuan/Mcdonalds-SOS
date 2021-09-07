import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import windowClose from '@iconify-icons/fa-solid/window-close'
import minusCircle from '@iconify-icons/fa-solid/minus-circle'
import plusCircle from '@iconify-icons/fa-solid/plus-circle'
import { BlackBackground, DetailBox, Description, Title, CloseIcon, CountBar, CountIcon, Button } from '../style/detailStyles'
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
        <BlackBackground onClick={() => closeDetailBox() } />
          <DetailBox>
            <CloseIcon><Icon icon={ windowClose } onClick={() => closeDetailBox() } /></CloseIcon>
            <form className="detailInfo" onClick={ (e) => e.preventDefault() }>
              <img src={ openPoint.image } alt="photo" width="200" />
              <Title>
                { openPoint.meal }
                <div className="detailPrice">$<span>{ openPoint.price } / 杯</span></div>
              </Title>
              <Description>{ openPoint.description }</Description>
              <div className="detailTitle">數量</div>
              <CountBar>
                <CountIcon><Icon icon={ minusCircle } onClick={ () => minus() } /></CountIcon>
                { count }
                <CountIcon><Icon icon={ plusCircle } onClick={ () => plus() } /></CountIcon>
              </CountBar>
              <Button onClick={ addToOrder }>加入購物車</Button>
            </form>
          </DetailBox>
      </>
      )
    : null
}

export default PointDetail
