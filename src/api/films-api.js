import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjc5N2Q1MDg2ZmE0YTkxYmIyYThmYjllMjdkNzFmZiIsIm5iZiI6MTcyMzIxOTUyOC41MTE3MjMsInN1YiI6IjY2YjYzYTg0ODMxZTNmNDA5ZTI3MDY0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VYASJenUqYziFDeY8b0yyYfd6uDPU2xk763XC3gXwv4",
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get("trending/movie/day", options);
  return response.data;
};

export const fetchMovieByQuery = async (query) => {
  const response = await axios.get(
    `search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return response.data;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`movie/${id}`, options);
  return response.data;
};

export const fetchMovieCast = async (id) => {
  const response = await axios.get(`movie/${id}/credits`, options);
  return response.data.cast;
};

export const fetchMovieReview = async (id) => {
  const response = await axios.get(`movie/${id}/reviews`, options);
  return response.data.results;
};
