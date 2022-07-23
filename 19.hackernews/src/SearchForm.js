import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { Search, handelSearch } = useGlobalContext()
  return <form action="" className='search-form'>
    <h2>Search hacker news</h2>
    <input type='text' className='form-input' value={Search} onChange={(e) => handelSearch(e.target.value)}></input>

  </form>
}

export default SearchForm
