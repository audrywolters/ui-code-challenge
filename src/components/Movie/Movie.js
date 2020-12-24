import React, { Component } from "react";
import "./Movie.css";

class Movie extends Component {
  // state = {

  // };

  onClickAddOrRemove = () => {
    //console.log('click from movie ', this.props.id);
    this.props.onClickAddOrRemove(this.props.id);
  };

  render() {
    return (
      <div className="movieContainer">
        <span>{this.props.title}</span>
        <img alt="Poster image of movie" src={this.props.poster} />
        <button id={this.props.id} onClick={this.onClickAddOrRemove}>
          {this.props.isInQueue ? "-" : "+"}
        </button>
      </div>
    );
  }
}

export default Movie;
