import _ from 'underscore';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import * as MoviesActionCreators from 'actions/movies';

const apiEnvUrl = 'http://www.omdbapi.com',
    queries = {
        search: 's',
        id: 'i',
        type: 'type',
        plot: 'plot'
    };

class MovieManager {
    static search(searchQuery, type, dispatch) {
        const beginFetch = bindActionCreators(MoviesActionCreators.beginFetch, dispatch);
        const loadMovies = bindActionCreators(MoviesActionCreators.loadMovies, dispatch);
        
        beginFetch(searchQuery);
        axios.get(`${apiEnvUrl}/?${queries.search}=${searchQuery}&${queries.type}=${type}`)
            .then(response => {
                let movies = [];
                if (response.data.Response === 'True')
                    movies = response.data.Search;

                loadMovies(movies);
            })
            .catch(error => {
                console.log('Error fetching and parsing search results.', error);
            });
    }
    static getMovie(searchQuery, dispatch) {
        const beginFetch = bindActionCreators(MoviesActionCreators.beginFetch, dispatch);
        const loadMovie = bindActionCreators(MoviesActionCreators.loadMovie, dispatch);

        beginFetch();
        axios.get(`${apiEnvUrl}/?${queries.id}=${searchQuery}&${queries.plot}=full`)
            .then(response => {
                let movie = null;
                if (response.data.Title)
                    movie = response.data;

                loadMovie(movie);
            })
            .catch(error => {
                console.log('Error fetching and parsing search results.', error);
            });
    }
};

export default MovieManager;