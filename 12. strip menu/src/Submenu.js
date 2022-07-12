import React, { useState, useRef, useEffect, useContext } from 'react'
import { AppContext } from './context'
import sublinks from './data'
const Submenu = () => {
  const container = useRef(null)
  const { isSubmenuOpen, text, location, closeSubmenu } = useContext(AppContext)
  let returnData;

  useEffect(() => {
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
  }, [location])
  return <aside className={`submenu ${isSubmenuOpen && "show"}`} onMouseLeave={closeSubmenu} ref={container}>
    {
      sublinks.forEach((data, index) => {
        if (data.page === text) {


          returnData = <section>
            <h4>{text}</h4>
            {console.log(data.page)}
            <div className={`submenu-center col-${data.links.length}`}>

              {data.links.map(i => {

                const { label, icon, url } = i
                return <a href={url}>{icon}{label}</a>
              })}


            </div>
          </section>
        }


      })}
    {returnData}

  </aside>
}

export default Submenu
