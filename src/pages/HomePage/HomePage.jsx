import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import MovieList from '../../components/MovieList/MovieList'; // Переконайтесь, що шлях до компонента вірний

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day', {
          params: {
            api_key: 'e9709418d656a03a1b4ed077e392d048',
          },
        });
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error("Failed to fetch trending movies:", error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className={styles['home-container']}>
      <h1 className={styles['home-title']}>Trending movies</h1>
      <MovieList movies={trendingMovies} /> 
    </div>
  );
};

export default Home;