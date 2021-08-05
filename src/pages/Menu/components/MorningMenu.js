import React,{ useState, useEffect } from 'react'
import { menuMorningCollection } from '../../../firestore_db'
const MorningMenu = ({ toMorning, setOpenMorning }) => {
  const [morningData, setMorningData] = useState([])
  const [loading, setLoading] = useState(true)
  const getMorningMenuFromFirebase = []
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
    return () => setLoading(false)
  },[loading])

  const morningList = morningData.map(info => {
    return (
      <div className="itemCard" key={ info.mealId } onClick={() => { setOpenMorning(info) }}>
        <img className="itemImg" src={ info.image } alt="foodPhoto" width='150' />
        <div className="itemName">{ info.meal }</div>
        <div className="itemPrice">$<span style={{fontSize: '24px'}}><strong>{ info.price }</strong></span></div>
      </div>
    )
  })
  return toMorning ? (
    <>
    <main>
      <div className="sectionTitle">超值早餐</div>
        <div className="container">
          { morningList }
        </div>
    </main>
    </>
  ): null
}

export default MorningMenu
