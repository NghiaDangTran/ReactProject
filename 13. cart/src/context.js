import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()
const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0


}
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const clearCart = () => {

    dispatch({ type: "CLEAR_ALL" })

  }
  const removeItem = (index) => {

    dispatch({ type: "REMOVE_ITEM", payload: index })

  }
  const addItem = (index) => {

    dispatch({ type: "ADD_ITEM", payload: index })

  }
  const reduceItem = (index) => {

   
    dispatch({ type: "THROW_ITEM", payload: index })



  }
  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    const response = await fetch(url)
    const cart = await response.json()
    dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
  }
  useEffect(()=>{
    fetchData()
  },[])
  useEffect(() => {
    dispatch({ type: "LOAD_ITEM" })


  }, [state.cart])
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart
        , removeItem, addItem, reduceItem
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
