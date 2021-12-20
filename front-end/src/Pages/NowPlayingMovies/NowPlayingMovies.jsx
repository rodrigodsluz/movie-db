import React from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";

const NowPlayingMovies = () => (
  <FetchMovies slug="now_playing" pageTitle="Assistidos agora" />
);

export default NowPlayingMovies;
