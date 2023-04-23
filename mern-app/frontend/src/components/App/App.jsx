import './styles.css'
import Home from '../HomePage/home'
import { Routes, Route, Link } from 'react-router-dom'
import Movie from '../MoviePage/movie'
import Genre from '../GenrePage/genre'
import Action from '../Genres/Action/Action'
import Adventure from '../Genres/Adventure/Adventure'
import Animation from '../Genres/Animation/Animation'
import Comedy from '../Genres/Comedy/comedy'
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
       <Route path='/genre/adventure' element={<Adventure />} />
       <Route path='/genre/animation' element={<Animation />} />
       <Route path='/genre/comedy' element={<Comedy />} />
      </Routes>
    </main>
    </>
  )
}

export default App
