import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day', {
          params: {
            api_key: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTcwOTQxOGQ2NTZhMDNhMWI0ZWQwNzdlMzkyZDA0OCIsInN1YiI6IjY2NDQ4MDlkZjI0NDJkZWJhNjI0MWFjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vJ1U0cFA7kXEaVVVwmgagpjanAVx2duiX60FjQGMlzQ',
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
    <div>
      <h1>Trending movies</h1>
      <ul>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;