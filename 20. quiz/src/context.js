import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = ''

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [user,setUser]=useState("")
  const [loading, setLoading] = useState(false)
  const [game, setGame] = useState(false)
  const [data, setData] = useState([])
  const [showList, setShowList] = useState(false)
  const [gameSetting, setGameSetting] = useState({
    amount: 10,
    category: null,
    difficulty: null,
    typeof: null


  })
  const fetchData = async () => {
    setLoading(true)

    try {
      const url = `${API_ENDPOINT}amount=${gameSetting.amount}${gameSetting.category == null ? "" : "&category=" + gameSetting.category}${gameSetting.difficulty == null ? "" : "&difficulty=" + gameSetting.difficulty}${gameSetting.typeof == null ? "" : "&type=" + gameSetting.typeof}`

      const respone = await fetch(url)
      const data = await respone.json()
      console.log(data);
      console.log(url);
      setData(data.results)
      setLoading(false)

    }
    catch (err) {
      console.log(err);
      setLoading(false)


    }

  }
  return <AppContext.Provider value={{user,setUser, loading, gameSetting, setGameSetting, setGame, game, fetchData, data,setShowList,showList }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
