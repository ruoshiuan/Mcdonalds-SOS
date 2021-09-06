import React, { useState, useEffect } from 'react'
import haversine from 'haversine-distance'
import { Card, CardContent, Photo, HideInfoOff, HideInfoOn, HideInfoTime, TopInfo, StoreName, DistanceInfo, MapMarkerAlt, DistanceAlert, IconBox, IconifyIcon, SmallIcon, OpenTimeInfo, CloseTimeInfo, OrderBtn, NoOrderBtn } from '../style/searchStoreItemStyles'
import allday from '../images/24hr.svg'
import { Icon } from '@iconify/react'
import wifiIcon from '@iconify-icons/fa-solid/wifi'
import coffeeIcon from '@iconify-icons/fa-solid/coffee'
import mapMarkerAlt from '@iconify-icons/fa-solid/map-marker-alt'

const StoreItem = ({ store, onStoreSelect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [location, setLocation] = useState({ lat: null, lng: null, error: '' })
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLocation({ lat: position.coords.latitude, lng: position.coords.longitude }),
      error => setLocation({ error: error.message })
    )
  }, [])
  const tempDistance = haversine(
    { latitude: location.lat, longitude: location.lng },
    { latitude: store.coordinates[1], longitude: store.coordinates[0] }
  )
  const distance = (tempDistance * 0.001).toFixed(2)
  const handleErrorAlert = () => {
    alert('距離太遠，或尚未開啟定位功能')
  }
  const HideInfo = isOpen ? HideInfoOn : HideInfoOff
  return (
    <Card>
    <Photo style={{ backgroundImage: `url(${store.image})` }}>
      <HideInfo>
        <HideInfoTime>
          <b>營業時間</b>
          <div>週一<span>{ store.opentime.Mon }</span></div>
          <div>週二<span>{ store.opentime.Tue }</span></div>
          <div>週三<span>{ store.opentime.Wed }</span></div>
          <div>週四<span>{ store.opentime.Thu }</span></div>
          <div>週五<span>{ store.opentime.Fri }</span></div>
          <div>週六<span>{ store.opentime.Sat }</span></div>
          <div>週日<span>{ store.opentime.Sun }</span></div>
        </HideInfoTime>
      </HideInfo>
    </Photo>
    <CardContent>
      <TopInfo>
        <StoreName>{ store.storeName }</StoreName>
        <div>{ store.address }</div>
        <div>{ store.tel }</div>
      </TopInfo>
      <DistanceInfo>
        <MapMarkerAlt><Icon icon={ mapMarkerAlt } /></MapMarkerAlt>
        {
        distance <= 170
          ? <span><strong>{ distance }</strong></span>
          : <DistanceAlert><strong>{ distance }</strong></DistanceAlert>
        } 公里
      </DistanceInfo>
        <IconBox>
          { store.macCafe === true ? <IconifyIcon><Icon icon={ coffeeIcon } /></IconifyIcon> : null }
          { store.wifi === true ? <IconifyIcon><Icon icon={ wifiIcon } /></IconifyIcon> : null }
          { store.open_allday === true ? <SmallIcon src={ allday } alt="24hr" title="24小時營業" /> : null }
          {
            !isOpen
              ? <OpenTimeInfo onClick={ () => setIsOpen(!isOpen) }><strong>營業時間</strong></OpenTimeInfo>
              : <CloseTimeInfo onClick={ () => setIsOpen(!isOpen) }><strong>x 關閉資訊</strong></CloseTimeInfo>
          }
        </IconBox>
    </CardContent>
    {
    distance <= 170
      ? <OrderBtn onClick={ () => onStoreSelect(store) }>開始點餐</OrderBtn>
      : <NoOrderBtn onClick={ handleErrorAlert }>距離太遠，無法點餐</NoOrderBtn>
    }
    </Card>
  )
}
export default StoreItem
