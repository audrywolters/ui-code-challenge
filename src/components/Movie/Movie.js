import React, { Component } from "react";
import { connect } from "react-redux";

class Movie extends Component {
  state = {
    id: -1,
    title: "",
    poster: "",
    queuePosition: -1,
    isInQueue: false,
    showPoster: true,
    displayInCatalog: true,
  };

  componentDidMount() {

    // this.setState({
    //   feeling: event.target.value,
    // });

    // send feeling value to redux bucket
    //this.props.dispatch({ type: "SET_FEELING", payload: event.target.value });

    // we need to keep this stuff. is it in redux?
    this.setState({
      key: this.props.id,
      title: this.props.title,
      poster: this.props.poster,
      queuePosition: this.props.queuePosition,
      isInQueue: this.props.isInQueue,
      showPoster: !this.props.isInQueue,
      displayInCatalog: !this.props.isInQueue,
    });
  }

  onClickAddorRemove(e) {

    console.log('clicked add/remove');
    // ask saga to help us put the movies in its storage
    // this.props.dispatch({ type: "EDIT_MOVIE", payload: this.state.id });

    // remove from DOM
    let movieLine = e.target.parentElement;
    // remove from Catalog!
    movieLine.remove();

    // if (this.props.isInQueue) {
    //   // remove from the Catalog. how do we know which thing we're in
    //   // i guess isInQueue
    //   // this is just the button, so find the <li> parent
    //   let movieLine = e.target.parentElement;
    //   // remove from Catalog!
    //   movieLine.remove();
    // }

    // saga call
    // put in Q
    // remove from Catalog
  }

  render() {
    return (
      <li onClick={this.clickMovie}>
        <span>{this.props.title}</span>
        <img alt="the movie poster" src={this.props.poster} />
        <button onClick={this.onClickAddorRemove}>+</button>
      </li>
    );
  }
}

const putReduxStateonProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateonProps)(Movie);
