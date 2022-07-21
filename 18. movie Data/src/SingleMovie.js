import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'
import useFetch from './fetchData'
const SingleMovie = () => {
  const { id } = useParams()
  const { movies } = useFetch(id, true)
  console.log(movies);
  return <section className='single-movie'>
    <img src={movies.Poster}></img>
    <div className="single-movie-info">
      <h1>{movies.Title}</h1>
      <h3>actors: {movies.Actors}</h3>
      <p>{movies.Plot}</p>
      <h4>
        {movies.Released}
      </h4>
      <Link to="/" class="btn">Back to movies</Link>
    </div>
  </section>
}

export default SingleMovie
