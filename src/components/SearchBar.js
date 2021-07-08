import React,{ useState } from 'react'
import '../css/search.css'
import { Icon } from '@iconify/react'
import searchIcon from '@iconify-icons/fa-solid/search'
import filter from '@iconify-icons/fa-solid/filter'

const SearchBar = ({ onFormSubmit }) => {
  const [term,setTerm] = useState('')
  const onSubmit = (e) => {
      e.preventDefault()
      onFormSubmit(term)
  }
  return (
      <form className="form" onSubmit={onSubmit}>
          <Icon icon={searchIcon} className="searchIcon" />
          <Icon icon={filter} className="fliterIcon" onClick={onSubmit} />
          <input
              className="search_bar"
              type="text"
              placeholder="搜尋相關地點"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
          />
      </form>
  )
}

export default SearchBar