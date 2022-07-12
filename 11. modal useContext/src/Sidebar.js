import React, { useContext } from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { AppContext } from './context'

const Sidebar = () => {
  const { tab, setTab } = useContext(AppContext)
  return <aside className={`sidebar ${tab && "show-sidebar"}`}>

    <div className="sidebar-header">
      <img src={logo} alt="" />
      <button className="close-btn" onClick={() => { setTab(false) }}>   <FaTimes></FaTimes></button>
    </div>
    <ul className='links'>
      {links.map((data, index) => {
        const { id, url, text, icon } = data
        return <li key={id}>


          <a href={url}>{icon}{text}</a>
        </li>

      })}


    </ul>
    <ul className='social-icons'>

      {social.map(data => {
        const { id, url, icon } = data
        return <li key={id}>
          <a href={url}>  {icon}</a>

        </li>
      })}


    </ul>
  </aside>
}

export default Sidebar
