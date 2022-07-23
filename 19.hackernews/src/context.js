import React, { useContext, useEffect, useReducer } from 'react'

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'
import reducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {
  isLoading: false,
  Stories: [],
  Page: 0,
  MaxPage: 50
  ,
  Search: "react"
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)


  const fetchData = async () => {
    dispatch({ type: SET_LOADING })
    try {
      const respone = await fetch(`https://hn.algolia.com/api/v1/search?query=${state.Search}&page=${state.Page}`)
      const data = await respone.json()
      console.log(data);
      //https://hn.algolia.com/api/v1/search?query=asd&page=2
      dispatch({ type: SET_STORIES, payload: data })




      dispatch({ type: SET_LOADING })
    }
    catch (err) {
      dispatch({ type: SET_LOADING })
      console.log(err);
    }

  }
  const handelSearch = (value) => {
    dispatch({ type: HANDLE_SEARCH, payload: value })

  }
  const handelPage = (curr) => {


    dispatch({ type: HANDLE_PAGE, payload: curr })

  }
  const deleteat = (idx) => {

    dispatch({ type: REMOVE_STORY, payload: idx })

  }

  useEffect(() => { fetchData() }, [state.Search, state.Page])
  return <AppContext.Provider value={{ ...state, handelSearch, handelPage,deleteat }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
