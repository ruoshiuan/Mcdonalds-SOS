import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import LoadingEffect from './LoadingEffect'
import firebase, { ordersCollection } from '../../firestore_db'
import { Title, Form, SubTitle, InputRadio, Option, LabelTitle, Span, Cart, Item, ItemTitle, Quantity, ItemTotal, TotalPrice, Bottom, OrderButton, BackButton } from './style/orderPageStyles'
const OrderPage = () => {
  const [mealWay, setMealWay] = useState(null)
  const [payWay, setPayWay] = useState(null)
  const [direct, setDirect] = useState()
  const history = useHistory()
  const storeInfo = JSON.parse(localStorage.getItem('userMessage'))
  const getCartInfo = JSON.parse(localStorage.getItem('cartItems')) || []
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        return true
      } else {
        history.push('/register')
      }
    })
    if (!storeInfo) {
      history.push('/')
    } else if (getTotal === 0) {
      history.push('menu')
    }
  }, [])
  const submitOrder = (e) => {
    e.preventDefault()
    if (mealWay === null) {
      alert('請選擇用餐方式')
    } else if (payWay === null) {
      alert('請選擇付款方式')
    } else {
      const currentTime = new Date().toLocaleString()
      const currentDate = new Date().toISOString().slice(4, 10).replace(/-/g, '')
      const randomParams = Math.floor(Math.random() * 1000)
      ordersCollection.doc().set({
        orderTime: currentTime,
        orderNumber: currentDate + randomParams,
        email: storeInfo.email,
        store: storeInfo.store,
        address: storeInfo.address,
        tel: storeInfo.tel,
        items: getCartInfo,
        mealType: mealWay,
        payType: payWay,
        total: getTotal
      })
      const data = {
        orderNumber: currentDate + randomParams,
        mealType: mealWay,
        store: storeInfo.store,
        address: storeInfo.address
      }
      sessionStorage.setItem('orderRecord', JSON.stringify(data))
      localStorage.setItem('cartItems', JSON.stringify([]))
      setDirect(true)
      setTimeout(() => history.push('/complete'), 3000)
    }
  }
  const getTotal = getCartInfo.reduce((total, order) => {
    return total + order.total
  }, 0)
  const orderInfo = getCartInfo.map(info => {
    return (
    <Item key={ info.id }>
      <ItemTitle>
        <span>{ info.meal }</span>
        <Quantity>x{ info.quantity }</Quantity>
      </ItemTitle>
      {info.side || info.drink === null ? <div>{ info.side }, { info.drink }</div> : null }
      <ItemTotal>$ { info.total }</ItemTotal>
    </Item>
    )
  })
  return (
    <>
      <Navbar />
      <main>
        <Title>
          {storeInfo ? <h2>在 { storeInfo.store } 取餐</h2> : null}
          {storeInfo ? <div>{ storeInfo.address }</div> : null}
        </Title>
          <Form>
            <SubTitle>選擇用餐方式</SubTitle>
            <Option>
              <InputRadio type="radio" id="takeout" name="diningTypes" value="外帶" onChange={(e) => setMealWay(e.target.value)}/>
              <LabelTitle htmlFor="takeout">外帶<Span> 得來速不得使用自助點餐</Span></LabelTitle>
            </Option>
            <Option>
              <InputRadio type="radio" id="takein" name="diningTypes" value="內用" onChange={(e) => setMealWay(e.target.value)}/>
              <LabelTitle htmlFor="takein">內用</LabelTitle>
            </Option>
            <SubTitle>選擇付款方式</SubTitle>
            <Option>
              <InputRadio type="radio" id="line" name="payWays" value="LinePay" onChange={(e) => setPayWay(e.target.value)} />
              <LabelTitle htmlFor="line">Line Pay</LabelTitle>
            </Option>
            <Option>
              <InputRadio type="radio" id="apple" name="payWays" value="ApplePay" onChange={(e) => setPayWay(e.target.value)} />
              <LabelTitle htmlFor="apple">Apple Pay</LabelTitle>
            </Option>
            <Option>
              <InputRadio type="radio" id="jko" name="payWays" value="街口支付" onChange={(e) => setPayWay(e.target.value)} />
              <LabelTitle htmlFor="jko">街口支付</LabelTitle>
            </Option>
            <Option>
              <InputRadio type="radio" id="credit" name="payWays" value="信用卡" onChange={(e) => setPayWay(e.target.value)} />
              <LabelTitle htmlFor="credit">信用卡</LabelTitle>
            </Option>
            <SubTitle>餐點最終確認</SubTitle>
            <Cart>
              { orderInfo }
            </Cart>
            <TotalPrice>合計 $<span>{ getTotal }</span></TotalPrice>
          </Form>
          <Bottom>
            <BackButton onClick={() => history.push('menu') }>回上一頁</BackButton>
            <OrderButton onClick={ submitOrder }>確定結帳</OrderButton>
          </Bottom>
          {direct ? <LoadingEffect /> : null}
      </main>
      <Footer />
    </>
  )
}

export default OrderPage
