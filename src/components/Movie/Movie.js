import React, { Component } from "react";
import "./Movie.css";

class Movie extends Component {
  // state = {

  // };

  onClickMoveToOtherList = () => {
    this.props.onClickMoveToOtherList(this.props.id);
  };

  render() {
    return (
      <div className="movieContainer">
        <span>{this.props.title}</span>
        <img alt="Poster of movie" src={this.props.poster} />
        <button id={this.props.id} onClick={this.onClickMoveToOtherList}>
          {this.props.isInQueue ? "-" : "+"}
        </button>
      </div>
    );
  }
}

export default Movie;
