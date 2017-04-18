import React, { Component } from 'react';
import MovieDetail from 'components/movie-detail';
import Loading from 'components/loading';
import MovieManager from 'utils/movie-manager';

class MovieDetailContainer extends Component {
    constructor(props) {
        super(props);
        this.searchId = props.params.id;
        this.state = {
            movie: this._movieIsLoaded() ? this._findMovie() : null
        }
    }
    componentDidMount() {
        if (!this.state.movie)
            this._setMovie();
    }
    componentDidUpdate() {
        if (this._movieIsLoaded() && !this.state.movie)
            this._setMovieState();
    }
    render() {
        return this.props.loadingMovies
            ? <Loading />
            : <MovieDetail movie={this.state.movie} />;
    }
    _setMovie = () => {
        this._movieIsLoaded()
            ? this._setMovieState()
            : MovieManager.getMovie(this.searchId, this.props.dispatch);
    }
    _movieIsLoaded = () => {
        return !!this.props.movieDetailIds[this.searchId];
    }
    _setMovieState = () => {
        this.setState({movie: this._findMovie()});
    }
    _findMovie = () => {
        return this.props.movieDetails.find(movie => movie.imdbID === this.searchId);
    }
}

export default MovieDetailContainer;