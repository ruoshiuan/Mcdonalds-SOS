import React, { useState } from 'react'
import MapPage from './MapPage'
import SearchPage from './SearchPage'
import './css/homepage.css'
const HomePage = () => {
  const [view,setView] = useState({ mapPage:'flex', searchPage:'none' })
    const toSearchPage = () => {
        setView({ mapPage:'none', searchPage:'flex' })
    }
    const toMapPage = () => {
        setView({ mapPage:'flex', searchPage:'none' })
    }
  return (
    <>
      <MapPage display={ view.mapPage } switchPage={ toSearchPage } />
      <SearchPage display={ view.searchPage } switchPage={ toMapPage } />
    </>
  )
}

export default HomePage
