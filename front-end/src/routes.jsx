import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Movies from "./Pages/Movies/Movies";
import MovieInfo from "./Pages/MovieInfo/MovieInfo";
import TopRatedMovies from "./Pages/TopRatedMovies/TopRatedMovies";
import PopularMovies from "./Pages/PopularMovies/PopularMovies";
import NowPlayingMovies from "./Pages/NowPlayingMovies/NowPlayingMovies";
import Person from "./Pages/Person/Person";

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Movies} />

          <Route exact path="/movies" component={Movies} />
          <Route exact path="/movies/top-rated" component={TopRatedMovies} />
          <Route exact path="/movies/popular" component={PopularMovies} />
          <Route
            exact
            path="/movies/now-playing"
            component={NowPlayingMovies}
          />
          <Route exact path="/movie-info/:movie_id" component={MovieInfo} />

          <Route exact path="/person/:person_id" component={Person} />
        </Switch>
      </Layout>
    );
  }
}

export default withRouter(Routes);
