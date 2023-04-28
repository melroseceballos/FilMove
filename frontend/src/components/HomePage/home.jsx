import './styles.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Home() {
    const [movies, setMovies] = useState ([])
    const [page, setPage] = useState (1)

        // using async function to fetch my data
    useEffect(()=>{
        async function getData(){
            const res = await fetch ('https://api.themoviedb.org/3/discover/movie?api_key=50760a302380745ede7e1c3eee6ca282&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
            const {results} = await res.json()
            setMovies(results)
            console.log(movies)
        }
        // calling getData() function here
        getData()
    }, []);


        // creating another function for pagination
        async function fetchMovies(){
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=50760a302380745ede7e1c3eee6ca282&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`)
            const {results} = await res.json()
            // creates a new array called prevMovies from the array ...pages
            setMovies(results)
        }
        /// GOT PAGINATION INFORMATION FROM W3SCHOOLS
        function handleNextPage() {
            setPage(prevPage => prevPage + 1)
          }
        
          function handlePrevPage() {
            if (page > 1) {
              setPage(prevPage => prevPage - 1)
            }
          }
        
          useEffect(() => {
            fetchMovies(page)
          }, [page])
    return(
        <>
        <img className= 'front' src='/Filmove.svg'/>
        <br />
        <br />
        <br/>
        <div className='movieDiv'>
            {movies.map((movie)=>   (
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
            ))}
           
            
        </div>
        <div className='buttonContainers'>
            <button onClick={handlePrevPage}>Previous Page</button>
            <button onClick={handleNextPage}>NextPage</button>
        </div>
        </>
    )
}
export default Home