// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from '../Search/Search'; // Переконайтеся, що шлях правильний

function App() {
  return (
    <Router>
      <Routes>
        {/* Інші маршрути */}
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;