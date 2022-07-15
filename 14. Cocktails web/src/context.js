import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSerchTerm] = useState("")
  const [data, setData] = useState([])
  const fetchData = async () => {
    setLoading(true)
    try {
      const respond = await fetch(`${url}${searchTerm}`)
      const check = await respond.json()
      console.log(searchTerm);
      if (check.drinks) {
        let newData = check.drinks.map((element, index) => {

          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass, strInstructions, strCategory } = element;
          let strIngredient = []
          let ingredients = {}
          for (let i = 1; i < Object.keys(check.drinks[index]).length; i++) {

            if (check.drinks[index]["strIngredient" + i])

              strIngredient.push(check.drinks[index]["strIngredient" + i])
            else break;
          }
          for (let i = 1; i < strIngredient.length; i++) {
            ingredients[strIngredient[i]] = check.drinks[index]["strMeasure" + i]


          }



          return { idDrink, strAlcoholic, strCategory, strDrink, strGlass, strDrinkThumb, ingredients, strInstructions }


        });
        setData(newData)
        console.log(data);
      }
      else setData([])

      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }








  }

  useEffect(() => {
    fetchData()
  }, [searchTerm])
  return <AppContext.Provider value={{ loading, setSerchTerm, data,setLoading }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
