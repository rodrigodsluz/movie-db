import React from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";

const TopRatedMovies = () => (
  <FetchMovies slug="top_rated" pageTitle="Melhores avaliados" />
);

export default TopRatedMovies;
