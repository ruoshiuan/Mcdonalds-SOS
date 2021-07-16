import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useHistory } from 'react-router-dom'
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
    <div>
      <Navbar />
      <main>
        <div className="subtitle">
          <h2>在 { storeTitle + '店' } 取餐</h2>
          <button className="reset_btn" onClick={ () => handleReset() }>
            重選地點
          </button>
        </div>

      </main>
    </div>
  )
}

export default FoodPage
