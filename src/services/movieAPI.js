import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: 'f9c0bb738fb5ed39704a871786e56353',
};

export const getTrendingMovie = async () => {
  const { data } = await axios.get('/trending/movie/day', {
    params: {
      page: 1,
    },
  });
  return data;
};

export const getMovieByQuery = async query => {
  const { data } = await axios.get('/search/movie', {
    params: {
      query,
    },
  });
  return data;
};
export const getMovieById = async movie_id => {
    const { data } = await axios.get(`/movie/${movie_id}`);    
    return data;
  };

  export const getReviewsById = async movie_id => {
    const { data } = await axios.get(`/movie/${movie_id}/reviews`);    
    return data;
  };
  export const getCastById = async movie_id => {
    const { data } = await axios.get(`/movie/${movie_id}/credits`);    
    return data;
  };


