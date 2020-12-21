import React, { Component } from "react";

class Movie extends Component {
  state = {
    // AUDRY - something like this
    // title: '',
    // poster: '',
    // isInQueue: false,
    // displayInCatalog: !this.state.isInQueue <-- will work?
    // showPoster: !this.state.isInQueue <-- will work?
    // showAddHover: !this.state.isInQueue <-- will work?
  };

  render() {
    return (
      <li>{this.props.movie}</li>
    );
  }
}

export default Movie;
