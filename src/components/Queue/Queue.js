import React, { Component } from "react";
import Movie from "../Movie/Movie";
import "./Queue.css";

class Queue extends Component {  
  
  state = {
    queuePosition: 0
  };

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
                isInQueue={movie.isInQueue}
                queuePosition={movie.queuePosition}
                onClickMoveToOtherList={this.props.onClickMoveToOtherList}
              />
            ))}
          </div>
        </article>
      </>
    );
  }
}

export default Queue;
