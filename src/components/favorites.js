import MovieList from 'components/movie-list';
import React from 'react';

const Favorites = props => (
    <MovieList 
        favoriteIds={props.favoriteIds} 
        movies={props.favorites} 
        dispatch={props.dispatch} />
);

export default Favorites;