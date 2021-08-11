import React from 'react'

const LoadingEffect = () => {
  return (
    <div>
    <div className="blackBackground"></div>
    <div className="loadingBox">
      <h3>訂單處理中，請稍候...</h3>
      <div className="dotBox">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
    </div>
    </div>
  )
}

export default LoadingEffect
