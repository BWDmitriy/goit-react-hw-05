import './App.css';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";








function App() {

  const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
headers: {

 Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTcwOTQxOGQ2NTZhMDNhMWI0ZWQwNzdlMzkyZDA0OCIsInN1YiI6IjY2NDQ4MDlkZjI0NDJkZWJhNjI0MWFjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vJ1U0cFA7kXEaVVVwmgagpjanAVx2duiX60FjQGMlzQ'
 }
};

axios.get(url, options)
 .then(response => console.log(response))
 .catch(err => console.error(err));


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;