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

        {/* no poster makes the queue order easier to understand */}
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
              <button tag="up">UP</button>
              <button tag="down">DOWN</button>
              <br />
              <br />
              <span>{this.props.queuePosition}</span>
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
