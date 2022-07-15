import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='



const SingleCocktail = () => {
  const { setLoading, loading } = useGlobalContext()
  const { id } = useParams()
  const [currData, setcurrData] = React.useState({})
  const fetchData = async () => {
    setLoading(true)

    try {
      const respond = await fetch(`${url}${id}`)
      const data = await respond.json()


      let nerwData = data.drinks.map((e, index) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass, strInstructions, strCategory } = e



        let strIngredient = []
        let ingredients = {}
        for (let i = 1; i < Object.keys(data.drinks[index]).length; i++) {

          if (data.drinks[index]["strIngredient" + i])

            strIngredient.push(data.drinks[index]["strIngredient" + i])
          else break;
        }
        for (let i = 1; i < strIngredient.length; i++) {
          ingredients[strIngredient[i]] = data.drinks[index]["strMeasure" + i] == null ? "as much as you want" : data.drinks[index]["strMeasure" + i]


        }


        return { idDrink, strAlcoholic, strCategory, strDrink, strGlass, strDrinkThumb, ingredients, strInstructions }


      })

      setcurrData(nerwData[0])

      setLoading(false)




    }

    catch (err) {
      console.log(err);
      setLoading(false)
    }
  }






  React.useEffect(() => {
    fetchData()
  }, [])
  if (loading) {
    return <Loading></Loading>
  }
  return (
    <section className="section cocktail-section">
      <Link to="/" className='btn btn-primary'>back home</Link>
      <h1 className='section-title'>{currData.strDrink}</h1>
      <div className="drink">


        <img src={currData.strDrinkThumb}></img>
        <div className="drink-info">

          <p><span className="drink-data">name :</span>{currData.strDrink}</p>
          <p><span className="drink-data">Category :</span>{currData.strCategory}</p>
          <p><span className="drink-data">info :</span>{currData.strAlcoholic}</p>
          <p><span className="drink-data">glass :</span>{currData.strGlass}</p>
          <p><span className="drink-data">instruction :</span>{currData.strInstructions}</p>
          <p><span className="drink-data">ingredients :</span>


            {currData.ingredients ? Object.keys(currData.ingredients).map((key, index) => {
              return key + " " + currData.ingredients[key] + ", "

            })
              : ""}
          </p>

        </div>
      </div>

    </section>
  )
}

export default SingleCocktail
