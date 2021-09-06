import React, { useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Content, ThanksCorner, Banner, Number, Alert, ReceiptCorner, CornerLeft, CompleteImage, CornerRight, MealImage, DinnerType, Button } from './style/completePageStyles'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import takein from '../../images/takein.svg'
import takeout from '../../images/takeout.svg'
import completeImage from '../../images/completeImage.jpg'
import thanksImage from '../../images/thanks.svg'
import firebase from '../../firestore_db'

const CompletePage = () => {
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
  }, [])
  return (
  <>
    <Navbar />
    <main>
    {
      record
        ? <Content>
            <ThanksCorner>
              <Banner src={ thanksImage } alt="thanks" />
              <div>感謝您使用自助點餐服務</div>
              <h4>取餐號碼</h4>
              <Number>{ record.orderNumber }</Number>
            </ThanksCorner>
            <Alert>
              <div>餐點製作中</div>
              <div>請於櫃台上方螢幕顯示此號碼時前來取餐</div>
            </Alert>
            <ReceiptCorner>
              <CornerLeft>
                <CompleteImage src={ completeImage } alt="photo" />
              </CornerLeft>
              <CornerRight>
                <MealImage>
                { record.mealType === '內用' ? <img src={ takein } alt="takein" /> : <img src={ takeout } alt="takeout" /> }
                </MealImage>
                <DinnerType>用餐方式 - <span>{ record.mealType }</span></DinnerType>
                <strong>店家資訊</strong>
                <div>{ record.store }店</div>
                <div>{ record.address }</div>
              </CornerRight>
            </ReceiptCorner>
              <Link to="/member"><Button>查看訂單</Button></Link>
          </Content>
        : null
    }
    </main>
    <Footer />
  </>
  )
}

export default CompletePage
