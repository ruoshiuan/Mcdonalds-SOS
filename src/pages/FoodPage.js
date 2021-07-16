import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SetMenu from '../components/SetMenu'
import CartBar from '../components/CartBar'
import '../css/foodpage.css'
const FoodPage = () => {
  const history = useHistory()
  const storeInfo = JSON.parse(localStorage.getItem("userMessage"))
  const storeTitle = storeInfo.store
  const handleReset =() => {
    localStorage.removeItem("userMessage")
    history.push('/')
  }
  return (
    <>
      <Navbar />
      <main>
        <div className="subtitle">
          <h2>在 { storeTitle + '店' } 取餐</h2>
          <button className="reset_btn" onClick={ () => handleReset() }>
            重選地點
          </button>
        </div>
        <div className="menuBar">
            <div className="barTitle">套餐</div>
          </div>
          <section>
            <SetMenu />
          </section>
      </main>
      <CartBar />
    </>
  )
}

export default FoodPage
