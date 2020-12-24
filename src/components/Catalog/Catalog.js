import React, { Component } from "react";
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
                onClickMoveToOtherList={this.props.onClickMoveToOtherList}
                // onClickReorderQueue={this.onClickReorderQueue} catalog's order is its own business
              />
            ))}
          </div>
        </article>
      </>
    );
  }
}

export default Catalog;
