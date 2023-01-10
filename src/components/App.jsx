import { Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
// import { Home } from 'pages/Home/Home';
// import { Movies } from 'pages/Movies/Movies';
import Layout from 'Layout/Layout';
// import { Movie } from '../pages/Movie/Movie';
import { Cast } from './Cast/Cast';
import { Comments } from './Comments/Comments';


const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const Movie = lazy(() => import('pages/Movie'));
export const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>      
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<Movie />} >
              <Route path="reviews" element={<Comments />} />
              <Route path="cast" element={<Cast />} />
          </Route>
        </Routes>
      </Suspense>
    </Layout>
  );
};

