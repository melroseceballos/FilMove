import './styles.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {getReviews} from '../../../utils/backend'

function Movie(){
    const [movie,setMovies] = useState ({})
    const [reviews, setReviews] = useState ([])
    const [reviewForm, setReviewForm] = useState(null)

    //initializing params to useParams for api fetch
    const params = useParams();
  

    //creating a async function to fetch movie per params.id
    //using useEffect

    useEffect (() => {
        async function getData(){
            const res = await fetch (`https://api.themoviedb.org/3/movie/${params.id}?api_key=50760a302380745ede7e1c3eee6ca282&language=en-US`)
            const data = await res.json()
            console.log(data)
            // setting data to become movie
            setMovies(data);
        }
        getReviews(params.id).then(res => setReviews(res))
        
        // calling getData() function here
        getData()
    }, [])
    console.log(reviews)
    // REVIEW FORM
        function ReviewForm(){
            setReviewForm(<h1>I am a review form!</h1>)
            console.log(ReviewForm)
        }
    return(
        <>
        <br />
        <br />
        <br />
        <div className='movieShow'>
        <br />
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        <div className='overview'>
        <h1>{movie.title}</h1>
        <p className='synopsis'>{movie.overview}</p>
        <p><strong>Release Date: </strong>{movie.release_date}</p>
        <p><strong>Movie Rating: </strong>{movie.vote_average}</p>
        <p><strong>Vote Count:</strong>{movie.vote_count}</p>
        </div>
        </div>
        <div className='movie'>Movie Goes Here</div>
        <div className='reviews'>
           <h1 className='reviewsTitle'>Reviews</h1>

           <button onClick={ReviewForm}>Create A Review</button>
           {reviewForm}

        <ul>
            {reviews.map((review) =>(
                <>
            <div key={review._id} className='reviewDiv'>
            <h1>{review.reviewer}</h1>
               <p><strong>{review.rate} / 10 </strong></p>
              <p>{review.content}</p>
              <div className='reviewButtons'>
              <button>Edit</button>
              <button>Delete</button>
              </div>

            </div>
              
                </>
                
                
            ))}
        </ul>
        </div>
        </>
    )
}

export default Movie