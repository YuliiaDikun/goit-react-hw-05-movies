import { Link, useLocation } from 'react-router-dom';
import css from './Movie.module.css';
export const Movie = ({ movie }) => {
  const location = useLocation();
  return (
    <Link
      to={`/movies/${movie.id}`}
      className={css.films__item}
      key={movie.id}
      state={{ from: location }}
    >
      <div className={css.films__img}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
          loading="lazy"
        />
      </div>
      <div className={css.films__description}>
        <p className={css.films__name}>{movie.title || movie.name}</p>
        <div className={css.films__container}>
          <p className={css.films__info}>
            {movie.release_date || movie.first_air_date}
          </p>
          <span className={css.films__rating}>
            {movie.vote_average.toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
};
