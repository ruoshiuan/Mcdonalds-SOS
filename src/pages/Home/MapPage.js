import React from 'react'
import Map from './components/Map'
import Navbar from '../../components/Navbar'
import './css/homepage.css'

const MapPage = (props) => {
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
                        關鍵字搜尋
                    </button>
                </div>
                <Map />
            </main>
        </div>
  )
}

export default MapPage
