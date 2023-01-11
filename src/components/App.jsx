import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Home } from 'pages/Home';
// import { Movies } from 'pages/Movies';
// import { MovieDetails } from 'pages/MovieDetails';
// import { ErrorPage } from 'pages/ErrorPage';
// import { Cast } from './Cast/Cast';
// import { Comments } from './Comments/Comments';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Comments = lazy(() => import('./Comments/Comments'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="reviews" element={<Comments />} />
            <Route path="cast" element={<Cast />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};
