const API_KEY = <your_api_key>  //your api key on themoviedb
const LANGUAGE = "pt-BR";
const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=${LANGUAGE}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=${LANGUAGE}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=${LANGUAGE}`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  apiKey: API_KEY,
  baseImgUrl: BASE_IMG_URL,
};

export default requests;
