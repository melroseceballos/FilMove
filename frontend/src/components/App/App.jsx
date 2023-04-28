import './styles.css'
import AuthFormPage from '../AuthFormPage'
import Home from '../HomePage/home'
import { Routes, Route, Link } from 'react-router-dom'
import Movie from '../MoviePage/movie'
import Genre from '../GenrePage/genre'
import Action from '../Genres/Action/Action'
import Adventure from '../Genres/Adventure/Adventure'
import Animation from '../Genres/Animation/Animation'
import Comedy from '../Genres/Comedy/Comedy'
import Crime from '../Genres/Crime/Crime'
import Documentary from '../Genres/Documentary/Documentary'
import Drama from '../Genres/Drama/Drama'
import Family from '../Genres/Family/Family'
import Fantasy from '../Genres/Fantasy/Fantasy'
import History from '../Genres/History/History'
import Horror from '../Genres/Horror/Horror'
import Music from '../Genres/Music/Music'
import Mystery from '../Genres/Mystery/Mystery'
import Romance from '../Genres/Romance/Romance'
import SciFi from '../Genres/SciFi/Scifi'
import TvMovie from '../Genres/TVMovie/TvMovie'
import Thriller from '../Genres/Thriller/Thriller'
import War from '../Genres/War/War'
import Western from '../Genres/Western/Western'
import Search from '../SearchPage/Search'
import Top from '../TopPage/top'
import Watch from '../WatchNowPage/watchNow'
import Edit from '../EditForm/editForm'

function App() {

  return (
    <>
    <nav>
      <Link to ='/'>Home</Link>
      <Link to='/genre'>Genre</Link>
      <Link to='/top100'>Top 100</Link>
      {/* <h1>FilMove</h1> */}
      <Link to='/watchNow'>Watch Now</Link>
      <Link to='/movie/search'>Search</Link>
      <Link to="/auth/login">Log In</Link>
      <Link to="/auth/signup">Sign Up</Link>
    </nav>
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/auth/:formType" element={<AuthFormPage />} />
        <Route path='/movie/:id' element={<Movie />} />
        <Route path='/genre' element={<Genre />} />
        <Route path='/top100' element={<Top />} />
        <Route path='/watchNow' element={<Watch />} />
        <Route path='/genre/action' element={<Action />} />
       <Route path='/genre/adventure' element={<Adventure />} />
       <Route path='/genre/animation' element={<Animation />} />
       <Route path='/genre/comedy' element={<Comedy />} />
       <Route path='/genre/crime' element={<Crime />} />
       <Route path='/genre/documentary' element={<Documentary />} />
       <Route path='/genre/drama' element={<Drama />} />
       <Route path='/genre/family' element={<Family />} />
       <Route path='/genre/fantasy' element={<Fantasy />} />
       <Route path='/genre/history' element={<History />} />
       <Route path='/genre/horror' element={<Horror />} />
       <Route path='/genre/music' element={<Music />} />
       <Route path='/genre/mystery' element={<Mystery />} />
       <Route path='/genre/romance' element={<Romance />} />
       <Route path='/genre/scifi' element={<SciFi />} />
       <Route path='/genre/tvmovie' element={<TvMovie />} />
       <Route path='/genre/thriller' element={<Thriller />} />
       <Route path='/genre/war' element={<War />} />
       <Route path='/genre/western' element={<Western />} />
       <Route path='/movie/search' element={<Search />} />
       <Route path='/review/edit/:review_id' element={<Edit />} />
      </Routes>
    </main>
    </>
  )
}

export default App
