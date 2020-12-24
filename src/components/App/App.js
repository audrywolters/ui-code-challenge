import React, { Component } from "react";
import Catalog from "../Catalog/Catalog";
import Queue from "../Queue/Queue";
import "./App.css";

class App extends Component {
  state = {
    movieList: [],
    catalogMovieList: [],
    queueMovieList: []
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

    //// let's make two different lists
    // one of movies to browse
    let catalogList = mockDBdata.filter(
      movie => !movie.isInQueue
    );

    // and one of movies user wants to watch
    let queueList = mockDBdata.filter(
      movie => movie.isInQueue
    );

    this.setState({
      movieList: mockDBdata,
      queueMovieList: queueList,
      catalogMovieList: catalogList
    });
  }

  onClickAddOrRemove = ( movieID ) => {
    let clickedMovie = this.state.movieList.find(m => m.id === movieID);

    if (clickedMovie.isInQueue) {
      this.sendMovieToCatalog(clickedMovie);
    } else {
      this.sendMovieToQueue(clickedMovie);
    }
  }

  sendMovieToCatalog(clickedMovie) {
    // we don't want it in the queue!
    clickedMovie.isInQueue = false;

    // put back in the catalog
    let newCatalog = [...this.state.catalogMovieList, clickedMovie];
    newCatalog.sort((a, b) => a.id - b.id);

    // take out of the queue
    let newQueue = this.state.queueMovieList.filter(movie => movie.id !== clickedMovie.id);
    newQueue.sort((a, b) => a.queuePosition - b.queuePosition);

    this.setState({
      catalogMovieList: newCatalog,
      queueMovieList: newQueue
    })
  }

  sendMovieToQueue(clickedMovie) {
    // user wants to watch movie
    clickedMovie.isInQueue = true;

    // put in the queue
    let newQueue = [...this.state.queueMovieList, clickedMovie];
    newQueue.sort((a, b) => a.queuePosition - b.queuePosition);

    // don't need to view in catalog
    let newCatalog = this.state.catalogMovieList.filter(movie => movie.id !== clickedMovie.id);
    newCatalog.sort((a, b) => a.id - b.id);

    this.setState({
      catalogMovieList: newCatalog,
      queueMovieList: newQueue
    })
  }

  render() {

    return (
      <>
        <header>AudryFlix</header>
        <section>
          <Catalog catalogMovieList={this.state.catalogMovieList} onClickAddOrRemove={this.onClickAddOrRemove} />
          <Queue     queueMovieList={this.state.queueMovieList}   onClickAddOrRemove={this.onClickAddOrRemove} />
        </section>
      </>
    );
  }
}

export default App;
