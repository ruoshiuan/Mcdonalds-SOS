import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import SearchList from '../components/SearchList'
import { storesCollection } from '../firestore_db'
import '../css/homepage.css'
const SearchPage = (props) => {
  const [storeData, setStoreData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      onTermSubmit('高雄')
    return() => setLoading(false)
  }, [loading])
  const getDataFromFirebase = []
  const onTermSubmit = (term) =>
  storesCollection
  .where("keywords", "array-contains", term)
  .onSnapshot((querySnapshot) => {
      querySnapshot.forEach(doc => {
          getDataFromFirebase.push({ ...doc.data() })
      })
      setStoreData(getDataFromFirebase)
  })
  const onStoreSelect = (store) => {
      console.log('From the searchPage', store)
  }
  return (
      <div style={{display:`${props.display}`}}>
          <Navbar />
          <main>
              <div className="subtitle">
                  <h2>請選擇取餐地點</h2>
                  <button
                      className="keyword_btn"
                      onClick={()=>props.switchPage()}
                  >
                      地圖搜尋
                  </button>
              </div>
              <section>
                  <SearchBar onFormSubmit={onTermSubmit} />
                  {/* <div className="search_result">共有{storeData.length}筆相關結果</div> */}
                  <SearchList resultData={storeData} onStoreSelect={onStoreSelect} />
              </section>
          </main>
      </div>
  )
}

export default SearchPage
