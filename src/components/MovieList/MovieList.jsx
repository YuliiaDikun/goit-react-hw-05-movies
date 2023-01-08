import css from './MovieList.module.css';
export const MovieList = ({ movies }) => {

  return (
    <section className={css.gallery}>
      <div className={css.container}>
        <h1 className={css.title}>Tranding today</h1>
        <ul className={css.films}>
          {movies.map(movie => {            
            return (
              <li className={css.films__item} data-id={movie.id} key={movie.id}>
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
                    <p className={css.films__info}>{movie.release_date || movie.first_air_date
}</p>
                    <span className={css.films__rating}>{movie.vote_average.toFixed(2)}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
