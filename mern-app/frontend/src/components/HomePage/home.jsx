import './styles.css'
import { useEffect, useState } from 'react'

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

            /// WILL FIGURE OUT PAGINATION LATER IF THERE IS TIME
    //     // using useEffect and creating another function for pagination
    // useEffect(() =>{
    //     async function fetchMovies(){
    //         const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=50760a302380745ede7e1c3eee6ca282&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`)
    //         const {results} = await res.json()
    //         // creates a new array called prevMovies from the array ...pages
    //         setPage(prevMovies)
    //     }
    //     // calling fetchMovies() functions here
    //     fetchMovies()
    // }, [page]);

    // // creating an onclick function that increments page by 1 using the setPage
    // function nextPage(){
    //     setPage((prevPage) => prevPage + 1 )
    // }
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
        <div className='buttonContainers'>
            <button>Previous Page</button>
            <button>NextPage</button>
        </div>
        </>
    )
}
export default Home