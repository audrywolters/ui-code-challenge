import React, { Component } from "react";
import { connect } from "react-redux";
import Catalog from "../Catalog/Catalog";
import Queue from "../Queue/Queue";
import "./Main.css";

class Main extends Component {
  componentDidMount() {
    // ask redux to help us put the movies in the DOM
    this.props.dispatch({ type: "GET_MOVIE_LIST" });
  }

  render() {
    // all movies regardless of state
    let allMovieList = this.props.reduxState.movieList;

    // movies to browse and pick
    let catalogMovieList = allMovieList.filter(
      (movie) => movie.isInQueue === false
    );

    // movies that user is going to watch
    let queueMovieList = allMovieList.filter(
      (movie) => movie.isInQueue === true
    );

    return (
      <>
        <header>AudryFlix</header>
        <section>
          <Catalog catalogMovieList={catalogMovieList} />
          <Queue queueMovieList={queueMovieList} />
        </section>
      </>
    );
  }
}

const putReduxStateonProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateonProps)(Main);
