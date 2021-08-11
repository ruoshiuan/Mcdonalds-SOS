import React, { useEffect, useState } from 'react'
import '../css/foodpage.css'
import { menuMorningCollection, menuRegularCollection, menuPointCollection } from '../../../firestore_db'

const SetMenu = ({ setOpenMorning, setOpenRegular, setOpenPoint }) => {
  const [morningData, setMorningData] = useState([])
  const [regularData, setRegularData] = useState([])
  const [pointData, setPointData] = useState([])
  const [loading, setLoading] = useState(true)
  const getMorningMenuFromFirebase = []
  const getRegularMenuFromFirebase = []
  const getPointMenuFromFirebase = []
  useEffect(() => {
    menuMorningCollection
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          getMorningMenuFromFirebase.push(doc.data())
        })
        setMorningData(getMorningMenuFromFirebase)
      })
      .catch(err => console.log(err))
    menuRegularCollection
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          getRegularMenuFromFirebase.push(doc.data())
        })
        setRegularData(getRegularMenuFromFirebase)
      })
      .catch(err => console.log(err))
    menuPointCollection
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          getPointMenuFromFirebase.push(doc.data())
        })
        setPointData(getPointMenuFromFirebase)
      })
    return () => setLoading(false)
  }, [loading])

  const morningList = morningData.map(info => {
    return (
      <div className="itemCard"
        key={ info.mealId }
        onClick={() => {
          setOpenMorning(info)
        }}
      >
        <img className="itemImg" src={ info.image } alt="foodPhoto" width='150' />
        <div className="itemName">{ info.meal }</div>
        <div className="itemPrice">$<span style={{ fontSize: '24px' }}><strong>{ info.price }</strong></span></div>
      </div>
    )
  })
  const regularList = regularData.map(info => {
    return (
      <div className="itemCard"
        key={ info.mealId }
        onClick={() => {
          setOpenRegular(info)
        }}
      >
        <img className="itemImg" src={ info.image } alt="foodPhoto" width='150' />
        <div className="itemName">{ info.meal }</div>
        <div className="itemPrice">$<span style={{ fontSize: '24px' }}><strong>{ info.price }</strong></span></div>
      </div>
    )
  })
  const pointList = pointData.map(info => {
    return (
      <div className="itemCard" key={ info.mealId } onClick={() => { setOpenPoint(info) }}>
        <img className="itemImg" src={ info.image } alt="foodPhoto" width='200' />
        <div className="itemName">{info.meal}</div>
        <div className="itemPrice">$<span style={{ fontSize: '24px' }}><strong>{info.price}</strong></span></div>
      </div>
    )
  })

  return (
    <>
    <main>
      <div className="sectionTitle">超值早餐</div>
        <div className="container">
          { morningList }
        </div>
      <div className="sectionTitle">超值全餐</div>
        <div className="container">
          { regularList }
        </div>
      <div className="sectionTitle">單點/飲品</div>
        <div className="container">
          { pointList }
      </div>
    </main>
    </>
  )
}

export default SetMenu
