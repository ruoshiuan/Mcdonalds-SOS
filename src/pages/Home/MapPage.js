import React from 'react'
import Map from './components/Map'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './css/homepage.css'
import { Icon } from '@iconify/react'
import inputSearch from '@iconify-icons/iconoir/input-search'


const MapPage = (props) => {
  return (
    <div style={{display:`${props.display}`}}>
        <Navbar />
        <main>
            <div className="subtitle">
                <h2>請選擇取餐地點</h2>
                <button className="keyword_btn" onClick={()=>props.switchPage()}>
                    <Icon icon={ inputSearch } style={{fontSize: '45px'}} />
                </button>
            </div>
            <div style={{ color:'#DA0406',fontSize:'14px',marginLeft: '0' }}>
                ◎本服務需開啟定位功能以取得完整資訊
            </div>
            <Map />
        </main>
        <Footer />
    </div>
  )
}

export default MapPage
