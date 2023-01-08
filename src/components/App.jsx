import { useState, useEffect } from 'react';
import { MovieSearch } from './MovieSearch/MovieSearch';
import { MovieList } from './MovieList/MovieList';
import { getMovieByQuery, getTrendingMovie } from 'services/movieAPI';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTrendingMovie().then(({ results }) => { 
      console.log(results);
      setMovies(results);
    });
  }, []);

  useEffect(() => {
    getMovieByQuery(query).then(({ results }) => {
      setMovies(results);
    });
  }, [query]);

  const onFormSubmit = query => {
    setQuery(query);
  };
  return (
    <>
      <MovieSearch onFormSubmit={onFormSubmit} />
      <MovieList movies={ movies} />
    </>
  );
};
