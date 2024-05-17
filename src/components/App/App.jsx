// App.jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
// import Home from '../Home/Home';
// import Movies from '../Movies/Movies';
// import SearchMovies from '../SearchMovies/SearchMovies';
import { lazy, React, Suspense } from 'react';
const Home = React.lazy(() => import('../Home/Home'));
const Movies = React.lazy(() => import('../Movies/Movies'));
const SearchMovies = React.lazy(() => import('../SearchMovies/SearchMovies'));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Movies />} /> 
        <Route path="/movies" element={<SearchMovies />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
