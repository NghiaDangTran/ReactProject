import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ data1 }) => {
  const { idDrink, strDrink, strGlass, strAlcoholic, strDrinkThumb } = data1
 
  return (
    <article className='cocktail'>
      <div className="img-container">
        <img src={strDrinkThumb} alt="drink image"></img>

      </div>
      <div className="cocktail-footer">
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>{strAlcoholic}</p>
        <Link to={`cocktail/${idDrink}`} className="btn btn-primary btn-details">
          Details
        </Link>
      </div>




    </article>
  )
}

export default Cocktail
