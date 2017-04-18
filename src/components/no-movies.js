import React from 'react';
import 'styles/no-movies.css';

const NoMovies = () => (
    <div className='no-movies'>
        <i className="material-icons icon-movie">sentiment_very_dissatisfied</i>
        <h3>No movies to see here...</h3>
    </div>
);

export default NoMovies;