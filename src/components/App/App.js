import React, { Component } from "react";
import Catalog from "../Catalog/Catalog";
import Queue from "../Queue/Queue";
import "./App.css";

class App extends Component {
  state = {
    movieList: []
  };

  componentDidMount() {
    this.getMovieList();
  }

  getMovieList() {
    let mockDBdata = 
      [
      { id: 1, title: "one",   poster: "images/1.jpg", isInQueue: true, queuePosition: 1 },
      { id: 2, title: "two",   poster: "images/2.jpg", isInQueue: true, queuePosition: 2 },
      { id: 3, title: "three", poster: "images/3.jpg", isInQueue: false, queuePosition: 3 },
      { id: 4, title: "four",  poster: "images/4.jpg", isInQueue: false, queuePosition: 4 },
      { id: 5, title: "five",  poster: "images/5.jpg", isInQueue: false, queuePosition: 5 },
      { id: 6, title: "six",   poster: "images/6.jpg", isInQueue: false, queuePosition: 6 },
      { id: 7, title: "seven", poster: "images/7.jpg", isInQueue: false, queuePosition: 7 }
    ];

    this.setState({
      movieList: mockDBdata
    });
  }

  onClickAddOrRemove = ( movieID ) => {
    console.log( 'from app: ', movieID )
  }



  render() {

    // movies to browse and pick
    let catalogMovieList = this.state.movieList.filter(
      movie => !movie.isInQueue
    );

    // movies that user is going to watch
    let queueMovieList = this.state.movieList.filter(
      movie => movie.isInQueue
    );

    return (
      <>
        <header>AudryFlix</header>
        <section>
          <Catalog catalogMovieList={catalogMovieList} onClickAddOrRemove={this.onClickAddOrRemove} />
          <Queue     queueMovieList={queueMovieList}   onClickAddOrRemove={this.onClickAddOrRemove} />
        </section>
      </>
    );
  }
}

export default App;
