import axios from 'axios';

// Defaulting every request to this url
axios.defaults.baseURL = 'https://swapi.dev/api';

const BASE_URL = 'https://swapi.dev/api';

const getMovies = async () => {
  const res = await axios.get('/films');
  return res.data;
};
