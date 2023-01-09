import { MovieList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import { getTrendingMovie } from 'services/movieAPI';
import css from './Home.module.css';
export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovie().then(({ results }) => {
      console.log(results);
      setMovies(results);
    });
  }, []);
  return (
    <main>
      <section className={css.gallery}>
        <div className={css.container}>
          <h1 className={css.title}>Tranding today</h1>
          <MovieList movies={movies} />
        </div>
      </section>
    </main>
  );
};
