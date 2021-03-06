import StarWarsAPI from '../services/StarWarsAPI';
import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { getIdFromUrl } from '../helpers/extractId';
import Loading from '../components/Loading';

import React from 'react';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCharacters = useCallback(async () => {
    setLoading(true);

    const data = await StarWarsAPI.getCharacters(page);
    setCharacters(data.results);
    setData(data);
    setLoading(false);
  }, [page]);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters, page]);

  return (
    <>
      {loading && <Loading />}
      <div className="main-container">
        {characters.map((character, index) => (
          <div key={index} className="card border-danger m-2">
            <Link to={`/characters/${getIdFromUrl(character.url)}`}>
              <div className="card-header">
                <h5 className="text-center">{character.name}</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {!loading && (
        <div className="d-flex justify-content-between align-items-center p-4 ">
          <button
            disabled={!data.previous}
            onClick={() => setPage((prevValue) => prevValue - 1)}
            type="button"
            className="btn btn-danger"
          >
            Previous Page
          </button>

          <div className="text-bold">{page}</div>

          <button
            disabled={!data.next}
            onClick={() => setPage((prevValue) => prevValue + 1)}
            type="button"
            className="btn btn-danger"
          >
            Next Page
          </button>
        </div>
      )}
    </>
  );
}
