import React,{ useState } from 'react'
import { Icon } from '@iconify/react'
import windowClose from '@iconify-icons/fa-solid/window-close';
import '../css/mealdetail.css'
const MorningDetail = ({ openRegular, setOpenRegular, orders, setOrders }) => {
  const [sideFood, setSideFood] = useState('薯條')
  const [drink, setDrink] = useState('可口可樂')
  const order = {
    // name: openMorning.meal
  }
  const addToOrder = () => {
    setOrders([...orders, order])
    setOpenRegular(null)
  }
  return openRegular ? (
    <>
      <div className="blackBackground" onClick={() => setOpenRegular(null) }></div>
        <div className="detailBox">
          <Icon className="closeIcon" icon={ windowClose } onClick={() => setOpenRegular(null) } />
          <form className="detailInfo" onClick={(e)=>e.preventDefault()}>
            <img src={ openRegular.image } alt="photo" width="100"/>
            <div className="detailTitle">
              { openRegular.meal + '套餐' }
              <div className="detailPrice">$<span>{ openRegular.price }</span></div>
            </div>
            <div className="detailDescription">{ openRegular.description }</div>
            <div className="detailTitle">請選擇配餐</div>
            <select name="sidefood"
              onChange={(e)=>{
                setSideFood(e.target.value)
              }}
            >
              <option value="薯條">薯條</option>
              <option value="麥脆雞腿">麥脆雞腿</option>
              <option value="沙拉">沙拉</option>
            </select>
            <div className="detailTitle">請選擇飲料</div>
            <select name="drink"
              onChange={(e)=>{
                setDrink(e.target.value)
              }}
            >
              <option value="可口可樂">可口可樂</option>
              <option value="雪碧">雪碧</option>
              <option value="檸檬紅茶">檸檬紅茶</option>
              <option value="奶茶">玉米濃湯</option>
              <option value="咖啡">無糖綠茶</option>
              <option value="玉米濃湯">無糖紅茶</option>
            </select>
            <br />
            <button className="addCartBtn" onClick={addToOrder}>加入購物車</button>
          </form>
        </div>
    </>
  ) : null
}

export default MorningDetail