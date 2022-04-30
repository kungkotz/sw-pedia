import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import StarWarsAPI from '../services/StarWarsAPI';
import { getIdFromUrl } from '../helpers/extractId';
import Loading from '../components/Loading';

export default function MoviePage() {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      const data = await StarWarsAPI.getMovie(id);
      setDetails(data);
      setCharacters(data.characters);
      setLoading(false);
    };
    fetchMovie(id);
  }, [id]);

  return (
    <>
      {loading && <Loading />}
      <div className="d-flex justify-content-center main-container">
        {details && (
          <div className="card m-4 text-center">
            <h1 className="card-header text-dark">{details.title}</h1>
            <h4 className="card-header text-dark">
              Director: {details.director}
            </h4>
            <h4 className="card-header text-dark">
              Producer: {details.producer}
            </h4>
            <h4 className="card-header text-dark">
              Released: {details.release_date}
            </h4>
            <ul className="list-group list-group-flush">
              {characters.map((character) => (
                <Link
                  key={getIdFromUrl(character)}
                  to={`/characters/${getIdFromUrl(character)}`}
                >
                  <li className="list-group-item text-center">
                    Character {getIdFromUrl(character)}
                  </li>
                </Link>
              ))}
            </ul>

            <div className="text-center">
              <button
                type="button"
                className="btn btn-danger"
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
