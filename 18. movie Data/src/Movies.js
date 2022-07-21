import React, { useParams } from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
import { title } from 'process'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = ({ Poster, Title, Year, imdbID }) => {
  if (Poster === "N/A") {
    Poster = url
  }
  return <Link className='movie' to={`/movie/${imdbID}`}>
    <img src={Poster}></img>
    <div className="movie-info">
      <h4>{Title}</h4>
      <p>{Year}</p>
    </div>
  </Link>
}

export default Movies
