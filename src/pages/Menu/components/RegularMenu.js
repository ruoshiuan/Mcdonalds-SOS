import React, { useState, useEffect } from 'react'
import { menuRegularCollection } from '../../../firestore_db'
const RegularMenu = ({ toRegular, setOpenRegular }) => {
  const [regularData, setRegularData] = useState([])
  const [loading, setLoading] = useState(true)
  const getRegularMenuFromFirebase = []
  useEffect(() => {
    menuRegularCollection
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          getRegularMenuFromFirebase.push(doc.data())
        })
        setRegularData(getRegularMenuFromFirebase)
      })
      .catch(err => console.log(err))
    return () => setLoading(false)
  }, [loading])

  const regularList = regularData.map(info => {
    return (
      <div className="itemCard" key={ info.mealId } onClick={() => { setOpenRegular(info) }}>
        <img className="itemImg" src={ info.image } alt="foodPhoto" width='150' />
        <div className="itemName">{ info.meal }</div>
        <div className="itemPrice">$<span className="itemPrice-span"><strong>{ info.price }</strong></span></div>
      </div>
    )
  })
  return toRegular
    ? (
      <>
      <main>
        <div className="sectionTitle">超值全餐</div>
          <div className="container">
            { regularList }
          </div>
      </main>
      </>
      )
    : null
}

export default RegularMenu
