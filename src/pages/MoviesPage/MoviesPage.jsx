import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import MovieList from '../../components/MovieList/MovieList'; // Переконайтесь, що шлях до компонента вірний
import SearchMovies from '../../components/SearchMovies/SearchMovies';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('q');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: 'e9709418d656a03a1b4ed077e392d048',
            query,
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <div>
      <SearchMovies />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;