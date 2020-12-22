import React, { Component } from "react";
import { connect } from "react-redux";
import MovieList from "../MovieList/MovieList";
import "./Catalog.css";

// Catalog is the boss of the list of movies to pick from
// it controls whether or not a movie is in the Q
// what the movies are
// etc.
// the other components are kind of dumb in comparison :)
class Catalog extends Component {
  state = {
    movieList: []
  };

  componentDidMount() {
    // ask saga to help us put the movies in its storage
    this.props.dispatch({ type: "FETCH_MOVIE_LIST" });
  }

  render() {
    return (
      <>
        <article className="catalog">
          <header>Catalog</header>
          <MovieList movieList={this.state.movieList} />
        </article>
      </>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapStateToProps)(Catalog);
