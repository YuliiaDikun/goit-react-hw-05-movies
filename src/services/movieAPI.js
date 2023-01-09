import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: 'f9c0bb738fb5ed39704a871786e56353',
};

export const getTrendingMovie = async () => {
  const { data } = await axios.get('/trending/all/day', {
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

// export default class FilmApi {
//   constructor() {
//     this.query = '';
//     this.id = null;
//     this.API_KEY = 'f9c0bb738fb5ed39704a871786e56353';
//     this.BASE_URL = 'https://api.themoviedb.org/3/';
//   }
//   get idFilm() {
//     return this.id;
//   }
//   set idFilm(newId) {
//     this.id = newId;
//   }
//   async getPopularFilms(page = 1) {
//     const { data } = await axios.get(
//       `${this.BASE_URL}trending/movie/week?api_key=${this.API_KEY}&page=${page}`
//     );
//     return data;
//   }
//   async getFilmByID() {
//     const { data } = await axios.get(
//       `${this.BASE_URL}/movie/${this.id}?api_key=${this.API_KEY}`
//     );
//     return data;
//   }
//   async getFilmByQuery(page = 1) {
//     const { data } = await axios.get(
//       `${this.BASE_URL}/search/movie?api_key=${this.API_KEY}&query=${this.query}&page=${page}`
//     );
//     return data;
//   }
//   async getGenres() {
//     const { data } = await axios.get(
//       `${this.BASE_URL}genre/movie/list?api_key=${this.API_KEY}&language=en-US`
//     );
//     return data;
//   }
//   async getTrailerById() {
//     const { data } = await axios.get(
//       `${this.BASE_URL}/movie/${this.id}/videos?api_key=${this.API_KEY}&language=en-US`
//     );
//     return data;
//   }
//   async getFavMovies(genres, page = 1) {
//     const { data } = await axios.get(
//       `${this.BASE_URL}discover/movie?api_key=${this.API_KEY}&with_genres='${genres}'&page=${page}`
//     );
//     return data;
//   }
// }
