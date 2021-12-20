import React, { Component } from "react";
import MovieList from "../../components/MovieList/MovieList";
import MoviesNavigationButtons from "../../components/MoviesNavigationButtons/MoviesNavigationButtons";

import { APIKEY } from "../../utils/config";

class NowPlayingMovies extends Component {
  state = {
    nowPlayingMovies: [],
  };

  componentDidMount() {
    this.getNowPlayingMovies();
  }

  getNowPlayingMovies = async () => {
    const resp = await fetch(`/movies`);
    const nowPlayingMovies = await resp.json();
    this.setState({ nowPlayingMovies: nowPlayingMovies.results });
  };

  render() {
    const { nowPlayingMovies } = this.state;

    return (
      <div className="movies-wrapper">
        <div className="container">
          <div className="group">
            <div className="group-item line" />
            <h1 className="group-item text">In Theatres</h1>
            <div className="group-item line" />
          </div>

          <MoviesNavigationButtons />

          <MovieList
            movieList={nowPlayingMovies}
            getMovieById={this.getMovieById}
          />
        </div>
      </div>
    );
  }
}

export default NowPlayingMovies;
