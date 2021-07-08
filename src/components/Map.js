import React,{ useState,useEffect,useRef,useCallback } from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow, DistanceMatrixService } from '@react-google-maps/api'
import key from '../key'
import db from '../firestore_db'
import MapStyle from './MapStyle'
import '../css/map.css'
import macicon from '../images/mac.svg'
import { Icon } from '@iconify/react'
import mapMarkerAlt from '@iconify-icons/fa-solid/map-marker-alt'
import compassIcon from '@iconify-icons/fa-solid/compass'

const mapContainerStyle = {
  height: "70vh",
  margin: "20px 0",
  width: "100%",
  color: "#4f4141",
}
const center = {
  lat: 23.97120111,
  lng: 120.9569286
}
const options = {
  styles: MapStyle,
  disableDefaultUI: true,
  zoomControl: true,
  clickableIcons: false
}
const Map = () => {
  const [storeData,setStoreData] = useState([])
  const [selected,setSelected] = useState(null)
  const [location,setLocation] = useState({lat:null,lng:null,error:''})
  const [distance,setDistance] = useState('')


  useEffect(() => {
      window.navigator.geolocation.getCurrentPosition(
          position => setLocation({lat:position.coords.latitude,lng:position.coords.longitude}),
          err => setLocation({error:err.message})
      )
      const getDataFromFirebase = []
      db.collection("stores")
          .get()
          .then(snapshot => {
              snapshot.forEach(doc => {
                  getDataFromFirebase.push(doc.data())
              })
              setStoreData(getDataFromFirebase)
          })
          .catch(error => console.log(error))
  }, [])
  const mapRef = useRef()
  const onMapLoad = useCallback((map) => {
      mapRef.current = map
  },[])
  const panTo = useCallback(({ lat, lng }) => {
      mapRef.current.panTo({lat, lng})
      mapRef.current.setZoom(14)
  },[])
  const {isLoaded, loadError} = useLoadScript({
      googleMapsApiKey: key,
  })

  if (loadError) return "Error"
  if (!isLoaded) return "Loading..."

  return (
      <>
      <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={7}
          center={center}
          options={options}
          onLoad={onMapLoad}
      >
          <button className="btn myplace" onClick={() => {
              panTo({lat:location.lat,lng:location.lng})
          }}>
              <Icon icon={compassIcon} className="compassIcon"/>我的位置
          </button>
          {storeData.map(store => {
              return (
                  <Marker
                      key={store.storeRealId}
                      position={{lat: store.coordinates[1],lng: store.coordinates[0]}}
                      icon={macicon}
                      onClick = {() => {
                          setSelected(store)
                      }}
                  />
              )
          })}
          {selected ? (
              <InfoWindow
                  position={{lat: selected.coordinates[1],lng: selected.coordinates[0]}}
                  onCloseClick={() => {setSelected(null)}}
              >
                  <div className="infoWindowStyle">
                      <div><strong>{selected.storeName+'店'}</strong></div>
                      <div>{selected.address}</div>
                      <div><Icon icon={mapMarkerAlt} className="mapMarkerAlt" />{distance}</div>
                      {parseFloat(distance) <= 50 ? <button className="btn order_btn">開始點餐</button> : <button className="btn noorder_btn">無法點餐</button>}
                  </div>
              </InfoWindow>):null}
          {selected ? (
              <DistanceMatrixService
                  options={{
                      destinations: [{lat: selected.coordinates[1],lng: selected.coordinates[0]}],
                      origins: [{lat: location.lat, lng: location.lng}],
                      travelMode: "DRIVING"
                  }}
                  callback = {(response) => setDistance(response.rows[0].elements[0].distance.text)
              } />
          ):null}
      </GoogleMap>
      </>
  )
}

export default Map
