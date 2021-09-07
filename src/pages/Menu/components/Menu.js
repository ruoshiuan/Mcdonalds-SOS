import React, { useState, useEffect } from 'react'
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
      <div className="itemCard" key={ info.mealId } onClick={() => { setOpenMenu(info) }}>
        <img className="itemImg" src={ info.image } alt="foodPhoto" width='150' />
        <div className="itemName">{ info.meal }</div>
        <div className="itemPrice">$<span className="itemPrice-span"><strong>{ info.price }</strong></span></div>
      </div>
    )
  })
  return isMenuSelected
    ? (
      <>
      <main>
          <div className="container">
            { menuList }
          </div>
      </main>
      </>
      )
    : null
}

export default Menu
