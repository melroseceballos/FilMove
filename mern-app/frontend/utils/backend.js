import axios from 'axios';

/**************** JWT */
const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }

export async function signUp(user) {
  const { data } = await axios.post('/api/users/signup', user);
  return data;
}

export async function logIn(user) {
  const { data } = await axios.put('/api/users/login', user);
  return data;
}

/***************** CREATE ROUTE */
export async function postReview(review) {
  const { data } = await axios.post('/api/reviews/movie/reviews', review, authHeader);
  return data;
}

/******************* INDEX ROUTE */
export async function getReviews(movieId) {
  const res = await fetch(`/api/reviews/movie/${movieId}`);
  const reviews = await res.json();
  console.log(reviews);
  return reviews;
}

/********************* SHOWS REVIEW IN EDITFORM */
export async function showReviews(movieId) {
  const res = await fetch(`/api/reviews/${movieId}`);
  const reviews = await res.json();
  console.log(reviews);
  return reviews;
}

/******************** USED WHEN POST IS HIT IN REVIEWS UPDATE */
export async function updateReview(reviewId, formValues) {
  return axios.put(`/api/reviews/${reviewId}`, formValues, authHeader)
    .then(res => res.data);
}

/*********************** DELETE ROUTE */
export async function deleteReview(reviewId) {
  return axios.delete(`/api/reviews/movie/reviews/${reviewId}`, authHeader)
    .then(res => res.data)
    .catch(error => {
      console.error(`Error deleting review ${reviewId}: ${error}`);
      throw error;
    });
}
