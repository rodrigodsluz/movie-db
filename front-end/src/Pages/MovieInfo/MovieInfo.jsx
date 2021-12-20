import React, { useState, useEffect } from "react";
import MovieData from "../../components/MovieInfoComponents/MovieData/MovieData";
import MovieOverview from "../../components/MovieInfoComponents/MovieOverview/MovieOverview";
import MovieCredits from "../../components/MovieInfoComponents/MovieCredits/MovieCredits";

import Spinner from "../../components/Spinner/Spinner";

import { APIKEY } from "../../utils/config";

import "./movieInfo.scss";

const MovieInfo = (props) => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [credits, setCredits] = useState([]);

  const { movie_id } = props.match.params;
  const base_url = "https://image.tmdb.org/t/p/w500";
  const base_url2 = "https://image.tmdb.org/t/p/w1400_and_h450_face";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      await getMovieById(movie_id);
      await getMovieCredits(movie_id);

      setLoading(false);
    };
    fetchData();
  }, []);

  const getMovieById = async (ID) => {
    const resp = await fetch(`/movies`);
    const movie = await resp.json();
    console.log(movie);
    setMovie(movie);
    setGenres(movie.genres);
  };

  const getMovieCredits = async (ID) => {
    const resp = await fetch(`/movies`);
    const credits = await resp.json();
    setCredits(credits.cast);
  };

  return (
    <div className="movie-info-container">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <MovieData
            imgPath1={movie.poster_path}
            imgPath2={movie.backdrop_path}
            base_url1={base_url}
            base_url2={base_url2}
            movie={movie}
            list={genres}
          />

          <MovieOverview overview={movie.overview} />

          {credits.length > 0 ? <MovieCredits credits={credits} /> : null}
        </>
      )}
    </div>
  );
};

export default MovieInfo;
