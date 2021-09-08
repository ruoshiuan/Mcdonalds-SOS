import React, { useState, useRef } from 'react'
import StoreItem from './SearchStoreItem'
import { Container, NoResultAlert, PaginationNum, PaginationNumList, PrevBtn, NextBtn, DefaultIndex, ActiveIndex } from '../style/searchListStyles'
import { Icon } from '@iconify/react'
import angleRight from '@iconify-icons/fa-solid/angle-right'
import angleLeft from '@iconify-icons/fa-solid/angle-left'

const SearchList = ({ data, onStoreSelect, noResult }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [storesPerPage] = useState(12)
  const [pageNumLimit] = useState(5)
  const [minPageNumLimit, setMinPageNumLimit] = useState(0)
  const [maxPageNumLimit, setMaxPageNumLimit] = useState(5)
  const scrollTopRef = useRef(null)
  const pages = []
  for (let i = 1; i <= Math.ceil(data.length / storesPerPage); i++) {
    pages.push(i)
  }
  const indexOfLastStore = currentPage * storesPerPage
  const indexOfFirstStore = indexOfLastStore - storesPerPage
  const currentStores = data.slice(indexOfFirstStore, indexOfLastStore)

  const handleIndexClick = (e) => {
    setCurrentPage(Number(e.target.id))
    window.scrollTo({ behavior: 'smooth', top: scrollTopRef.current.offsetTop - 100 })
  }
  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1)
    window.scrollTo({ behavior: 'smooth', top: scrollTopRef.current.offsetTop - 100 })
    if (currentPage + 1 > maxPageNumLimit) {
      setMaxPageNumLimit(maxPageNumLimit + pageNumLimit)
      setMinPageNumLimit(minPageNumLimit + pageNumLimit)
    }
  }
  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1)
    window.scrollTo({ behavior: 'smooth', top: scrollTopRef.current.offsetTop - 100 })
    if ((currentPage - 1) % pageNumLimit === 0) {
      setMaxPageNumLimit(maxPageNumLimit - pageNumLimit)
      setMinPageNumLimit(minPageNumLimit - pageNumLimit)
    }
  }
  const renderStoreList = currentStores.map(store => {
    return <StoreItem key={ store.storeRealId } store={ store } onStoreSelect={ onStoreSelect } />
  })
  const renderPageNumber = pages.map(num => {
    const ListIndex = currentPage === num ? ActiveIndex : DefaultIndex
    if (num < maxPageNumLimit + 1 && num > minPageNumLimit) {
      return (
        <ListIndex key={ num } id={ num } onClick={ handleIndexClick } >{ num }</ListIndex>
      )
    } else {
      return null
    }
  })
  return (
    <>
    <Container ref={ scrollTopRef }>
      { renderStoreList }
    </Container>
  {
    data.length === 0
      ? <NoResultAlert>{ noResult }</NoResultAlert>
      : <PaginationNum>
        <PaginationNumList>
          <PrevBtn disabled={ currentPage === pages[0] } onClick={ handlePrevBtn }>
          <Icon icon={ angleLeft } />
          </PrevBtn>
        </PaginationNumList>
        { renderPageNumber }
        <PaginationNumList>
          <NextBtn disabled={ currentPage === pages[pages.length - 1] } onClick={ handleNextBtn }>
          <Icon icon={ angleRight } />
          </NextBtn>
        </PaginationNumList>
      </PaginationNum>
}
    </>
  )
}

export default SearchList
