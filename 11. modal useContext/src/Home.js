import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext } from './context'
const Home = () => {
  const { modal, setModal,setTab } = useContext(AppContext)

  return <main>
    <button className="sidebar-toggle" onClick={()=>{setTab(true)}}>
      <FaBars></FaBars>
    </button>
    <button className="btn" onClick={()=>{setModal(true)}}>show modal</button>

  </main>
}

export default Home
