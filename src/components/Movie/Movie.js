import React, { Component } from "react";
import "./Movie.css";

class Movie extends Component {
  onClickMoveToOtherList = () => {
    this.props.onClickMoveToOtherList(this.props.id);
  };

  onClickReorderQueue = (e) => {
    let direction = e.target.innerHTML;
    this.props.onClickReorderQueue(this.props.id, direction);
  };

  render() {
    return (
      <div className="movieContainer">
        <span>{this.props.title}</span>

        {/* no poster makes t */}
        {this.props.isInQueue ? (
          ""
        ) : (
          <img alt="Poster of movie" src={this.props.poster} />
        )}

        {/* different button for different action
            AUDRY - could do switch for src only? */}
        {this.props.isInQueue ? (
          <input
            className="addRemoveButton"
            type="image"
            alt="click to add to queue"
            src="images/removeButton.png"
            onClick={this.onClickMoveToOtherList}
          ></input>
        ) : (
          <input
            className="addRemoveButton"
            type="image"
            alt="click to remove from queue"
            src="images/addButton.png"
            onClick={this.onClickMoveToOtherList}
          ></input>
        )}

        {
          // user can reorder their queue
          this.props.isInQueue ? (
            <>
              <button onClick={this.onClickReorderQueue}>UP</button>
              <button onClick={this.onClickReorderQueue}>DOWN</button>
            </>
          ) : (
            // but they can't do anything to the catalog
            ""
          )
        }
      </div>
    );
  }
}

export default Movie;
