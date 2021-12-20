import React, { useState, useEffect } from "react";
import MovieList from "../../components/MoviesComponents/Movies/Movies";
import Spinner from "../../components/Spinner/Spinner";

import { APIKEY } from "../../utils/config";

import "./movies.scss";

const Movies = () => {
  const [loading, isLoading] = useState(false);
  const [movies, setMovies] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => await getMovies();
    fetchMovies();
  }, [page]);

  const getMovies = async () => {
    isLoading(true);

    const resp = await fetch("/movies");
    const data = await resp.json();
    setMovies(data.results);

    isLoading(false);
  };

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  return (
    <div className="movies-container">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <MovieList displayNavButtons title="Filmes" movieList={movies} />
        </>
      )}
      <div className="pagination-container">
        {page > 1 ? (
          <button className="btn" onClick={prevPage}>
            <span>&#8592;</span>
          </button>
        ) : null}

        <button className="btn" onClick={nextPage}>
          <span>&#8594;</span>
        </button>
      </div>
    </div>
  );
};

export default Movies;
