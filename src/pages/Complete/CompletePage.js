import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import './completepage.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import takein from '../../images/takein.svg'
import takeout from '../../images/takeout.svg'
import completeImage from '../../images/completeImage.jpg'
import firebase from '../../firestore_db'

const CompletePage = () => {
  const [loading, setLoading] = useState(true)
  const record = JSON.parse(sessionStorage.getItem('orderRecord'))
  const cartItems = JSON.parse(localStorage.getItem('cartItems'))
  const history = useHistory()
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        if (!cartItems || !record) {
          history.push('/')
        }
      } else {
        history.push('/register')
      }
    })
    return () => setLoading(false)
  }, [loading])
  return (
  <>
    <Navbar />
    <main>
    {
      record
        ? <div className="content">
            <div className="thanksCorner">
              <div className="thankyou">Thank you!</div>
              <div>感謝您使用自助點餐服務</div>
              <h4>取餐號碼</h4>
              <div className="orderNumber">{ record.orderNumber }</div>
            </div>
            <div className="thanksCornerAlert">
              <div>餐點製作中</div>
              <div>請於櫃台上方螢幕顯示此號碼時前來取餐</div>
            </div>
            <div className="receiptCorner">
              <div className="cornerLeft">
                <img src={ completeImage } alt="photo" className="completeImage"/>
              </div>
              <div className="cornerRight">
                <div className="picBg">
                { record.mealType === '內用' ? <img className="takePic" src={ takein } alt="takein" /> : <img className="takePic" src={ takeout } alt="takeout" /> }
                </div>
                <div className="dinnerType">用餐方式 - <span>{ record.mealType }</span></div>
                <strong>店家資訊</strong>
                <div>{ record.store }店</div>
                <div>{ record.address }</div>
              </div>
            </div>
              <Link to="/member"><button className="backToHome">查看訂單</button></Link>
          </div>
        : null
    }
    </main>
    <Footer />
  </>
  )
}

export default CompletePage
