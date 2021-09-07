import React, { useState, useEffect } from 'react'
import { Container, Item, Image, MealName, Price, Span } from '../style/menuStyles'
const Menu = ({ menuCollection, isMenuSelected, setOpenMenu }) => {
  const [menuData, setMenuData] = useState([])
  const getMenuFromFirebase = []
  useEffect(() => {
    menuCollection
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          getMenuFromFirebase.push(doc.data())
        })
        setMenuData(getMenuFromFirebase)
      })
      .catch(err => console.log(err))
  }, [])

  const menuList = menuData.map(info => {
    return (
      <Item key={ info.mealId } onClick={() => { setOpenMenu(info) }}>
        <Image src={ info.image } alt="foodPhoto" width='150' />
        <MealName>{ info.meal }</MealName>
        <Price>$<Span><strong>{ info.price }</strong></Span></Price>
      </Item>
    )
  })
  return isMenuSelected
    ? (
      <>
      <main>
          <Container>
            { menuList }
          </Container>
      </main>
      </>
      )
    : null
}

export default Menu
