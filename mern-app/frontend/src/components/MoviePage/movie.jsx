import './styles.css'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {getReviews} from '../../../utils/backend'
import { postReview, deleteReview   } from '../../../utils/backend'
import Trailer from '../Trailers/trailer'

function Movie(){
    const [movie,setMovies] = useState ({})
    const [reviews, setReviews] = useState ([])
    const [showForm, setShowForm] = useState (false)
    const [reviewForm] = useState(null)
    const [createForm, setCreateForm] = useState ({
        reviewer: '',
        rate: '',
        content: '',
})
    //initializing params to useParams for api fetch
    const params = useParams();
    const navigate = useNavigate();
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

      /**************** HANDLE REVIEW CHANGE ********/
      function handleReviewChange(event) {
        setCreateForm({
          ...createForm, 
          [event.target.name]: event.target.value,
        })
        console.log(createForm.reviewer)
        
      }
      console.log(reviewForm)


    /******************* POST HANDLE SUBMIT */
    function handleSubmit(event){
        event.preventDefault()
        postReview({
            ...createForm,
            movieId: movie.id
        }).then(() => {
            // Update the list of reviews after a new review is added
            getReviews(params.id).then((reviews) => {
                setReviews(reviews);
                setShowForm(false);
                // Reset the form after the review is submitted
                setCreateForm({
                    reviewer: '',
                    rate: '',
                    content: ''
                });
            });
        });
    }


        // CONDITION TO CLOSE FORM
        let btnText = 'Create a Review'
        if (showForm){
            btnText = "Close"
        }
        function toggleCreateForm(){
            setShowForm(!showForm)
        }

        function handleDelete(reviewId) {
            deleteReview(reviewId).then(() => {
              const updatedReviews = reviews.filter((review) => review._id !== reviewId);
              setReviews(updatedReviews);
            });
          }
    return(
        <>
        <br />
        <br />
        <br />
        <h1>Test 5</h1>
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
        <div className='movie'>
            <h1>Movie Goes Here</h1>
            <Trailer />
        
        </div>
        <div className='reviews'>
           <h1 className='reviewsTitle'>Reviews</h1>

        {/* // CREATE BUTTON //  */}
           <button onClick={toggleCreateForm}>
           {btnText}
           </button>
           {showForm && 
           <form className='createFormDiv'>
           <input 
           name='reviewer'
           value={ createForm.reviewer} 
           placeholder='Your Name'
           onChange={handleReviewChange} />
           <input 
           name='rate'
           value={ createForm.rate } 
           placeholder='Rate the movie from 0/10 ...'
           onChange={handleReviewChange}/>
           <textarea 
           name='content'
            value={ createForm.content } 
            placeholder='Share Your Thoughts...'
            onChange={handleReviewChange}/>
            <button onClick={handleSubmit}>Post</button>
       </form>
           }
           
           <ul>
            {reviews.map((review) => (
             <div className='reviewDiv' key={review._id}>
        <h1>{review.reviewer}</h1>
        <p><strong>{review.rate} / 10 </strong></p>
        <p>{review.content}</p>
        <div className='reviewButtons'>
          <button onClick={() =>{navigate(`/review/edit/${review._id}`)}}>Edit</button>
          <button onClick={() => handleDelete(review._id)}>Delete</button>
        </div>
      </div>
  ))}
</ul>

        </div>
        </>
    )
}

export default Movie