import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import css from './Layout.module.css';

const styles = {
  color: '#010101',
};

function Layout({ children }) {
  return (
    <div style={styles}>
      <header className={css.header}>
        <nav>
          <NavLink
            className={({ isActive }) =>
              cn(css.NavLink, { [css.active]: isActive })
            }
            to="/"
          >
            Trending movies
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(css.NavLink, { [css.active]: isActive })
            }
            to="/movies"
          >
            Movies
          </NavLink>
          
        </nav>
      </header>
      {children}
    </div>
  );
}
export default Layout;