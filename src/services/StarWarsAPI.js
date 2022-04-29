import axios from 'axios';

// Defaulting every request to this url
axios.defaults.baseURL = 'https://swapi.dev/api';

/**
 *
 * Get all movies
 */

const getMovies = async () => {
  const res = await axios.get('/films');
  return res.data;
};

/**
 *  Get all characters
 */

const getCharacters = async (page) => {
  const res = await axios.get(`/people/?page=${page}`);
  return res.data;
};

export default {
  getMovies,
  getCharacters,
};
