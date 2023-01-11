import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { ErrorPage } from 'pages/ErrorPage';
import { Cast } from './Cast/Cast';
import { Comments } from './Comments/Comments';
import { SharedLayout } from './SharedLayout/SharedLayout';
export const App = () => {  
  return (
    <>      
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:id" element={<MovieDetails />} >
                <Route path="reviews" element={<Comments />} />
                <Route path="cast" element={<Cast />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </Route>        
      </Routes>
    </>
  );
};