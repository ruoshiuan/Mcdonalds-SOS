import React, { useState, useEffect } from 'react'
import haversine from 'haversine-distance'
import '../css/search.css'
import allday from '../images/24hr.svg'
import machouse from '../images/machouse.png'
import { Icon } from '@iconify/react'
import wifiIcon from '@iconify-icons/fa-solid/wifi'
import coffeeIcon from '@iconify-icons/fa-solid/coffee'
import mapMarkerAlt from '@iconify-icons/fa-solid/map-marker-alt'

const StoreItem = ({ store, onStoreSelect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [location, setLocation] = useState({ lat: null, lng: null, error: '' })
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLocation({ lat: position.coords.latitude, lng: position.coords.longitude }),
      error => setLocation({ error: error.message })
    )
    return() => setLoading(false)
  }, [loading])
    const tempDistance = haversine(
        { latitude: location.lat, longitude: location.lng },
        { latitude: store.coordinates[1], longitude: store.coordinates[0]}
    )
    const distance = (tempDistance * 0.001).toFixed(2)
    return(
      <div className="card">
      <div style={{ backgroundImage: `url(${ store.image })` }} className="photo">
        { isOpen &&
        <div className="hideInfo">
          <b>營業時間</b>
          <div>週一　{ store.opentime.Mon }</div>
          <div>週二　{ store.opentime.Tue }</div>
          <div>週三　{ store.opentime.Wed }</div>
          <div>週四　{ store.opentime.Thu }</div>
          <div>週五　{ store.opentime.Fri }</div>
          <div>週六　{ store.opentime.Sat }</div>
          <div>週日　{ store.opentime.Sun }</div>
        </div>
        }
      </div>
      <div className="card_content" >
        <div className="topInfo">
          <div className="storeName">{ store.storeName }</div>
          <div>{ store.address }</div>
          <div>{ store.tel }</div>
        </div>
        <div className="distanceInfo">
          <Icon icon={ mapMarkerAlt} style={{padding: '0 3px'}} />
          { distance < 50 ?
          <span><strong>{ distance }</strong></span>
          :
          <span style={{ color: '#DA0406' }}><strong>{ distance }</strong></span>
          } 公里
        </div>
          <div className="iconBox">
            { store.macCafe === true ? <Icon icon={ coffeeIcon } className="coffeeIcon" title="McCafé" /> : null }
            { store.wifi === true ? <Icon icon={ wifiIcon } className="wifiIcon" title="Wifi" /> : null }
            { store.open_allday === true ? <img src={ allday } alt="24hr" className="smallIcon" title="24小時營業" /> : null }
            { !isOpen ?
            <div className="openTimeInfo" onClick={() => setIsOpen(!isOpen)}><strong>營業時間</strong></div>
            :
            <div className="closeTimeInfo" onClick={() => setIsOpen(!isOpen)}><strong>x 關閉資訊</strong></div>
            }
          </div>
      </div>
      { distance < 50 ?
      <button className="order_btn btn" onClick={() => onStoreSelect(store)}>開始點餐</button>
      :
      <button className="noorder_btn btn">距離太遠，無法點餐</button>
      }
      </div>
      )
}
export default StoreItem