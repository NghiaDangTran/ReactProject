import { async } from 'q'
import React, { useState, useContext, useEffect } from 'react'
import useFetch from './fetchData'

// make sure to use https
// export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [search, setSearch] = useState("batman")
  const { movies, loading, error } = useFetch(search)


  return <AppContext.Provider value={{ movies, loading, error, setSearch, search }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
