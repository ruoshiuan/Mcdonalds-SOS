import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import SearchList from '../components/SearchList'
import firebase, { storesCollection } from '../firestore_db'
import '../css/homepage.css'
const SearchPage = (props) => {
  const [storeData, setStoreData] = useState([])
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
    if(login){
        const getUser = firebase.auth().currentUser
        const data = {
        email: getUser.email,
        store: store.storeName,
        address: store.address,
        tel: store.tel
        }
        localStorage.setItem('userMessage',JSON.stringify(data))
        history.push('/menu')
    } else {
        history.push('/register')
      }
  }
  return (
      <div style={{display:`${props.display}`}}>
          <Navbar />
          <main>
              <div className="subtitle">
                  <h2>請選擇取餐地點</h2>
                  <button
                      className="keyword_btn"
                      onClick={() => props.switchPage()}
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
