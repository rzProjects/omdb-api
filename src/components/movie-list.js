import React, { PropTypes } from 'react';
import Movie from 'components/movie';
import _ from 'underscore';
import NoMovies from 'components/no-movies';
import { bindActionCreators } from 'redux';
import * as MoviesActionCreators from 'actions/movies';
import 'styles/movie-list.css';

const MovieList = props => {
    const _renderMovies = () => {
        if (_.isEmpty(props.movies))
            return <NoMovies />;

        const addFavorite = bindActionCreators(MoviesActionCreators.addFavorite, props.dispatch);
        const removeFavorite = bindActionCreators(MoviesActionCreators.removeFavorite, props.dispatch);
        return (
            <ul className="movie-list">
                {props.movies.map(movie => (
                    <Movie 
                        {...movie}
                        key={movie.imdbID}
                        isFavorite={!!props.favoriteIds[movie.imdbID]}
                        addFavorite={addFavorite}
                        removeFavorite={removeFavorite}
                    />
                ))}
            </ul> 
        );
    };
    return  _renderMovies();
};

MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
    favoriteIds: PropTypes.object.isRequired
};

export default MovieList;