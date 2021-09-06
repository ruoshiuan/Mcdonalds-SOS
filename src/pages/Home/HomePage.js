import React, { useState, useEffect, createContext } from 'react'
import MapPage from './MapPage'
import SearchPage from './SearchPage'
import { storesCollection } from '../../firestore_db'
export const storesContext = createContext()
const HomePage = () => {
  const [view, setView] = useState({ mapPage: 'none', searchPage: 'flex' })
  const [storeData, setStoreData] = useState([])
  const getDataFromFirebase = []
  useEffect(() => {
    storesCollection.limit(20)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          getDataFromFirebase.push(doc.data())
        })
        setStoreData(getDataFromFirebase)
      })
      .catch(error => console.log(error))
  }, [])

  const toSearchPage = () => {
    setView({ mapPage: 'none', searchPage: 'flex' })
  }
  const toMapPage = () => {
    setView({ mapPage: 'flex', searchPage: 'none' })
  }
  return (
    <>
      <storesContext.Provider value={{ storeData }}>
        <MapPage display={ view.mapPage } switchPage={ toSearchPage } />
        <SearchPage display={ view.searchPage } switchPage={ toMapPage } />
      </storesContext.Provider>
    </>
  )
}

export default HomePage
