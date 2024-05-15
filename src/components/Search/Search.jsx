import { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const search = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          query,
          include_adult: false,
          language: 'en-US',
          page: 1,
        },
        headers: {
          Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTcwOTQxOGQ2NTZhMDNhMWI0ZWQwNzdlMzkyZDA0OCIsInN1YiI6IjY2NDQ4MDlkZjI0NDJkZWJhNjI0MWFjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vJ1U0cFA7kXEaVVVwmgagpjanAVx2duiX60FjQGMlzQ'
        }
      });

      setResults(response.data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={search}>
        <input type="text" placeholder="Пошук фільмів..." value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Пошук</button>
      </form>
      <ul>
        {results.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;