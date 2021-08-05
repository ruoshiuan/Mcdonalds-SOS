import React,{ useState, useEffect } from 'react'
import { menuPointCollection } from '../../../firestore_db'
const PointMenu = ({ toPoint, setOpenPoint }) => {
  const [pointData, setPointData] = useState([])
  const [loading, setLoading] = useState(true)
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
    return () => setLoading(false)
  },[loading])

  const pointList = pointData.map(info => {
    return (
      <div className="itemCard" key={ info.mealId } onClick={() => { setOpenPoint(info) }}>
        <img className="itemImg" src={ info.image } alt="foodPhoto" width='200' />
        <div className="itemName">{ info.meal }</div>
        <div className="itemPrice">$<span style={{ fontSize: '24px' }}><strong>{ info.price }</strong></span></div>
      </div>
    )
  })
  return toPoint ? (
    <>
    <main>
      <div className="sectionTitle">單點/飲品</div>
        <div className="container">
          { pointList }
      </div>
    </main>
    </>
  ) : null
}
export default PointMenu
