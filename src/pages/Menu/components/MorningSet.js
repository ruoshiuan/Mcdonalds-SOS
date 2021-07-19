import React,{ useState } from 'react'
import MealDetail from './MealDetail'
import CartBar from '../components/CartBar'
const MorningSet = ({ MorningMenuInfo, onMealSelect }) => {
  const [selected, setSelected] = useState(null)
  const morningList = MorningMenuInfo.map(info => {
    return (
      <div className="itemCard"
        key={ info.mealId }
        onClick={() => {
          onMealSelect(info)
          setSelected(info)
        }}
      >
        <img className="itemImg" src={ info.image } alt="foodPhoto" width='150' />
        <div className="itemName">{ info.meal }</div>
        <div className="itemPrice">$<span style={{fontSize: '24px'}}><strong>{ info.price }</strong></span></div>
      </div>
    )
  })
  return (
    <>
      { morningList }
      {selected ? <MealDetail info={ selected } setInfo={setSelected} /> : null}
    </>
  )
}

export default MorningSet
