import React, { useState, useEffect } from 'react'
import firebase, { ordersCollection } from '../../firestore_db'
import RecordDetails from './RecordDetails'
const RecordList = () => {
  const [orderData, setOrderData] = useState([])
  const [openRecord, setOpenRecord] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const orderDataArray = []
        ordersCollection
          .where('email', '==', user.email)
          .orderBy('orderTime', 'desc')
          .get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              orderDataArray.push(doc.data())
            })
            setOrderData(orderDataArray)
          })
          .catch(error => console.log(error))
      }
    })
    return () => setLoading(false)
  }, [loading])
  const recordsList = orderData.map((record) => {
    return (
      <tr key={ record.orderTime }>
        <td data-label="訂單編號">
          <span className="orderNumberLine" onClick={() => setOpenRecord(record)}>
            { record.orderNumber }
          </span>
        </td>
        <td data-label="成立時間">{ record.orderTime }</td>
        <td data-label="取餐地點">{ record.store + '店' }<br/>{ record.mealType }</td>
        <td data-label="付款方式">{ record.payType }</td>
        <td data-label="付款狀態">${record.total} 已付款</td>
      </tr>
    )
  })
  return (
    <>
      <table className="records">
        <thead>
          <tr>
            <th scope="col">訂單編號</th>
            <th scope="col">成立時間</th>
            <th scope="col">取餐地點</th>
            <th scope="col">付款方式</th>
            <th scope="col">訂單狀態</th>
          </tr>
        </thead>
        <tbody>
        {
        recordsList.length === 0
          ? <tr><td colSpan="5">目前沒有點餐記錄</td></tr>
          : recordsList
        }
        </tbody>
        </table>
      <RecordDetails openRecord={ openRecord } setOpenRecord={ setOpenRecord } />
    </>
  )
}

export default RecordList
