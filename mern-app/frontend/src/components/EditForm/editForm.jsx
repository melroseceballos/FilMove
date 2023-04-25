import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getReviews, updateReview } from '../../../utils/backend';


function EditReview() {
  const [formValues, setFormValues] = useState({
    reviewer: '',
    rate: '',
    content: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch the review data from the API when the component mounts
  useEffect(() => {
    setLoading(true);
  
    getReviews(id)
      .then((review) => {
        setFormValues({
          reviewer: review.reviewer,
          rate: review.rate,
          content: review.content,
        });
      })
      .catch((error) => {
        console.error(error);
        setError('Failed to fetch review data');
      })
      .finally(() => setLoading(false));
  }, [id]);
  

  function handleChange(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    setError(null);

    // Update the review data in the API
    updateReview(id, formValues)
      .then(() => {
        // Navigate back to the movie page after the review is updated
        navigate(-1);
      })
      .catch((error) => {
        console.error(error);
        setError('Failed to update review data');
      })
      .finally(() => setLoading(false));
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Edit Review</h1>
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
            value={formValues.rate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={formValues.content}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Review</button>
      </form>
    </div>
  );
}

export default EditReview;
