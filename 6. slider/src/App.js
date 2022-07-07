import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data)
  const [index, setindex] = useState(0)
 
  const setarround=(move)=>{
    let curr=index
    if (move===1)
    {
      curr+1>people.length-1?curr=0:curr+=1
      
    }
    else  {curr-1<0?curr=people.length-1:curr-=1}

    console.log(curr);

    setindex(curr)

  }

  useEffect(()=>{
  let  time=  setInterval(()=>{
      setarround(1)
    },3000)

    return ()=>{clearInterval(time)}
  },[index])
  return <section className="section">
    <div className="title">
      <h2>
        <span>/</span> reviews
      </h2>
    </div>
    <div className="section-center">
      {people.map((i, pindex) => {
        const { id, image, name, title, quote } = i
        let position = 'nextSlide'
        if (pindex === index)
          position = 'activeSlide'
        if (pindex === index - 1|| (index===0 &&pindex===people.length-1))
          position = 'lastSlide'
        return <article className={position} key={id}>
          <img src={image} alt={name} className='person-img'></img>
          <h4>{name}</h4>
          <p className='title'>{title}</p>
          <p className='text'>{quote}</p>
          <FaQuoteRight className='icon'></FaQuoteRight>
        </article>
      })}

      <button className='prev' onClick={()=>setarround(2)}><FiChevronLeft></FiChevronLeft></button>
      <button className='next' onClick={()=>setarround(1)}><FiChevronRight></FiChevronRight></button>
    </div>
  </section>
}

export default App;
