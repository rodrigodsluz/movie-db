import React from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";

const PopularMovies = () => (
  <FetchMovies slug="popular" pageTitle="Mais populares" />
);

export default PopularMovies;
