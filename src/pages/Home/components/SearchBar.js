import React, { useState } from 'react'
import '../css/search.css'
import { Icon } from '@iconify/react'
import searchIcon from '@iconify-icons/fa-solid/search'
const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    onFormSubmit(term)
  }
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.target.blur()
      onFormSubmit(term)
    }
  }
  return (
  <form className="form" onSubmit={ onSubmit } onKeyDown={ handleKeyDown }>
    <input className="search_bar" type="text" placeholder="搜尋相關地點" value={ term } onChange={ (e) => setTerm(e.target.value) } />
    <Icon icon={ searchIcon } className="searchIcon" onClick={ onSubmit } />
  </form>
  )
}
export default SearchBar
