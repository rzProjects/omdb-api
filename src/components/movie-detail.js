import React from 'react';
import Poster from 'components/poster';
import DetailSection from 'components/detail-section';
import NoMovies from 'components/no-movies';
import 'styles/movie-detail.css';

const MovieDetail = props => {
    const movie = props.movie;
    return (
        movie
            ? <div className="movie-detail-container">
                <Poster title={movie.Title} poster={movie.Poster} />
                <DetailSection title="Cast" text={movie.Actors} />
                <DetailSection title="Plot" text={movie.Plot} />
            </div>
            : <NoMovies />
    );
};

export default MovieDetail;