import React from "react";

import "./movieOverview.scss";

const MovieOverview = ({ overview }) => {
  return (
    <section className="movie-overview">
      <h1>Descrição </h1>
      <p className="movie-overview__text">{overview}</p>
    </section>
  );
};

export default MovieOverview;
