import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import windowClose from '@iconify-icons/fa-solid/window-close'
import minusCircle from '@iconify-icons/fa-solid/minus-circle'
import plusCircle from '@iconify-icons/fa-solid/plus-circle'
import { BlackBackground, DetailBox, Description, Title, CloseIcon, CountBar, CountIcon, Button } from '../style/detailStyles'
const MorningDetail = ({ openRegular, setOpenRegular, orders, setOrders }) => {
  const [sideFood, setSideFood] = useState('薯條')
  const [drink, setDrink] = useState('可口可樂')
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
  if (openRegular) {
    order = {
      id: Date.now(),
      meal: '套餐 ' + openRegular.meal,
      side: sideFood,
      drink: drink,
      price: openRegular.price,
      quantity: count,
      total: (count * openRegular.price)
    }
  }
  const addToOrder = () => {
    setOrders([...orders, order])
    setOpenRegular(null)
    setCount(1)
    const items = localStorage.getItem('cartItems') === null ? [] : JSON.parse(localStorage.getItem('cartItems'))
    items.push(order)
    localStorage.setItem('cartItems', JSON.stringify(items))
  }
  const closeDetailBox = () => {
    setOpenRegular(null)
    setCount(1)
  }
  return openRegular
    ? (
      <>
        <BlackBackground onClick={() => closeDetailBox() }/>
          <DetailBox>
            <CloseIcon><Icon icon={ windowClose } onClick={ () => closeDetailBox() } /></CloseIcon>
            <form onClick={ (e) => e.preventDefault() }>
              <img src={ openRegular.image } alt="photo" width="100"/>
              <Title>
                { openRegular.meal + '套餐' }
                <div>$<span>{ openRegular.price } / 份</span></div>
              </Title>
              <Description>{ openRegular.description }</Description>
              <Title>請選擇配餐</Title>
              <select name="sidefood" onChange={ (e) => { setSideFood(e.target.value) } }>
                <option value="薯條">薯條</option>
                <option value="麥脆雞腿">麥脆雞腿</option>
                <option value="沙拉">沙拉</option>
              </select>
              <Title>請選擇飲料</Title>
              <select name="drink" onChange={ (e) => { setDrink(e.target.value) } }>
                <option value="可口可樂">可口可樂</option>
                <option value="雪碧">雪碧</option>
                <option value="檸檬紅茶">檸檬紅茶</option>
                <option value="奶茶">玉米濃湯</option>
                <option value="咖啡">無糖綠茶</option>
                <option value="玉米濃湯">無糖紅茶</option>
              </select>
              <Title>數量</Title>
              <CountBar>
                <CountIcon><Icon icon={ minusCircle } onClick={ () => minus() }/></CountIcon>
                { count }
                <CountIcon><Icon icon={ plusCircle } onClick={ () => plus() }/></CountIcon>
              </CountBar>
              <Button onClick={ addToOrder }>加入購物車</Button>
            </form>
          </DetailBox>
      </>
      )
    : null
}

export default MorningDetail
