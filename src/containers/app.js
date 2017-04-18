import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Paths from 'utils/paths';
import MovieManager from 'utils/movie-manager';
import Header from 'components/header';
import 'styles/app.css';

const defaultMovie = 'titanic',
    defaultSearchType = 'movie';

class App extends Component {
    static propTypes = {
        movies: PropTypes.array.isRequired,
        movieSearches: PropTypes.array.isRequired,
        loadingMovies: PropTypes.bool.isRequired,
        favorites: PropTypes.array.isRequired,
        favoriteIds: PropTypes.object.isRequired
    };
    componentDidMount() {
        this._performSearch();
    }
    render() {
        return (
            <div>
                <Header performSearch={this._performSearch} />
                {React.cloneElement(this.props.children, {...this.props, performSearch: this._performSearch })}
            </div>
        );
    }
    _performSearch = (searchQuery = defaultMovie, searchType = defaultSearchType) => {
        if (this.props.location.pathname !== Paths.home())
            browserHistory.push(Paths.home());

        MovieManager.search(searchQuery, searchType, this.props.dispatch);
    }
}

const mapStateToProps = state => ({ 
    movies: state.movies, 
    movieDetails: state.movieDetails, 
    movieDetailIds: state.movieDetailIds, 
    movieSearches: state.movieSearches,
    loadingMovies: state.loadingMovies,
    favorites: state.favorites,
    favoriteIds: state.favoriteIds
});

export default connect(mapStateToProps)(App);