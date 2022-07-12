import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [show, setShow] = useState(true)
  const LinksContainerRef = useRef(null)
  const linksref = useRef(null)

  useEffect(() => {
    const linksheight = linksref.current.getBoundingClientRect().height
    console.log(linksheight)
    if (show) {
      LinksContainerRef.current.style.height = `${linksheight}px`
    }
    else {
      LinksContainerRef.current.style.height = `0px`

    }

  }, [show])
  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo"></img>
        <button className="nav-toggle" onClick={() => setShow(!show)}>
          <FaBars></FaBars>
        </button>
      </div>
      <div className='links-container' ref={LinksContainerRef}>
        <ul className='links' ref={linksref}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="social-icons">
        {social.map(data => {
          const { id, url, icon } = data
          return <li>
            <a href={url}>{icon}</a>
          </li>
        })}

      </ul>

    </div>
  </nav>
}

export default Navbar
