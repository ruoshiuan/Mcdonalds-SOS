import React,{ useState,useEffect } from 'react'
import CartBar from './CartBar'
import { Icon } from '@iconify/react'
import minusCircle from '@iconify-icons/fa-solid/minus-circle'
import plusCircle from '@iconify-icons/fa-solid/plus-circle'
import windowClose from '@iconify-icons/fa-solid/window-close';
import '../css/mealdetail.css'
const MealDetail = ({ info, setInfo }) => {
  const [count, setCount] = useState(1)
  const [sideFood, setSideFood] = useState('薯餅')
  const [drink, setDrink] = useState('可口可樂')
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
  const addCart = () => {
    const items = localStorage.getItem('cartItem') === null ? [] : JSON.parse(localStorage.getItem('cartItem'))
    const data = {
      meal: info.meal,
      price: info.price,
      side: sideFood,
      drink: drink,
      count: count,
      total: (count * info.price)
    }
    items.push(data)
    if(items.length < 11){
    localStorage.setItem('cartItem',JSON.stringify(items))
    }
    setInfo(null)

  }

  return (
    <>
      <div className="blackBackground" onClick={() => setInfo(null) }></div>
        <div className="detailBox">
          <Icon className="closeIcon" icon={ windowClose } onClick={() => setInfo(null) } />
          <form className="detailInfo" onClick={(e)=>e.preventDefault()}>
            <img src={ info.image } alt="photo" width="100"/>
            <div className="detailTitle">
              { info.meal+'套餐' }
              <div className="detailPrice">$<span>{ info.price }</span></div>
            </div>
            <div className="detailDescription">{ info.description }</div>
            <div className="detailTitle">請選擇配餐</div>
            <select name="sidefood"
              onChange={(e)=>{
                setSideFood(e.target.value)
              }}
            >
              <option value="薯餅">薯餅</option>
              <option value="雞塊">雞塊</option>
              <option value="沙拉">沙拉</option>
            </select>
            <div className="detailTitle">請選擇飲料</div>
            <select name="drink"
              onChange={(e)=>{
                setDrink(e.target.value)
              }}
            >
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
              {count}
              <Icon icon={ plusCircle } className="countIcon" onClick={() => plus()}/>
            </div>
            <button className="addCartBtn" onClick={() => addCart()}>加入購物車</button>
          </form>
        </div>
      {/* <CartBar /> */}
    </>
  )
}

export default MealDetail