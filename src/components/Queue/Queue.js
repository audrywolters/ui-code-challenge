import React, { Component } from "react";
import QueueMovie from "../QueueMovie/QueueMovie";
import "./Queue.css";

class Queue extends Component {  
  
  render() {
    return (
      <>
        <article className="queue">
          <header>Queue</header>
          {this.props.queueMovieList.map((movie) => (
            <QueueMovie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              isInQueue={movie.isInQueue}
              queuePosition={movie.queuePosition}
              onClickMoveToOtherList={this.props.onClickMoveToOtherList}
              onClickReorderQueue={this.props.onClickReorderQueue}
            />
          ))}
        </article>
      </>
    );
  }
}

export default Queue;
