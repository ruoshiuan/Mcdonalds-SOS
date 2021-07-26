import React from 'react'
import './completepage.css'
import Navbar from '../../components/Navbar'
import takein from '../../images/takein.svg'
import takeout from '../../images/takeout.svg'
import { Link } from 'react-router-dom'
const CompletePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="content">
          <div className="thanksCorner">
            <div className="thankyou">Thank you!</div>
            <div style={{fontSize:'22px'}}>感謝您使用自助點餐服務</div>
            <div style={{fontSize:'20px',paddingTop:'15px'}}>取餐號碼</div>
            <div className="orderNumber">M2021072511</div>
          </div>
          <div className="thanksCornerAlert">
            <div>餐點製作中</div>
            <div>請於櫃台上方螢幕顯示此號碼時前來取餐</div>
          </div>
          <div className="receiptCorner">
            <div className="picBg">
            <img className="takePic" src={takeout} alt="takein" />
            </div>
            <div className="dinnerType">用餐方式 - <span>外帶</span></div>
            <strong>店家資訊</strong>
            <div>忠孝五店</div>
            <div>106大安區忠孝東路4段73號之一1樓</div>
            <div>(07)643-9611</div>
            </div>
            <Link to="/"><button className="backToHome">返回主頁</button></Link>
        </div>
      </main>

    </>
  )
}

export default CompletePage
