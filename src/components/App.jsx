import { Routes, Route, NavLink } from 'react-router-dom';

import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { Movie } from './Movie/Movie';
import { Cast } from './Cast/Cast';
import { Comments } from './Comments/Comments';
export const App = () => {  
  return (
    <>
      <nav>
        <NavLink to="/">Trending movies</NavLink>
        <NavLink to="/movies">movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<Movie />} >
            <Route path="reviews" element={<Comments />} />
            <Route path="cast" element={<Cast />} />
        </Route>
      </Routes>
    </>
  );
};
