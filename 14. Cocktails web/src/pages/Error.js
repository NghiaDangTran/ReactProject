import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='erro-page section'>
<div className="error-container">
  <h1>oops! it's a dead end</h1>

  <Link className='btn btn-primary' to={"/"}>BACK TO HOME</Link>
</div>

    </section>
  )
}

export default Error
