import React,{ useState } from 'react'
import { Icon } from '@iconify/react'
import windowClose from '@iconify-icons/fa-solid/window-close';
import '../css/mealdetail.css'
const PointDetail = ({ openPoint, setOpenPoint }) => {
  return openPoint ? (
    <>
      <div className="blackBackground" onClick={() => setOpenPoint(null) }></div>
        <div className="detailBox">
          <Icon className="closeIcon" icon={ windowClose } onClick={() => setOpenPoint(null) } />
          <form className="detailInfo" onClick={(e)=>e.preventDefault()}>
            <img src={ openPoint.image } alt="photo" width="200" />
            <div className="detailTitle">
              { openPoint.meal }
              <div className="detailPrice">$<span>{ openPoint.price }</span></div>
            </div>
            <div className="detailDescription">{ openPoint.description }</div>
            <br />
            <button className="addCartBtn">加入購物車</button>
          </form>
        </div>
    </>
  ) : null
}

export default PointDetail