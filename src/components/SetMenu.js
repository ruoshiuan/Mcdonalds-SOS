import React,{ useEffect, useState } from 'react'
import MorningSet from './MorningSet'
import RegularSet from './RegularSet'
import CartBar from '../components/CartBar'
import Point from '../components/Point'
import '../css/foodpage.css'
import { menuMorningCollection, menuRegularCollection, menuPointCollection } from '../firestore_db'
const SetMenu = () => {
  const [morningData, setMorningData] = useState([])
  const [regularData, setRegularData] = useState([])
  const [pointData, setPointData] = useState([])
  const [loading, setLoading] = useState(true)
  const getMorningMenuFromFirebase = []
  const getRegularMenuFromFirebase = []
  const getPointMenuFromFirebase = []
  useEffect(()=>{
    menuMorningCollection
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        getMorningMenuFromFirebase.push(doc.data())
      })
      setMorningData(getMorningMenuFromFirebase)
    })
    menuRegularCollection
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        getRegularMenuFromFirebase.push(doc.data())
      })
      setRegularData(getRegularMenuFromFirebase)
    })
    menuPointCollection
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        getPointMenuFromFirebase.push(doc.data())
      })
      setPointData(getPointMenuFromFirebase)
    })
    return() => setLoading(false)
  },[loading])

  const onMealSelect = (morningData) => {
    console.log('From SetMenu Component!', morningData)
  }

  return (
    <>
    <main>
      <div className="sectionTitle">超值早餐</div>
        <div className="container">
          <MorningSet MorningMenuInfo={morningData} onMealSelect={onMealSelect} />
        </div>

      <div className="sectionTitle">超值全餐</div>
        <div className="container">
          <RegularSet RegularMenuInfo={regularData} />
        </div>
      <div className="sectionTitle">單點/飲品</div>
        <div className="container">
          <Point PointMenuInfo={pointData} />
      </div>
    </main>
    <CartBar />
    </>
  )
}

export default SetMenu
