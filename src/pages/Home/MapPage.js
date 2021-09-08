import React from 'react'
import Map from './components/Map'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Subtitle, KeywordBtn, SmallAlert } from './style/homePageStyles'
import { Icon } from '@iconify/react'
import inputSearch from '@iconify-icons/iconoir/input-search'

const MapPage = (props) => {
  return (
    <div style={{ display: `${props.display}` }}>
        <Navbar />
        <main>
            <Subtitle>
                <h2>請選擇取餐地點</h2>
                <KeywordBtn onClick={() => props.switchPage()}>
                    <Icon icon={ inputSearch } style={{ fontSize: '45px' }} />
                </KeywordBtn>
            </Subtitle>
            <SmallAlert>
                ◎本服務需開啟定位功能以取得完整資訊
            </SmallAlert>
            <Map />
        </main>
        <Footer />
    </div>
  )
}

export default MapPage
