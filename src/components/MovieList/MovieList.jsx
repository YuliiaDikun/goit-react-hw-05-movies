import { Movie } from 'components/Movie/Movie';
import css from './MovieList.module.css';
export const MovieList = ({ movies }) => {    
  return (
    <ul className={css.films}>
      {movies.map(movie => {
        return (
          <Movie movie={movie}/>
        );
      })}
    </ul>
  );
};
