import React, { Component } from "react";
import MovieList from "../../components/MovieList/MovieList";
import MoviesNavigationButtons from "../../components/MoviesNavigationButtons/MoviesNavigationButtons";

import { APIKEY } from "../../utils/config";

class PopularMovies extends Component {
  state = {
    popularMovies: [],
  };

  componentDidMount() {
    this.getPopularMovies();
  }

  getPopularMovies = async () => {
    const resp = await fetch(`/movies`);
    const popularMovies = await resp.json();
    this.setState({ popularMovies: popularMovies.results });
  };

  render() {
    const { popularMovies } = this.state;

    return (
      <div className="movies-wrapper">
        <div className="container">
          <div className="group">
            <div className="group-item line" />
            <h1 className="group-item text">Popular</h1>
            <div className="group-item line" />
          </div>

          <MoviesNavigationButtons />

          <MovieList movieList={popularMovies} />
        </div>
      </div>
    );
  }
}

export default PopularMovies;
