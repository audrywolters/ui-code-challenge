import React, { Component } from "react";
import { connect } from "react-redux";
import Movie from "../Movie/Movie";
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
          {/* print all the movies we grabbed from movieListSaga (the mock backend too) */}
          <ul>
            {this.props.reduxState.movieList.map((movie) => (
              <Movie title={movie.title} key={movie.id} />
            ))}
          </ul>
        </article>
      </>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapStateToProps)(Catalog);
