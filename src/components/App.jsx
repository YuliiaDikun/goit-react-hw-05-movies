import { Routes, Route, NavLink } from 'react-router-dom';

import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { Movie } from './Movie/Movie';

export const App = () => {
  //   const [query, setQuery] = useState('');
  //   const [page, setPage] = useState(1);
  //   const [movies, setMovies] = useState([]);
  //   const [isEmpty, setIsEmpty] = useState(false);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //     getMovieByQuery(query).then(({ results }) => {
  //       setMovies(results);
  //     });
  //   }, [query]);

  //   const onFormSubmit = query => {
  //     setQuery(query);
  //   };
  return (
    <>
      <nav>
        <NavLink to="/">Trending movies</NavLink>
        <NavLink to="/movies">movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </>
  );
};
