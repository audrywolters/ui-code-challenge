import React, { Component } from "react";
import MovieList from "../MovieList/MovieList";
import "./Catalog.css";

class Catalog extends Component {
  state = {
    movieList: [],
  };

  componentDidMount() {
    this.getMovieList();
  }

  getMovieList() {
    // hard coding for now
    let movieList = ["Totoro", "Kiki", "Spirited Away"];

    // grab all the movies and 'save them'
    this.setState({
      movieList: movieList,
    });
    // AUDRY - handle error
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

export default Catalog;
