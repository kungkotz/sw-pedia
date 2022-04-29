import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import StarWarsAPI from '../services/StarWarsAPI';
import { getIdFromUrl } from '../helpers/extractId';
import Loading from '../components/Loading';

export default function CharacterPage() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchCharacter = useCallback(async () => {
    setLoading(true);
    const data = await StarWarsAPI.getCharacter(id);
    setDetails(data);
    setMovies(data.films);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    fetchCharacter(id);
  }, [fetchCharacter, id]);
  return (
    <>
      {loading && <Loading />}

      <div className="d-flex justify-content-center">
        {details && (
          <div className="card m-4 character-character-card">
            <h3 className="card-header text-dark">{details.name}</h3>

            <div className="card-body ">
              <p className="card-text text-dark"> Height: {details.height}</p>
              <p className="card-text text-dark"> Mass: {details.mass}</p>
              <p className="card-text text-dark">
                Hair color: {details.hair_color}
              </p>
              <p className="card-text text-dark">
                Skin color: {details.skin_color}
              </p>
              <p className="card-text text-dark">
                Eye color: {details.eye_color}
              </p>
              <p className="card-text text-dark">
                Birth year: {details.birth_year}
              </p>
              <p className="card-text text-dark"> Gender: {details.gender}</p>
            </div>
            <div className="card-body">
              <h5 className="">
                {details.name} has been in {movies.length} movies
              </h5>
            </div>
            <ul className="list-group list-group-flush">
              {movies.map((film) => (
                <Link
                  key={getIdFromUrl(film)}
                  to={`/movies/${getIdFromUrl(film)}`}
                >
                  <li className="list-group-item text-center">
                    Film {getIdFromUrl(film)}
                  </li>
                </Link>
              ))}
            </ul>

            <div className="">
              <button
                type="button"
                className="btn btn-danger "
                onClick={() => navigate(-1)}
              >
                Go back
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
