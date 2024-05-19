import { useSearchParams } from 'react-router-dom';

const SearchMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements.query;
    setSearchParams(input.value? { q: input.value } : {});
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" defaultValue={query} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchMovies;