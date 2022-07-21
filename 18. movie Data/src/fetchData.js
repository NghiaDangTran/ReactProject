import React, { useState, useEffect } from 'react'
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`



const useFetch = (query, id = false) => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({ show: false, msg: '' })
    const lofData = async () => {
        setLoading(true)

        try {
            let respone
            if (id) { respone = await fetch(`${API_ENDPOINT}&i=${query}`) }
            else
                respone = await fetch(`${API_ENDPOINT}&s=${query}`)
            const data = await respone.json()


            if (id){
                setMovies(data)         
            }
            else if (data.Response === 'True') {
                setMovies(data.Search)
                setError({ show: false, msg: '' })
            }
            else {
                setError({ show: true, msg: data.Error })
            }
            setLoading(false)
        }
        catch (err) { console.log(err); setLoading(false) }
    }
    useEffect(() => {

        lofData()
    }, [query])


    return { movies, loading, error }




}

export default useFetch