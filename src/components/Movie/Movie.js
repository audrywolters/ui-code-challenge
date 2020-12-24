import React, { Component } from "react";
import './Movie.css';

class Movie extends Component {

  // state = {
    
  // };

  
  onClickAddOrRemove = () => {
    //console.log('click from movie ', this.props.id);
    this.props.onClickAddOrRemove(this.props.id);
  }

  render() {
    return (
      <div className="movieContainer">
        <span>{this.props.title}</span>
        <img alt="the movie poster" src={this.props.poster} />

        {/* we need to if statement here too ( - ) */}
        <button id={this.props.id} onClick={this.onClickAddOrRemove}>
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
