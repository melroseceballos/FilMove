import './styles.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Action(){
    const [movies, setMovies] = useState ([])
        useEffect(() =>{
            async function getData(){
                const res = await fetch ('https://api.themoviedb.org/3/discover/movie?api_key=50760a302380745ede7e1c3eee6ca282&with_genres=28')
                const { results } = await res.json()
                console.log(results)
                setMovies (results)
                
            }

            //CALLING FUNCTION HERE
            getData()
        }, [])
    return(
        <>
        <div className='movieDiv'>
            <h1 className='genrePicked'>Action Movies</h1>
        {movies.map((movie) => (
            movie.title && (
                <>
                <div key={movie.id} className='movieContainer'>
                    <h1 className='movieTitle'>{movie.title}</h1>
                    <Link to = {`/movie/${movie.id}`}>
                    <img key={movie.id} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    </Link>
                </div>
                </>
            )
        ))}
        </div>
        </>
    )
}

export default Action