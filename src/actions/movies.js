import * as MoviesActionTypes from 'actionTypes/movies';

export const loadMovie = movieDetail => {
    return {
        type: MoviesActionTypes.LOAD_MOVIE,
        movieDetail
    };
}

export const loadMovies = movies => {
    return {
        type: MoviesActionTypes.LOAD_MOVIES,
        movies
    };
};

export const beginFetch = searchQuery => {
    return {
        type: MoviesActionTypes.BEGIN_FETCH,
        searchQuery
    };
};

export const addFavorite = favorite => {
    return {
        type: MoviesActionTypes.ADD_FAVORITE,
        favorite
    };
};

export const removeFavorite = favoriteId => {
    return {
        type: MoviesActionTypes.REMOVE_FAVORITE,
        favoriteId
    };
};