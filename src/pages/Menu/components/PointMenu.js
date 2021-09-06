import React, { useState, useEffect } from 'react'
import { menuPointCollection } from '../../../firestore_db'
const PointMenu = ({ isPointMenuSelected, setOpenPoint }) => {
  const [pointData, setPointData] = useState([])
  const getPointMenuFromFirebase = []
  useEffect(() => {
    menuPointCollection
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          getPointMenuFromFirebase.push(doc.data())
        })
        setPointData(getPointMenuFromFirebase)
      })
      .catch(err => console.log(err))
  }, [])

  const pointList = pointData.map(info => {
    return (
      <div className="itemCard" key={ info.mealId } onClick={() => { setOpenPoint(info) }}>
        <img className="itemImg" src={ info.image } alt="foodPhoto" width='200' />
        <div className="itemName">{ info.meal }</div>
        <div className="itemPrice">$<span className="itemPrice-span"><strong>{ info.price }</strong></span></div>
      </div>
    )
  })
  return isPointMenuSelected
    ? (
      <>
      <main>
        <div className="sectionTitle">單點/飲品</div>
          <div className="container">
            { pointList }
        </div>
      </main>
      </>
      )
    : null
}
export default PointMenu
