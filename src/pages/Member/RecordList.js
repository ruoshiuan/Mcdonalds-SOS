import React, { useState, useEffect } from 'react'
import firebase, { ordersCollection } from '../../firestore_db'
import RecordDetails from './RecordDetails'
import { Span, Table, TableH, TableR, TableD } from './style/recordListStyles'
const RecordList = () => {
  const [orderData, setOrderData] = useState([])
  const [openRecord, setOpenRecord] = useState()
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
    return () => setOrderData([])
  }, [])
  const recordsList = orderData.map((record) => {
    return (
      <TableR key={ record.orderTime }>
        <TableD data-label="訂單編號">
          <Span onClick={() => setOpenRecord(record)}>
            { record.orderNumber }
          </Span>
        </TableD>
        <TableD data-label="成立時間">{ record.orderTime }</TableD>
        <TableD data-label="取餐地點">{ record.store + '店' }<br/>{ record.mealType }</TableD>
        <TableD data-label="付款方式">{ record.payType }</TableD>
        <TableD data-label="付款狀態">${record.total} 已付款</TableD>
      </TableR>
    )
  })
  return (
    <>
      <Table>
        <thead>
          <TableR>
            <TableH scope="col">訂單編號</TableH>
            <TableH scope="col">成立時間</TableH>
            <TableH scope="col">取餐地點</TableH>
            <TableH scope="col">付款方式</TableH>
            <TableH scope="col">訂單狀態</TableH>
          </TableR>
        </thead>
        <tbody>
        {
        recordsList.length === 0
          ? <TableR><TableD colSpan="5">目前沒有點餐記錄</TableD></TableR>
          : recordsList
        }
        </tbody>
        </Table>
      <RecordDetails openRecord={ openRecord } setOpenRecord={ setOpenRecord } />
    </>
  )
}

export default RecordList
