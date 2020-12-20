import React, {Component} from 'react';
import MovieList from '../MovieList/MovieList';
import './Catalog.css';

class Catalog extends Component {

    state = {
        movieList: []
    }

    componentDidMount() {
        console.log( 'getting movie list' );
        this.getMovieList();
    } 

    getMovieList() {

        // hard coding for now
        // will add images and queue state
        // also if the poster image should be shown
        // and if hover is thing
        let movieList = [ 'Totoro', 'Kiki', 'Spirited Away' ];

        // grab all the movies and 'save them'
        this.setState({
            movieList: movieList
        })
        // AUDRY - handle error
    }

    render() {
        return (
            <article className="catalog">
                <h2>Pick a Movie</h2>
                <MovieList movieList={ this.state.movieList } />      
            </article>
        );
    }
}

export default Catalog;
