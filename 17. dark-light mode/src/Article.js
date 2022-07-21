import React from 'react'
import moment from 'moment'
import data from './data'
const Article = ({ title, snippet, date, length }) => {
  console.log( Object.keys(date));
  return <article className='post'><h2>

    {title}
  </h2>
    <div className="post-info">
      <span>{moment(date).format("YYYY-MM-DD HH:mm")}</span>
      <span>{length} mins read</span>
      <p>{snippet}</p>

    </div>
  </article>
}

export default Article
