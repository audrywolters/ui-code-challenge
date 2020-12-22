import React, { Component } from "react";
import { connect } from "react-redux";

class Movie extends Component {
  state = {
    id: -1,
    title: "",
    showPoster: "",
    queuePosition: -1,
    isInQueue: false,
    // displayInCatalog: !this.state.isInQueue <-- will work?
    // showPoster: !this.state.isInQueue <-- will work?
    // showAddHover: !this.state.isInQueue <-- will work?
  };

  clickMovie(e) {
    console.log("clicked movie!: ", e.target.textContent);

    // AUDRY - leave this alone for a sec
    //   this.setState({
    // AUDRY - how does react know what the current movie's state is?
    //     isInQueue: !this.state.isInQueue
    //   });

    //   // tell redux bucket that movie is in the Q
    //   this.props.dispatch({ type: "SET_QUEUE_STATUS", payload: e.target.value });
  }

  render() {
    return <li onClick={this.clickMovie}>{this.props.title}</li>;
  }
}

const putReduxStateonProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateonProps)(Movie);
