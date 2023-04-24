export async function getReviews(movieId){
        const res = await fetch (`/api/reviews/movie/${movieId}`)
        const reviews = await res.json()
        console.log(reviews)
        return reviews
        
}