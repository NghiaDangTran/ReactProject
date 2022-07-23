import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const { isLoading, Stories,deleteat } = useGlobalContext()
  if (isLoading) {
    return <div className='loading'></div>
  }

  return <section className='stories'>
    {Stories.map((i, index) => {
      const { title, points, author, num_comments, url } = i
      return <article className='story' key={index}>
        <h4 className='title'>
          {title}
        </h4>
        <p className='info'>{points} points by<span>{author} | </span>{num_comments} comments</p>
        <div>
          <a href={url} className="read-link">Read more</a>
          <button onClick={()=>{deleteat(index)}} className='remove-btn'>Remove</button>
        </div>
      </article>

    })}

  </section>
}

export default Stories
