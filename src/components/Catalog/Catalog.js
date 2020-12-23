import React, { Component } from "react";
import { connect } from "react-redux";
import Movie from "../Movie/Movie";
import "./Catalog.css";

class Catalog extends Component {
  render() {
    return (
      <>
        <article className="catalog">
          <header>Catalog</header>
          <div>
            {this.props.catalogMovieList.map((movie) => (
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
  reduxState
});

export default connect(mapStateToProps)(Catalog);
