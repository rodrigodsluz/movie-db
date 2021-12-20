import React, { Component } from "react";
import ProfileInfo from "../../components/PersonComponents/ProfileInfo/ProfileInfo";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { APIKEY } from "../../utils/config";
import "./person.scss";

class Person extends Component {
  state = {
    loading: true,
    personProfileInfo: [],
  };

  componentDidMount() {
    const { person_id } = this.props.match.params;
    this.getPersonProfileInfo(person_id);
  }

  getPersonProfileInfo = async (ID) => {
    const resp = await fetch(`/movie-person`);
    const personProfileInfo = await resp.json();
    this.setState({ personProfileInfo });
    setTimeout(() => this.setState({ loading: false }), 150);
  };

  getMovieById = async (ID) => {
    const resp = await fetch(`/movie-person`);
    const movie = await resp.json();
    this.setState({ movie });
  };

  render() {
    const base_url = "https://image.tmdb.org/t/p/w500";

    const { personProfileInfo } = this.state;
    return (
      <div className="person-container">
        {this.state.loading ? (
          <div className="loader-container">
            <Loader type="Oval" color="#fff" width={60} height={60} />
          </div>
        ) : (
          <ProfileInfo
            person={personProfileInfo}
            biography={personProfileInfo.biography}
            base_url={base_url}
          />
        )}
      </div>
    );
  }
}

export default Person;
