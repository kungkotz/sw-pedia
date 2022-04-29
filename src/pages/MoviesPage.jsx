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
      <div className="d-flex flex-wrap justify-content-center">
        {movies &&
          movies.results.map((movie) => (
            <div
              key={movie.episode_id}
              className="card border-danger m-4 col-md-3"
            >
              <div className="card-header d-flex">
                <h5>{movie.title}</h5>
              </div>

              <div className="card-body">
                <p>Episode: {movie.episode_id}</p>
                <hr />
                <p>Released: {movie.release_date}</p>
                <hr />
                <p>Characters: {movie.characters.length}</p>

                <Link to={`/films/${getIdFromUrl(movie.url)}`}>
                  <button className="btn btn-danger">More information</button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default MoviesPage;
