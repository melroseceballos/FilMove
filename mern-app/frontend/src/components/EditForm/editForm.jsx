import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateReview,showReviews } from '../../../utils/backend';


function EditReview() {
  const [formValues, setFormValues] = useState({
    reviewer: '',
    rate: '',
    content: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { review_id } = useParams();
  console.log(review_id)

  // Fetch the review data from the API when the component mounts
 useEffect(() => {
    async function getData(){
        const res = await showReviews(review_id)
        setFormValues(res)
    }
    getData()
 }, [])
    console.log(formValues)
  function handleChange(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }

        ///// HANDLE SUBMIT ///
        function handleSubmit(event) {
            event.preventDefault();
            setLoading(true);
            setError(null);
          
            // Update the review data in the API
            updateReview(review_id, formValues)
              .then(() => {
                // Navigate back to the movie page after the review is updated
                navigate(-1);
              })
              .finally(() => setLoading(false));
          }
          
  if (loading) {
    return <p>Your review is loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <h1>Edit Your Review</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="reviewer">Reviewer</label>
          <input
            type="text"
            id="reviewer"
            name="reviewer"
            value={formValues.reviewer}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="rate">Rating</label>
          <input
            type="number"
            id="rate"
            name="rate"
            value={formValues.rate }
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={formValues.content }
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Review</button>
      </form>
    </div>
  );
}

export default EditReview;
