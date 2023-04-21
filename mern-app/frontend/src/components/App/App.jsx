import './styles.css'
import Home from '../HomePage/home'
import { Routes, Route, Link } from 'react-router-dom'
import Movie from '../MoviePage/movie'

function App() {

  return (
    <>
    <nav>
      <Link to ='/'>Home</Link>
    </nav>
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<Movie />} />
      </Routes>
    </main>
    </>
  )
}

export default App
