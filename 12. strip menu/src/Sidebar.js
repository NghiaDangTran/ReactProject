import React, { useContext } from 'react'
import { AppContext } from './context'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'

const Sidebar = () => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useContext(AppContext)
  return <div className={`sidebar-wrapper ${isSidebarOpen && "show"}`}>
    <aside className='sidebar'>
      <button className='close-btn' onClick={closeSidebar}><FaTimes></FaTimes></button>
      <div className='sidebar-links'>
        {sublinks.map((data, index) => {

          const { page, links } = data
          return <article >
            <h4>{page}</h4>
            <div className='sidebar-sublinks'>
              {links.map((i, at) => {
                const { label, url, icon } = i
                return <a href={url}>{icon}{label}</a>
              })}

            </div>

          </article>
        })}
      </div>

    </aside>
  </div>
}

export default Sidebar
