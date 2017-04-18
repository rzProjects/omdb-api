import React, { PropTypes } from 'react';
import Poster from 'components/poster';
import FavoriteStar from 'components/favorite-star';
import { browserHistory } from 'react-router';
import Paths from 'utils/paths';
import 'styles/movie.css';

const Movie = props => {
    const goToDetail = () => {
        browserHistory.push(Paths.movieDetail(props.imdbID));
    };
    return (
        <li onClick={goToDetail} className="movie-wrap">
            <Poster title={props.Title} poster={props.Poster} />
            <div className="movie-info">
                {`${props.Title} (${props.Year})`}
                <FavoriteStar 
                    {...props}
                    isFavorite={props.isFavorite}
                    type={props.isFavorite ? 'star' : 'star_border'} 
                    name={`material-icons icn-star ${props.isFavorite && `visible-star`}`}
                />
            </div>
        </li>
    );
};

Movie.propTypes = {
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Poster:  PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    addFavorite: PropTypes.func.isRequired,
    removeFavorite: PropTypes.func.isRequired
};

Movie.defaultProps = { 
  onClick: null 
}

export default Movie;