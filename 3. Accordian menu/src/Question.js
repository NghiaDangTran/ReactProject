import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [show, setShow] = useState(true)
  console.log(info, title)
  return (
    <article className='question'>
      <header>
        <h4 className="title">
          {title}
        </h4>
        <button className='btn' onClick={()=>{setShow(!show)}}>
          {show ? <AiOutlinePlus /> : <AiOutlineMinus />

          }
        </button>


      </header>
      <footer>
        {!show ? <h5>{info}</h5> : ""}

      </footer>
    </article>
  )
};

export default Question;
