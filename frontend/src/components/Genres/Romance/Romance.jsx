import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Romance(){
    const [movies, setMovies] = useState ([])
    const [page, setPage] = useState (1)
        useEffect(() =>{
            async function getData(){
                const res = await fetch ('https://api.themoviedb.org/3/discover/movie?api_key=50760a302380745ede7e1c3eee6ca282&with_genres=10749')
                const { results } = await res.json()
                console.log(results)
                setMovies (results)
                
            }

            //CALLING FUNCTION HERE
            getData()
        }, [])

            // creating another function for pagination like homepage
            async function fetchMovies(){
                const res = await fetch (`https://api.themoviedb.org/3/discover/movie?api_key=50760a302380745ede7e1c3eee6ca282&with_genres=10749&page=${page}`);
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
        <div className='movieDiv'>
            <h1 className='genrePicked'>Romance Movies</h1>
            {/* // Basing this off the home page */}
        {movies.map((movie) => (
            movie.title && (
                <>
                <div key={movie.id} className='movieContainer'>
                    {/* <h1 className='movieTitle'>{movie.title}</h1> */}
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

export default Romance