import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import MorningDetail from './components/MorningDetail'
import RegularDetail from './components/RegularDetail'
import PointDetail from './components/PointDetail'
import Menu from './components/Menu'
import CheckCart from './components/CheckCart'
import { Icon } from '@iconify/react'
import shoppingBasket from '@iconify-icons/fa-solid/shopping-basket'
import firebase, { menuMorningCollection, menuRegularCollection, menuPointCollection } from '../../firestore_db'
import { Subtitle, ResetButton, MenuBar, Title, SelectedTitle, Bottom, BottomBar, Cart, CartIcon, ItemCount, ItemTotal, Button } from './style/foodPageStyles'

const MENU = {
  MORNING: 'morningMenu',
  REGULAR: 'regularMenu',
  POINT: 'pointMenu'
}
const FoodPage = () => {
  const localStoreInfo = JSON.parse(localStorage.getItem('cartItems') || '[]')
  const [menu, setMenu] = useState(MENU.MORNING)
  const [openMorning, setOpenMorning] = useState()
  const [openRegular, setOpenRegular] = useState()
  const [openPoint, setOpenPoint] = useState()
  const [openCart, setOpenCart] = useState(false)
  const [orders, setOrders] = useState(localStoreInfo)
  const history = useHistory()
  const storeInfo = JSON.parse(localStorage.getItem('userMessage'))
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        if (!storeInfo) {
          history.push('/')
        }
      } else {
        history.push('/register')
      }
    })
    localStorage.setItem('cartItems', JSON.stringify(orders))
  }, [orders])

  const handleReset = () => {
    localStorage.removeItem('userMessage')
    history.push('/')
  }
  const handleToMorningMenu = () => {
    setMenu(MENU.MORNING)
  }
  const handleToRegularMenu = () => {
    setMenu(MENU.REGULAR)
  }
  const handleToPointMenu = () => {
    setMenu(MENU.POINT)
  }
  const getTotal = orders.reduce((total, order) => {
    return total + order.total
  }, 0)
  const getCount = orders.reduce((total, order) => {
    return total + order.quantity
  }, 0)

  const isMorningMenuSelected = menu === MENU.MORNING
  const isRegularMenuSelected = menu === MENU.REGULAR
  const isPointMenuSelected = menu === MENU.POINT
  const MorningBarTitle = isMorningMenuSelected ? SelectedTitle : Title
  const RegularBarTitle = isRegularMenuSelected ? SelectedTitle : Title
  const PointBarTitle = isPointMenuSelected ? SelectedTitle : Title
  return (
    <>
      <Navbar />
      <main>
        <Subtitle>
          {storeInfo ? <h2>在 { storeInfo.store + '店' } 取餐</h2> : null}
          <ResetButton onClick={ () => handleReset() }>
            重選地點
          </ResetButton>
        </Subtitle>
        <MenuBar>
          <MorningBarTitle onClick={ handleToMorningMenu }>早餐</MorningBarTitle>
          <RegularBarTitle onClick={ handleToRegularMenu }>全餐</RegularBarTitle>
          <PointBarTitle onClick={ handleToPointMenu }>飲品</PointBarTitle>
        </MenuBar>
      </main>
        <section>
          <Menu menuCollection={ menuMorningCollection } setOpenMenu={ setOpenMorning } isMenuSelected={ isMorningMenuSelected } />
          <Menu menuCollection={ menuRegularCollection } setOpenMenu={ setOpenRegular } isMenuSelected={ isRegularMenuSelected } />
          <Menu menuCollection={ menuPointCollection } setOpenMenu={ setOpenPoint } isMenuSelected={ isPointMenuSelected } />
          <MorningDetail openMorning={ openMorning } setOpenMorning={ setOpenMorning } orders={ orders } setOrders={ setOrders } />
          <RegularDetail openRegular={ openRegular } setOpenRegular={ setOpenRegular } orders={ orders } setOrders={ setOrders } />
          <PointDetail openPoint={ openPoint } setOpenPoint={ setOpenPoint } orders={ orders } setOrders={ setOrders } />
          <CheckCart openCart={ openCart } setOpenCart={ setOpenCart } orders={ orders } setOrders={ setOrders } />
        </section>
        <Bottom>
        <BottomBar>
          <Cart>
            <CartIcon><Icon icon={ shoppingBasket } /></CartIcon>
            <ItemCount>{ getCount }</ItemCount>
            <ItemTotal>$<span>{ getTotal }</span></ItemTotal>
          </Cart>
          <Button onClick={() => setOpenCart(true)}>確認購物車</Button>
        </BottomBar>
      </Bottom>
    </>
  )
}

export default FoodPage
