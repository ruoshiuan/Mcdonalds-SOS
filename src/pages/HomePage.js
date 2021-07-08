import React, { useState } from 'react'
import MapPage from '../pages/MapPage'
import SearchPage from '../pages/SearchPage'
const HomePage = () => {
  const [view,setView] = useState({mapPage:'flex', searchPage:'none'})
    const toSearchPage = () => {
        setView({mapPage:'none', searchPage:'flex'})
    }
    const toMapPage = () => {
        setView({mapPage:'flex', searchPage:'none'})
    }
  return (
    <div>
      <MapPage display={view.mapPage} switchPage={toSearchPage} />
      <SearchPage display={view.searchPage} switchPage={toMapPage} />
    </div>
  )
}

export default HomePage
