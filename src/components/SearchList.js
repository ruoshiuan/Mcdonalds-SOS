import React, { useState, useEffect } from 'react'
import StoreItem from './StoreItem'
import haversine from 'haversine-distance'
import '../css/search.css'
import allday from '../images/24hr.png'
import mccafe from '../images/mccafe.png'
import storeimage from '../images/Frame.png'
import { Icon } from '@iconify/react'
import wifiIcon from '@iconify-icons/fa-solid/wifi'
import chevronRight from '@iconify-icons/fa-solid/chevron-right'
import chevronDown from '@iconify-icons/fa-solid/chevron-down'
import mapMarkerAlt from '@iconify-icons/fa-solid/map-marker-alt'
import { useHistory } from 'react-router-dom'
import firebase from '../firestore_db'

const SearchList = (props,{ resultData }) => {
  const [active,setActive] = useState(0)
  const [location,setLocation] = useState({lat:null, lng:null, error:''})
  const [selected,setSelected] = useState(null)
  const [loading, setLoading] = useState(true)
  const [login,setLogin] = useState(null)
  const history = useHistory()
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            setLogin(user)
        }else{
            console.log('no user')
        }
    })
    window.navigator.geolocation.getCurrentPosition(
        position => setLocation({ lat: position.coords.latitude, lng: position.coords.longitude }),
        error => setLocation({ error: error.message })
    )
    return() => setLoading(false)
  }, [loading])
    const handleRedirection = () => {
        if(login){
            history.push('/order')
            handleStoreInfo()
        }else{
            history.push('/register')
    }
  }

  const cardList = props.resultData.map((store) => {
    const index = store.storeRealId
    const tempDistance = haversine(
        { latitude: location.lat, longitude: location.lng },
        { latitude: store.coordinates[1], longitude: store.coordinates[0]}
    )
    const distance = (tempDistance * 0.001).toFixed(2)
    return(
      <div className="card" key={ index } >
            { !store.image == "" ?
            <div style={{ backgroundImage: `url(${store.image})` }} className="photo" />
            : <div style={{ backgroundImage: `url(${storeimage})` }} className="photo" />
            }
              <div className="card_content" >
                <div className="storeName"><strong>{ store.storeName }</strong></div>
                <div>{ store.address }</div>
                <div className="distanceInfo">
                    <Icon icon={ mapMarkerAlt} />
                    { distance < 50 ?
                    <span><strong> { distance } </strong></span>
                    : <span style={{ color: '#f24' }}><strong> { distance } </strong>
                    </span> }
                    公里
                </div>
                <div className="accordion">
                    <span className="arrow-contain"
                    onClick={ () => {
                        setActive(index)
                    }
                    }>
                        {active === index ? <Icon icon={chevronDown} className="fas chevronDown" /> : <Icon icon={chevronRight} className="fas chevronRight" />}
                        <div className="more"><strong>顯示更多資訊</strong></div>
                    </span>
                    <div className={(active === index ? "show" : "") + " wrapper"}>
                        {store.wifi === true ? <Icon icon={wifiIcon} className="wifiIcon" /> : null}
                        {store.open_allday === true ? <img src={allday} alt="24hr" width="25" height="25" className="smallIcon" />:null}
                        {store.macCafe === true ? <img src={mccafe} alt="maccafe" width="50" height="20" className="smallIcon" />:null}
                        <div>{store.tel}</div>
                        <b>營業時間</b>
                        <div>星期一　{store.opentime.Mon}</div>
                        <div>星期二　{store.opentime.Tue}</div>
                        <div>星期三　{store.opentime.Wed}</div>
                        <div>星期四　{store.opentime.Thu}</div>
                        <div>星期五　{store.opentime.Fri}</div>
                        <div>星期六　{store.opentime.Sat}</div>
                        <div>星期日　{store.opentime.Sun}</div>
                    </div>
                </div>
                  { distance < 50 ?
                    <button className="order_btn btn" onClick={()=> setSelected(store) }>開始點餐</button>
                    :<button className="noorder_btn btn">距離太遠，無法點餐</button> }
              </div>
          </div>
          )
  })
  return (
      <div className="container">
        {props.resultData.length === 0 ? <div className="notfound">找不到相關結果</div> : <>{cardList}</>}
      </div>
  )
};

export default SearchList
