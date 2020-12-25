import React, { Component } from "react";
import "./QueueMovie.css";

class QueueMovie extends Component {
  onClickMoveToOtherList = () => {
    this.props.onClickMoveToOtherList(this.props.id);
  };

  onClickReorderQueue = (e) => {
    let direction = e.target.title;
    this.props.onClickReorderQueue(this.props.id, direction);
  };

  render() {
    return (
      <li className="queueMovieContainer">
        {/* button for move to queue */}
        <input
          className="addRemoveButton"
          type="image"
          alt="click to add to queue"
          src="images/removeButton.png"
          onClick={this.onClickMoveToOtherList}
        ></input>

        <div className="queueMovieTitle">{this.props.title}</div>

        {/* buttons for moving up/down queue */}
        <div className="changeOrderButtonContainer">
          <input
            className="changeOrderButton"
            title="UP"
            type="image"
            alt="click to move up in queue"
            src="images/upButton.png"
            onClick={this.onClickReorderQueue}
          ></input>
          <input
            className="changeOrderButton"
            title="DOWN"
            type="image"
            alt="click to move up in queue"
            src="images/downButton.png"
            onClick={this.onClickReorderQueue}
          ></input>
        </div>


      </li>
    );
  }
}

export default QueueMovie;
