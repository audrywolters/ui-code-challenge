import React, { Component } from "react";
import "./Movie.css";

class Movie extends Component {

  onClickMoveToOtherList = () => {
    this.props.onClickMoveToOtherList(this.props.id);
  };

  onClickReorderQueue = (e) => {
    let direction = e.target.innerHTML;
    this.props.onClickReorderQueue(this.props.id, direction);
  }

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

        <button id={this.props.id} onClick={this.onClickMoveToOtherList}>
          {/* text reflects the action */}
          {this.props.isInQueue ? "-" : "+"}
        </button>

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
