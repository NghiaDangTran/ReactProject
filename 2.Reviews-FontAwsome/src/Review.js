import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);


  const { name, job, image, text } = people[index]
  const changeIndex = (Want) => {
    let next = 0
    if (Want === 1)
      next = (index + 1) % (people.length)
    else if (Want == 2) {
      if (index - 1 >= 0)
        next = (index + -1) % (people.length)
      else
        next = people.length - 1
    }
    else {
      next = Math.floor(Math.random() * (people.length - 0)) + 0
      if (next == index)
        next = (index + 1) % (people.length)
      console.log(next)
    }
    setIndex(next)


  }
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={() => changeIndex(2)} >
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={() => changeIndex(1)} >
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={() => { changeIndex(3) }}>
        surprise me
      </button>
    </article>
  )
};

export default Review;
