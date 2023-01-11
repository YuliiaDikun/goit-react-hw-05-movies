import { Outlet, NavLink } from 'react-router-dom';
import './SharedLayout.css';
export const SharedLayout = () => {
  return (
    <>
      <nav className="nav">
        <NavLink to="/">
          Trending movies
        </NavLink>
        <NavLink to="/movies" >
          Movies
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
