import React, { Component } from "react";
import Movie from "../Movie/Movie";
import "./Queue.css";

class Queue extends Component {  
  
  // state = {
    
  // };
  
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
                onClickAddOrRemove={this.props.onClickAddOrRemove}
              />
            ))}
          </div>
        </article>
      </>
    );
  }
}

export default Queue;
