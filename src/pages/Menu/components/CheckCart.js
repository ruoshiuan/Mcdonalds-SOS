import React, { useState, useEffect } from 'react'
import firebase from '../../../firestore_db'
import { Redirect, useHistory } from 'react-router-dom'
import { BlackBackground, CartBox, Content, Title, Cart, Alert, Item, ItemTitle, Quantity, ItemTotal, RemoveIcon, Total, Bottom, MealButton, OrderButton, StopButton } from '../style/checkCartStyles'
import { Icon } from '@iconify/react'
import trashAlt from '@iconify-icons/fa-solid/trash-alt'

const CheckCart = ({ openCart, setOpenCart, orders, setOrders }) => {
  const [login, setLogin] = useState(null)
  const [loading, setLoading] = useState(true)
  const history = useHistory()
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLogin(user)
      } else {
        return <Redirect to='/register' />
      }
    })
    return () => setLoading(false)
  }, [loading])
  const getTotal = orders.reduce((total, order) => {
    return total + order.total
  }, 0)
  const deleteItem = (index) => {
    const newOrders = [...orders]
    newOrders.splice(index, 1)
    setOrders(newOrders)
    localStorage.setItem('cartItems', JSON.stringify(newOrders))
  }
  const handleRedirection = () => {
    if (login) {
      history.push('/order')
    } else {
      history.push('/register')
    }
  }
  return openCart
    ? (
      <>
      <BlackBackground onClick={() => setOpenCart(null)} />
        <CartBox>
          <Content>
            <Title>確認購物車</Title>
              <Cart>
              {orders.length === 0 ? <Alert>目前尚未加入任何餐點</Alert> : null }
              {orders.map((order, index) => (
                <Item key={ order.id }>
                  <ItemTitle><span>{ order.meal }</span><Quantity>x{ order.quantity }</Quantity></ItemTitle>
                  {order.side || order.drink === null ? <div>{ order.side }, { order.drink }</div> : null}
                  <ItemTotal>$ { order.total }</ItemTotal>
                  <RemoveIcon><Icon icon={ trashAlt } onClick={ () => deleteItem(index) }/></RemoveIcon>
                </Item>)
              )}
              </Cart>
            <Total>合計 ＄<span>{ getTotal }</span></Total>
            <Bottom>
              <MealButton onClick={() => setOpenCart(null)} >繼續點餐</MealButton>
              {
                orders.length === 0
                  ? <OrderButton>前往結帳</OrderButton>
                  : <StopButton onClick={ handleRedirection }>前往結帳</StopButton>
              }
            </Bottom>
          </Content>
        </CartBox>
      </>
      )
    : null
}

export default CheckCart
