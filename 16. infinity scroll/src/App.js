import React, { useState, useEffect, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;
let mounted=false

function App() {
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState([])
  const [Page, setPage] = useState(1)
  const [query, setQuery] = useState("")
  // const mounted = useRef(false)
  const [newImages, setNewImages] = useState(false)

  const fetchData = async () => {

    setLoading(true)

    const urlPage = `&page=${Page}`;
    const urlQuery = `&query=${query}`
    let url
    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`
    } else url = `${mainUrl}${clientID}${urlPage}`;
    try {
      const respone = await fetch(url)

      const data = await respone.json()

      if (query && Page === 1) {
        setPhoto(data.results)
      }
      else if (query) {
        setPhoto([...photo, ...data.results])
      }
      else setPhoto([...photo, ...data])
setNewImages(false)
      setLoading(false)

    }
    catch (err) {
      console.log(err);
      setNewImages(false)

      setLoading(false)
    }

  }
  const
    handelSubmit = (e) => {
      e.preventDefault()
      if (!query) return
      if (Page === 1) {
        fetchData()
        return
      }
      setPage(1)
    }
  useEffect(() => {
    fetchData()
  }, [Page])
  // bug need to set the page to 0 to work
  // but we can use useRef
  // useEffect(() => {
  //   const timmer = window.addEventListener("scroll", () => {
  //     if (!loading && (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 2) {


  //       setPage(check =>
  //         check + 1
  //       );

  //     }
  //   })
  //   return () => { window.removeEventListener("scroll", timmer) }
  // }, [])
  useEffect(() => {

    if (!mounted) {
      mounted = true
      return


    }
   if(!newImages) return
    if(loading)
    {
      
      return 
    }
    setPage(Page+1)


  }, [newImages])

  const event = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 2) {


      setNewImages(true)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', event)
    return ()=>{window.removeEventListener('scroll', event)}
  }, [])
  return <main>
    <section className='search'>
      <form action="" className="search-form">
        <input type="text" placeholder='search image tag'
          value={query} onChange={(e) => setQuery(e.target.value)}
          className='form-input' />
        <button className="submit-btn" onClick={handelSubmit}>
          <FaSearch></FaSearch>
        </button>
      </form>
    </section>
    <section className='photos'>

      <div className="photos-center">

        {photo.map((i, index) => {

          return <Photo key={index} {...i}></Photo>
        })}
        {loading && <h2 className='loading'>Loading...</h2>}
      </div>
    </section>
  </main>
}

export default App
