import React, { Component } from "react";
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
                // poster={movie.poster} don't need a poster for the queue
                isInQueue={movie.isInQueue}
                queuePosition={movie.queuePosition}
                onClickMoveToOtherList={this.props.onClickMoveToOtherList}
                onClickReorderQueue={this.props.onClickReorderQueue}
              />
            ))}
          </div>
        </article>
      </>
    );
  }
}

export default Queue;
