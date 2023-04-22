import './styles.css'
import Home from '../HomePage/home'
import { Routes, Route, Link } from 'react-router-dom'
import Movie from '../MoviePage/movie'
import Genre from '../GenrePage/genre'
import Action from '../Genres/Action'

function App() {

  return (
    <>
    <nav>
      <Link to ='/'>Home</Link>
      <Link to='/genre'>Genre</Link>
      <Link to='#'>Top 100</Link>
      <h1>FilMove</h1>
      <Link to='#'>Watch Now</Link>
      <Link to='#'>Search</Link>
      <Link to='#'>Log In</Link>
    </nav>
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<Movie />} />
        <Route path='/genre' element={<Genre />} />
        <Route path='/genre/action' element={<Action />} />
       
      </Routes>
    </main>
    </>
  )
}

export default App
