import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const { Page,
    MaxPage, handelPage } = useGlobalContext()
  return <div className="btn-container">
    <button onClick={() => handelPage(-1)}>Prev</button>
    <p>{Page+1} of {MaxPage}</p>
    <button onClick={() => handelPage(1)} >Next</button>


  </div>
}

export default Buttons
