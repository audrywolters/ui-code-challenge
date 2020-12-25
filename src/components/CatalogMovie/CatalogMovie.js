import React, { Component } from "react";
import "./CatalogMovie.css";

class CatalogMovie extends Component {
  onClickMoveToOtherList = () => {
    this.props.onClickMoveToOtherList(this.props.id);
  };

  render() {
    return (
      <div className="catalogMovieContainer">
        <img
          className="moviePoster"
          alt="poster of movie"
          src={this.props.poster}
        />
        <input
          className="addRemoveButton"
          type="image"
          alt="click to remove from queue"
          src="images/addButton.png"
          onClick={this.onClickMoveToOtherList}
        ></input>

        <span>{this.props.title}</span>
      </div>
    );
  }
}

export default CatalogMovie;
