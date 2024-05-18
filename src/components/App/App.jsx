// App.jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import React, { lazy, Suspense } from 'react';

const HomePage = React.lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = React.lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = React.lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage'));
const NotFoundPage = React.lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;