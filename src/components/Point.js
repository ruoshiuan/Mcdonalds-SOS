import React from 'react'

const Point = ({PointMenuInfo}) => {
  const PointList = PointMenuInfo.map(info => {
    return (
      <div className="itemCard" key={info.mealId}>
        <img className="itemImg" src={ info.image } alt="foodPhoto" width='200' />
        <div className="itemName">{info.meal}</div>
        <div className="itemPrice">$<span style={{fontSize: '24px'}}><strong>{info.price}</strong></span></div>
      </div>
    )
  })
  return (
    <>
      {PointList}
    </>
  )
}

export default Point
