import { useState, useEffect } from 'react';
import { getMovieByQuery } from 'services/movieAPI';
import { MovieList } from 'components/MovieList/MovieList';
import css from './MovieSearch.module.css';
export function MovieSearch() {
  const [searchValue, setSearchValue] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  useEffect(() => {
    if (!searchValue) return;
    getMovieByQuery(searchValue).then(({ results }) => {      
      setSearchMovies(results);
    });
  }, [searchValue]);

  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.searchMovie.value;
    setSearchValue(query);
    event.target.reset();
  };

  return (
    <>
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            name="searchMovie"
            autoFocus
            placeholder="Search movie"
          />
        </form>
      </header>
      <main>
        <MovieList movies={searchMovies} />
      </main>
    </>
  );
}
