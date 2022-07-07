import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)
  // const check=0

  const fecthdata = async () => {

    const respone = await fetch(url)
    const newjob = await respone.json()
    setJobs(newjob)
  setLoading(false)
  }


  useEffect(()=>{
    fecthdata()
  },[])
  // use effect work after the first run after so at first job still null then untill the 
  // second load the setJobs will call

  console.log(jobs);
  
  if(loading)
  {
    return <section className='section loading'>
    <h1>loading...</h1>
  </section>
}

const {company,dates,duties,title}=jobs[value]
  return <section className="section">
    <div className="title">
      <h2 >Expierence</h2>
      <div className="underline"></div>
    </div>
    <div className="jobs-center">
    <div className="btn-container">
      {jobs.map((i,index)=>{return <button key={i.id} onClick={()=>setValue(index)}
      className={`job-btn ${index===value &&'active-btn' }`}>{i.company}</button>})}
    </div>
      <article className='job-info'>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {duties.map((i,index)=>{return <div key={index} className="job-desc">
          <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
          <p>{i}</p>
        </div>})}

      </article>
    </div>
  </section>
}

export default App
