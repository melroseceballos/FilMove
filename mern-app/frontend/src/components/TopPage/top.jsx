import './styles.css'
import { useState, useEffect} from 'react'

function Top()  {
    const [movies, setMovies] = useState ([])

    // using async function like homePage
    useEffect(() => {
        async function getData() {
            const res = await fetch ('https://api.themoviedb.org/3/movie/top_rated?api_key=50760a302380745ede7e1c3eee6ca282&language=en-US&page=1&page_size=100')
            const { results } = await res.json ()
            console.log(movies)
            setMovies(results)
        }
        getData()
    }, [])
    return(
        <>
        <br />
        <br />
        <br/>
        <div>
            {movies.map((movie) =>{
                movie.title &&(
                    <>
                     <div key={movie.id} className="movieContainer">
                    <h1 className='movieTitle'>{movie.title}</h1>
                    <Link to = {`/movie/${movie.id}`}>
                    <img key={movie.id} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    </Link>
                    </div>
                    </>
                )
            })}
        </div>
        </>
    )
}

export default Top