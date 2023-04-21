import './styles.css'
import Home from '../HomePage/home'
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <>
    <nav>
      <Link to ='/'>Home</Link>
    </nav>
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
    </>
  )
}

export default App
