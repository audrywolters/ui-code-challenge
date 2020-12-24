import React, { Component } from "react";
import './Movie.css';

class Movie extends Component {

  // state = {
    
  // };

  changeQueueStatus() {
    console.log('hi im the button');
  }

  render() {
    return (
      <div class="movieContainer">
        <span>{this.props.title}</span>
        <img alt="the movie poster" src={this.props.poster} />

        {/* we need to if statement here too ( - ) */}
        <button id={this.props.id} onClick={this.changeQueueStatus}>
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

export default Movie;
