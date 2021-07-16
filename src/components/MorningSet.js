import React,{ useState } from 'react'

const MorningSet = ({ menuInfo }) => {
  const morningList = menuInfo.map(info => {
    return (
      <div className="itemCard" key={info.mealId}>
        <img className="itemImg" src={info.image} alt="foodPhoto" width='150' />
        <div className="itemName">{info.meal}</div>
        <div className="itemPrice">$<span style={{fontSize: '24px'}}><strong>{info.price}</strong></span></div>
      </div>
    )
  })
  return (
    <>
      { morningList }
    </>
  )
}

export default MorningSet
