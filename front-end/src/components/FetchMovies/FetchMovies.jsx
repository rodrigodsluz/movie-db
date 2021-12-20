import React, { useState, useEffect } from "react";
import MovieList from "../../components/MoviesComponents/Movies/Movies";
import Spinner from "../../components/Spinner/Spinner";

import { APIKEY } from "../../utils/config";

import "./fetchMovies.scss";

const FetchMovies = ({ pageTitle, slug }) => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => await getMovies();
    fetchData();
  }, [page]);

  const getMovies = async () => {
    setLoading(true);

    const resp = await fetch(`/movies`);
    const data = await resp.json();
    setMovies(data.results);
    setTotalPages(data.total_pages);
    setLoading(false);
  };

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  return (
    <section className="fetch-movies-container">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <MovieList displayNavButtons title={pageTitle} movieList={movies} />
        </>
      )}

      <div className="pagination-container">
        {page > 1 ? (
          <button className="btn" onClick={prevPage}>
            <span>&#8592;</span>
          </button>
        ) : null}

        {totalPages > page ? (
          <button className="btn" onClick={nextPage}>
            <span>&#8594;</span>
          </button>
        ) : null}
      </div>
    </section>
  );
};

export default FetchMovies;
