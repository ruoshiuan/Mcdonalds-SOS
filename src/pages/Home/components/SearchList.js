import React from 'react'
import StoreItem from './StoreItem'
import '../css/search.css'

const SearchList = ({ resultData, onStoreSelect }) => {
    const renderStoreList = resultData.map(store => {
        return <StoreItem key={ store.storeRealId } store={ store } onStoreSelect={ onStoreSelect } />
    })

  return (
      <div className="container">
        { renderStoreList }
        {resultData.length === 0 ?
        <div className="notfound">找不到相關結果</div>
        : null}
      </div>
  )
};

export default SearchList
