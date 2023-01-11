import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCastById } from 'services/movieAPI';
import css from './Cast.module.css';
const Cast = () => {
  const [cast, setCast] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    if (!id) return;
    getCastById(id).then(info => {
      setCast(info.cast);
    });
  }, [id]);
  if (!cast) {
    return null;
  }
  return (
    <>
      <ul className={css.castContainer}>
        {cast.map(({ id, profile_path, original_name, character }) => {
          return (
            <li className={css.actorItem} key={id}>
              <div className={css.actorImg}>
                <img
                  className={css.image}
                  src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : 'https://www.drupal.org/files/project-images/broken-image.jpg'}
                  alt={original_name}                  
                />
              </div>
              <div className={css.ActorInfo}>
                <p className={css.actorName}>{original_name}</p>
                <p className={css.actorChar}>{character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Cast;