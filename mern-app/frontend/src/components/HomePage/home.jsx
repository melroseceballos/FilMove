import './styles.css'
import { useEffect, useState } from 'react'

function Home() {
    const [movies, setMovies] = useState ([])

        // using async function to fetch my data
    useEffect(()=>{
        async function getData(){
            const res = await fetch ('https://api.themoviedb.org/3/discover/movie?api_key=50760a302380745ede7e1c3eee6ca282&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
            const {results} = await res.json()
            setMovies(results)
            console.log(movies)
        }
        // CALLING FUNCTIONS HERE
        getData()
    }, []);
    return(
        <>
        <div className='movieDiv'>
            {movies.map((movie)=>   (
                movie.title &&(
                    <>
                    <div key={movie.id} className="movieContainer">
                    <h1 className='movieTitle'>{movie.title}</h1>
                    <img key={movie.id} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    </div>
                    </>
                )
            ))}

        </div>
        </>
    )
}
export default Home