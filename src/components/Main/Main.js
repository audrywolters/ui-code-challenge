import React, { Component } from "react";
import { connect } from "react-redux";
import Catalog from "../Catalog/Catalog";
import Queue from "../Queue/Queue";
import "./Main.css";

class Main extends Component {
  // componentDidMount() {
  //   // ask redux to help us put the movies in the DOM
  //   this.props.dispatch({ type: "GET_MOVIE_LIST" });
  // }

  render() {
    console.log("reduxState: ", this.props.reduxState)
 

    // movies to browse and pick
    let catalogMovieList = this.props.reduxState.movieList.filter(
      movie => movie.isInQueue === false
    );

    // movies that user is going to watch
    let queueMovieList = this.props.reduxState.movieList.filter(
      movie => movie.isInQueue === true
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
