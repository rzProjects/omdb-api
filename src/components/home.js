import React from 'react';
import Loading from 'components/loading';
import MovieList from 'components/movie-list';

const Home = props => {
    return props.loadingMovies
        ? <Loading />
        : <MovieList 
            favoriteIds={props.favoriteIds} 
            movies={props.movies}
            dispatch={props.dispatch} />;
};

export default Home;