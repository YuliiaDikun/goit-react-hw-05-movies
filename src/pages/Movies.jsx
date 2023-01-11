import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/movieAPI';
import { MovieList } from 'components/MovieList/MovieList';
import css from './Movies.module.css';
function Movies () {  
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const movieToSearch = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!movieToSearch) return;
    setSearchQuery(movieToSearch);
    getMovieByQuery(movieToSearch).then(({ results }) => {      
      setSearchMovies(results);
    });
  }, [movieToSearch]);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: searchQuery });
    
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
            onChange={e => setSearchQuery(e.target.value)}
          />
        </form>
      </header>
      <main>
        <MovieList movies={searchMovies} />
      </main>
    </>
  );
}

export default Movies;