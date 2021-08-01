import React,{ useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './completepage.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import takein from '../../images/takein.svg'
import takeout from '../../images/takeout.svg'
import { Link } from 'react-router-dom'

const CompletePage = () => {
  const [loading, setLoading] = useState(true)
  const record = JSON.parse(sessionStorage.getItem('orderRecord'))
  const cartItems = JSON.parse(localStorage.getItem("cartItems"))
  const history = useHistory()
  useEffect(() => {
    if(!cartItems || !record){
      history.push('/')
    }
    return () => setLoading(false)
  }, [loading])
  return (
    <>
      <Navbar />
      <main>
        {record ?
        <div className="content">
          <div className="thanksCorner">
            <div className="thankyou">Thank you!</div>
            <div style={{ fontSize:'22px' }}>感謝您使用自助點餐服務</div>
            <div style={{ fontSize:'20px', paddingTop: '15px' }}>取餐號碼</div>
            <div className="orderNumber">{ record.orderNumber }</div>
          </div>
          <div className="thanksCornerAlert">
            <div>餐點製作中</div>
            <div>請於櫃台上方螢幕顯示此號碼時前來取餐</div>
          </div>
          <div className="receiptCorner">
            <div className="picBg">
            { record.mealType === '內用' ? <img className="takePic" src={takein} alt="takein" /> : <img className="takePic" src={takeout} alt="takeout" />}
            </div>
            <div className="dinnerType">用餐方式 - <span>{ record.mealType }</span></div>
            <strong>店家資訊</strong>
            <div>{ record.store }店</div>
            <div>{ record.address }</div>
            </div>
            <Link to="/"><button className="backToHome">返回主頁</button></Link>
        </div> : null }
      </main>
      <Footer />
    </>
  )
}

export default CompletePage
