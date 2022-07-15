import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSerchTerm } = useGlobalContext()
  const serachValue = React.useRef('')
  React.useEffect(() => {
    serachValue.current.focus()
  }, [])
  const SearchValue = () => {
    setSerchTerm(serachValue.current.value)

  }
  const handelSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <section className='section search' >
      <form action="" className='search-form' onSubmit={handelSubmit}>
        <div className='form-control'>
          <label >Search for your Favorite drink</label>
          <input type='text' ref={serachValue} onChange={SearchValue}></input>
        </div>

      </form>
    </section>
  )
}

export default SearchForm
