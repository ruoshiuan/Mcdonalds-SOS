import React, { useState, useEffect, useContext, useRef, useCallback } from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow, MarkerClusterer } from '@react-google-maps/api'
import haversine from 'haversine-distance'
import key from '../../../key'
import MapStyle from './MapStyle'
import { storesContext } from '../HomePage'
import SelectPlaceBtn from './SelectPlaceBtn'
import '../css/map.css'
import { Icon } from '@iconify/react'
import mapMarkerAlt from '@iconify-icons/fa-solid/map-marker-alt'
import compassIcon from '@iconify-icons/fa-solid/compass'
import macicon from '../../../images/mac.svg'
import ClusterStyle from './ClusterStyle'
const mapContainerStyle = {
  height: '75vh',
  margin: '10px 0',
  width: '100%',
  color: '#4f4141',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
const center = {
  lat: 23.97120111,
  lng: 120.9569286
}
const options = {
  styles: MapStyle,
  disableDefaultUI: true,
  zoomControl: true,
  clickableIcons: false,
}

const Map = () => {
  const [selected,setSelected] = useState(null)
  const [location,setLocation] = useState({ lat: null, lng: null, error: '' })
  const [distance,setDistance] = useState(null)
  const [loading,setLoading] = useState(true)
  const { storeData } = useContext(storesContext)
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
        position => setLocation({ lat:position.coords.latitude, lng:position.coords.longitude }),
        err => setLocation({ error:err.message })
    )
    return() => setLoading(false)
  }, [loading])

  const mapRef = useRef()
  const onMapLoad = useCallback((map) => {
      mapRef.current = map
  },[])
  const panTo = useCallback(({ lat, lng }) => {
      mapRef.current.panTo({ lat, lng })
      mapRef.current.setZoom(14)
  },[])
  const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: key,
  })

  if (loadError) return "Error"
  if (!isLoaded) return "Loading..."
  return (
      <>
        <GoogleMap
            mapContainerStyle={ mapContainerStyle }
            zoom={ 7 }
            center={ center }
            options={ options }
            onLoad={ onMapLoad }
        >
          <button className="btn myplace" onClick={() => {
              panTo({ lat:location.lat, lng:location.lng })
          }}>
              <Icon icon={ compassIcon } className="compassIcon"/>我的位置
          </button>
          <MarkerClusterer styles={ClusterStyle} >
            {(clusterer) =>
              storeData.map((store)=>(
                <Marker
                    key={ store.storeRealId }
                    position={{ lat: store.coordinates[1], lng: store.coordinates[0] }}
                    icon={ macicon }
                    clusterer={ clusterer }
                    onClick = {() => {
                        setSelected(store)
                        setDistance(((haversine({ latitude: location.lat, longitude: location.lng },{ latitude: store.coordinates[1], longitude: store.coordinates[0] }))*0.001).toFixed(2))
                    }}
                />
              ))
            }
          </MarkerClusterer>
          {selected ? (
              <InfoWindow
                position={{ lat: selected.coordinates[1], lng: selected.coordinates[0] }}
                onCloseClick={() => { setSelected(null) }}
              >
                <div className="infoWindowStyle">
                    <div><strong>{ selected.storeName+'店' }</strong></div>
                    <div>{ selected.address }</div>
                    <Icon
                      icon={ mapMarkerAlt }
                      className="distanceIcon" />
                      { distance < 50 ?
                      <span><strong> { distance } </strong></span>
                      : <span style={{color:'#f24'}}><strong> { distance } </strong></span> }
                      公里


                </div>
              </InfoWindow>
           ) : null}
          { selected ? <SelectPlaceBtn info={ distance } storeInfo={ selected } /> : null }
        </GoogleMap>
      </>
  )
}

export default Map