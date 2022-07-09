import React, { useState } from 'react';
import data from './data';
function App() {
  const [graphs, setGraph] = useState(0)
  const [value, setvalue] = useState([])
  const handelUbmit = (e) => {
    e.preventDefault()

    if (graphs <= 1)
      setvalue([data[0]])
    else if (graphs < data.length)
    setvalue(data.slice(0,graphs))

    else setvalue(data)

  }

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handelUbmit} >
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={graphs}
          onChange={e => setGraph(e.target.value)}
        />
        <button className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {value.map((i, index) => {
          return <p key={index}>{i}</p>
        })}
      </article>
    </section>

  )
}

export default App;
