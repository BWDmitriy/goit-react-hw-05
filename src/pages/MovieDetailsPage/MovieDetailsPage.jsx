import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from "./Movies.module.css";

export default function Movies() {
  let { id } = useParams();
const [movieDetails, setMovieDetails] = useState(null);
const [cast, setCast] = useState([]);
const [reviews, setReviews] = useState([]);
const [reviewsFetched, setReviewsFetched] = useState(false); // Исправлено: добавлено состояние reviewsFetched
const [loadingReviews, setLoadingReviews] = useState(false);

useEffect(() => {
  const fetchMovieDetails = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: 'e9709418d656a03a1b4ed077e392d048',
        },
      });
      setMovieDetails(response.data);
    } catch (error) {
      console.error("Failed to fetch movie details:", error);
    }
  };

  if (reviewsFetched) {
    fetchReviews(); // Загружаем отзывы, если было нажатие на кнопку
  }

  if (id) {
    fetchMovieDetails();
  }
}, [id, reviewsFetched]);
// В начале файла Movies.jsx

const fetchCast = async () => {
  // Сначала очищаем состояние reviews
  setReviews([]);

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
      params: {
        api_key: 'e9709418d656a03a1b4ed077e392d048',
      },
    });
    setCast(response.data.cast);
  } catch (error) {
    console.error("Failed to fetch cast:", error);
  }
};

const fetchReviews = async () => {
  setLoadingReviews(true); // Запускаем процесс загрузки
  setReviewsFetched(true); // Устанавливаем, что запрос на отзывы был сделан
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews`, {
      params: {
        api_key: 'e9709418d656a03a1b4ed077e392d048',
      },
    });
    setReviews(response.data.results);
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
  } finally {
    setLoadingReviews(false); // Завершаем процесс загрузки
  }
};
  // Render movie details or loading state
return (
    <div className={styles['movie-container']}>
      <Link to="/">
        <button className={styles['goBack-button']}>&larr; Go back</button>
      </Link>
      {movieDetails && (
        <div className={styles['movie-content']}>
          <img className={styles['movie-poster']} src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
          <div className={styles['movie-info']}>
            <h1>{movieDetails.title} ({new Date(movieDetails.release_date).getFullYear()})</h1>
            <p>User score: {Math.round(movieDetails.vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
            <h2>Genres</h2>
            <ul className={styles['movie-genres-list']}>
              {movieDetails.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
    )}
    <hr />
    <p>Additional information</p>
    <ul>
      <li className={styles['link']} onClick={fetchCast}>Cast</li>
      <li className={styles['link']} onClick={fetchReviews}>Reviews</li>
    </ul>
<hr />
    {cast.length > 0 && (
  <div>
    <h3>Cast:</h3>
    <ul>
  {cast.map(actor => (
    <li key={actor.id}>
      {actor.profile_path? (
        <img 
          src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} 
          alt={actor.name} 
          style={{width: '50px', marginRight: '10px'}}
        />
      ) : (
        <span>No image available</span>
      )}
      <span>{actor.name}</span>
      <p>Character: {actor.character}</p>
    </li>
  ))}
</ul>
  </div>
)}

    {reviewsFetched? (
  loadingReviews? (
    <p>Loading reviews...</p>
  ) : (
    reviews.length > 0? (
      <div>
        <h3>Reviews:</h3>
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h2>Author: {review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <p>We don't have any reviews for this movie.</p>
    )
  )
) : null}
    </div>
  );
}