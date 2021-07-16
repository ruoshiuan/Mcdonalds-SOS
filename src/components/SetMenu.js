import React,{ useEffect, useState } from 'react'
import MorningSet from './MorningSet'
import RegularSet from './RegularSet'
import '../css/foodpage.css'
import { menuMorningCollection, menuRegularCollection } from '../firestore_db'
const SetMenu = () => {
  const [morningData, setMorningData] = useState([])
  const [regularData, setRegularData] = useState([])
  const [loading, setLoading] = useState(true)
  const getMorningMenuFromFirebase = []
  const getRegularMenuFromFirebase = []
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
    return() => setLoading(false)
  },[loading])

  return (
    <>
      <div className="sectionTitle">超值早餐（早上 5:00 至 10:30 ）</div>
        <div className="container">
          <MorningSet menuInfo={morningData} />
        </div>
        <div className="sectionTitle">超值全餐（早上 10:30 至 凌晨 05:00 ）</div>
        <div className="container">
          <RegularSet menuInfo ={regularData}/>
        </div>
    </>
  )
}

export default SetMenu
