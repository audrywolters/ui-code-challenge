import React, { Component } from "react";
import { connect } from 'react-redux';
import Movie from "../Movie/Movie";

// AUDRY - we prolly don't need this component. css shouldn't matter
// we can always hit items with a class or something
class MovieList extends Component {

  render() {
    return (
      <ul>
        {this.props.reduxState.movieList.map((movie) => (
          <Movie title={movie.title} key={movie.id} />
        ))}
      </ul>
    );
  }
}

const reduxState = ( reduxState ) => ({
  reduxState
})

export default connect( reduxState )( MovieList );