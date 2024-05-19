import { useParams, Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import styles from "./MovieDetailsPage.module.css";
import { useLocation } from 'react-router-dom';
import NavLink from '../../components/Navigation/NavLink';

export default function MovieDetailsPage() {
  const location = useLocation();
  const from = useRef(location.state?.from || '/');
  let { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
          params: {
            api_key: 'e9709418d656a03a1b4ed077e392d048',
          },
        });
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };

    if (movieId) {
      fetchMovieDetails();
    }
  }, [movieId]);

  return (
    <div className={styles['movie-container']}>
      <Link to={from.current}>
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
              {movieDetails.genres.map((genre, index) => (
                <li key={index}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <hr />
      <p>Additional information</p>
      <div>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <hr />
      <Outlet />
    </div>
  );
}