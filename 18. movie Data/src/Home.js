import React from 'react'
import Form from './SearchForm'
import Movies from './Movies'
import { useGlobalContext } from './context'
const Home = () => {
  const { movies } = useGlobalContext()
  return <main>
    <Form></Form>
    <section className='movies'>
      {movies.map((i, index) => {

        return <Movies {...i} key={i.imdbID}></Movies>

      })}
    </section>
  </main>
}

export default Home
