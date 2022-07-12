import React from 'react'
import phoneImg from './images/phone.svg'

const Hero = () => {
  return <section className='hero'>
    <div className="hero-center">
      <article className='hero-info'>
        <h1>
          Payments infrastructure <br></br>
          for the internet
        </h1>
        <p>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
        <btutton className="btn">Start Now</btutton>
      </article>
      <article className='hero-images'>
        <img src={phoneImg}></img>
      </article>

    </div>
  </section>
}

export default Hero
