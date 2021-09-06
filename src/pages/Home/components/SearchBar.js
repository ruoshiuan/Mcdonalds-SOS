import React, { useState } from 'react'
import { Form, SearchBarInput, SearchIconStyle } from '../style/searchBarStyles'
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
  <Form onSubmit={ onSubmit } onKeyDown={ handleKeyDown }>
    <SearchBarInput type="text" placeholder="搜尋相關地點" value={ term } onChange={ (e) => setTerm(e.target.value) } />
    <SearchIconStyle><Icon icon={ searchIcon } onClick={ onSubmit } /></SearchIconStyle>
  </Form>
  )
}
export default SearchBar
