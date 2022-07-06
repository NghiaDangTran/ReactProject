import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(false)
  const [tours, setTours] = useState([])
  const removeTour = (id1) => {
    const newTour = tours.filter(id => id.id !== id1)
    setTours(newTour)
  }
  const fetchtours = async () => {
    setLoading(true)
    try {
      const respone = await fetch(url)
      const tour = await respone.json()
      setLoading(false)
      setTours(tour)

    }
    catch (error) {
      setLoading(false)
      console.log(error)
    }

  }
  useEffect(() => {

    fetchtours()
  }, [])
  if (loading) {
    return (<><Loading></Loading></>)
  }
  if (tours.length == 0) {
    return (
      <main>
        <div className="title">
          <h2>No more tour</h2>
          <button onClick={fetchtours} className='btn'> refresh</button>
        </div>

      </main>
    )

  }
  else
    return (
      <main>

        <Tours tours={tours} removeTour={removeTour}></Tours>
      </main>
    )

}

export default App
