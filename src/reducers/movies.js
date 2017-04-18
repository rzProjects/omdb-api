import * as MoviesActionTypes from 'actionTypes/movies';

const initialState = {
    movies: [],
    movieDetails: [],
    movieDetailIds: {}, // 'contains' in this structure will be O(1)
    movieSearches: [],
    favorites: [],
    favoriteIds: {}, // 'contains' in this structure will be O(1)
    loadingMovies: false
}

export default function Movies(state = initialState, action) {
    switch (action.type) {
        case MoviesActionTypes.LOAD_MOVIE: {
            const newId = action.movieDetail && action.movieDetail.imdbID;
            let updatedIds = {...state.movieDetailIds};
            updatedIds[newId] = !!newId;
            
            return {
                ...state,
                movieDetailIds: updatedIds,
                movieDetails: [...state.movieDetails, action.movieDetail],
                loadingMovies: false
            };
        }
        case MoviesActionTypes.LOAD_MOVIES: {
            return {
                ...state,
                movies: action.movies,
                loadingMovies: false
            };
        }
        case MoviesActionTypes.BEGIN_FETCH: {
            return {
                ...state,
                movieSearches: [action.searchQuery, ...state.movieSearches].filter(Boolean),
                loadingMovies: true
            };
        }
        case MoviesActionTypes.ADD_FAVORITE: {
            const newId = action.favorite.imdbID;
            let updatedIds = {...state.favoriteIds};
            updatedIds[newId] = true;
            
            return {
                ...state,
                favoriteIds: updatedIds,
                favorites: [...state.favorites, action.favorite]
            };
        }
        case MoviesActionTypes.REMOVE_FAVORITE: {
            const movieIndex = state.favorites.findIndex(fav => fav.imdbID === action.favoriteId);
			const newList = [
				...state.favorites.slice(0, movieIndex),
				...state.favorites.slice(movieIndex + 1)
			];
            let updatedIds = {...state.favoriteIds};
            delete updatedIds[action.favoriteId];
            return {
                ...state,
                favoriteIds: updatedIds,
                favorites: newList
            };
        }
        default:
            return state;
    }
}