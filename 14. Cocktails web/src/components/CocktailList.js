import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'


const CocktailList = () => {
  const { loading, data } = useGlobalContext()
  if (loading) {
    return <Loading></Loading>
  }
  if (data.length < 1) {
    return <section className='section'>
      <h2 className='section-title'>
        No Cocktails Mathced your search Criteria
      </h2>
     




    </section>
  }

  return (
    <section className='section'>
      <h2 className='section-title'>
        cocktails
      </h2>
      {/* {call cocktail map by data} */}

      <div className="cocktails-center">
       
        {data.map((item, index) => {
          
          const {
            idDrink, strDrink, strGlass, strAlcoholic
            , strDrinkThumb
          } = item

          return <Cocktail key={index} data1={{ strDrink, strGlass, strAlcoholic, strDrinkThumb,idDrink }}></Cocktail>


        })}

      </div>

    </section>
  )
}

export default CocktailList
