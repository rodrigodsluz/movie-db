import React from "react";
import { Link } from "react-router-dom";
import "./MoviesNavigationButtons.scss";

const MoviesNavigationButtons = () => {
  return (
    <div className="btn-div movies" style={{ margin: "0 auto" }}>
      <Link to={`/movies/now-playing`} className="button movies">
        Assistidos recentemente
      </Link>
      <Link to={`/movies/popular`} className="button movies">
        Popular
      </Link>
      <Link to={`/movies/top-rated`} className="button movies">
        Melhores avaliados
      </Link>
    </div>
  );
};

export default MoviesNavigationButtons;
