import React, { Component } from "react";
import Movie from "../Movie/Movie";

class MovieList extends Component {
  render() {
    return (
      <ul>
        {this.props.movieList.map((movie, index) => (
          <Movie movie={movie} key={index} />
        ))}
      </ul>
    );
  }
}

export default MovieList;
