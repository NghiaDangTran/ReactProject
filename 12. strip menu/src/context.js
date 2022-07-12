import React, { useState, useContext } from 'react'
import sublinks from './data'


const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const [isSidebarOpen, setSideBarOpen] = useState(false)
    const [isSubmenuOpen, setSubmenuOpen] = useState(false)
    const [location, Setlocation] = useState({})
    const [text, setText] = useState("")

    const openSidebar = () => {
        setSideBarOpen(true)
    }
    const openSubmenu = (text, coordinate) => {
        Setlocation(coordinate)
        setText(text)
        
        setSubmenuOpen(true)
    }
    const closeSidebar = () => {
        setSideBarOpen(false)
    }
    const closeSubmenu = () => {
        setSubmenuOpen(false)
    }

    return <AppContext.Provider
        value={{
            isSidebarOpen,
            isSubmenuOpen, openSidebar, openSubmenu, closeSidebar, closeSubmenu,location,text
        }}>

        {children}
    </AppContext.Provider>

}

export { AppContext, AppProvider }