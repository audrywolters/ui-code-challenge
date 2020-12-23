import React, { Component } from "react";
import { connect } from "react-redux";
import Movie from "../Movie/Movie";
import "./Queue.css";

class Queue extends Component {
  render() {
    return (
      <>
        <article className="queue">
          <header>Queue</header>
          <div>
            {this.props.queueMovieList.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster={movie.poster}
                isInQueue={movie.isInQueue}
              />
            ))}
          </div>
        </article>
      </>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(Queue);
