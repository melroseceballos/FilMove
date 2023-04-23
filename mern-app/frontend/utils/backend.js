

async function getReviews(movieId){
        const res = await fetch (`/movie/${movieId}`)
        const reviews = await res.json()
        return reviews
}

export default getReviews