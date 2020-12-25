import React, { Component } from "react";
import "./QueueMovie.css";

class QueueMovie extends Component {
  onClickMoveToOtherList = () => {
    this.props.onClickMoveToOtherList(this.props.id);
  };

  onClickReorderQueue = (e) => {
    let direction = e.target.innerHTML;
    this.props.onClickReorderQueue(this.props.id, direction);
  };

  render() {
    return (
      <li>
        {/* button for move to queue */}
        <input
          className="addRemoveButton"
          type="image"
          alt="click to add to queue"
          src="images/removeButton.png"
          onClick={this.onClickMoveToOtherList}
        ></input>

        <span>{this.props.title}</span>

        {/* button for moving up/down queue */}
        <button onClick={this.onClickReorderQueue}>UP</button>
        <button onClick={this.onClickReorderQueue}>DOWN</button>
      </li>
    );
  }
}

export default QueueMovie;
