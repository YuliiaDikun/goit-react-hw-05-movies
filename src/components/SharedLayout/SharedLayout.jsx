import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';
export const SharedLayout = () => {
  return (
    <>
      <nav className={css.nav}>
        <NavLink to="/">Trending movies</NavLink>
        <NavLink to="/movies">movies</NavLink>
      </nav>
      <Outlet />
    </>
  );
};
