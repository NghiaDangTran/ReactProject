import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'
let main = Math.floor(Math.random() * 16777215).toString(16)
if (main.length === 5)
  main += "0"
function App() {


  const [color, setColor] = useState("#" + main)
  const [error, setError] = useState(false)
  const [list, setList] = useState([])
  const handelSubmit = (e) => {
    e.preventDefault()
    let ok = false
    let currColor = 0
    try {
      let colors = new Values(color).all(20)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
   


  }
  const ranodm = (e) => {
    e.preventDefault()
    let main2 = Math.floor(Math.random() * 16777215).toString(16)
    if (main2.length === 5)
      main2 += "0"
    console.log("curr " + main2);

    setColor("#" + main2)
    console.log("curr color" + color);

    try {
      let colors = new Values(color).all(20)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }

  }

  return (<>

    <section className="container">
      <h3>color generator</h3>
      <form action="" onSubmit={handelSubmit}>
        <input type="text" value={color} onChange={(e) => {setColor(e.target.value);setError(false)}} placeholder='#f15025' className={`${error ? "error" : null}`} />
        <button className='btn'> Submit</button>
        <button className='btn' onClick={ranodm}> Random</button>
      </form>
    </section>
    <section className="colors">
      {list.length > 3 && list.map((i, index) => {
        return <SingleColor
          key={index}
          {...i}
          index={index}
          hex={i.hex}
        ></SingleColor>

      })}
    </section>
  </>)
}

export default App
