import axios from 'axios'

//create route / create
export async function postReview(review){
        const { data } = await axios.post('/api/reviews/movie/reviews', review)
        return data
}

// index route / read
export async function getReviews(movieId){
        const res = await fetch (`/api/reviews/movie/${movieId}`)
        const reviews = await res.json()
        console.log(reviews)
        return reviews
        
}

// fetches the review
export async function showReviews(movieId){
  const res = await fetch (`/api/reviews/${movieId}`)
  const reviews = await res.json()
  console.log(reviews)
  return reviews
  
}

// posting update route
export async function updateReview(reviewId, formValues){
  return axios.put(`/api/reviews/${reviewId}`, formValues)
  .then (res => res.data)
} 


// Delete route
export async function deleteReview(reviewId) {
        return axios.delete(`/api/reviews/movie/reviews/${reviewId}`)
          .then(res => res.data)
          .catch(error => {
            console.error(`Error deleting review ${reviewId}: ${error}`);
            throw error;
          });
      }
      
