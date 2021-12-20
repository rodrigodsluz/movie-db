import React from "react";
import Rater from "react-rater";

import "react-rater/lib/react-rater.css";
import Fade from "react-reveal/Fade";

import "./movieData.scss";

const not_available_poster =
  "https://dummyimage.com/342x500/7b8a91/ffffff&text=Poster+Not+Available";

const MovieData = ({
  imgPath1,
  imgPath2,
  base_url1,
  base_url2,
  movie,
  list,
}) => (
  <section className="movie-data">
    <div className="movie-data__inner">
      <Fade>
        <img
          className="movie-data__poster"
          src={imgPath1 === null ? not_available_poster : base_url1 + imgPath1}
          alt={"movie-data poster"}
        />
        <div className="movie-data__details">
          <h1 className="movie-data__title">{movie.original_title}</h1>

          {list !== null ? (
            <div className="movie-data__details__genre">
              <strong>Gênero: </strong>
              {list.map((genre) => (
                <h1 className="movie-data__details__genre-item">
                  {genre.name}
                </h1>
              ))}
            </div>
          ) : null}
          <div className="movie-data__star-rating">
            <strong>Avaliação: </strong>
            <Rater
              interactive={false}
              total={5}
              rating={movie.vote_average / 2}
            />
          </div>
          <p>
            <strong>Data de estréia: </strong> {movie.release_date}
          </p>
        </div>
      </Fade>
    </div>
  </section>
);

export default MovieData;
