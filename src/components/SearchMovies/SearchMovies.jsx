// SearchMovies.jsx
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Импортируем Link

const SearchMovies = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const search = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: 'e9709418d656a03a1b4ed077e392d048',
          query,
        },
      });
      setResults(response.data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={search}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((movie) => (
          <li key={movie.id}>
            {/* Обертываем название фильма в Link для навигации */}
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchMovies;