import './styles.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Search(){
    const [query, setQuery] = useState ('')
    const [queryResults, setQueryResults] = useState ([])
    const [searchResults, setSearchResults] = useState(null)

    // Updating rearch result by user's query
    useEffect(() => {
        if(queryResults.length > 0) {
            const results = queryResults.map((movies) => (
                <>
                    <div key={movies.id} className="searchContainer">
                    <h2 className='searchTitles'>{movies.title}</h2>
                    <Link to = {`/movie/${movies.id}`}>
                    <img key={movies.id} src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt={movies.title} className='searchMovies'/>
                    </Link>
                    </div>

                </>
                ))
                setSearchResults(results)
        }
    }, [queryResults])

    // function that fetches API search query
    // turning results into json
    // results is mapped

    const handleQuerySubmit = async (event) => {
        event.preventDefault()
        console.log(query)
        const res = await fetch (`https://api.themoviedb.org/3/search/movie?api_key=50760a302380745ede7e1c3eee6ca282&query=${query}`)
        const apiResponse = await res.json()
        console.log(apiResponse)
        const { results } = apiResponse
        setQueryResults(results)
    }
    return (
        <>
        <br />
        <br />
        <br />
        <div>
            <form onSubmit={handleQuerySubmit} className='searchBar'>
                <label htmlFor='search'>
                    <h1 className='searchTitle'>Search Any Movie!</h1>
                </label>
                <input
                name="search"
                placeholder='The Woman King ...'
                value={query}
                onChange={e => setQuery(e.target.value)}
                />
            </form>
            {searchResults && (
            <div className='searchResults'>
                <p className='searchResult'>Search Results For: {query}</p>
                {searchResults}
            </div>
        )}
        </div>
        </>
    )
}

export default Search

    
    