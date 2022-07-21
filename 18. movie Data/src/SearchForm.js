import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const { search, setSearch } = useGlobalContext()
  return <form className='search-form'  onSubmit={(e) => e.preventDefault()}>
    <h2> search movies</h2>
    <input className='form-input' type='text' value={search} onChange={(e) => setSearch(e.target.value)}></input>
  </form>
}

export default SearchForm
