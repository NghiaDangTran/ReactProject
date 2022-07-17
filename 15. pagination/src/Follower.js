import React from 'react'

const Follower = ({ data1 }) => {
  const { avatar_url, url, login } = data1
  return <article className='card'>
    <img src={avatar_url} alt="user"></img>
    <h4>{login}</h4>
    <a href={url} className="btn">
      VIEW PROFILE
    </a>
  </article>
}

export default Follower
