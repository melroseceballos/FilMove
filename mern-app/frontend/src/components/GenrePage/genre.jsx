import './styles.css'
import { Link } from 'react-router-dom'

function Genre() {
  return (
    <>
      <br />
      <br />
      <br />
      <h1 className='genreTitle'>Choose Your Genre</h1>
      <div className='genreDiv'>
        <div className='card'>
          <div className='card-text'>Indigenous</div>
        </div>

        <Link to='/genre/action'>
        <div className='card'>
          <div className='card-text'>Action</div>
        </div>
        </Link>

        <Link to='/genre/adventure'>
        <div className='card'>
          <div className='card-text'>Adventure</div>
        </div>
        </Link>

        <Link to='/genre/animation'>
        <div className='card'>
          <div className='card-text'>Animation</div>
        </div>
        </Link>

        <Link to='/genre/comedy'>
        <div className='card'>
          <div className='card-text'>Comedy</div>
        </div>
        </Link>

        
        <div className='card'>
          <div className='card-text'>Crime</div>
        </div>
        <div className='card'>
          <div className='card-text'>Documentary</div>
        </div>
        <div className='card'>
          <div className='card-text'>Drama</div>
        </div>
        <div className='card'>
          <div className='card-text'>Family</div>
        </div>
        <div className='card'>
          <div className='card-text'>Fantasy</div>
        </div>
        <div className='card'>
          <div className='card-text'>History</div>
        </div>
        <div className='card'>
          <div className='card-text'>Horror</div>
        </div>
        <div className='card'>
          <div className='card-text'>Music</div>
        </div>
        <div className='card'>
          <div className='card-text'>Mystery</div>
        </div>
        <div className='card'>
          <div className='card-text'>Romance</div>
        </div>
        <div className='card'>
          <div className='card-text'>SciFi</div>
        </div>
        <div className='card'>
          <div className='card-text'>TV Movie</div>
        </div>
        <div className='card'>
          <div className='card-text'>Thriller</div>
        </div>
        <div className='card'>
          <div className='card-text'>War</div>
        </div>
        <div className='card'>
          <div className='card-text'>Western</div>
        </div>
        <div className='card'>
          <div className='card-text'>Shorts</div>
        </div>
      </div>
    </>
  )
}

export default Genre
