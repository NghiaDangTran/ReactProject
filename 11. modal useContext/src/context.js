import React, { useState, useContext } from 'react'


const AppContext = React.createContext()


const AppProvider = ({ children }) => {

const [modal,setModal]=useState(false)
const [tab,setTab]=useState(false)
    return <AppContext.Provider value={{modal,setModal,tab,setTab}}
    >

        {children}
    </AppContext.Provider>
}

export { AppProvider, AppContext }