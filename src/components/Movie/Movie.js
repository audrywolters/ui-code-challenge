import React, { Component } from "react";
import { connect } from "react-redux";

class Movie extends Component {

  // will we ever use this
  state = {
    isInQueue: false,
  };

  onClickAddToQueue(e) {
    // we may need to chain our way up the DOM...
    // or use ref >:P
    console.log("clicked add/remove id: ", e.target);
    console.log("clicked add/remove id: ", e.target.id);

    this.props.dispatch({
      type: "CHANGE_QUEUE_STATUS",
      action: { id: e.target.id, isInQueue: true },
    });

    // hopefully this will happen automatically via reducer...
    // // remove from DOM
    // let movieLine = e.target.parentElement;
    // // remove from Catalog!
    // movieLine.remove();
  }

  render() {
    return (
      <div>
        <span>{this.props.title}</span>
        <img alt="the movie poster" src={this.props.poster} />

        <button id={this.props.id} onClick={this.onClickAddToQueue}>
          +
        </button>
        {/* 
        {
            this.state.isDisplayingImage
            ? 
            <img src={ this.props.thisPicture.path } />
            :
            <div className="description">{ this.props.thisPicture.description }</div>    
          } */}
      </div>
    );
  }
}

const putReduxStateonProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateonProps)(Movie);
