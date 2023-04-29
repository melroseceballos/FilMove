import './styles.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function Watch(){
    const [movies, setMovies] = useState([])

    // using async function to fetch my data
    useEffect(()=>{
        async function getData(){
            const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=50760a302380745ede7e1c3eee6ca282&language=en-US&page=29&page_size=100')
            const results =  await res.json()
            setMovies(results.results)
        }
        getData()
      
    }, [])

        // using math.random to generate a random movie everytime
    let movie = null
    if(movies.length > 0){
        const random = Math.floor(Math.random() * movies.length)
        movie = movies[random]
    }

    return(
        <>
        <br/>
        <br/>
        <br/>
        <br />
        <p className='refresh'>Don't like the movie? Refresh to get a new movie!</p>
        {/* <h1>{movie?.title}</h1> */}
        <Link to = {`/movie/${movie?.id}`}>
            <container className="watchContainer">
        <img key={movie?.id} src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt={movie?.title} className='watchMovies'/>
        </container> 
        </Link>
        </>
        
    )
}

export default Watch
