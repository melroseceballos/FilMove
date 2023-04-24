import axios from 'axios'

export async function getReviews(movieId){
        const res = await fetch (`/api/reviews/movie/${movieId}`)
        const reviews = await res.json()
        console.log(reviews)
        return reviews
        
}

export async function postReview(review){
        const { data } = await axios.post('/api/reviews/movie/reviews', review)
        return data
}
