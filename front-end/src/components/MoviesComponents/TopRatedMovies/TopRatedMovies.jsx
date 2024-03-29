import React, { Component } from "react";
import MovieList from "../../components/MovieList/MovieList";
import MoviesNavigationButtons from "../../components/MoviesNavigationButtons/MoviesNavigationButtons";

import { APIKEY } from "../../utils/config";

class TopRatedMovies extends Component {
  state = {
    topRatedMovies: [],
  };

  componentDidMount() {
    this.getTopRatedMovies();
  }

  getTopRatedMovies = async () => {
    const resp = await fetch(`/movies`);
    const topRatedMovies = await resp.json();
    this.setState({ topRatedMovies: topRatedMovies.results });
  };

  render() {
    const { topRatedMovies } = this.state;

    return (
      <div className="movies-wrapper">
        <div className="container">
          <div className="group">
            <div className="group-item line" />
            <h1 className="group-item text">Top Rated</h1>
            <div className="group-item line" />
          </div>

          <MoviesNavigationButtons />

          <MovieList movieList={topRatedMovies} />
        </div>
      </div>
    );
  }
}

export default TopRatedMovies;
