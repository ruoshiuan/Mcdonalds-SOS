import React,{ useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import windowClose from '@iconify-icons/fa-solid/window-close'
import minusCircle from '@iconify-icons/fa-solid/minus-circle'
import plusCircle from '@iconify-icons/fa-solid/plus-circle'
import '../css/mealdetail.css'
const MorningDetail = ({ openMorning, setOpenMorning ,orders, setOrders }) => {
  const [sideFood, setSideFood] = useState('薯餅')
  const [drink, setDrink] = useState('奶茶')
  const [count, setCount] = useState(1)
  const plus = () => {
    if(count < 5){
      setCount(count + 1)
    }
  }
  const minus = () => {
    if(count > 1 ){
      setCount(count - 1)
    }
  }
  let order = {}
  if(openMorning){
    order = {
      id: Date.now(),
      meal: '套餐 ' + openMorning.meal,
      side: sideFood,
      drink: drink,
      price: openMorning.price,
      quantity: count,
      total: (count * openMorning.price)
    }
  }
  const addToOrder = () => {
    setOrders([...orders, order])
    setOpenMorning(null)
    setCount(1)
    const items = localStorage.getItem('cartItems') === null ? [] : JSON.parse(localStorage.getItem('cartItems'))
    items.push(order)
    localStorage.setItem('cartItems', JSON.stringify(items))
  }
  const closeDetailBox = () => {
    setOpenMorning(null)
    setCount(1)
  }
  return openMorning ? (
    <>
      <div className="blackBackground" onClick={() => closeDetailBox() }></div>
        <div className="detailBox">
          <Icon className="closeIcon" icon={ windowClose } onClick={() => closeDetailBox() } />
          <form className="detailInfo" onClick={(e) => e.preventDefault()}>
            <img src={ openMorning.image } alt="photo" width="100"/>
            <div className="detailTitle">
              { openMorning.meal + '套餐' }
              <div className="detailPrice">$<span>{ openMorning.price } / 份</span></div>
            </div>
            <div className="detailDescription">{ openMorning.description }</div>
            <div className="detailTitle">請選擇配餐</div>
            <select name="sidefood" onChange={ (e) => {setSideFood(e.target.value)} }>
              <option value="薯餅">薯餅</option>
              <option value="雞塊">雞塊</option>
              <option value="沙拉">沙拉</option>
            </select>
            <div className="detailTitle">請選擇飲料</div>
            <select name="drink"onChange={ (e) => {setDrink(e.target.value)} }>
              <option value="奶茶">奶茶</option>
              <option value="咖啡">咖啡</option>
              <option value="玉米濃湯">玉米濃湯</option>
              <option value="可口可樂">可口可樂</option>
              <option value="雪碧">雪碧</option>
              <option value="檸檬紅茶">檸檬紅茶</option>
            </select>
            <div className="detailTitle">數量</div>
            <div className="countBar">
              <Icon icon={ minusCircle } className="countIcon" onClick={() => minus()}/>
              { count }
              <Icon icon={ plusCircle } className="countIcon" onClick={() => plus()}/>
            </div>
            <button className="addCartBtn" onClick={ addToOrder } >加入購物車</button>
          </form>
        </div>
    </>
  ) : null
}

export default MorningDetail