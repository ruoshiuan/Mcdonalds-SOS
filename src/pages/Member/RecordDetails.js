import React from 'react'
import './recorddetails.css'
const RecordDetails = ({ openRecord, setOpenRecord }) => {
  return openRecord
    ? (
    <>
      <div className='blackBackground' onClick={ () => setOpenRecord(null) }></div>
        <div className="recordCard">
          <div className="recordCardTop">
            <div className="recordCardTop-title">點餐記錄明細</div>
            <div><span className="recordCardTop-span">編號</span>{ openRecord.orderNumber } {openRecord.mealType}</div>
            <div><span className="recordCardTop-span">時間</span>{ openRecord.orderTime }</div>
            <div><span className="recordCardTop-span">店名</span>{ openRecord.store }</div>
            <div><span className="recordCardTop-span">地址</span>{ openRecord.address }</div>
            <div><span className="recordCardTop-span">電話</span>{ openRecord.tel }</div>
          </div>
          <table className="innerRecords">
            <thead>
              <tr>
                <th scope="col">名稱</th>
                <th scope="col">配餐</th>
                <th scope="col">單價</th>
                <th scope="col">數量</th>
                <th scope="col">總價</th>
              </tr>
            </thead>
            <tbody>
              { openRecord.items.map((item, index) => (
                <tr key={ index }>
                  <td data-label="名稱">{ item.meal }</td>
                  { !item.side ? <td data-label="配餐" >無</td> : <td data-label="配餐" >{ item.side },<br/>{ item.drink }</td> }
                  <td data-label="單價">{ item.price }</td>
                  <td data-label="數量">{ item.quantity }</td>
                  <td data-label="總價">{ item.total }</td>
                </tr>
              )) }
            </tbody>
          </table>
          <div className="recordDetailTotal">訂單金額 $ { openRecord.total }</div>
          <button className="closeRecordDetail" onClick={ () => setOpenRecord(null) }>關閉</button>
      </div>
    </>
      )
    : null
}

export default RecordDetails
