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

// //update route / update
// export async function updateReviews(movieId, reviewData) {
//         const response = await axios.put(`/movie/reviews/${movieId}`, reviewData)
//         const updatedReview = response.data
//         console.log(updatedReview)
//         return updatedReview
//       }

