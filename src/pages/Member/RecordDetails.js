import React from 'react'
import { BlackBackground, RecordCard, RecordCardTop, TopTitle, Span, Table, TableH, TableR, TableD, Total, Button } from './style/recordDetailsStyles'
const RecordDetails = ({ openRecord, setOpenRecord }) => {
  return openRecord
    ? (
    <>
      <BlackBackground onClick={ () => setOpenRecord(null) } />
        <RecordCard>
          <RecordCardTop>
            <TopTitle>點餐記錄明細</TopTitle>
            <div><Span>編號</Span>{ openRecord.orderNumber } {openRecord.mealType}</div>
            <div><Span>時間</Span>{ openRecord.orderTime }</div>
            <div><Span>店名</Span>{ openRecord.store }</div>
            <div><Span>地址</Span>{ openRecord.address }</div>
            <div><Span>電話</Span>{ openRecord.tel }</div>
          </RecordCardTop>
          <Table>
            <thead>
              <TableR>
                <TableH scope="col">名稱</TableH>
                <TableH scope="col">配餐</TableH>
                <TableH scope="col">單價</TableH>
                <TableH scope="col">數量</TableH>
                <TableH scope="col">總價</TableH>
              </TableR>
            </thead>
            <tbody>
              { openRecord.items.map((item, index) => (
                <TableR key={ index }>
                  <TableD data-label="名稱">{ item.meal }</TableD>
                  { !item.side ? <TableD data-label="配餐" >無</TableD> : <TableD data-label="配餐" >{ item.side },<br/>{ item.drink }</TableD> }
                  <TableD data-label="單價">{ item.price }</TableD>
                  <TableD data-label="數量">{ item.quantity }</TableD>
                  <TableD data-label="總價">{ item.total }</TableD>
                </TableR>
              )) }
            </tbody>
          </Table>
          <Total>訂單金額 $ { openRecord.total }</Total>
          <Button onClick={ () => setOpenRecord(null) }>關閉</Button>
      </RecordCard>
    </>
      )
    : null
}

export default RecordDetails
