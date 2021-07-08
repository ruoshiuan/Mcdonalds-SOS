import React, { useState, useEffect } from 'react'
import '../css/search.css'
import allday from '../images/24hr.png'
import storeimage from '../images/Frame.png'
import { Icon } from '@iconify/react'
import wifiIcon from '@iconify-icons/fa-solid/wifi'
import chevronRight from '@iconify-icons/fa-solid/chevron-right'
import chevronDown from '@iconify-icons/fa-solid/chevron-down'
import { useLoadScript,DistanceMatrixService } from '@react-google-maps/api'
import key from '../key'
const SearchList = (props) => {
  const [active,setActive] = useState(0)
  const [location,setLocation] = useState({lat:null,lng:null,error:''})
  // const [distance,setDistance] = useState("")
  const [selected,setSelected] = useState(null)
  useEffect(() => {
      window.navigator.geolocation.getCurrentPosition(
          position => setLocation({lat:position.coords.latitude,lng:position.coords.lng}),
          error => setLocation({error:error.message})
      )
  }, [])
  const {isLoaded,loadError} = useLoadScript({
      googleMapsApiKey: key
  })
  if (!isLoaded) return "Loading..."
  if (loadError) return "Error!"

  const cardList = props.resultData.map((store) => {
      const index = store.storeRealId
      return(
      <div className="card" key={index}>
              {!store.image == "" ? <div style={{backgroundImage:`url(${store.image})` }} className="photo" /> : <div style={{backgroundImage:`url(${storeimage})`}} className="photo"/>}
              <div className="card_content" onClick={()=>{setSelected(store)}}>
                  <div className="storeName"><strong>{store.storeName}</strong></div>
                  <div>{store.address}</div>
                  <div className="accordion">
                      <span className="arrow-contain" onClick={() => setActive(index)}>
                          {active === index ? <Icon icon={chevronDown} className="fas chevronDown" /> : <Icon icon={chevronRight} className="fas chevronRight" />}
                          <div className="more"><strong>顯示更多資訊</strong></div>
                      </span>
                      <div className={(active === index ? "show" : "") + " wrapper"}>
                          {store.wifi === true ? <Icon icon={wifiIcon} className="wifiIcon" /> : null}
                          {store.open_allday === true ? <img src={allday} alt="24hr" width="25" height="25" />:null}
                          {store.macCafe === true ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/McCaf%C3%A9-Logo.svg/797px-McCaf%C3%A9-Logo.svg.png" alt="maccafe" width="50" height="20" />:null}
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
                  <button className="order_btn btn" >開始點餐</button>
              </div>
          </div>
          )
  })
  return (
      <div className="container">
          {props.resultData.length === 0 ? <div className="notfound">找不到相關結果</div>:<>{cardList}</>}
          {selected ? (
          <DistanceMatrixService
              options={{
                  destinations:[{lat: selected.coordinates[1],lng: selected.coordinates[0]}],
                  origins: [{lat: location.lat,lng: location.lng}],
                  travelMode: "DRIVING"
              }}
              callback = {(response)=>console.log(response.rows[0].elements[0].distance.text)}
          />):null}
      </div>
  )
}

export default SearchList
