import './styles.css'
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function Top() {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState (1)

  // creating another function for pagination
  async function fetchMovies(){
    const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=50760a302380745ede7e1c3eee6ca282&language=en-US&page=${page}&total_pages=5`)
    const {results} = await res.json()
    // creates a new array called prevMovies from the array ...pages
    setMovies(results)
  }

  function handleNextPage() {
    if (page <= 5)
    setPage(prevPage => prevPage + 1)
  }

  function handlePrevPage() {
    if (page > 1) {
      setPage(prevPage => prevPage - 1)
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [page])

  return (
    <>
      <br/>
      <br/>
      <br/>
      {movies.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div>
            <h1 className='top'>100 Top Rated Movies</h1>
          {movies.map((movie) => {
            return (
              movie.title && (
                <>
                  <div key={movie.id} className= 'topContainer'>
                    <Link to={`/movie/${movie.id}`}>
                      <img key={movie.id} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    </Link>
                  </div>
                </>
              )
            )
          })}
        </div>
      )}
      <div className='buttonContainers'>
        <button onClick={handlePrevPage}>Previous Page</button>
        <button onClick={handleNextPage}>NextPage</button>
      </div>
    </>
  )
}

export default Top
