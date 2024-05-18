const MovieReviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews:</h3>
      {reviews.length > 0? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h2>Author: {review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default MovieReviews;