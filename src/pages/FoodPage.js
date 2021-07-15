import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useHistory } from 'react-router-dom'

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
        <h2>在 { storeTitle + '店' } 取餐</h2>
        <button onClick={ () => handleReset() }>重選地點</button>
      </main>
    </div>
  )
}

export default FoodPage
