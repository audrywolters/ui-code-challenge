import React, { Component } from "react";
import CatalogMovie from "../CatalogMovie/CatalogMovie";
import "./Catalog.css";

class Catalog extends Component {

  render() {
    return (
      <>
        <article className="catalog">
          <header>Catalog</header>
          <div>
            {this.props.catalogMovieList.map((movie) => (
              <CatalogMovie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster={movie.poster}
                isInQueue={movie.isInQueue}
                onClickMoveToOtherList={this.props.onClickMoveToOtherList}
              />
            ))}
          </div>
        </article>
      </>
    );
  }
}

export default Catalog;
