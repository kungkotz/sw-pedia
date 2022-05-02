import axios from 'axios';

// Defaulting every request to this url
axios.defaults.baseURL = 'https://swapi.dev/api';

/**
 *
 * Get all movies from SWAPI
 */

const getMovies = async () => {
  const res = await axios.get('/films');
  return res.data;
};

/**
 *  Get all characters from SWAPI
 */

const getCharacters = async (page) => {
  const res = await axios.get(`/people/?page=${page}`);
  return res.data;
};

/**
 *  Get a single characters from SWAPI
 */
const getCharacter = async (id) => {
  const res = await axios.get(`/people/${id}`);
  return res.data;
};

/**
 * Get a single movie from SWAPI
 */

const getMovie = async (id) => {
  const res = await axios.get(`/films/${id}`);
  return res.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getMovies,
  getCharacters,
  getMovie,
  getCharacter,
};
