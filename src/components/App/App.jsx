// App.jsx
import { Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Movies from '../Movies/Movies';
import SearchMovies from '../SearchMovies/SearchMovies';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Movies />} /> {/* Маршрут для страницы фильма */}
        <Route path="/movies" element={<SearchMovies />} />
      </Routes>
    </>
  );
}

export default App;