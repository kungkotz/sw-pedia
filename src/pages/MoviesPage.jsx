import StarWarsAPI from '../services/StarWarsAPI';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getIdFromUrl } from '../helpers/extractId';
import Loading from '../components/Loading';

const MoviesPage = () => {
  const [movies, setMovies] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetching movies data from API
  const fetchMovies = async () => {
    setLoading(true);
    const data = await StarWarsAPI.getMovies();
    setMovies(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      {loading && <Loading />}
      <div className="main-container ">
        {movies &&
          movies.results.map((movie) => (
            <Link to={`/movies/${getIdFromUrl(movie.url)}`}>
              <div key={movie.episode_id} className="card border-danger m-2">
                <div className="card-header  ">
                  <h5 className="text-center">{movie.title}</h5>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};
export default MoviesPage;
