import React, { Component } from "react";
import { connect } from "react-redux";

class Movie extends Component {

  // will we ever use this
  state = {
    isInQueue: false,
  };

  onClickAddToQueue = (e) => {
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

        {/* we need to if statement here too ( - ) */}
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
